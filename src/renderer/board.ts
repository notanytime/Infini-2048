import * as THREE from 'three'
import { createTileMaterial } from './materials'
import { createTextPlane, clearTextureCache } from './text'
import type { Tile } from '../types'

interface BoardState {
  boxMeshes: Map<number, THREE.Mesh>
  textMeshes: Map<number, THREE.Mesh>
  floorMesh: THREE.Mesh | null
  gridCells: THREE.Group | null
  size: number
}

const boardState: BoardState = {
  boxMeshes: new Map(),
  textMeshes: new Map(),
  floorMesh: null,
  gridCells: null,
  size: 0,
}

const tileSize = 2.0
const tileGap = 0.15
const baseBlockHeight = 0.08
const MAX_BOARD = 12

function getTileStep(gridSize: number): number {
  return MAX_BOARD / gridSize
}

function getTileSize(gridSize: number): number {
  return getTileStep(gridSize) - tileGap
}

function getWorldPos(row: number, col: number, gridSize: number): [number, number] {
  const step = getTileStep(gridSize)
  const offset = (gridSize - 1) * step / 2
  const cx = col * step - offset
  const cz = row * step - offset
  return [cx, cz]
}

function getBlockHeight(value: number): number {
  return Math.log2(value) * baseBlockHeight
}

export function createBoard(boardGroup: THREE.Group, gridSize: number) {
  clearBoard(boardGroup)
  boardState.size = gridSize

  const step = getTileStep(gridSize)
  const tileSize = getTileSize(gridSize)
  const totalSize = gridSize * step + tileGap
  const floorGeo = new THREE.PlaneGeometry(totalSize, totalSize)
  const floorMat = new THREE.MeshStandardMaterial({
    color: '#1a1a3a',
    roughness: 0.8,
    metalness: 0.1,
  })
  const floor = new THREE.Mesh(floorGeo, floorMat)
  floor.rotation.x = -Math.PI / 2
  floor.position.y = -0.08
  floor.receiveShadow = true
  boardGroup.add(floor)
  boardState.floorMesh = floor

  const gridCells = new THREE.Group()
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const [cx, cz] = getWorldPos(r, c, gridSize)
      const cellGeo = new THREE.PlaneGeometry(tileSize * 0.95, tileSize * 0.95)
      const cellMat = new THREE.MeshStandardMaterial({
        color: '#252540',
        roughness: 0.7,
        metalness: 0.05,
      })
      const cell = new THREE.Mesh(cellGeo, cellMat)
      cell.rotation.x = -Math.PI / 2
      cell.position.set(cx, 0.01, cz)
      cell.receiveShadow = true
      gridCells.add(cell)
    }
  }
  boardGroup.add(gridCells)
  boardState.gridCells = gridCells
}

export function updateBoard(boardGroup: THREE.Group, tiles: Tile[], gridSize: number) {
  if (boardState.size !== gridSize) {
    createBoard(boardGroup, gridSize)
  }

  const activeIds = new Set(tiles.map(t => t.id))

  for (const [id, mesh] of boardState.boxMeshes) {
    if (!activeIds.has(id)) {
      mesh.parent?.remove(mesh)
      mesh.geometry.dispose()
      boardState.boxMeshes.delete(id)
    }
  }
  for (const [id, mesh] of boardState.textMeshes) {
    if (!activeIds.has(id)) {
      mesh.parent?.remove(mesh)
      mesh.geometry.dispose()
      boardState.textMeshes.delete(id)
    }
  }

  for (const tile of tiles) {
    const [cx, cz] = getWorldPos(tile.row, tile.col, gridSize)
    const ts = getTileSize(gridSize)
    const height = getBlockHeight(tile.value)
    const halfH = height / 2

    let boxMesh = boardState.boxMeshes.get(tile.id)
    if (!boxMesh) {
      const geo = new THREE.BoxGeometry(ts * 0.92, height, ts * 0.92)
      const mat = createTileMaterial(tile.value)
      boxMesh = new THREE.Mesh(geo, mat)
      boxMesh.castShadow = true
      boxMesh.receiveShadow = true
      boardGroup.add(boxMesh)
      boardState.boxMeshes.set(tile.id, boxMesh)
    } else {
      boxMesh.geometry.dispose()
      boxMesh.geometry = new THREE.BoxGeometry(ts * 0.92, height, ts * 0.92)
    }

    boxMesh.position.set(cx, halfH, cz)
    boxMesh.scale.set(1, 1, 1)

    let textMesh = boardState.textMeshes.get(tile.id)
    if (!textMesh) {
      textMesh = createTextPlane(tile.value, ts * 0.92, ts * 0.92)
      boardGroup.add(textMesh)
      boardState.textMeshes.set(tile.id, textMesh)
    }
    textMesh.position.set(cx, height + 0.02, cz)
    textMesh.rotation.x = -Math.PI / 2
  }
}

export function clearBoard(boardGroup: THREE.Group) {
  for (const mesh of boardState.boxMeshes.values()) {
    mesh.parent?.remove(mesh)
    mesh.geometry.dispose()
    const mat = mesh.material as THREE.Material
    mat.dispose()
  }
  for (const mesh of boardState.textMeshes.values()) {
    mesh.parent?.remove(mesh)
    mesh.geometry.dispose()
    const mat = mesh.material as THREE.Material
    mat.dispose()
    const tex = mat instanceof THREE.MeshBasicMaterial ? mat.map : null
    if (tex instanceof THREE.CanvasTexture) tex.dispose()
  }

  if (boardState.floorMesh) {
    boardState.floorMesh.parent?.remove(boardState.floorMesh)
    boardState.floorMesh.geometry.dispose()
    ;(boardState.floorMesh.material as THREE.Material).dispose()
  }
  if (boardState.gridCells) {
    boardState.gridCells.parent?.remove(boardState.gridCells)
    for (const child of [...boardState.gridCells.children]) {
      ;(child as THREE.Mesh).geometry.dispose()
      ;((child as THREE.Mesh).material as THREE.Material).dispose()
    }
  }

  boardState.boxMeshes.clear()
  boardState.textMeshes.clear()
  boardState.floorMesh = null
  boardState.gridCells = null
  boardState.size = 0
  clearTextureCache()
}
