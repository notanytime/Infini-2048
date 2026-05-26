import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useGame } from '../composables/useGame'
import type { Direction } from '../types'

export const useGameStore = defineStore('game', () => {
  const game = useGame()
  const lastMergeCount = ref(0)
  const lastExpanded = ref(false)

  const tiles = computed(() => {
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

  return {
    state: game.state,
    tiles,
    lastMergeCount,
    lastExpanded,
    init,
    newGame,
    move,
    undo,
  }
})
