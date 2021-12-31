<template>
  <canvas :class="canvasName" class="fixed top-0 left-0 outline-0"></canvas>
</template>

<script>
/* eslint-disable */
import functionVisualizer from "@/assets/scenes/functionVisualizer.js"
import galaxyGenerator from "@/assets/scenes/galaxyGenerator.js"

export default {
  name: "Sketch",
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
    if (this.canvasName == "functionVisualizer") functionVisualizer(this.canvasName)
    else if (this.canvasName == "galaxyGenerator") galaxyGenerator(this.canvasName)

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
