<template>
  <footer class="bg-black border-t border-white/10">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">

      <!-- Top: logo + columns -->
      <div class="grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-16">

        <!-- Logo -->
        <div class="col-span-2 md:col-span-1">
          <NuxtLink to="/" class="inline-flex items-center">
            <!-- Simple diamond-style mark, swap for your real SVG logo -->
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2L26 14L14 26L2 14L14 2Z" stroke="white" stroke-width="1.5" fill="none"/>
              <path d="M14 8L20 14L14 20L8 14L14 8Z" fill="white"/>
            </svg>
          </NuxtLink>
        </div>

        <!-- Product -->
        <div class="col-span-1">
          <h3 class="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-5">Product</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.product" :key="link.label">
              <a :href="link.href" class="text-sm text-white/50 hover:text-white transition-colors duration-150">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Features -->
        <div class="col-span-1">
          <h3 class="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-5">Features</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.features" :key="link.label">
              <a :href="link.href" class="text-sm text-white/50 hover:text-white transition-colors duration-150">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="col-span-1">
          <h3 class="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-5">Company</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.company" :key="link.label">
              <a :href="link.href" class="text-sm text-white/50 hover:text-white transition-colors duration-150">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="col-span-1">
          <h3 class="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-5">Resources</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.resources" :key="link.label">
              <a :href="link.href" class="text-sm text-white/50 hover:text-white transition-colors duration-150">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div class="col-span-1">
          <h3 class="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-5">Connect</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.connect" :key="link.label">
              <a :href="link.href" class="text-sm text-white/50 hover:text-white transition-colors duration-150">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-white/30">
          &copy; {{ new Date().getFullYear() }} Scourge, Inc. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-xs text-white/30 hover:text-white/70 transition-colors">Privacy</a>
          <a href="#" class="text-xs text-white/30 hover:text-white/70 transition-colors">Terms</a>
          <a href="#" class="text-xs text-white/30 hover:text-white/70 transition-colors">Cookies</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
const footerLinks = {
  product: [
    { label: 'Intake', href: '#' },
    { label: 'Plan', href: '#' },
    { label: 'Build', href: '#' },
    { label: 'Diffs', href: '#' },
    { label: 'Monitor', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Security', href: '#' },
  ],
  features: [
    { label: 'Asks', href: '#' },
    { label: 'Agents', href: '#' },
    { label: 'Customer Requests', href: '#' },
    { label: 'Insights', href: '#' },
    { label: 'Mobile', href: '#' },
    { label: 'Integrations', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Customers', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Method', href: '#' },
    { label: 'Quality', href: '#' },
    { label: 'Brand', href: '#' },
  ],
  resources: [
    { label: 'Switch', href: '#' },
    { label: 'Download', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Developers', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Enterprise', href: '#' },
    { label: 'Startups', href: '#' },
  ],
  connect: [
    { label: 'Contact us', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'X (Twitter)', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
}
</script>
