<template>
  <footer class="bg-almostBlack border-t border-lightBlack">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">

      <!-- Top: logo + columns -->
      <div class="grid grid-cols-2 md:grid-cols-6 gap-10 lg:gap-16">

        <!-- Logo -->
        <div class="col-span-2 md:col-span-1">
          <NuxtLink to="/" class="inline-flex items-center gap-2 group">
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2L26 14L14 26L2 14L14 2Z" stroke="#9BA6B2" stroke-width="1.5" fill="none" class="group-hover:stroke-almostWhite transition-colors duration-200"/>
              <path d="M14 8L20 14L14 20L8 14L14 8Z" fill="#9E5CF7"/>
            </svg>
            <span class="text-sm font-semibold text-slate group-hover:text-almostWhite transition-colors duration-200">Scourge</span>
          </NuxtLink>
        </div>

        <!-- Product -->
        <div class="col-span-1">
          <h3 class="text-[10px] font-semibold tracking-widest uppercase text-slateDark mb-5">Product</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.product" :key="link.label">
              <a :href="link.href" class="text-sm text-slate hover:text-almostWhite transition-colors duration-150">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>


        <!-- Company -->
        <div class="col-span-1">
          <h3 class="text-[10px] font-semibold tracking-widest uppercase text-slateDark mb-5">Company</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.company" :key="link.label">
              <a :href="link.href" class="text-sm text-slate hover:text-almostWhite transition-colors duration-150">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="col-span-1">
          <h3 class="text-[10px] font-semibold tracking-widest uppercase text-slateDark mb-5">Resources</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.resources" :key="link.label">
              <a :href="link.href" class="text-sm text-slate hover:text-almostWhite transition-colors duration-150">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div class="col-span-1">
          <h3 class="text-[10px] font-semibold tracking-widest uppercase text-slateDark mb-5">Connect</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks.connect" :key="link.label">
              <a :href="link.href" class="text-sm text-slate hover:text-almostWhite transition-colors duration-150">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="mt-16 pt-8 border-t border-lightBlack flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-slateDark">
          &copy; {{ new Date().getFullYear() }} Scourge, Inc. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="/privacy" class="text-xs text-slateDark hover:text-slate transition-colors duration-150">Privacy</a>
          <a href="/terms" class="text-xs text-slateDark hover:text-slate transition-colors duration-150">Terms</a>
          <a href="/cookies" class="text-xs text-slateDark hover:text-slate transition-colors duration-150">Cookies</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
const footerLinks = {
  product: [
    { label: 'Agents',        href: '/agents' },
    { label: 'Integrations',  href: '/integrations' },
    { label: 'Pricing',       href: '/pricing' },
    { label: 'Security',      href: '/security' },
    { label: 'Download',      href: '/download' },
  ],
  // features: [
  //   { label: 'Project Management', href: '/#products' },
  //   { label: 'Team Collaboration', href: '/#products' },
  //   { label: 'Analytics',          href: '/#products' },
  //   { label: 'Automations',        href: '/#products' },
  //   { label: 'Smart Documents',    href: '/#products' },
  // ],
  company: [
    { label: 'Blog',      href: '/blog' },
    // { label: 'Careers',   href: '/careers' },
    { label: 'Contact',   href: '/contact' },
  ],
  resources: [
    { label: 'Documentation', href: '/documentation' },
    // { label: 'Community',     href: '/community' },
    // { label: 'Changelog',     href: '/changelog' },
    // { label: 'Status',        href: '/status' },
  ],
  connect: [
    { label: 'X (Twitter)',   href: 'https://twitter.com' },
    { label: 'GitHub',        href: 'https://github.com' },
    // { label: 'Discord',       href: 'https://discord.com' },
    // { label: 'YouTube',       href: 'https://youtube.com' },
  ],
}
</script>
