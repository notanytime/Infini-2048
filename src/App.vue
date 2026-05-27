<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import GameCanvas from './components/GameCanvas.vue'
import ScoreBoard from './components/ScoreBoard.vue'
import Controls from './components/Controls.vue'
import SettingsPanel from './components/SettingsPanel.vue'
import DebugPanel from './components/DebugPanel.vue'
import SkinPicker from './components/SkinPicker.vue'
import Toast from './components/Toast.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const showDebug = ref(false)
const showSkinPicker = ref(false)

interface ToastItem {
  id: number
  message: string
}

const toasts = ref<ToastItem[]>([])
let toastId = 0

function addToast(message: string) {
  const id = ++toastId
  toasts.value.push({ id, message })
}

function removeToast(id: number) {
  toasts.value = toasts.value.filter(t => t.id !== id)
}

function toggleDebug(e: KeyboardEvent) {
  if (e.key === '`' || e.key === '~') {
    e.preventDefault()
    showDebug.value = !showDebug.value
  }
}

onMounted(() => window.addEventListener('keydown', toggleDebug))
onUnmounted(() => window.removeEventListener('keydown', toggleDebug))
</script>

<template>
  <div class="app-container">
    <header class="game-header">
      <h1 class="game-title">Infini-2048</h1>
      <div class="header-actions">
        <button class="skin-btn" @click="showSkinPicker = true" title="切换皮肤">🎨</button>
        <ScoreBoard />
      </div>
    </header>
    <main class="game-main">
      <GameCanvas
        :showSkinPicker="showSkinPicker"
        :debugMode="showDebug"
        @toast="addToast"
      />
    </main>
    <footer class="game-footer">
      <Controls />
      <SettingsPanel />
      <DebugPanel v-if="showDebug" @toast="addToast" />
    </footer>
    <SkinPicker v-if="showSkinPicker" @close="showSkinPicker = false" />
    <div class="toast-container">
      <Toast
        v-for="toast in toasts"
        :key="toast.id"
        :message="toast.message"
        @close="removeToast(toast.id)"
      />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #1a1a2e;
  font-family: 'Poppins', 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', sans-serif;
  color: #e0e0e0;
}

#app {
  width: 100%;
  height: 100%;
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  max-width: 750px;
  margin: 0 auto;
  padding: 12px;
  gap: 8px;
  position: relative;
}

.game-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 650px;
}

.game-title {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ff6b6b, #ffd93d, #6bcb77);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.skin-btn {
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: background 0.2s;
}

.skin-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.game-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 650px;
  min-height: 0;
}

.game-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 650px;
}

.toast-container {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 200;
  pointer-events: none;
}
</style>
