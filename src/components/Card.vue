<template>
  <div
    class="bg-white rounded-2xl p-6 border border-mint/40 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    :class="className"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  className?: string;
}

withDefaults(defineProps<Props>(), {
  className: '',
});
</script>
