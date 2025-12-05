<template>
  <span
    class="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
    :class="variantClasses"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'default' | 'success' | 'info';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
});

const variantClasses = computed(() => {
  const variants = {
    default: 'bg-mint text-forest',
    success: 'bg-leaf text-white',
    info: 'bg-forest text-white',
  };

  return variants[props.variant];
});
</script>
