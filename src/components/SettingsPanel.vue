<script setup lang="ts">
import { ref } from 'vue'
import { useSettingsStore } from '../stores/settings'
import { useI18n } from 'vue-i18n'
import type { Language } from '../types'

const settingsStore = useSettingsStore()
const { t, locale } = useI18n()
const showPanel = ref(false)

function togglePanel() {
  showPanel.value = !showPanel.value
}

function setLocale(lang: Language) {
  settingsStore.setLocale(lang)
  locale.value = lang
}
</script>

<template>
  <div class="settings-wrapper">
    <button class="btn-settings" @click="togglePanel">{{ t('controls.settings') }}</button>
    <div v-if="showPanel" class="settings-panel" @click.self="showPanel = false">
      <div class="settings-box">
        <h3>{{ t('settings.title') }}</h3>

        <label class="setting-row">
          <span>{{ t('settings.effectIntensity') }}</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            :value="settingsStore.settings.effectIntensity"
            @input="settingsStore.setEffectIntensity(Number(($event.target as HTMLInputElement).value))"
          />
        </label>

        <label class="setting-row">
          <span>{{ t('settings.muted') }}</span>
          <input
            type="checkbox"
            :checked="settingsStore.settings.muted"
            @change="settingsStore.toggleMuted()"
          />
        </label>

        <div class="setting-row">
          <span>{{ t('settings.language') }}</span>
          <select
            :value="settingsStore.settings.locale"
            @change="setLocale(($event.target as HTMLSelectElement).value as Language)"
          >
            <option value="zh-CN">中文</option>
            <option value="en-US">English</option>
          </select>
        </div>

        <button class="btn" @click="showPanel = false">{{ t('settings.close') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.settings-wrapper {
  position: relative;
}

.btn-settings {
  padding: 6px 14px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.12);
  color: #e0e0e0;
  font-family: 'Poppins', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-settings:hover {
  background: rgba(255, 255, 255, 0.2);
}

.settings-panel {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.settings-box {
  background: #2a2a4a;
  border-radius: 12px;
  padding: 24px 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 280px;
}

.settings-box h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #fff;
}

.setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.9rem;
}

.setting-row span {
  color: #ccc;
}

.setting-row input[type="range"] {
  width: 120px;
  accent-color: #6bcb77;
}

.setting-row select {
  padding: 4px 8px;
  border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.1);
  color: #e0e0e0;
  font-family: 'Poppins', sans-serif;
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
  align-self: center;
}

.btn:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
