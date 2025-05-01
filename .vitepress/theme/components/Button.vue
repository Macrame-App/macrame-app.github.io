<template>
  <a :class="`btnlink btn__${variant} !bg-red-500`" :href="href">
    <slot />
  </a>
</template>

<script setup>
defineProps({
  href: String,
  variant: String,
});
</script>

<style scoped>
.btnlink {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: 1px solid transparent;
  border-radius: 9999rem;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;
  
  &.btn__brand {
    border-color: var(--vp-button-brand-border);
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
    
    &:active {
      border-color: var(--vp-button-brand-active-border);
      color: var(--vp-button-brand-active-text);
      background-color: var(--vp-button-brand-active-bg);
    }
    
    &:hover {
      border-color: var(--vp-button-brand-hover-border);
      color: var(--vp-button-brand-hover-text);
      background-color: var(--vp-button-brand-hover-bg);
    }
  }

  &.btn__brand2 {
    border-color: var(--vp-c-sky-2);
    color: var(--vp-button-brand-text);
    background-color: var(--vp-c-sky-2);
    
    &:active {
      border-color: var(--vp-c-sky-2);
      color: var(--vp-button-brand-text);
      background-color: var(--vp-c-sky-2);
    }
    
    &:hover {
      border-color: var(--vp-c-sky-3);
      color: var(--vp-c-white-80);
      background-color: var(--vp-c-sky-3);
    }
  }
  
  
  &.btn__alt {
    border-color: var(--vp-button-alt-border);
    color: var(--vp-button-alt-text);
    background-color: var(--vp-button-alt-bg);
    
    &:active {
      border-color: var(--vp-button-alt-active-text);
      color: var(--vp-button-alt-active-text);
      background-color: var(--vp-button-alt-active-bg);
    }
    
    &:hover {
      border-color: var(--vp-button-alt-hover-border);
      color: var(--vp-button-alt-hover-text);
      background-color: var(--vp-button-alt-hover-bg);
    }
  }
  
}

</style>