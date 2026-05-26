<script setup lang="ts">
import { useGameStore } from '../stores/game'

const gameStore = useGameStore()

function fillRandom() {
  const powers = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
  let maxId = 0
  for (let ri = 0; ri < gameStore.state.gridSize; ri++)
    for (let ci = 0; ci < gameStore.state.gridSize; ci++) {
      const t = gameStore.state.grid[ri]?.[ci]
      if (t && t.id > maxId) maxId = t.id
    }
  for (let r = 0; r < gameStore.state.gridSize; r++)
    for (let c = 0; c < gameStore.state.gridSize; c++) {
      if (!gameStore.state.grid[r][c]) {
        gameStore.state.grid[r][c] = {
          id: ++maxId,
          value: powers[Math.floor(Math.random() * powers.length)],
          row: r, col: c,
        }
      }
    }
}

function forceExpand() {
  const oldSize = gameStore.state.gridSize
  const newSize = oldSize + 1
  const newGrid: any[][] = Array.from({ length: newSize }, (_, r) =>
    Array.from({ length: newSize }, (_, c) =>
      (r < oldSize && c < oldSize && gameStore.state.grid[r]?.[c])
        ? { ...gameStore.state.grid[r][c]!, row: r, col: c }
        : null
    )
  )
  gameStore.state.gridSize = newSize
  gameStore.state.grid = newGrid
}

function resetSave() {
  localStorage.removeItem('infini2048_save')
  localStorage.removeItem('infini2048_highScore')
}

function fillTestGrid() {
  gameStore.newGame()
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
        gameStore.state.grid[r][c] = { id: ++id, value: tiles[r][c], row: r, col: c }
}

function fillAllTiers() {
  gameStore.newGame()
  const specs: [number, number, number][] = [
    [0, 0, 2], [0, 1, 8], [0, 2, 64], [0, 3, 256],
    [1, 0, 512], [1, 1, 1024], [1, 2, 2048], [1, 3, 8192],
    [2, 0, 16384], [2, 1, 32768], [2, 2, 16], [2, 3, 128],
  ]
  let id = 0
  for (const [r, c, v] of specs)
    gameStore.state.grid[r][c] = { id: ++id, value: v, row: r, col: c }
}
</script>

<template>
  <div class="debug-panel">
    <div class="debug-grid">
      <div class="debug-section">
        <h4>快捷操作</h4>
        <button @click="fillRandom">随机填充空位</button>
        <button @click="forceExpand">强制扩棋盘</button>
        <button @click="resetSave" class="danger">清空存档</button>
      </div>
      <div class="debug-section">
        <h4>预设布局</h4>
        <button @click="fillTestGrid">合并演示</button>
        <button @click="fillAllTiers">全材质展示</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.debug-panel {
  background: rgba(0,0,0,0.85);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 10px;
  padding: 10px 16px;
  font-size: 0.78rem;
  max-width: 500px;
  width: 100%;
}
.debug-grid { display: flex; flex-direction: column; gap: 8px; }
.debug-section { display: flex; flex-wrap: wrap; gap: 5px; align-items: center; }
.debug-section h4 {
  color: #aaa; font-size: 0.7rem; margin: 0; width: 100%;
  border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 2px;
}
button {
  padding: 4px 10px; border: none; border-radius: 5px;
  background: rgba(255,255,255,0.15); color: #ddd;
  font-size: 0.72rem; cursor: pointer; font-family: inherit;
}
button:hover { background: rgba(255,255,255,0.25); }
button.danger { background: rgba(231,76,60,0.5); }
button.danger:hover { background: rgba(231,76,60,0.7); }
</style>
