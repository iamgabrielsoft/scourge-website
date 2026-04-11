<template>
  <div class="min-h-screen bg-veryDarkBlue text-almostWhite flex flex-col items-center justify-center px-6 relative overflow-hidden">

    <!-- Dot grid -->
    <div class="absolute inset-0 pointer-events-none opacity-25"
      style="background-image: radial-gradient(circle, #394351 1px, transparent 1px); background-size: 28px 28px;"></div>

    <!-- Radial glow -->
    <div class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(158,92,247,0.09) 0%, rgba(43,194,255,0.04) 50%, transparent 75%)"></div>

    <!-- Top hairline -->
    <div class="absolute top-0 inset-x-0 h-px"
      style="background: linear-gradient(90deg, transparent, rgba(158,92,247,0.5), rgba(43,194,255,0.4), transparent)"></div>

    <!-- Floating blobs (decorative) -->
    <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full pointer-events-none blur-3xl opacity-[0.04]"
      style="background: #9E5CF7"></div>
    <div class="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full pointer-events-none blur-3xl opacity-[0.04]"
      style="background: #2BC2FF"></div>

    <div class="relative text-center max-w-xl mx-auto">

      <!-- Label -->
      <p class="text-[10px] tracking-[0.3em] uppercase font-mono text-slateDark mb-8">Pricing</p>

      <!-- Icon -->
      <div class="w-14 h-14 rounded-2xl border border-lightBlack bg-almostBlack flex items-center justify-center mx-auto mb-8">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="8.5" stroke="#9E5CF7" stroke-width="1.2" stroke-opacity="0.5"/>
          <path d="M11 6v5l3 2" stroke="#9E5CF7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="11" cy="11" r="1.5" fill="#9E5CF7" fill-opacity="0.3"/>
        </svg>
      </div>

      <!-- Headline -->
      <h1 class="text-4xl md:text-5xl font-bold mb-4" style="letter-spacing: -0.03em;">
        Pricing coming soon
      </h1>

      <p class="text-sm text-slate leading-relaxed mb-10 max-w-sm mx-auto">
        We're finalising our plans. Leave your email and we'll notify you the moment pricing goes live — early signups get exclusive early-bird rates.
      </p>

      <!-- Email capture -->
      <form @submit.prevent="submit" class="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mb-6">
        <input
          v-model="email"
          type="email"
          placeholder="you@company.com"
          required
          class="flex-1 px-4 py-2.5 text-sm bg-almostBlack border border-lightBlack rounded-lg text-almostWhite placeholder-slateDark outline-none focus:border-slateDark transition-colors duration-150"
        />
        <button
          type="submit"
          :disabled="submitted"
          class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-almostWhite rounded-lg transition-all duration-200 shrink-0"
          :class="submitted ? 'opacity-60 cursor-not-allowed' : ''"
          style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF); box-shadow: 0 0 20px rgba(158,92,247,0.3);"
        >
          <template v-if="submitted">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5l3 3 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            You're on the list
          </template>
          <template v-else>
            Notify me
          </template>
        </button>
      </form>

      <p v-if="submitted" class="text-xs text-brand-green mb-6" style="color: #42DED1">
        ✓ We'll be in touch soon.
      </p>

      <!-- What to expect -->
      <div class="mt-10 grid grid-cols-3 gap-4 text-center">
        <div v-for="hint in hints" :key="hint.label" class="flex flex-col items-center gap-2">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center border border-lightBlack bg-almostBlack">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" v-html="hint.icon" :style="{ color: hint.color }"></svg>
          </div>
          <span class="text-[11px] text-slateDark leading-snug">{{ hint.label }}</span>
        </div>
      </div>

      <!-- Back link -->
      <div class="mt-14">
        <NuxtLink to="/"
          class="inline-flex items-center gap-1.5 text-xs text-slateDark hover:text-slate transition-colors duration-150">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M10 6H2M5 2L1 6l4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Back to home
        </NuxtLink>
      </div>

    </div>

    <!-- Bottom hairline -->
    <div class="absolute bottom-0 inset-x-0 h-px"
      style="background: linear-gradient(90deg, transparent, rgba(66,222,209,0.25), transparent)"></div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Pricing · Coming Soon · Scourge',
  meta: [{ name: 'description', content: 'Scourge pricing is coming soon. Sign up to be notified.' }]
})

const email = ref('')
const submitted = ref(false)

function submit() {
  if (!email.value) return
  // Wire up to your email list / CRM here
  submitted.value = true
}

const hints = [
  {
    label: 'Free plan included',
    color: '#42DED1',
    icon: `<path d="M2 7l3 3 7-6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    label: 'No credit card to start',
    color: '#9E5CF7',
    icon: `<rect x="1" y="3.5" width="12" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M1 6h12" stroke="currentColor" stroke-width="1.2"/>`,
  },
  {
    label: 'Early-bird pricing',
    color: '#F5BE31',
    icon: `<path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5l3.5-.5L7 1z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/>`,
  },
]
</script>
