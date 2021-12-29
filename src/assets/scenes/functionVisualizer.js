/* eslint-disable */
import * as THREE from "three";
import { OrbitControls } from "@/../node_modules/three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";
import { RectAreaLightUniformsLib } from "@/../node_modules/three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { RectAreaLightHelper } from "@/../node_modules/three/examples/jsm/helpers/RectAreaLightHelper.js";
import gsap from "gsap";

var clonedeep = require("lodash.clonedeep");

let particleTextureImage = require("@/assets/textures/particles/1.png");

export default function (canvasName) {
  let gui,
    canvas,
    scene,
    axesHelper,
    loadingManager,
    textureLoader,
    particleTexture,
    rectLight;

  // Debug
  gui = new dat.GUI({ width: 400 });

  // Canvas
  canvas = document.querySelector(`canvas.${canvasName}`);

  // Scene
  scene = new THREE.Scene();

  RectAreaLightUniformsLib.init();

  // Axes Helper
  axesHelper = new THREE.AxesHelper(5);
  // scene.add(axesHelper);

  /**
   * Textures
   */
  loadingManager = new THREE.LoadingManager();
  textureLoader = new THREE.TextureLoader(loadingManager);

  particleTexture = textureLoader.load(particleTextureImage);

  /**
   * geometries with points
   */
  let particlePositions = null;
  let particleColors = null;
  let particlesGeometry = null;
  let particlesMaterial = null;
  let sparsedPoints = null;
  let functionMap = {
    "cos(x)": Math.cos,
    "sin(x)": Math.sin,
    "tan(x)": Math.tan,
    "log(x)": Math.log,
    "log2(x)": Math.log2,
    "log10(x)": Math.log10,
    "2cos(x)": (x) => {
      return 2 * Math.cos(x);
    },
    "4cos(x)": (x) => {
      return 4 * Math.cos(x);
    },
    "8cos(x)": (x) => {
      return 8 * Math.cos(x);
    },
    "cos(2x)": (x) => {
      return Math.cos(x * 2)
    },
    "cos(4x)": (x) => {
      return Math.cos(x * 4)
    },
    "cosh(x)": Math.cosh,
    "sinh(x)": Math.sinh
  };
  // Math.
  let constructGeometryParams = {
    numberOfParticlesOnOneSide: 200,
    startCoordinate: -30,
    endCoordinate: 30,
    particleSize: 0.4,
    particleColor: new THREE.Color("#8988d8"),
    function: "cos(4x)",
  };

  let constructGeometry = (constructGeometryParams) => {
    if (particlePositions != null && particlesMaterial != null) {
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.remove(sparsedPoints);
    }

    let count = Math.pow(constructGeometryParams.numberOfParticlesOnOneSide, 2);
    let planeStart = constructGeometryParams.startCoordinate;
    let planeEnd = constructGeometryParams.endCoordinate;
    let gap = (planeEnd - planeStart) / Math.sqrt(count);
    let lengthOfSide = Math.sqrt(count);

    particlePositions = new Float32Array(count * 3);
    particleColors = new Float32Array(count * 3);

    let xValue = planeStart;
    let zValue = planeStart;
    let x = 0;
    let y = 1;
    let z = 2;
    // looping over all the particles
    // going row by row, and updating/setting the position and color
    // of each particle
    // console.log("outside loop")
    for (let i = 0; i < lengthOfSide; i++) {
      // console.log("inside 1st loop")
      for (let j = 0; j < lengthOfSide; j++) {
        // console.log("inside 2nd loop")
        // update x,y,z co-ordinates of the current particle
        particlePositions[x] = xValue;
        particlePositions[z] = zValue;
        particlePositions[y] = 0;

        // update color value for the current particle
        particleColors[x] = Math.random();
        particleColors[z] = Math.random();
        particleColors[y] = Math.random();

        // jump to the next element
        x += 3;
        z += 3;
        y += 3;
        xValue += gap;
      }
      zValue += gap;
      xValue = planeStart;
    }

    particlesGeometry = new THREE.BufferGeometry();

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    );

    particlesMaterial = new THREE.PointsMaterial({
      size: constructGeometryParams.particleSize,
      sizeAttenuation: true,
      transparent: true,
      alphaMap: particleTexture,
      color: constructGeometryParams.particleColor,
    });

    // particlesMaterial.alphaTest = 0.001;
    // particlesMaterial.depthTest = false
    particlesMaterial.depthWrite = false;
    particlesMaterial.blending = THREE.AdditiveBlending;
    // particlesMaterial.vertexColors = true;

    sparsedPoints = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(sparsedPoints);
  };

  constructGeometry(constructGeometryParams);
  transformPlane(functionMap[constructGeometryParams.function]);

  gui
    .add(constructGeometryParams, "numberOfParticlesOnOneSide")
    .name("Number of particles along a side")
    .min(0)
    .max(200)
    .step(1)
    .onFinishChange((e) => {
      constructGeometry(constructGeometryParams);
      transformPlane(functionMap[constructGeometryParams.function])
    });

  gui
    .add(constructGeometryParams, "startCoordinate")
    .name("Geometry start-point")
    .min(-30)
    .max(30)
    .step(1)
    .onFinishChange((e) => {
      constructGeometry(constructGeometryParams);
      transformPlane(functionMap[constructGeometryParams.function])
    });
  gui
    .add(constructGeometryParams, "endCoordinate")
    .name("Geometry end-point")
    .min(-30)
    .max(30)
    .step(1)
    .onFinishChange((e) => {
      constructGeometry(constructGeometryParams)
      transformPlane(functionMap[constructGeometryParams.function])
    });
  gui
    .add(constructGeometryParams, "particleSize")
    .name("Size of each particle")
    .min(0)
    .max(1)
    .step(0.0001)
    .onFinishChange((e) => {
      particlesMaterial.size = e;
    });
  gui
    .addColor(constructGeometryParams, "particleColor")
    .name("Color of the particle")
    .onFinishChange((e) => {
      particlesMaterial.color = e;
    });
    // Math.
  gui
    .add(constructGeometryParams, "function", [
      "cos(x)",
      "sin(x)",
      "tan(x)",
      "log(x)",
      "log2(x)",
      "log10(x)",
      "2cos(x)",
      "4cos(x)",
      "8cos(x)",
      "cos(2x)",
      "cos(4x)",
      "cosh(x)",
      "sinh(x)",
    ])
    .name("Function type")
    .onFinishChange((e) => {
      transformPlane(functionMap[e]);
    });

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

  function unrolledIndex(x, z) {
    return z * constructGeometryParams.numberOfParticlesOnOneSide + x;
  }

  function transformPlane(filterFunction) {
    let arrayClone = clonedeep(particlesGeometry.attributes.position.array);
    let leftP = 0;
    let rightP = constructGeometryParams.numberOfParticlesOnOneSide - 1;
    let height = 0;
    while (leftP <= rightP) {
      let displacement = filterFunction(height);
      for (let x = leftP; x <= rightP; x++) {
        arrayClone[3 * unrolledIndex(x, leftP) + 1] = displacement;
        arrayClone[3 * unrolledIndex(x, rightP) + 1] = displacement;
      }

      for (let z = leftP; z <= rightP; z++) {
        arrayClone[3 * unrolledIndex(leftP, z) + 1] = displacement;
        arrayClone[3 * unrolledIndex(rightP, z) + 1] = displacement;
      }

      height += 0.1;
      leftP++;
      rightP--;
    }

    gsap.to(particlesGeometry.attributes.position.array, {
      endArray: arrayClone,
      duration: 1,
      onUpdate() {
        particlesGeometry.attributes.position.needsUpdate = true;
      },
    });
  }

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = -30;
  camera.position.y = 10;
  scene.add(camera);

  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.autoRotate = true;
  controls.maxPolarAngle = Math.PI / 1.5;
  controls.minPolarAngle = Math.PI / 4;
  controls.maxDistance = 40;
  controls.minDistance = 2;
  // gui.add(controls, 'enabled').name("Orbit controls enabled")

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
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
}
