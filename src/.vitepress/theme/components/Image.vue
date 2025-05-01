<template>
<div class="imgcontainer" :style="`width: ${width}; height: ${height}; margin: ${margin}; overflow: ${overflow ? 'visible' : 'hidden'}`">
  <img :src="src" :alt="alt" />
</div>
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
  width: String,
  height: String,
  margin: String,
  overflow: Boolean
})
</script>

<style>
.imgcontainer {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}
</style>