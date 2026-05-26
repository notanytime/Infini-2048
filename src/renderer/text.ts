import * as THREE from 'three'

const textureCache = new Map<string, THREE.CanvasTexture>()

export function createNumberTexture(value: number, size = 256): THREE.CanvasTexture {
  const key = `${value}_${size}`
  if (textureCache.has(key)) {
    const cached = textureCache.get(key)!
    cached.needsUpdate = true
    return cached
  }

  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!
  ctx.clearRect(0, 0, size, size)

  const fontSize = value < 1000 ? size * 0.42
    : value < 10000 ? size * 0.32
    : value < 100000 ? size * 0.26
    : size * 0.2

  ctx.font = `700 ${fontSize}px 'Poppins', 'Segoe UI', sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  const cx = size / 2, cy = size / 2
  const glowColor = value <= 4 ? 'rgba(180,160,140,0.4)' : 'rgba(255,255,255,0.5)'

  for (let i = 4; i >= 0; i--) {
    ctx.shadowColor = glowColor
    ctx.shadowBlur = size * 0.04 + i * size * 0.03
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.fillStyle = value <= 4 ? '#776e65' : '#ffffff'
    ctx.fillText(String(value), cx, cy)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true

  textureCache.set(key, texture)
  return texture
}

export function createTextPlane(value: number, width: number, height: number): THREE.Mesh {
  const texture = createNumberTexture(value)
  const geometry = new THREE.PlaneGeometry(width * 0.85, height * 0.85)
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
    depthWrite: false,
    side: THREE.DoubleSide,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.renderOrder = 999
  return mesh
}

export function clearTextureCache() {
  for (const [_, t] of textureCache) t.dispose()
  textureCache.clear()
}
