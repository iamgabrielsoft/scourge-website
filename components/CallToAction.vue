<template>
  <section class="bg-veryDarkBlue py-28 px-6 lg:px-8 overflow-hidden relative">

    <!-- Top hairline -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px pointer-events-none"
      style="background: linear-gradient(90deg, transparent, rgba(158,92,247,0.5), rgba(43,194,255,0.5), transparent)"></div>

    <!-- Ambient radial glow -->
    <div class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse 60% 50% at 50% 100%, rgba(158,92,247,0.08) 0%, transparent 70%)"></div>

    <div class="max-w-5xl mx-auto relative">

      <!-- Label -->
      <p class="text-[10px] tracking-[0.25em] uppercase font-mono text-slateDark text-center mb-10">Get started</p>

      <!-- Headline -->
      <h2 class="text-4xl md:text-6xl font-bold text-center leading-tight mb-6">
        <span class="text-almostWhite">Ship faster.</span>
        <br/>
        <span style="background: linear-gradient(135deg, #9E5CF7 0%, #2BC2FF 50%, #42DED1 100%);
                     -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
          Together.
        </span>
      </h2>

      <!-- Subtext -->
      <p class="text-center text-sm text-slate max-w-md mx-auto leading-relaxed mb-12">
        Join 28,000+ product teams who have replaced their entire toolstack with Scourge.
        Free to start. No credit card needed.
      </p>

      <!-- CTAs -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
        <a
          :href="isLoggedIn ? `${appUrl}/home` : `${appUrl}/create`"
          class="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-almostWhite rounded transition-all duration-200"
          style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF); box-shadow: 0 0 28px rgba(158,92,247,0.35);"
          onmouseover="this.style.boxShadow='0 0 40px rgba(158,92,247,0.55)'"
          onmouseout="this.style.boxShadow='0 0 28px rgba(158,92,247,0.35)'"
        >
          {{ isLoggedIn ? 'Open app' : 'Start for free' }}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-slate hover:text-almostWhite border border-lightBlack hover:border-slateDark bg-almostBlack rounded transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.3"/>
            <path d="M5.5 4.5L9.5 7l-4 2.5V4.5z" fill="currentColor"/>
          </svg>
          Watch demo
        </a>
      </div>

      <!-- Trust signals row -->
      <div class="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        <div v-for="signal in signals" :key="signal.text" class="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" :fill="signal.color + '20'"/>
            <path d="M4 7l2 2 4-4" :stroke="signal.color" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-xs text-slateDark">{{ signal.text }}</span>
        </div>
      </div>

      <!-- Decoration: grid of dots -->
      <div class="absolute -right-20 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 hidden lg:block">
        <div class="grid grid-cols-6 gap-3">
          <div v-for="i in 48" :key="i" class="w-1 h-1 rounded-full bg-slateDark"></div>
        </div>
      </div>
      <div class="absolute -left-20 top-1/2 -translate-y-1/2 pointer-events-none opacity-20 hidden lg:block">
        <div class="grid grid-cols-6 gap-3">
          <div v-for="i in 48" :key="i" class="w-1 h-1 rounded-full bg-slateDark"></div>
        </div>
      </div>

    </div>

    <!-- Bottom hairline -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-px pointer-events-none"
      style="background: linear-gradient(90deg, transparent, rgba(66,222,209,0.3), transparent)"></div>

  </section>
</template>

<script setup>
const config = useRuntimeConfig()
const appUrl = config.public.appUrl
const { isLoggedIn } = useAuthState()

const signals = [
  { text: 'Free 14-day trial', color: '#9E5CF7' },
  { text: 'No credit card required', color: '#2BC2FF' },
  { text: 'Cancel anytime', color: '#42DED1' },
  // { text: 'SOC 2 Type II certified', color: '#F5BE31' },
]
</script>
