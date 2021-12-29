<template>
  <canvas :class="canvasName" class="fixed top-0 left-0 outline-0"></canvas>
</template>

<script>
/* eslint-disable */
import renderScene from "@/assets/scenes/functionVisualizer.js"

export default {
  name: "Sketch",
  props: {
    canvasName: {
      type: String,
      default: "",
    },
  },
  mounted() {
    renderScene(this.canvasName)
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
