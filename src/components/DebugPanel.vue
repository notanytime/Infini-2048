<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore } from '../stores/game'

const gameStore = useGameStore()
const emit = defineEmits(['toast'])

const expanded = ref(false)

function fillRandom() {
  gameStore.debugFillRandom()
  emit('toast', '已随机填充空位')
}

function forceExpand() {
  gameStore.debugForceExpand()
  emit('toast', '已强制扩展棋盘')
}

function resetSave() {
  localStorage.removeItem('infini2048_save')
  localStorage.removeItem('infini2048_highScore')
  emit('toast', '已清空存档')
}

function fillTestGrid() {
  gameStore.debugFillTestGrid()
  emit('toast', '已加载合并演示布局')
}

function fillAllTiers() {
  gameStore.debugFillAllTiers()
  emit('toast', '已加载全材质展示布局')
}
</script>

<template>
  <div class="debug-panel">
    <button class="debug-toggle" @click="expanded = !expanded">
      {{ expanded ? '收起调试' : '展开调试' }}
    </button>
    <div v-if="expanded" class="debug-content">
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
      <div class="debug-hint">
        点击棋盘空位可手动放置方块
      </div>
    </div>
  </div>
</template>

<style scoped>
.debug-panel {
  background: rgba(0,0,0,0.85);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 0.78rem;
  max-width: 500px;
  width: 100%;
}

.debug-toggle {
  width: 100%;
  padding: 6px;
  border: none;
  border-radius: 6px;
  background: rgba(255,255,255,0.1);
  color: #aaa;
  font-size: 0.7rem;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;
}

.debug-toggle:hover {
  background: rgba(255,255,255,0.2);
  color: #ddd;
}

.debug-content {
  margin-top: 8px;
}

.debug-section {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  margin-bottom: 8px;
}

.debug-section h4 {
  color: #aaa;
  font-size: 0.65rem;
  margin: 0;
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding-bottom: 2px;
}

.debug-hint {
  color: #666;
  font-size: 0.6rem;
  text-align: center;
  padding-top: 4px;
  border-top: 1px solid rgba(255,255,255,0.05);
}

button {
  padding: 4px 10px;
  border: none;
  border-radius: 5px;
  background: rgba(255,255,255,0.15);
  color: #ddd;
  font-size: 0.72rem;
  cursor: pointer;
  font-family: inherit;
}

button:hover { background: rgba(255,255,255,0.25); }
button.danger { background: rgba(231,76,60,0.5); }
button.danger:hover { background: rgba(231,76,60,0.7); }
</style>
