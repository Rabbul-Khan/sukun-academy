<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="fullHref"
    :type="!href ? type : undefined"
    :class="buttonClasses"
    class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue';

// Props with defaults and validators
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  href: {
    type: String,
    default: undefined,
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value),
  },
  baseUrl: {
    type: String,
    default: '/',
  },
});

// Compute full href for internal/external links
const fullHref = computed(() => {
  if (!props.href) return undefined;
  // If it's an external link or already has base, return as is
  if (props.href.startsWith('http') || props.href.startsWith(props.baseUrl)) {
    return props.href;
  }
  // For internal links, prepend baseUrl
  const path = props.href.startsWith('/') ? props.href.slice(1) : props.href;
  return `${props.baseUrl}/${path}`;
});

// Variant and size class mappings
const buttonClasses = computed(() => {
  const variants = {
    primary: 'bg-living-soil text-white shadow-button hover:bg-living-soil-dark hover:shadow-card-hover hover:-translate-y-0.5 focus:ring-living-soil focus:ring-offset-warm-paper',
    secondary: 'bg-transparent text-evergreen border-2 border-evergreen hover:bg-evergreen hover:text-warm-paper hover:-translate-y-0.5 focus:ring-evergreen focus:ring-offset-warm-paper',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-evergreen hover:-translate-y-0.5 focus:ring-white focus:ring-offset-evergreen',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return `${variants[props.variant]} ${sizes[props.size]}`;
});
</script>
