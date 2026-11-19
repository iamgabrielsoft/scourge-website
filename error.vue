<template>
  <div class="min-h-screen bg-veryDarkBlue flex flex-col relative overflow-hidden">

    <!-- Dot grid -->
    <div
      class="absolute inset-0 pointer-events-none opacity-30"
      style="background-image: radial-gradient(circle, #394351 1px, transparent 1px); background-size: 28px 28px;"
    />

    <!-- Ambient glow -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse 55% 40% at 50% 55%, rgba(158,92,247,0.08) 0%, transparent 70%)"
    />

    <!-- Top hairline -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px pointer-events-none"
      style="background: linear-gradient(90deg, transparent, rgba(158,92,247,0.45), rgba(43,194,255,0.35), transparent)"
    />

    <!-- Minimal brand bar -->
    <header class="relative z-10 flex items-center justify-between px-6 lg:px-8 h-16">
      <NuxtLink to="/" class="flex items-center gap-2.5" @click="handleClear">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2L22 7.5V16.5L12 22L2 16.5V7.5L12 2Z"
            style="fill: rgba(158,92,247,0.15); stroke: #9E5CF7; stroke-width: 1.2"
          />
          <path
            d="M12 6L18 9.5V16.5L12 20L6 16.5V9.5L12 6Z"
            style="fill: rgba(43,194,255,0.12); stroke: #2BC2FF; stroke-width: 1"
            opacity="0.8"
          />
          <circle cx="12" cy="12" r="2" fill="#9E5CF7" />
        </svg>
        <span class="text-base font-bold text-almostWhite tracking-tight">Scourge</span>
      </NuxtLink>
      <a
        :href="appUrl"
        class="text-sm font-medium text-slate hover:text-almostWhite transition-colors duration-200"
      >
        Log in
      </a>
    </header>

    <main class="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-24">
      <div class="text-center max-w-md">

        <p class="text-[10px] tracking-[0.3em] uppercase font-mono text-slateDark mb-6">
          Error {{ statusCode }}
        </p>

        <h1
          class="text-8xl font-bold text-almostWhite mb-4 tabular-nums"
          style="letter-spacing: -0.04em;"
        >
          {{ statusCode }}
        </h1>

        <h2 class="text-xl font-semibold text-almostWhite mb-3">
          {{ headline }}
        </h2>

        <p class="text-sm text-slate mb-10 leading-relaxed">
          {{ description }}
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-almostWhite rounded transition-all duration-200 hover:-translate-y-px"
            style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF); box-shadow: 0 0 20px rgba(158,92,247,0.3);"
            @click="handleClear"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path
                d="M11 6.5H2M6 2.5L2 6.5l4 4"
                stroke="currentColor"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Back to home
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate hover:text-almostWhite border border-lightBlack hover:border-slateDark rounded transition-all duration-200"
            @click="handleClear"
          >
            Contact support
          </NuxtLink>
        </div>

        <div class="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span class="text-[10px] text-slateDark uppercase tracking-widest">Quick links</span>
          <NuxtLink
            v-for="link in quickLinks"
            :key="link.label"
            :to="link.href"
            class="text-xs text-slateDark hover:text-slate transition-colors duration-150"
            @click="handleClear"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </main>

    <!-- Bottom hairline -->
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px pointer-events-none"
      style="background: linear-gradient(90deg, transparent, rgba(43,194,255,0.25), transparent)"
    />
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const config = useRuntimeConfig()
const appUrl = config.public.appUrl as string

const statusCode = computed(() => props.error?.statusCode || 404)

const headline = computed(() => {
  if (statusCode.value === 404) return "This page doesn't exist"
  if (statusCode.value === 403) return 'Access denied'
  if (statusCode.value >= 500) return 'Something went wrong'
  return props.error?.statusMessage || 'Unexpected error'
})

const description = computed(() => {
  if (statusCode.value === 404) {
    return "The page you're looking for was moved, removed, or never existed. Let's get you back on track."
  }
  if (statusCode.value >= 500) {
    return "We're having trouble loading this right now. Try again in a moment, or head home."
  }
  return props.error?.message || 'Please try again or return to the homepage.'
})

const quickLinks = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Agents', href: '/agents' },
  { label: 'Docs', href: '/documentation' },
  { label: 'Contact', href: '/contact' },
]

useHead({
  title: computed(() =>
    statusCode.value === 404
      ? '404 — Page Not Found · Scourge'
      : `${statusCode.value} · Scourge`
  ),
})

function handleClear() {
  clearError({ redirect: undefined })
}
</script>
