export interface Tile {
  id: number
  value: number
  row: number
  col: number
  mergedFrom?: boolean
}

export interface GameState {
  grid: (Tile | null)[][]
  score: number
  highScore: number
  gridSize: number
  comboCount: number
  bestCombo: number
  gameOver: boolean
  won: boolean
  history: HistoryEntry[]
}

export interface HistoryEntry {
  grid: (Tile | null)[][]
  score: number
  comboCount: number
  gridSize: number
}

export type Direction = 'up' | 'down' | 'left' | 'right'

export interface ParticleData {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  life: number
  maxLife: number
  size: number
  color: string
}

export type MaterialTier = 'matte' | 'metal' | 'crystal' | 'energy'

export type Language = 'zh-CN' | 'en-US'

export interface Settings {
  effectIntensity: number
  muted: boolean
  locale: Language
}
