/* eslint-disable */
import * as THREE from "three"
import { OrbitControls } from "@/../node_modules/three/examples/jsm/controls/OrbitControls.js";
// import * as dat from "lil-gui";
import Stats from '@/../node_modules/three/examples/jsm/libs/stats.module.js';
import gsap from "gsap";

let matpcapTextureImage = require('@/assets/textures/matcaps/7.png');

export default function (canvasName) {
  let scene, camera, canvas, renderer, gui, axesHelper, sizes, controls, raycaster, objectsToTest, mouse;

  // handle sizes
  sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }

  
  // debug UI
  // gui = new dat.GUI()
  
  // canvas
  canvas = document.querySelector(`canvas.${canvasName}`)
  
  // stats
  // const stats = new Stats();
  // stats.domElement.style.position = 'absolute';
  // stats.domElement.style.bottom = '0px';
  // document.querySelector('#app').appendChild( stats.domElement );

  // scene
  scene = new THREE.Scene()

  // axesHelper
  axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  // camera
  camera = new THREE.PerspectiveCamera(
    65, sizes.width / sizes.height, 0.1, 100
  )
  camera.position.z = 60
  camera.position.y = 20
  scene.add(camera)

  // controls
  controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  // controls.autoRotate = true;
  // controls.maxPolarAngle = Math.PI / 1.5;
  // controls.minPolarAngle = Math.PI / 4;
  // controls.maxDistance = 40;
  // controls.minDistance = 2;

  // renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  // handle resize
  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  // load matcap textures
  let textureLoader = new THREE.TextureLoader()

  let matcapTexture = textureLoader.load(matpcapTextureImage)

  ////////////////////////////////////////////////////////////
  // Placing the cubes
  let cubeGeometry = new THREE.BoxGeometry(0.98, 0.98, 0.98)
  // console.log(cubeGeometry)
  // gui.add(cubeGeometry.scale, 'x').min(0).max(1).step(0.01)
  // gui.add(cubeGeometry.scale, 'y').min(0).max(1).step(0.01)
  // gui.add(cubeGeometry.scale, 'z').min(0).max(1).step(0.01)

  let cubeMaterial = new THREE.MeshMatcapMaterial({
    matcap: matcapTexture
  })

  let count = 1000
  let lengthOfSide = Math.sqrt(count)

  objectsToTest = {}
  for (let x = -lengthOfSide; x < lengthOfSide; x++) {
    for (let z = -lengthOfSide; z < lengthOfSide; z++) {
      let mesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
      mesh.position.set(x, 0, z)
      mesh.name = `cube_${x}_${z}`
      scene.add(mesh)
      objectsToTest[mesh.name] = mesh
    }
  }
  ////////////////////////////////////////////////////////////
  let cont = {
    radius: 10,
    stepSize: 0
  }
  // gui.add(cont, 'radius').min(-1).max(20).step(1).onFinishChange(() => {
  //   clickAnimate()
  // })
  // gui.add(cont, 'stepSize').min(0).max(20).step(0.01).onFinishChange(() => {
  //   clickAnimate()
  // })
  ////////////////////////////////////////////////////////////
  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / sizes.width) * 2 - 1
    mouse.y = -(e.clientY / sizes.height) * 2 + 1
  })
  window.addEventListener('click', () => {
    clickAnimate()
  })

  function clickAnimate() {
    if (currentIntersect) {
      let x = currentIntersect.object.position.x
      let z = currentIntersect.object.position.z
      for (let i = 0; i <= cont.radius; i++) 
        shiftNeighbourCubes(x, z, i, cont.radius - i - cont.stepSize)
      
    }
  }

  let objectsToTestArray = Object.values(objectsToTest)
  let currentIntersect = null;

  ////////////////////////////////////////////////////////////
  // animate
  const clock = new THREE.Clock();
  const animate = () => {
    const elapsedTime = clock.getElapsedTime();
    // Update controls
    controls.update();

    raycaster.setFromCamera(mouse, camera)
    let intersects = raycaster.intersectObjects(objectsToTestArray)

    if (intersects.length) currentIntersect = intersects[0]
    else currentIntersect = null

    // Render
    renderer.render(scene, camera);
    // Call tick again on the next frame
    window.requestAnimationFrame(animate);
  };
  animate();

  let raised = []
  let ease = "power4.out"
  function shiftNeighbourCubes(x, z, radius, height) {
    let anim
    for (let i = x - radius; i <= x + radius; i++) {
      let x1 = objectsToTest[`cube_${i}_${z-radius}`]
      let x2 = objectsToTest[`cube_${i}_${z+radius}`]
      if (x1 != undefined){
        gsap.to(x1.position, {y: height, duration: 1, ease: ease})
        raised.push(x1)
      } 
      if (x2 != undefined) {
        gsap.to(x2.position, {y: height, duration: 1, ease: ease})
        raised.push(x2)
      }
    }

    for (let i = z - radius; i <= z + radius; i++) {
      let z1 = objectsToTest[`cube_${x + radius}_${i}`]
      let z2 = objectsToTest[`cube_${x - radius}_${i}`]
      if (z1 != undefined) {
        anim = gsap.to(z1.position, {y: height, duration: 1, ease: ease})
        raised.push(z1)
      } 
      if (z2 != undefined) {
        anim = gsap.to(z2.position, {y: height, duration: 1, ease: ease})
        raised.push(z2)
      } 
    }
  }

  
  let resetAllCubes = () => {
    if (raised.length) {
      raised.forEach((obj) => gsap.to(obj.position, {y: 0, duration:1}))
      raised = []
    }
  }
  document.querySelector('#reset').addEventListener('click', () => resetAllCubes())
}