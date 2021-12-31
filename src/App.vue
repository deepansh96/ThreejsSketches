<template>
  <div v-if="onHomePage" class="flex flex-col">
    <p class="text-5xl mx-auto font-bold font-mono my-10">ThreeJS Sketches</p>
    <div class="flex flex-row space-x-4">
      <div v-for="sketch in sketchNames" :key="sketch" class="w-full flex">
        <button class="h-full mx-auto hover:shadow-2xl p-6 hover:border-4 hover:border-violet-500 rounded-xl" @click="redirectToSketch(sketch)">
          <img
            class="object-scale-down"
            :src="getThumbnailSource(sketch)"
          />
          <div id="text" class="bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col">
            <p class="text-2xl font-bold font-serif subpixel-antialiased my-4"> {{ getTitleText(sketch) }} </p>
            <p class="w-2/3 mx-auto my-4"> {{ getDescriptionText(sketch) }} </p>
          </div>
        </button>
      </div>
    </div>
  </div>
  
  <router-view v-else :key="$route.fullPath"/>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",
  data() {
    return {
      sketchNames: ["functionVisualizer", "galaxyGenerator"],
    };
  },
  computed: {
    onHomePage() {
      return this.$route.name == "App"
    },
  },
  methods: {
    redirectToSketch(sketch) {
      let routeData = this.$router.resolve({
        name: "Sketch",
        params: { canvasName: sketch },
      });
      // required for opening in a new tab
      window.open(routeData.href, "_blank");
    },
    getThumbnailSource(sketchName) {
      return require(`@/assets/thumbnails/${sketchName}.png`)
    },
    getDescriptionText(sketchName) {
      let map = {
        functionVisualizer: "Generate a surface made of thousands of particles and visualise how it morphs as different mathematical functions are applied to it",
        galaxyGenerator: "Generate beautiful rich particle galaxies and export it"
      }
      return map[sketchName]
    },
    getTitleText(sketchName) {
      let map = {
        functionVisualizer: "Math functions visualizer",
        galaxyGenerator: "Galaxy Generator"
      }
      return map[sketchName]
    }
  }
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
}
</style>
