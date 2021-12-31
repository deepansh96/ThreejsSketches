/* eslint-disable */
import * as THREE from "three";
import { OrbitControls } from "@/../node_modules/three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";

// var clonedeep = require("lodash.clonedeep");

// let particleTextureImage = require("@/assets/textures/particles/1.png");

export default function (canvasName) {

  let gui, canvas, scene, renderer, camera, controls;
  gui = new dat.GUI({ width: 400 })
  canvas = document.querySelector(`canvas.${canvasName}`)
  scene = new THREE.Scene()
  
  // let axesHelper = new THREE.AxesHelper(5)
  // scene.add(axesHelper)


  let generateGalaxyParams = {
    count: 50000,
    size: 0.02,
    radius: 5,
    branches: 3,
    spin: 1,
    randomness: 0.2,
    randomnessPower: 2,
    innerColor: '#ff6030',
    outerColor: '#1b3984',
  }
  let geometry = null; 
  let points = null;
  let material = null;

  let generateGalaxy = (generateGalaxyParams = generateGalaxyParams) => {
    if (points != null) {
      geometry.dispose()
      material.dispose()
      scene.remove(points)
    }
    geometry = new THREE.BufferGeometry()

    let innerColor = new THREE.Color(generateGalaxyParams.innerColor)
    let outerColor = new THREE.Color(generateGalaxyParams.outerColor)

    let positions = new Float32Array(3 * generateGalaxyParams.count)
    let colors = new Float32Array(3 * generateGalaxyParams.count)
  
    for (let i=0; i<generateGalaxyParams.count; i++) {
      let i3 = i * 3;
      let radius = Math.random() * generateGalaxyParams.radius
      let branchAngle = ((i % generateGalaxyParams.branches) / generateGalaxyParams.branches) * Math.PI * 2
      let spinAngle = radius * generateGalaxyParams.spin

      let randomX = Math.pow(Math.random(), generateGalaxyParams.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * radius * generateGalaxyParams.randomness
      let randomY = Math.pow(Math.random(), generateGalaxyParams.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * radius * generateGalaxyParams.randomness
      let randomZ = Math.pow(Math.random(), generateGalaxyParams.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * radius * generateGalaxyParams.randomness

      positions[i3    ] = Math.cos(branchAngle + spinAngle) * radius + randomX
      positions[i3 + 1] = randomY
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ

      let mixedColor = innerColor.clone()
      mixedColor.lerp(outerColor, normalize(radius, generateGalaxyParams.radius, 0))

      colors[i3    ] = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 1] = mixedColor.b
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    material = new THREE.PointsMaterial({
      size: generateGalaxyParams.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    })

    points = new THREE.Points(
      geometry, material
    )
    scene.add(points)
  }

  generateGalaxy(generateGalaxyParams)

  gui.add(generateGalaxyParams, 'count').min(100).max(1000000).step(100).onFinishChange(() => generateGalaxy(generateGalaxyParams))
  gui.add(generateGalaxyParams, 'size').min(0.001).max(0.1).step(0.001).onFinishChange(() => generateGalaxy(generateGalaxyParams))
  gui.add(generateGalaxyParams, 'radius').min(0.01).max(20).step(0.01).onFinishChange(() => generateGalaxy(generateGalaxyParams))
  gui.add(generateGalaxyParams, 'branches').min(1).max(30).step(1).onFinishChange(() => generateGalaxy(generateGalaxyParams))
  gui.add(generateGalaxyParams, 'spin').min(0).max(30).step(0.01).onFinishChange(() => generateGalaxy(generateGalaxyParams))
  gui.add(generateGalaxyParams, 'randomness').min(0).max(2).step(0.001).onFinishChange(() => generateGalaxy(generateGalaxyParams))
  gui.add(generateGalaxyParams, 'randomnessPower').min(0).max(10).step(0.001).onFinishChange(() => generateGalaxy(generateGalaxyParams))
  gui.addColor(generateGalaxyParams, 'innerColor').onFinishChange(() => generateGalaxy(generateGalaxyParams))
  gui.addColor(generateGalaxyParams, 'outerColor').onFinishChange(() => generateGalaxy(generateGalaxyParams))

  /**
   * Sizes
   */
   const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /**
   * Camera
   */
  // Base camera
  camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = -30;
  camera.position.y = 10;
  scene.add(camera);

  // Controls
  controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  // controls.autoRotate = true;
  controls.maxPolarAngle = Math.PI / 1.5;
  controls.minPolarAngle = Math.PI / 4;
  controls.maxDistance = 40;
  controls.minDistance = 2;
  // gui.add(controls, 'enabled').name("Orbit controls enabled")

  /**
   * Renderer
   */
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /**
   * Animate
   */

  const clock = new THREE.Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();

  function normalize (val, max, min) { return (val - min) / (max - min); }
}