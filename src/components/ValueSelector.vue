<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ row: number; col: number }>()
const emit = defineEmits(['select', 'close'])

const values = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768]

function select(value: number) {
  emit('select', { row: props.row, col: props.col, value })
}
</script>

<template>
  <div class="value-selector-overlay" @click.self="emit('close')">
    <div class="value-selector">
      <div class="value-header">选择数值</div>
      <div class="value-grid">
        <button
          v-for="v in values"
          :key="v"
          class="value-btn"
          @click="select(v)"
        >
          {{ v }}
        </button>
      </div>
      <button class="close-btn" @click="emit('close')">取消</button>
    </div>
  </div>
</template>

<style scoped>
.value-selector-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.value-selector {
  background: rgba(30, 30, 50, 0.95);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  max-width: 320px;
  width: 90%;
}

.value-header {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 6px;
  margin-bottom: 12px;
}

.value-btn {
  padding: 8px 4px;
  border: none;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.12);
  color: #ddd;
  font-size: 0.7rem;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  transition: background 0.2s;
}

.value-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.close-btn {
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background: rgba(231, 76, 60, 0.5);
  color: #ddd;
  font-size: 0.8rem;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

.close-btn:hover {
  background: rgba(231, 76, 60, 0.7);
}
</style>
