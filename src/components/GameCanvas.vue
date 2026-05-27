<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useGameStore } from '../stores/game'
import { useSettingsStore } from '../stores/settings'
import { createScene, resize, type SceneAssets } from '../renderer/scene'
import { clearBoard, updateBoard } from '../renderer/board'
import { createParticleSystem, updateParticles, emitParticles, clearParticles } from '../renderer/particles'
import { useAudio } from '../composables/useAudio'
import ValueSelector from './ValueSelector.vue'
import * as THREE from 'three'

const props = defineProps<{ showSkinPicker: boolean; debugMode: boolean }>()
const emit = defineEmits(['toast'])

const canvasRef = ref<HTMLCanvasElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)
const gameStore = useGameStore()
const settingsStore = useSettingsStore()
const audio = useAudio()

const showValueSelector = ref(false)
const selectedCell = ref<{ row: number; col: number } | null>(null)

let assets: SceneAssets | null = null
let animationId = 0
let lastTime = 0
let zoomLevel = 1
let isTransitioning = false

function animate(timestamp: number) {
  animationId = requestAnimationFrame(animate)
  if (!assets) return

  const delta = Math.min((timestamp - lastTime) / 1000, 0.1)
  lastTime = timestamp

  updateParticles(assets.particleGroup, delta)
  assets.renderer.render(assets.scene, assets.camera)
}

function handleKeydown(e: KeyboardEvent) {
  if (isTransitioning || showValueSelector.value) return
  const dirs: Record<string, string> = {
    ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
    w: 'up', s: 'down', a: 'left', d: 'right',
  }
  const direction = dirs[e.key]
  if (!direction) return
  e.preventDefault()
  processMove(direction as 'up' | 'down' | 'left' | 'right')
}

function processMove(direction: 'up' | 'down' | 'left' | 'right') {
  const result = gameStore.move(direction)
  if (!result.moved) return

  if (!settingsStore.settings.muted) {
    audio.playSlideSound()
    if (result.mergeCount > 0) {
      let maxVal = 0
      for (let r = 0; r < gameStore.state.gridSize; r++)
        for (let c = 0; c < gameStore.state.gridSize; c++) {
          const tile = gameStore.state.grid[r]?.[c]
          if (tile?.mergedFrom && tile.value > maxVal) maxVal = tile.value
        }
      if (maxVal > 0) audio.playMergeSound(maxVal)
    }
    if (result.expanded) audio.playExpandSound()
  }

  if (result.mergeCount > 0 && assets) {
    emitMergeParticles()
  }

  if (gameStore.state.gameOver && !settingsStore.settings.muted) {
    audio.playGameOverSound()
  }
}

function getTileWorldPos(row: number, col: number): [number, number] {
  const gs = gameStore.state.gridSize
  const step = 12 / gs
  const off = (gs - 1) * step / 2
  return [col * step - off, row * step - off]
}

function emitMergeParticles() {
  for (let r = 0; r < gameStore.state.gridSize; r++)
    for (let c = 0; c < gameStore.state.gridSize; c++) {
      const tile = gameStore.state.grid[r]?.[c]
      if (tile?.mergedFrom) {
        const [cx, cz] = getTileWorldPos(r, c)
        emitParticles(
          assets!.particleGroup,
          cx, Math.log2(tile.value) * 0.15, cz,
          tile.value,
          settingsStore.settings.effectIntensity,
        )
      }
    }
}

function handleClick(e: MouseEvent) {
  if (!props.debugMode || !assets) return

  const canvas = canvasRef.value!
  const rect = canvas.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
  const y = -((e.clientY - rect.top) / rect.height) * 2 + 1

  const raycaster = new THREE.Raycaster()
  raycaster.setFromCamera(new THREE.Vector2(x, y), assets.camera)

  const intersects = raycaster.intersectObjects(assets.boardGroup.children, true)
  if (intersects.length === 0) return

  const hitPoint = intersects[0].point
  const gs = gameStore.state.gridSize
  const step = 12 / gs
  const off = (gs - 1) * step / 2

  const col = Math.round((hitPoint.x + off) / step)
  const row = Math.round((hitPoint.z + off) / step)

  if (row < 0 || row >= gs || col < 0 || col >= gs) return
  if (gameStore.state.grid[row]?.[col]) {
    emit('toast', '该位置已有方块')
    return
  }

  selectedCell.value = { row, col }
  showValueSelector.value = true
}

function handleValueSelect(e: { row: number; col: number; value: number }) {
  const success = gameStore.debugPlaceTile(e.row, e.col, e.value)
  if (success) {
    emit('toast', `已放置 ${e.value}`)
  }
  showValueSelector.value = false
  selectedCell.value = null
}

function handleValueClose() {
  showValueSelector.value = false
  selectedCell.value = null
}

let touchStartX = 0, touchStartY = 0, touchStartTime = 0

function handleTouchStart(e: TouchEvent) {
  if (e.touches.length === 1) {
    touchStartX = e.touches[0].clientX
    touchStartY = e.touches[0].clientY
    touchStartTime = Date.now()
  }
}

function handleTouchMove(e: TouchEvent) {
  if (e.touches.length === 1) e.preventDefault()
}

function handleTouchEnd(e: TouchEvent) {
  if (e.touches.length !== 0) return
  const dx = e.changedTouches[0].clientX - touchStartX
  const dy = e.changedTouches[0].clientY - touchStartY
  const dt = Date.now() - touchStartTime

  if (dt > 1000 || (Math.abs(dx) < 20 && Math.abs(dy) < 20)) return

  const direction = Math.abs(dx) > Math.abs(dy)
    ? (dx > 0 ? 'right' : 'left')
    : (dy > 0 ? 'down' : 'up')
  processMove(direction)
}

function handleWheel(e: WheelEvent) {
  e.preventDefault()
  if (!assets) return
  zoomLevel = Math.max(0.5, Math.min(3, zoomLevel - e.deltaY * 0.002))
  const baseFrustum = 16 / zoomLevel
  const aspect = assets.renderer.domElement.clientWidth / assets.renderer.domElement.clientHeight
  assets.camera.left = baseFrustum * aspect / -2
  assets.camera.right = baseFrustum * aspect / 2
  assets.camera.top = baseFrustum / 2
  assets.camera.bottom = baseFrustum / -2
  assets.camera.updateProjectionMatrix()
}

function handleResize() {
  if (!assets || !containerRef.value) return
  const rect = containerRef.value.getBoundingClientRect()
  resize(assets, rect.width, rect.height)
}

async function initCanvas() {
  await document.fonts.ready
  if (!canvasRef.value || !containerRef.value) return

  await new Promise<void>(resolve => {
    const check = () => {
      const rect = containerRef.value!.getBoundingClientRect()
      if (rect.width > 0 && rect.height > 0) {
        resolve()
      } else {
        requestAnimationFrame(check)
      }
    }
    check()
  })

  const rect = containerRef.value.getBoundingClientRect()
  const w = Math.max(rect.width, 300)
  const h = Math.max(rect.height, 300)
  canvasRef.value.width = w
  canvasRef.value.height = h

  assets = createScene(canvasRef.value)
  createParticleSystem(assets.particleGroup)
  updateBoard(assets.boardGroup, gameStore.tiles, gameStore.state.gridSize)

  lastTime = performance.now()
  animationId = requestAnimationFrame(animate)

  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', handleResize)
  canvasRef.value.addEventListener('click', handleClick)
  canvasRef.value.addEventListener('wheel', handleWheel, { passive: false })
  if (containerRef.value) {
    containerRef.value.addEventListener('touchstart', handleTouchStart, { passive: false })
    containerRef.value.addEventListener('touchmove', handleTouchMove, { passive: false })
    containerRef.value.addEventListener('touchend', handleTouchEnd)
  }
}

function cleanup() {
  cancelAnimationFrame(animationId)
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', handleResize)
  canvasRef.value?.removeEventListener('click', handleClick)
  canvasRef.value?.removeEventListener('wheel', handleWheel)
  if (containerRef.value) {
    containerRef.value.removeEventListener('touchstart', handleTouchStart)
    containerRef.value.removeEventListener('touchmove', handleTouchMove)
    containerRef.value.removeEventListener('touchend', handleTouchEnd)
  }
  if (assets) {
    clearParticles(assets.particleGroup)
    clearBoard(assets.boardGroup)
    assets.renderer.dispose()
  }
}

function animateSkinTransition() {
  if (!assets || isTransitioning) return
  isTransitioning = true

  const meshes: THREE.Mesh[] = []
  assets.boardGroup.traverse(child => {
    if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
      meshes.push(child)
    }
  })

  const duration = 200
  const startTime = performance.now()

  function fadeOut() {
    const elapsed = performance.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    const opacity = 1 - progress

    for (const mesh of meshes) {
      const mat = mesh.material as THREE.MeshStandardMaterial
      mat.transparent = true
      mat.opacity = opacity
    }

    if (progress < 1) {
      requestAnimationFrame(fadeOut)
    } else {
      updateBoard(assets!.boardGroup, gameStore.tiles, gameStore.state.gridSize)
      fadeIn()
    }
  }

  function fadeIn() {
    const newMeshes: THREE.Mesh[] = []
    assets!.boardGroup.traverse(child => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
        newMeshes.push(child)
      }
    })

    const fadeStartTime = performance.now()

    function fadeInStep() {
      const elapsed = performance.now() - fadeStartTime
      const progress = Math.min(elapsed / duration, 1)
      const opacity = progress

      for (const mesh of newMeshes) {
        const mat = mesh.material as THREE.MeshStandardMaterial
        mat.transparent = true
        mat.opacity = opacity
      }

      if (progress < 1) {
        requestAnimationFrame(fadeInStep)
      } else {
        for (const mesh of newMeshes) {
          const mat = mesh.material as THREE.MeshStandardMaterial
          mat.transparent = mat.opacity < 1
        }
        isTransitioning = false
      }
    }

    fadeInStep()
  }

  fadeOut()
}

watch(
  () => gameStore.tiles,
  (tiles) => {
    if (assets && !isTransitioning) updateBoard(assets.boardGroup, tiles, gameStore.state.gridSize)
  },
  { deep: true },
)

watch(
  () => gameStore.state.gameOver,
  (isOver) => {
    if (isOver && !settingsStore.settings.muted) audio.playGameOverSound()
  },
)

watch(
  () => settingsStore.settings.currentSkinId,
  () => {
    animateSkinTransition()
  },
)

onMounted(async () => {
  gameStore.init()
  await initCanvas()
})

onUnmounted(() => { cleanup() })
</script>

<template>
  <div ref="containerRef" class="canvas-container">
    <canvas ref="canvasRef" class="game-canvas" :class="{ 'debug-cursor': debugMode }" />
    <ValueSelector
      v-if="showValueSelector && selectedCell"
      :row="selectedCell.row"
      :col="selectedCell.col"
      @select="handleValueSelect"
      @close="handleValueClose"
    />
  </div>
</template>

<style scoped>
.canvas-container {
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
  position: relative;
}
.game-canvas {
  width: 100%;
  height: 100%;
  min-height: 200px;
  display: block;
}
.debug-cursor {
  cursor: crosshair;
}
</style>
