<template>
  <div
    class="bg-card-bg rounded-xl p-6 border border-transparent shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    :class="className"
  >
    <slot />
  </div>
</template>

<script setup>
// Props with defaults
defineProps({
  className: {
    type: String,
    default: '',
  },
});
</script>
