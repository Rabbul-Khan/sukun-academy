<template>
  <nav class="fixed top-0 left-0 right-0 backdrop-blur-md bg-green-900/80  z-50">
    <div class="container-custom">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2 text-white font-bold text-lg md:text-xl hover:text-mint-light transition-colors drop-shadow-lg">
          <span>🌿</span>
          <span>Sukun Academy</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-white hover:text-mint-light  transition-colors drop-shadow"
          >
            {{ link.label }}
          </a>
          <!-- <a
            href="/get-involved"
            class="bg-white text-forest px-5 py-2.5 rounded-full font-semibold hover:bg-mint-light transition-all shadow-lg hover:shadow-xl"
          >
            Get Involved
          </a> -->
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 text-white hover:text-mint-light transition-colors drop-shadow"
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="isMenuOpen"
        class="md:hidden pb-4 border-t border-white/20 mt-2 pt-4 space-y-3 bg-white/10 backdrop-blur-md -mx-4 px-4"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="block text-white hover:text-mint-light font-medium transition-colors py-2"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a
          href="/get-involved"
          class="block bg-white text-forest px-4 py-2 rounded-full font-semibold hover:bg-mint-light transition-colors text-center"
          @click="closeMenu"
        >
          Get Involved
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
  {label: 'Get Involved', href: '/get-involved'}
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>
