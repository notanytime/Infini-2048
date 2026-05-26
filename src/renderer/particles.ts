import * as THREE from 'three'
import type { ParticleData } from '../types'

interface ParticleSystem {
  points: THREE.Points | null
  particles: ParticleData[]
}

let particleState: ParticleSystem = { points: null, particles: [] }

export function createParticleSystem(group: THREE.Group) {
  particleState.points = null
  particleState.particles = []
}

export function emitParticles(
  group: THREE.Group,
  x: number,
  y: number,
  z: number,
  tileValue: number,
  intensity: number,
) {
  const count = getParticleCount(tileValue)
  const maxLife = getParticleLife(tileValue)
  const size = getParticleSize(tileValue)
  const color = getParticleColor(tileValue)

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI * 0.5
    const speed = (0.3 + Math.random() * 1.5) * intensity

    particleState.particles.push({
      x: x + (Math.random() - 0.5) * 0.5,
      y: y + Math.random() * 0.3,
      z: z + (Math.random() - 0.5) * 0.5,
      vx: Math.cos(angle) * Math.cos(phi) * speed,
      vy: Math.sin(phi) * speed * 1.5,
      vz: Math.sin(angle) * Math.cos(phi) * speed,
      life: maxLife,
      maxLife,
      size: size * (0.5 + Math.random() * 0.5),
      color,
    })
  }
}

function getParticleCount(value: number): number {
  if (value <= 16) return 4 + Math.floor(Math.random() * 5)
  if (value <= 128) return 8 + Math.floor(Math.random() * 8)
  if (value <= 1024) return 15 + Math.floor(Math.random() * 11)
  if (value <= 8192) return 25 + Math.floor(Math.random() * 16)
  return 40 + Math.floor(Math.random() * 41)
}

function getParticleLife(value: number): number {
  if (value <= 16) return 0.2 + Math.random() * 0.2
  if (value <= 128) return 0.4 + Math.random() * 0.3
  if (value <= 1024) return 0.6 + Math.random() * 0.4
  if (value <= 8192) return 0.9 + Math.random() * 0.5
  return 1.2 + Math.random() * 0.6
}

function getParticleSize(value: number): number {
  if (value <= 16) return 0.02
  if (value <= 128) return 0.04
  if (value <= 1024) return 0.07
  if (value <= 8192) return 0.12
  return 0.18
}

function getParticleColor(value: number): string {
  const colors: Record<number, string> = {
    2: '#eee4da', 4: '#ede0c8', 8: '#f2b179', 16: '#f59563',
    32: '#c0c0c0', 64: '#b87333', 128: '#ffd700', 256: '#e5e4e2',
    512: '#5bc0de', 1024: '#33b5e5', 2048: '#9b59b6', 4096: '#e74c3c',
    8192: '#00ffff', 16384: '#ff00ff', 32768: '#ffff00',
  }
  return colors[value] || '#ffffff'
}

export function updateParticles(group: THREE.Group, delta: number) {
  if (particleState.points) {
    group.remove(particleState.points)
    particleState.points.geometry.dispose()
    ;(particleState.points.material as THREE.Material).dispose()
    particleState.points = null
  }

  const alive = particleState.particles.filter(p => {
    p.life -= delta
    if (p.life <= 0) return false
    p.x += p.vx * delta
    p.y += p.vy * delta
    p.z += p.vz * delta
    p.vy -= 2.0 * delta
    return true
  })
  particleState.particles = alive

  if (alive.length === 0) return

  const positions = new Float32Array(alive.length * 3)
  const colors = new Float32Array(alive.length * 3)
  const sizes = new Float32Array(alive.length)

  for (let i = 0; i < alive.length; i++) {
    const p = alive[i]
    const progress = 1 - p.life / p.maxLife
    positions[i * 3] = p.x
    positions[i * 3 + 1] = p.y
    positions[i * 3 + 2] = p.z

    const col = new THREE.Color(p.color)
    colors[i * 3] = col.r
    colors[i * 3 + 1] = col.g
    colors[i * 3 + 2] = col.b

    sizes[i] = p.size * (1 - progress * 0.8)
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const mat = new THREE.PointsMaterial({
    size: 0.3,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    opacity: 0.8,
  })

  particleState.points = new THREE.Points(geo, mat)
  group.add(particleState.points)
}

export function clearParticles(group: THREE.Group) {
  if (particleState.points) {
    group.remove(particleState.points)
    particleState.points.geometry.dispose()
    ;(particleState.points.material as THREE.Material).dispose()
    particleState.points = null
  }
  particleState.particles = []
}
