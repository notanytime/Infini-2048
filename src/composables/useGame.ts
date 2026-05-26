import { reactive } from 'vue'
import type { Tile, Direction, GameState, HistoryEntry } from '../types'

let tileIdCounter = 0

function createTile(value: number, row: number, col: number): Tile {
  return { id: tileIdCounter++, value, row, col }
}

function emptyGrid(size: number): (Tile | null)[][] {
  return Array.from({ length: size }, () => Array(size).fill(null))
}

function cloneGrid(grid: (Tile | null)[][]): (Tile | null)[][] {
  return grid.map(row => row.map(tile => tile ? { ...tile } : null))
}

export function useGame() {
  const state = reactive<GameState>({
    grid: emptyGrid(4),
    score: 0,
    highScore: 0,
    gridSize: 4,
    comboCount: 0,
    bestCombo: 0,
    gameOver: false,
    won: false,
    history: [],
  })

  let maxTileEver = 2
  const expandedMilestones = new Set<number>()

  state.highScore = loadHighScore()

  function loadHighScore(): number {
    try { return Number(localStorage.getItem('infini2048_highScore')) || 0 } catch { return 0 }
  }

  function saveHighScore() {
    try { localStorage.setItem('infini2048_highScore', String(state.highScore)) } catch { /* noop */ }
  }

  function loadGame(): boolean {
    try {
      const raw = localStorage.getItem('infini2048_save')
      if (!raw) return false
      const data = JSON.parse(raw)
      state.grid = data.grid.map((row: any[]) =>
        row.map((t: any) => t ? { ...t } : null)
      )
      state.score = data.score
      state.gridSize = data.gridSize
      state.gameOver = data.gameOver
      state.comboCount = 0
      state.bestCombo = 0
      tileIdCounter = data.tileIdCounter || 0
      maxTileEver = data.maxTileEver || 2
      expandedMilestones.clear()
      for (const m of (data.expandedMilestones || [])) expandedMilestones.add(m)
      return true
    } catch { return false }
  }

  function saveGame() {
    try {
      localStorage.setItem('infini2048_save', JSON.stringify({
        grid: state.grid,
        score: state.score,
        gridSize: state.gridSize,
        gameOver: state.gameOver,
        tileIdCounter,
        expandedMilestones: Array.from(expandedMilestones),
        maxTileEver,
      }))
    } catch { /* noop */ }
  }

  function saveSnapshot(): HistoryEntry {
    return { grid: cloneGrid(state.grid), score: state.score, comboCount: state.comboCount, gridSize: state.gridSize }
  }

  function pushHistory() {
    state.history.push(saveSnapshot())
    if (state.history.length > 50) state.history.shift()
  }

  function getAvailableCells(): [number, number][] {
    const cells: [number, number][] = []
    for (let r = 0; r < state.gridSize; r++)
      for (let c = 0; c < state.gridSize; c++)
        if (!state.grid[r][c]) cells.push([r, c])
    return cells
  }

  function addRandomTile(): boolean {
    const cells = getAvailableCells()
    if (cells.length === 0) return false
    const [r, c] = cells[Math.floor(Math.random() * cells.length)]
    state.grid[r][c] = createTile(Math.random() < 0.9 ? 2 : 4, r, c)
    return true
  }

  function initGame(size = 4) {
    tileIdCounter = 0
    expandedMilestones.clear()
    maxTileEver = 2
    state.grid = emptyGrid(size)
    state.score = 0
    state.gridSize = size
    state.gameOver = false
    state.won = false
    state.comboCount = 0
    state.bestCombo = 0
    state.history = []
    addRandomTile()
    addRandomTile()
    saveGame()
  }

  function expandGrid() {
    const oldSize = state.gridSize
    const newSize = oldSize + 1
    const newGrid: (Tile | null)[][] = Array.from({ length: newSize }, (_, r) =>
      Array.from({ length: newSize }, (_, c) => {
        if (r < oldSize && c < oldSize) return state.grid[r][c] ? { ...state.grid[r][c]!, row: r, col: c } : null
        return null
      })
    )
    state.gridSize = newSize
    state.grid = newGrid

    const fillCells: [number, number][] = []
    for (let r = 0; r < newSize; r++)
      if (!newGrid[r][newSize - 1]) fillCells.push([r, newSize - 1])
    for (let c = 0; c < newSize - 1; c++)
      if (!newGrid[newSize - 1][c]) fillCells.push([newSize - 1, c])

    for (let i = 0; i < Math.min(2, fillCells.length); i++) {
      const [r, c] = fillCells[i]
      newGrid[r][c] = createTile(Math.random() < 0.9 ? 2 : 4, r, c)
    }
    saveGame()
  }

  function checkExpansion() {
    const milestone = 2048 * Math.pow(2, state.gridSize - 4)
    if (maxTileEver >= milestone && !expandedMilestones.has(milestone)) {
      expandedMilestones.add(milestone)
      return true
    }
    return false
  }

  function slideLine(line: (Tile | null)[]): { result: (Tile | null)[]; scoreGain: number; mergeCount: number } {
    const tiles = line.filter(t => t !== null) as Tile[]
    const result: (Tile | null)[] = []
    let scoreGain = 0
    let mergeCount = 0
    let i = 0

    while (i < tiles.length) {
      if (i + 1 < tiles.length && tiles[i].value === tiles[i + 1].value) {
        const mergedValue = tiles[i].value * 2
        const mt = createTile(mergedValue, 0, 0)
        mt.mergedFrom = true
        result.push(mt)
        scoreGain += mergedValue
        mergeCount++
        if (mergedValue > maxTileEver) maxTileEver = mergedValue
        i += 2
      } else {
        result.push(tiles[i])
        i++
      }
    }
    while (result.length < line.length) result.push(null)
    return { result, scoreGain, mergeCount }
  }

  function move(direction: Direction): { moved: boolean; mergeCount: number; expanded: boolean } {
    if (state.gameOver) return { moved: false, mergeCount: 0, expanded: false }
    for (let r = 0; r < state.gridSize; r++)
      for (let c = 0; c < state.gridSize; c++)
        if (state.grid[r][c]) state.grid[r][c]!.mergedFrom = false
    pushHistory()
    const size = state.gridSize
    let totalMerges = 0
    let totalScore = 0
    const oldGrid = cloneGrid(state.grid)

    if (direction === 'left') {
      for (let r = 0; r < size; r++) {
        const { result, scoreGain, mergeCount } = slideLine(state.grid[r].slice())
        state.grid[r] = result.map((t, c) => t ? { ...t, row: r, col: c } : null)
        totalScore += scoreGain; totalMerges += mergeCount
      }
    } else if (direction === 'right') {
      for (let r = 0; r < size; r++) {
        const line = state.grid[r].slice().reverse()
        const { result, scoreGain, mergeCount } = slideLine(line)
        state.grid[r] = result.reverse().map((t, c) => t ? { ...t, row: r, col: c } : null)
        totalScore += scoreGain; totalMerges += mergeCount
      }
    } else if (direction === 'up') {
      for (let c = 0; c < size; c++) {
        const line: (Tile | null)[] = []
        for (let r = 0; r < size; r++) line.push(state.grid[r][c])
        const { result, scoreGain, mergeCount } = slideLine(line)
        for (let r = 0; r < size; r++)
          state.grid[r][c] = result[r] ? { ...result[r]!, row: r, col: c } : null
        totalScore += scoreGain; totalMerges += mergeCount
      }
    } else if (direction === 'down') {
      for (let c = 0; c < size; c++) {
        const line: (Tile | null)[] = []
        for (let r = size - 1; r >= 0; r--) line.push(state.grid[r][c])
        const { result, scoreGain, mergeCount } = slideLine(line)
        for (let i = 0; i < size; i++)
          state.grid[size - 1 - i][c] = result[i] ? { ...result[i]!, row: size - 1 - i, col: c } : null
        totalScore += scoreGain; totalMerges += mergeCount
      }
    }

    const gridChanged = !gridsEqual(oldGrid, state.grid)
    if (!gridChanged) { state.history.pop(); return { moved: false, mergeCount: 0, expanded: false } }

    if (totalMerges > 0) {
      const mult = totalMerges >= 4 ? 2.0 : totalMerges >= 3 ? 1.5 : totalMerges >= 2 ? 1.2 : 1.0
      totalScore = Math.round(totalScore * mult)
      state.comboCount = totalMerges
      if (totalMerges > state.bestCombo) state.bestCombo = totalMerges
    } else {
      state.comboCount = 0
    }

    state.score += totalScore
    if (state.score > state.highScore) { state.highScore = state.score; saveHighScore() }

    const expanded = checkExpansion()
    if (expanded) expandGrid()

    addRandomTile()
    if (!canMove()) state.gameOver = true
    saveGame()
    return { moved: true, mergeCount: totalMerges, expanded }
  }

  function gridsEqual(a: (Tile | null)[][], b: (Tile | null)[][]): boolean {
    for (let r = 0; r < a.length; r++)
      for (let c = 0; c < a[r].length; c++) {
        const ta = a[r][c], tb = b[r][c]
        if (!ta && !tb) continue
        if (!ta || !tb) return false
        if (ta.value !== tb.value) return false
      }
    return true
  }

  function canMove(): boolean {
    for (let r = 0; r < state.gridSize; r++)
      for (let c = 0; c < state.gridSize; c++) {
        if (!state.grid[r][c]) return true
        const v = state.grid[r][c]!.value
        if (r + 1 < state.gridSize && state.grid[r + 1][c]?.value === v) return true
        if (c + 1 < state.gridSize && state.grid[r][c + 1]?.value === v) return true
      }
    return false
  }

  function undo(): boolean {
    if (state.history.length === 0) return false
    const entry = state.history.pop()!
    state.grid = entry.grid
    state.score = entry.score
    state.comboCount = entry.comboCount
    state.gridSize = entry.gridSize
    state.gameOver = false
    saveGame()
    return true
  }

  return { state, initGame, loadGame, move, undo, canMove }
}
