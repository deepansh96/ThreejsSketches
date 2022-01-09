/* eslint-disable */
import * as THREE from "three";
import { loadModel } from "@/assets/utils/loadModel"
import { Vector3 } from "three";

export default function (canvasName) {
  let scene,
    camera,
    canvas,
    renderer,
    gui,
    axesHelper,
    sizes,
    cube,
    solarSystemModel,
    ambientLight,
    scrollY = 0,
    cursor = {x:0, y:0},
    mercuryModel = null,
    venusModel = null,
    earthModel = null,
    marsModel = null;

  // handle sizes
  sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // canvas
  canvas = document.querySelector(`canvas.${canvasName}`);

  // scene
  scene = new THREE.Scene();

  // camera group
  let cameraGroup = new THREE.Group()
  scene.add(cameraGroup)

  // camera
  camera = new THREE.PerspectiveCamera(
    35,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.set(0,0,3)
  cameraGroup.add(camera)

  // renderer
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // handle resize
  window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY
  })
  
  window.addEventListener("mousemove", (e) => {
    cursor.x = e.clientX / sizes.width - 0.5
    cursor.y = - e.clientY / sizes.height + 0.5
  })


  ambientLight = new THREE.AmbientLight('white', 1.8)
  scene.add(ambientLight)

  camera.lookAt(new Vector3(0, 0, 0))

  // models
  let manager = new THREE.LoadingManager();
  let solarSystemModelPromise = loadModel(manager, '/models/solarSystem/scene1.glb').then((result) => {
    solarSystemModel = result.scene.children[0]
  })
  let mercuryModelPromise = loadModel(manager, '/models/planets/mercury1/scene.gltf').then((result) => {
    mercuryModel = result.scene
  })
  let venusModelPromise = loadModel(manager, '/models/planets/venus/scene.gltf').then((result) => {
    venusModel = result.scene
  })
  let earthModelPromise = loadModel(manager, '/models/planets/earth/scene.gltf').then((result) => {
    earthModel = result.scene
  })
  let marsModelPromise = loadModel(manager, '/models/planets/mars/scene.gltf').then((result) => {
    marsModel = result.scene
  })

  Promise.all([
      solarSystemModelPromise, 
      mercuryModelPromise, 
      venusModelPromise, 
      earthModelPromise, 
      marsModelPromise
    ]).then(() => {
    solarSystemModel.rotation.z = 0.97
    scene.add(solarSystemModel)

    scene.add(mercuryModel)
    mercuryModel.position.set(-0.5, -3, -1)
    mercuryModel.scale.set(0.005, 0.005, 0.005)

    scene.add(venusModel)
    venusModel.position.set(-0.5, -6, -1)
    venusModel.scale.set(0.005, 0.005, 0.005)
    
    scene.add(earthModel)
    earthModel.position.set(-0.5, -9, -1)
    earthModel.scale.set(0.005, 0.005, 0.005)

    scene.add(marsModel)
    marsModel.position.set(-0.5, -12, -1)
    marsModel.scale.set(0.5, 0.5, 0.5)

    console.log("all done")
  })

  // animate
  const clock = new THREE.Clock();
  const animate = () => {
    const elapsedTime = clock.getElapsedTime();
    // move camera with scroll
    camera.position.y = - (scrollY * 0.003)

    // parrallax
    let parallaxX = cursor.x
    let parallaxY = cursor.y
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 0.01
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 0.01

    // rotate models
    if (mercuryModel != null) mercuryModel.rotation.y = elapsedTime * 0.5
    if (venusModel != null) venusModel.rotation.y = elapsedTime * 0.5
    if (earthModel != null) earthModel.rotation.y = elapsedTime * 0.5
    if (marsModel != null) marsModel.rotation.y = elapsedTime * 0.5

    // Render
    renderer.render(scene, camera);
    // Call tick again on the next frame
    window.requestAnimationFrame(animate);
  };
  animate();
}
