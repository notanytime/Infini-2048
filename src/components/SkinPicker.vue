<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { allSkins, type Skin } from '../skins'
import { useSettingsStore } from '../stores/settings'

const settingsStore = useSettingsStore()
const emit = defineEmits(['close'])

const currentIndex = ref(
  allSkins.findIndex(s => s.id === settingsStore.settings.currentSkinId)
)

const currentSkin = computed(() => allSkins[currentIndex.value])

function prev() {
  currentIndex.value = (currentIndex.value - 1 + allSkins.length) % allSkins.length
  applySkin()
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % allSkins.length
  applySkin()
}

function selectSkin(index: number) {
  currentIndex.value = index
  applySkin()
}

function applySkin() {
  settingsStore.setSkinId(allSkins[currentIndex.value].id)
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

const tierColors: Record<string, string> = {
  matte: '#eee4da',
  metal: '#c0c0c0',
  crystal: '#5bc0de',
  energy: '#1abc9c',
}

function getTierPreviewStyle(skin: Skin, tier: string) {
  const t = skin[tier as keyof Skin] as any
  return {
    backgroundColor: t.color,
    boxShadow: t.emissiveIntensity > 0
      ? `0 0 ${t.emissiveIntensity * 20}px ${t.emissiveColor}`
      : 'none',
    opacity: t.opacity,
  }
}
</script>

<template>
  <div class="skin-overlay" @click.self="emit('close')">
    <div class="skin-picker">
      <button class="arrow left" @click="prev">◀</button>

      <div class="skin-content">
        <h3 class="skin-name">{{ currentSkin.name }}</h3>
        <div class="tier-preview">
          <div
            v-for="tier in ['matte', 'metal', 'crystal', 'energy']"
            :key="tier"
            class="tier-block"
            :style="getTierPreviewStyle(currentSkin, tier)"
          >
            <span class="tier-label">{{ tier }}</span>
          </div>
        </div>
      </div>

      <button class="arrow right" @click="next">▶</button>

      <div class="dots">
        <span
          v-for="(skin, i) in allSkins"
          :key="skin.id"
          class="dot"
          :class="{ active: i === currentIndex }"
          @click="selectSkin(i)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.skin-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.skin-picker {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  padding: 24px 40px;
  background: rgba(30, 30, 50, 0.95);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.arrow {
  background: none;
  border: none;
  color: #888;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  transition: color 0.2s;
}

.arrow:hover {
  color: #fff;
}

.skin-content {
  text-align: center;
  min-width: 200px;
}

.skin-name {
  color: #fff;
  font-size: 1.1rem;
  margin: 0 0 16px 0;
  font-weight: 600;
}

.tier-preview {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.tier-block {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.tier-label {
  font-size: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.dots {
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background 0.2s;
}

.dot.active {
  background: #fff;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.6);
}
</style>
