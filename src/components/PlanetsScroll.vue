<template>
  <canvas v-show="!isLoading" id="threeJsCanvas" class="top-0 left-0 outline-0 fixed"></canvas>
  <div class="fixed top-1/2 left-1/3 right-1/3" v-if="isLoading">
    <p class="text-3xl text-white mx-auto"> Loading ... </p>
    <div class="w-full bg-gray-200">
      <div
        id="loadingBar"
        class="bg-blue-600 font-medium text-center p-0.5 leading-none h-full"
        style="width: 0%"
      >
        <p class="my-auto h-full align-middle py-3 text-5xl mx-auto text-black">
          {{ this.loadingPercent + "%" }}
        </p>
      </div>
    </div>
  </div>
  <div v-if="!isLoading" class="flex flex-col z-50">
    <!-- the planets banner -->
    <div class="w-full h-60 flex relative" id="planets-banner">
      <div class="h-full bg-gray-500 w-full items-center flex">
        <p
          class="text-8xl w-full text-center bg-gray-500 font-serif text-yellow-100"
        >
          The Planets
        </p>
      </div>
      <p class="absolute right-2 bottom-2 text-gray-300 text-bold"> Tip: Scroll slowly. Move your cursor around for parallax</p>
    </div>

    <!-- solar system model placeholder -->
    <div class="w-full p-80"></div>
    <div class="w-full p-80"></div>
    <div class="w-full flex" id="mercury">
      <div
        class="w-1/2 bg-transparent rounded-xl flex flex-col ml-auto border-2 border-gray-500"
      >
        <div class="flex flex-row px-10 py-6">
          <div class="text-5xl text-white my-auto p-4 font-sans">Mercury</div>
          <div class="font-sans text-xl p-2 h-full text-white text-center">
            Mercury—the smallest planet in our solar system and closest to the
            Sun—is only slightly larger than Earth's Moon. Mercury is the
            fastest planet, zipping around the Sun every 88 Earth days.
          </div>
        </div>
        <div class="flex flex-col justify-around px-20 py-6 pb-10">
          <div class="flex flex-wrap">
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">88</p>
                <p class="my-auto text-gray-100 uppercase font-mono">
                  Earth days
                </p>
              </div>
              <p class="text-gray-500">Length of year</p>
            </div>
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">0.4</p>
                <p class="my-auto text-gray-100 uppercase font-mono">AU</p>
              </div>
              <p class="text-gray-500">Distance From Sun</p>
            </div>
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">.</p>
                <p class="my-auto text-gray-100 uppercase font-mono">
                  Roman God of Speed
                </p>
              </div>
              <p class="text-gray-500">Namesake</p>
            </div>
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">0</p>
                <p class="my-auto text-gray-100 uppercase font-mono">🌕</p>
              </div>
              <p class="text-gray-500">Moons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full p-96"></div>
    <div class="w-full flex" id="venus">
      <div
        class="w-1/2 bg-transparent rounded-xl flex flex-col ml-auto border-2 border-gray-500"
      >
        <div class="flex flex-row px-10 py-6">
          <div class="text-5xl text-white my-auto p-4 font-sans">Venus</div>
          <div class="font-sans text-xl p-2 h-full text-white text-center">
            Venus spins slowly in the opposite direction from most planets. A
            thick atmosphere traps heat in a runaway greenhouse effect, making
            it the hottest planet in our solar system.
          </div>
        </div>
        <div class="flex flex-col justify-around px-20 py-6 pb-10">
          <div class="flex flex-wrap">
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">255</p>
                <p class="my-auto text-gray-100 uppercase font-mono">
                  Earth days
                </p>
              </div>
              <p class="text-gray-500">Length of year</p>
            </div>
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">0.7</p>
                <p class="my-auto text-gray-100 uppercase font-mono">AU</p>
              </div>
              <p class="text-gray-500">Distance From Sun</p>
            </div>
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">.</p>
                <p class="my-auto text-gray-100 uppercase font-mono">
                  ROMAN GODDESS OF LOVE
                </p>
              </div>
              <p class="text-gray-500">Namesake</p>
            </div>
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">0</p>
                <p class="my-auto text-gray-100 uppercase font-mono">🌕</p>
              </div>
              <p class="text-gray-500">Moons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full p-96"></div>
    <div class="w-full flex" id="earth">
      <div
        class="w-1/2 bg-transparent rounded-xl flex flex-col ml-auto border-2 border-gray-500"
      >
        <div class="flex flex-row px-10 py-6">
          <div class="text-5xl text-white my-auto p-4 font-sans">Earth</div>
          <div class="font-sans text-xl p-2 h-full text-white text-center">
            Earth—our home planet—is the only place we know of so far that’s
            inhabited by living things. It's also the only planet in our solar
            system with liquid water on the surface.
          </div>
        </div>
        <div class="flex flex-col justify-around px-20 py-6 pb-10">
          <div class="flex flex-wrap">
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">365.25</p>
                <p class="my-auto text-gray-100 uppercase font-mono">Days</p>
              </div>
              <p class="text-gray-500">Length of year</p>
            </div>
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">1</p>
                <p class="my-auto text-gray-100 uppercase font-mono">AU</p>
              </div>
              <p class="text-gray-500">Distance From Sun</p>
            </div>
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">.</p>
                <p class="my-auto text-gray-100 uppercase font-mono">
                  VARIATION OF "THE GROUND" IN MANY LANGUAGES
                </p>
              </div>
              <p class="text-gray-500">Namesake</p>
            </div>
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">1</p>
                <p class="my-auto text-gray-100 uppercase font-mono">🌕</p>
              </div>
              <p class="text-gray-500">Moons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full p-96"></div>
    <div class="w-full flex" id="mars">
      <div
        class="w-1/2 bg-transparent rounded-xl flex flex-col ml-auto border-2 border-gray-500"
      >
        <div class="flex flex-row px-10 py-6">
          <div class="text-5xl text-white my-auto p-4 font-sans">Mars</div>
          <div class="font-sans text-xl p-2 h-full text-white text-center">
            Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.
          </div>
        </div>
        <div class="flex flex-col justify-around px-20 py-6 pb-10">
          <div class="flex flex-wrap">
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">1.88</p>
                <p class="my-auto text-gray-100 uppercase font-mono">
                  Earth years
                </p>
              </div>
              <p class="text-gray-500">Length of year</p>
            </div>
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">1.5</p>
                <p class="my-auto text-gray-100 uppercase font-mono">AU</p>
              </div>
              <p class="text-gray-500">Distance From Sun</p>
            </div>
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">.</p>
                <p class="my-auto text-gray-100 uppercase font-mono">
                  Roman God of War
                </p>
              </div>
              <p class="text-gray-500">Namesake</p>
            </div>
            <div class="w-1/2 flex flex-col divide-y-2 divide-red-200 p-1">
              <div class="flex flex-row space-x-4">
                <p class="text-blue-500 text-3xl">2</p>
                <p class="my-auto text-gray-100 uppercase font-mono">🌕</p>
              </div>
              <p class="text-gray-500">Moons</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full p-96"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import { loadModel } from "@/assets/utils/loadModel";
import { Vector3 } from "three";

let scene = null;
let camera = null;
let canvas = null;
let renderer = null;
let solarSystemModel = null;
let ambientLight = null;
let mercuryModel = null;
let venusModel = null;
let earthModel = null;
let marsModel = null;
let manager = null;
let cameraGroup = null;
let fov = 35;
let near = 0.1;
let far = 100;
let clock = new THREE.Clock();

export default {
  data() {
    return {
      isLoading: false,
      gui: null,
      axesHelper: null,
      sizes: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      scrollY: 0,
      cursor: {
        x: 0,
        y: 0,
      },
      loadingOffset: 0,
      loaded: 0,
      totalToLoad: 20,
    };
  },
  methods: {
    init: async function () {
      let modelLoadResult = null;

      canvas = document.querySelector("#threeJsCanvas");

      scene = new THREE.Scene();

      cameraGroup = new THREE.Group();
      scene.add(cameraGroup);

      // camera
      camera = new THREE.PerspectiveCamera(
        fov,
        window.innerWidth / window.innerHeight,
        near,
        far
      );
      camera.position.set(0, 0, 3);
      camera.lookAt(new Vector3(0, 0, 0));
      cameraGroup.add(camera);
      // renderer
      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
      });
      renderer.setSize(this.sizes.width, this.sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // lights
      ambientLight = new THREE.AmbientLight("white", 1.8);
      scene.add(ambientLight);

      // models
      this.initLoadingManager();

      // solar system
      modelLoadResult = await this.loadModel(
        manager,
        "/models/solarSystem/scene1.glb"
      );
      solarSystemModel = modelLoadResult.scene.children[0];
      solarSystemModel.rotation.z = 0.97;
      scene.add(solarSystemModel);

      // mercury
      let mercuryLoadResult = await this.loadModel(
        manager,
        "/models/planets/mercury1/scene.gltf"
      );
      mercuryModel = mercuryLoadResult.scene;
      mercuryModel.position.set(-0.5, -3.2, -1);
      mercuryModel.scale.set(0.005, 0.005, 0.005);
      scene.add(mercuryModel);

      // venus
      modelLoadResult = await this.loadModel(
        manager,
        "/models/planets/venus/scene.gltf"
      );
      venusModel = modelLoadResult.scene;
      venusModel.position.set(-0.5, -6.2, -1);
      venusModel.scale.set(0.005, 0.005, 0.005);
      scene.add(venusModel);

      // earth
      modelLoadResult = await this.loadModel(
        manager,
        "/models/planets/earth/scene.gltf"
      );
      earthModel = modelLoadResult.scene;
      earthModel.position.set(-0.5, -9.2, -1);
      earthModel.scale.set(0.005, 0.005, 0.005);
      scene.add(earthModel);

      // mars
      modelLoadResult = await this.loadModel(
        manager,
        "/models/planets/mars/scene.gltf"
      );
      marsModel = modelLoadResult.scene;
      marsModel.position.set(-0.5, -12.2, -1);
      marsModel.scale.set(0.5, 0.5, 0.5);
      scene.add(marsModel);

      console.log("all done");
    },
    animate() {
      const elapsedTime = clock.getElapsedTime();

      // move camera with scroll
      camera.position.y = -(this.scrollY * 0.003);

      // parrallax
      let parallaxX = this.cursor.x;
      let parallaxY = this.cursor.y;
      cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 0.01;
      cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 0.01;

      // rotate models
      if (mercuryModel != null) mercuryModel.rotation.y = elapsedTime * 0.5;
      if (venusModel != null) venusModel.rotation.y = - elapsedTime * 0.5;
      if (earthModel != null) earthModel.rotation.y = elapsedTime * 0.5;
      if (marsModel != null) marsModel.rotation.y = elapsedTime * 0.5;

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(this.animate);
    },
    handleResize() {
      this.sizes.width = window.innerWidth;
      this.sizes.height = window.innerHeight;

      if (camera != null) {
        camera.aspect = this.aspectRatio;
        camera.updateProjectionMatrix();
      }

      if (renderer != null) {
        renderer.setSize(this.sizes.width, this.sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }
    },
    recordScroll() {
      this.scrollY = window.scrollY;
    },
    recordCursor(e) {
      this.cursor.x = e.clientX / this.sizes.width - 0.5;
      this.cursor.y = -e.clientY / this.sizes.height + 0.5;
    },
    initLoadingManager() {
      manager = new THREE.LoadingManager();
      manager.onStart = () => {
        this.isLoading = true;
      };
      manager.onProgress = (_, loaded, total) => {
        if (loaded > this.loaded) this.loaded = loaded
        document.querySelector(
          "#loadingBar"
        ).style.width = `${this.loadingPercent}%`;
      };
      manager.onLoad = () => {
        this.isLoading = false;
      };
    },
    loadModel: loadModel,
  },
  async mounted() {
    window.addEventListener("resize", () => this.handleResize());
    window.addEventListener("scroll", () => this.recordScroll());
    window.addEventListener("mousemove", (event) => this.recordCursor(event));

    await this.init();
    this.animate();
  },
  unmounted() {
    window.removeEventListener("resize", () => this.handleResize());
    window.removeEventListener("scroll", () => this.recordScroll());
    window.removeEventListener("mousemove", (event) =>
      this.recordCursor(event)
    );
  },
  computed: {
    aspectRatio() {
      return this.sizes.width / this.sizes.height;
    },
    loadingPercent() {
      return Math.floor((this.loaded / this.totalToLoad) * 100);
    },
  },
};
</script>
<style>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

* {
  margin: 0;
  padding: 0;
}

html,
body {
  overflow: visible;
  background: #1e1a20;
}

/* html {
  overflow: visible;
  background: '#1e1a20';
} */
</style>
