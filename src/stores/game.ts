import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useGame } from '../composables/useGame'
import type { Direction } from '../types'

export const useGameStore = defineStore('game', () => {
  const game = useGame()
  const lastMergeCount = ref(0)
  const lastExpanded = ref(false)
  const debugUpdate = ref(0)

  const tiles = computed(() => {
    debugUpdate.value
    const result: { row: number; col: number; value: number; id: number; mergedFrom: boolean | undefined }[] = []
    for (let r = 0; r < game.state.gridSize; r++)
      for (let c = 0; c < game.state.gridSize; c++) {
        const tile = game.state.grid[r]?.[c]
        if (tile) result.push({ row: tile.row, col: tile.col, value: tile.value, id: tile.id, mergedFrom: tile.mergedFrom })
      }
    return result
  })

  function init() {
    const loaded = game.loadGame()
    if (!loaded) game.initGame(4)
  }

  function newGame() {
    game.initGame(4)
    lastMergeCount.value = 0
    lastExpanded.value = false
  }

  function move(direction: Direction) {
    const result = game.move(direction)
    lastMergeCount.value = result.moved ? result.mergeCount : 0
    lastExpanded.value = result.expanded
    return result
  }

  function undo() {
    return game.undo()
  }

  function getMaxId(): number {
    let max = 0
    for (let r = 0; r < game.state.gridSize; r++)
      for (let c = 0; c < game.state.gridSize; c++) {
        const t = game.state.grid[r]?.[c]
        if (t && t.id > max) max = t.id
      }
    return max
  }

  function debugPlaceTile(row: number, col: number, value: number) {
    if (row < 0 || row >= game.state.gridSize || col < 0 || col >= game.state.gridSize) return false
    if (game.state.grid[row]?.[col]) return false
    const id = getMaxId() + 1
    game.state.grid[row][col] = { id, value, row, col }
    game.state.gameOver = false
    debugUpdate.value++
    return true
  }

  function debugFillRandom() {
    const powers = [2, 4, 8, 16, 32, 64, 128, 256]
    let id = getMaxId()
    for (let r = 0; r < game.state.gridSize; r++)
      for (let c = 0; c < game.state.gridSize; c++) {
        if (!game.state.grid[r][c]) {
          game.state.grid[r][c] = {
            id: ++id,
            value: powers[Math.floor(Math.random() * powers.length)],
            row: r, col: c,
          }
        }
      }
    game.state.gameOver = false
    debugUpdate.value++
  }

  function debugForceExpand() {
    const oldSize = game.state.gridSize
    const newSize = oldSize + 1
    const newGrid: any[][] = Array.from({ length: newSize }, (_, r) =>
      Array.from({ length: newSize }, (_, c) =>
        (r < oldSize && c < oldSize && game.state.grid[r]?.[c])
          ? { ...game.state.grid[r][c]!, row: r, col: c }
          : null
      )
    )
    game.state.gridSize = newSize
    game.state.grid = newGrid
    game.state.gameOver = false
    debugUpdate.value++
  }

  function debugClearGrid() {
    game.state.gridSize = 4
    game.state.grid = Array.from({ length: 4 }, () => Array(4).fill(null))
    game.state.score = 0
    game.state.comboCount = 0
    game.state.gameOver = false
    game.state.history = []
    debugUpdate.value++
  }

  function debugFillTestGrid() {
    debugClearGrid()
    const tiles = [
      [1024, 1024, 512, 512],
      [256, 256, 128, 64],
      [32, 16, 8, 4],
      [2, 0, 0, 0],
    ]
    let id = 0
    for (let r = 0; r < 4; r++)
      for (let c = 0; c < 4; c++)
        if (tiles[r][c])
          game.state.grid[r][c] = { id: ++id, value: tiles[r][c], row: r, col: c }
    debugUpdate.value++
  }

  function debugFillAllTiers() {
    debugClearGrid()
    const specs: [number, number, number][] = [
      [0, 0, 2], [0, 1, 8], [0, 2, 64], [0, 3, 256],
      [1, 0, 512], [1, 1, 1024], [1, 2, 2048], [1, 3, 8192],
      [2, 0, 16384], [2, 1, 32768], [2, 2, 16], [2, 3, 128],
    ]
    let id = 0
    for (const [r, c, v] of specs)
      game.state.grid[r][c] = { id: ++id, value: v, row: r, col: c }
    debugUpdate.value++
  }

  return {
    state: game.state,
    tiles,
    lastMergeCount,
    lastExpanded,
    init,
    newGame,
    move,
    undo,
    debugPlaceTile,
    debugFillRandom,
    debugForceExpand,
    debugClearGrid,
    debugFillTestGrid,
    debugFillAllTiers,
  }
})
