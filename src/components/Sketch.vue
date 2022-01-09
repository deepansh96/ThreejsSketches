<template>
  <canvas :class="canvasName" class="fixed top-0 left-0 outline-0"></canvas>
  <button 
    id="export" 
    class="w-40 h-10 z-50 border-b-2 border-r-2 border-gray-500 bg-white top-10 fixed left-10"
    v-if="canvasName != 'planetScroll'"
  >
    <p class="text-2xl font-bold">Export</p>
  </button>
  <button 
    id="reset" 
    class="w-40 h-10 z-50 border-b-2 border-r-2 border-gray-500 bg-white top-10 fixed left-10"
    v-if="canvasName == 'risingPlatforms'"
  >
    <p class="text-2xl font-bold">Reset</p>
  </button>
  <PlanetsScroll v-if="canvasName == 'planetScroll'"></PlanetsScroll>
</template>

<script>
/* eslint-disable */
import functionVisualizer from "@/assets/scenes/functionVisualizer.js"
import galaxyGenerator from "@/assets/scenes/galaxyGenerator.js"
import risingPlatforms from "@/assets/scenes/risingPlatforms.js"
import planetScroll from "@/assets/scenes/planetScroll.js"

import PlanetsScroll from "@/components/PlanetsScroll.vue"

export default {
  name: "Sketch",
  components: {
    PlanetsScroll,
  },
  props: {
    canvasName: {
      type: String,
      default: "",
    },
  },
  computed: {
    isTouchScreen() {
      return window.matchMedia("(any-pointer: coarse)").matches;
    }
  },
  mounted() {
    if (this.canvasName == "planetScroll") {
      document.documentElement.style.overflow = 'visible'
      document.documentElement.style.background = '#1e1a20'
      document.body.style.overflow = 'visible'

      planetScroll(this.canvasName)
    }
    else if (this.canvasName == "functionVisualizer") functionVisualizer(this.canvasName)
    else if (this.canvasName == "galaxyGenerator") galaxyGenerator(this.canvasName)
    else if (this.canvasName == "risingPlatforms") risingPlatforms(this.canvasName)

    let guiPanel = document.querySelector('.lil-gui')
    if(guiPanel != undefined) {
      if (this.isTouchScreen) {
        guiPanel.classList.add('closed')
        guiPanel.style.width = '300px'
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body
{
  overflow: hidden;
}
</style>
