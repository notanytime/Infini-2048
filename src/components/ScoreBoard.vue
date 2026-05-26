<script setup lang="ts">
import { useGameStore } from '../stores/game'
import { useI18n } from 'vue-i18n'

const gameStore = useGameStore()
const { t } = useI18n()
</script>

<template>
  <div class="score-board">
    <div class="score-item">
      <span class="score-label">{{ t('score.current') }}</span>
      <span class="score-value">{{ gameStore.state.score }}</span>
    </div>
    <div class="score-item">
      <span class="score-label">{{ t('score.high') }}</span>
      <span class="score-value">{{ gameStore.state.highScore }}</span>
    </div>
    <div class="score-item" v-if="gameStore.state.comboCount > 1">
      <span class="score-label">{{ t('score.combo') }}</span>
      <span class="score-value combo">{{ t('game.comboLabel', { count: gameStore.state.comboCount }) }}</span>
    </div>
    <div class="score-item">
      <span class="score-label">{{ t('score.grid') }}</span>
      <span class="score-value">{{ gameStore.state.gridSize }}×{{ gameStore.state.gridSize }}</span>
    </div>
  </div>
</template>

<style scoped>
.score-board {
  display: flex;
  gap: 8px;
}

.score-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 6px 14px;
  min-width: 60px;
}

.score-label {
  font-size: 0.65rem;
  color: #aaa;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.score-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

.score-value.combo {
  font-size: 0.9rem;
  color: #ffd93d;
}
</style>
