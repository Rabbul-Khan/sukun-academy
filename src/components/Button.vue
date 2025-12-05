<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="!href ? type : undefined"
    :class="buttonClasses"
    class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
});

const buttonClasses = computed(() => {
  const variants = {
    primary: 'bg-leaf text-white hover:bg-leaf-dark shadow-button hover:shadow-card-hover hover:-translate-y-0.5',
    secondary: 'bg-forest text-white hover:bg-forest-dark shadow-button hover:shadow-card-hover hover:-translate-y-0.5',
    outline: 'bg-transparent text-leaf border-2 border-leaf hover:bg-leaf hover:text-white',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return `${variants[props.variant]} ${sizes[props.size]}`;
});
</script>
