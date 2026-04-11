<template>
  <div class="min-h-screen bg-veryDarkBlue flex flex-col items-center justify-center px-6 relative overflow-hidden">

    <!-- Subtle dot grid -->
    <div class="absolute inset-0 pointer-events-none opacity-30"
      style="background-image: radial-gradient(circle, #394351 1px, transparent 1px); background-size: 28px 28px;"></div>

    <!-- Faint glow -->
    <div class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse 55% 40% at 50% 60%, rgba(158,92,247,0.07) 0%, transparent 70%)"></div>

    <!-- Top hairline -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
      style="background: linear-gradient(90deg, transparent, rgba(158,92,247,0.4), transparent)"></div>

    <div class="relative text-center max-w-md">

      <!-- 404 numeral -->
      <p class="text-[10px] tracking-[0.3em] uppercase font-mono text-slateDark mb-6">Error 404</p>
      <h1 class="text-8xl font-bold text-almostWhite mb-4 tabular-nums" style="letter-spacing: -0.04em;">404</h1>
      <p class="text-sm text-slate mb-10 leading-relaxed">
        This page doesn't exist or was moved.<br/>Let's get you back on track.
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-almostWhite rounded transition-all duration-200"
          style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF); box-shadow: 0 0 20px rgba(158,92,247,0.3);"
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M11 6.5H2M6 2.5L2 6.5l4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back to home
        </NuxtLink>
        <NuxtLink
          to="/documentation"
          class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate hover:text-almostWhite border border-lightBlack hover:border-slateDark rounded transition-all duration-200"
        >
          Documentation
        </NuxtLink>
      </div>

      <!-- Subtle quick links -->
      <div class="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <span class="text-[10px] text-slateDark uppercase tracking-widest">Quick links</span>
        <NuxtLink v-for="link in quickLinks" :key="link.label" :to="link.href"
          class="text-xs text-slateDark hover:text-slate transition-colors duration-150">
          {{ link.label }}
        </NuxtLink>
      </div>

    </div>

    <!-- Bottom hairline -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px"
      style="background: linear-gradient(90deg, transparent, rgba(43,194,255,0.25), transparent)"></div>

  </div>
</template>

<script setup>
useHead({ title: '404 — Page Not Found · Scourge' })

const quickLinks = [
  { label: 'Pricing',       href: '/pricing' },
  { label: 'Blog',          href: '/blog' },
  { label: 'Community',     href: '/community' },
  { label: 'Contact',       href: '/contact' },
]
</script>
