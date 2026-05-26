<script setup lang="ts">
import { ref } from 'vue'
import { useGameStore } from '../stores/game'
import { useSettingsStore } from '../stores/settings'
import { useAudio } from '../composables/useAudio'
import { useI18n } from 'vue-i18n'

const gameStore = useGameStore()
const settingsStore = useSettingsStore()
const audio = useAudio()
const { t } = useI18n()
const showConfirm = ref(false)

function handleNewGame() {
  showConfirm.value = true
}

function confirmNewGame() {
  gameStore.newGame()
  showConfirm.value = false
}

function cancelNewGame() {
  showConfirm.value = false
}

function handleUndo() {
  const ok = gameStore.undo()
  if (ok && !settingsStore.settings.muted) audio.playUndoSound()
}
</script>

<template>
  <div class="controls">
    <button class="btn" @click="handleNewGame">{{ t('controls.newGame') }}</button>
    <button class="btn" @click="handleUndo" :disabled="gameStore.state.history.length === 0">
      {{ t('controls.undo') }}
    </button>
    <div v-if="showConfirm" class="confirm-overlay" @click.self="cancelNewGame">
      <div class="confirm-box">
        <p>{{ t('controls.confirmNewGame') }}</p>
        <button class="btn btn-danger" @click="confirmNewGame">{{ t('controls.newGame') }}</button>
        <button class="btn" @click="cancelNewGame">{{ t('settings.close') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 18px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.12);
  color: #e0e0e0;
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
}

.btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.btn:active:not(:disabled) {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.btn-danger {
  background: rgba(231, 76, 60, 0.7);
}

.btn-danger:hover {
  background: rgba(231, 76, 60, 0.9);
}

.confirm-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.confirm-box {
  background: #2a2a4a;
  border-radius: 12px;
  padding: 24px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
