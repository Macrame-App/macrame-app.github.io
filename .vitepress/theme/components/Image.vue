<template>
<div class="imgcontainer" :style="`width: ${width}; height: ${height}; margin: ${margin};`">
  <img v-if="bgSrc" :src="bgSrc" class="imgcontainer__bg" role="presentation" />
  <img :src="src" :alt="alt" />
</div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  src: String,
  bgSrc: String,
  alt: String,
  width: String,
  height: String,
  margin: String,
  overflow: Boolean
})

onMounted(() => {
  console.log(props.bgSrc)
})
</script>

<style>
.imgcontainer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  /* isolation: isolate; */
  z-index: 0;

  .imgcontainer__bg {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    min-width: 640px;
    width: 100vw;
    max-width: 1920px;
    max-height: 200%;
    height: auto;
    z-index: -1;
    pointer-events: none;
  }

  img {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    z-index: 1;
  }
}
</style>