<template>
  <footer class="bg-evergreen text-white/90 mt-16">
    <div class="container-custom py-12">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Brand Section -->
        <div class="lg:col-span-2">
          <h3 class="text-white text-2xl font-bold mb-3 flex items-center gap-2">
            <span>Sukun Regenerative Culture</span>
          </h3>
          <p class="text-white/80 mb-4 leading-relaxed">
            Building a sustainable future through living education, regenerative farming, and community stewardship.
          </p>
          <p class="text-sm text-white/70">
            Ecological & Cultural Regeneration
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-white/80 hover:text-sage-mist transition-colors text-sm"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-white font-semibold mb-4">Connect</h4>
          <ul class="space-y-2 text-sm text-white/80">
            <li>
              <a href="mailto:heartssee2021@gmail.com" class="hover:text-sage-mist transition-colors">
                📧 Email Us
              </a>
            </li>
            <li>
              <a href="https://wa.me/8801766023151" class="hover:text-sage-mist transition-colors" target="_blank" rel="noopener">
                💬 WhatsApp
              </a>
            </li>
            <li class="pt-2">
              📍 Sylhet Region, Bangladesh
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/10 text-center text-sm text-white/70">
        <p>&copy; 2025 Sukun Regenerative Culture. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact' },
];
</script>
