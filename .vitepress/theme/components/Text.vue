<template>
  <div :class="`textcomp ${vertical ? 'vertical' : ''} ${spaced ? 'spaced' : ''} align__${align} weight__${weight} size__${size}`" :style="`color: ${color};gap: ${gap}`">
    <slot />
  </div>

</template>

<script setup>
defineProps({
  align: String,
  weight: String,
  size: String,
  color: String,
  spaced: String,
  gap: String,
  vertical: Boolean
})
</script>
<style>
.textcomp {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  &.vertical {
    flex-direction: column;
  }

  &.spaced {
    margin-top: 1.5em;
  }

  &.align__center {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  &.align__justify {
    justify-content: space-between;
    text-align: justify;
  }
  &.align__right {
    justify-content: flex-end;
    text-align: right;
  }
  &.align__left {
    justify-content: flex-start;
    text-align: left;
  }
  
  &.weight__bold {
    font-weight: bold;
  }

  &.size__small,
  &.size__sm {
    font-size: 0.75rem;
  }

  &.size__large,
  &.size__lg {
    font-size: 2rem;
  }
}
</style>