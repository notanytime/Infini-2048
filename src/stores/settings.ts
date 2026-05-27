import { defineStore } from 'pinia'
import { reactive, watch } from 'vue'
import type { Settings, Language } from '../types'

export const useSettingsStore = defineStore('settings', () => {
  const savedSkinId = localStorage.getItem('infini2048_skinId') || 'classic'

  const settings = reactive<Settings>({
    effectIntensity: 0.7,
    muted: false,
    locale: (navigator.language.startsWith('zh') ? 'zh-CN' : 'en-US') as Language,
    currentSkinId: savedSkinId,
  })

  watch(() => settings.currentSkinId, (id) => {
    localStorage.setItem('infini2048_skinId', id)
  })

  function setEffectIntensity(v: number) { settings.effectIntensity = Math.max(0, Math.min(1, v)) }
  function toggleMuted() { settings.muted = !settings.muted }
  function setMuted(v: boolean) { settings.muted = v }
  function setLocale(locale: Language) { settings.locale = locale }
  function setSkinId(id: string) { settings.currentSkinId = id }

  return { settings, setEffectIntensity, toggleMuted, setMuted, setLocale, setSkinId }
})
