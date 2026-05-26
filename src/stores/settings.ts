import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { Settings, Language } from '../types'

export const useSettingsStore = defineStore('settings', () => {
  const settings = reactive<Settings>({
    effectIntensity: 0.7,
    muted: false,
    locale: (navigator.language.startsWith('zh') ? 'zh-CN' : 'en-US') as Language,
  })

  function setEffectIntensity(v: number) { settings.effectIntensity = Math.max(0, Math.min(1, v)) }
  function toggleMuted() { settings.muted = !settings.muted }
  function setMuted(v: boolean) { settings.muted = v }
  function setLocale(locale: Language) { settings.locale = locale }

  return { settings, setEffectIntensity, toggleMuted, setMuted, setLocale }
})
