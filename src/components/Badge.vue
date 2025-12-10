<template>
  <span
    class="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
    :class="variantClasses"
  >
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue';

// Props with defaults
const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'success', 'info'].includes(value),
  },
});

// Variant class mappings
const variantClasses = computed(() => {
  const variants = {
    default: 'bg-sage-mist text-evergreen',
    success: 'bg-evergreen text-white',
    info: 'bg-dark-moss text-warm-paper',
  };

  return variants[props.variant];
});
</script>
