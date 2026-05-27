import * as THREE from 'three'

export interface SceneAssets {
  scene: THREE.Scene
  camera: THREE.OrthographicCamera
  renderer: THREE.WebGLRenderer
  boardGroup: THREE.Group
  particleGroup: THREE.Group
  lightGroup: THREE.Group
}

export function createScene(canvas: HTMLCanvasElement): SceneAssets {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.2
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#1a1a2e')

  const frustumSize = 16
  const aspect = canvas.clientWidth / canvas.clientHeight
  const camera = new THREE.OrthographicCamera(
    frustumSize * aspect / -2,
    frustumSize * aspect / 2,
    frustumSize / 2,
    frustumSize / -2,
    0.1,
    100,
  )
  camera.position.set(0, 16, 5)
  camera.lookAt(0, 0, 0)

  const lightGroup = new THREE.Group()
  scene.add(lightGroup)

  const ambientLight = new THREE.AmbientLight('#667799', 0.45)
  lightGroup.add(ambientLight)

  const dirLight = new THREE.DirectionalLight('#ffffff', 2.0)
  dirLight.position.set(15, 20, 10)
  dirLight.castShadow = true
  dirLight.shadow.mapSize.width = 1024
  dirLight.shadow.mapSize.height = 1024
  dirLight.shadow.camera.near = 0.5
  dirLight.shadow.camera.far = 100
  dirLight.shadow.camera.left = -20
  dirLight.shadow.camera.right = 20
  dirLight.shadow.camera.top = 20
  dirLight.shadow.camera.bottom = -20
  dirLight.shadow.bias = -0.0001
  lightGroup.add(dirLight)

  const fillLight = new THREE.DirectionalLight('#8899ff', 0.4)
  fillLight.position.set(-5, 3, -5)
  lightGroup.add(fillLight)

  const rimLight = new THREE.DirectionalLight('#ffffff', 1.2)
  rimLight.position.set(8, 4, -8)
  lightGroup.add(rimLight)

  const boardGroup = new THREE.Group()
  scene.add(boardGroup)

  const particleGroup = new THREE.Group()
  scene.add(particleGroup)

  scene.add(camera)

  return { scene, camera, renderer, boardGroup, particleGroup, lightGroup }
}

export function resize(assets: SceneAssets, width: number, height: number) {
  assets.renderer.setSize(width, height)
  const frustumSize = 16
  const aspect = width / height
  assets.camera.left = frustumSize * aspect / -2
  assets.camera.right = frustumSize * aspect / 2
  assets.camera.top = frustumSize / 2
  assets.camera.bottom = frustumSize / -2
  assets.camera.updateProjectionMatrix()
}
