<template>
  <section id="community" class="bg-veryDarkBlue py-28 px-6 lg:px-8 overflow-hidden relative">

    <!-- Subtle radial glow background -->
    <div class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse 80% 50% at 50% 100%, rgba(43,194,255,0.05) 0%, transparent 70%)"></div>

    <div class="max-w-7xl mx-auto relative">

      <!-- Label + headline -->
      <div class="text-center mb-20">
        <p class="text-[10px] tracking-[0.25em] uppercase font-mono text-slateDark mb-4">Community</p>
        <h2 class="text-4xl md:text-5xl font-bold text-almostWhite leading-tight mb-6">
          Built with the people<br/>who ship great things.
        </h2>
        <p class="text-slate text-sm max-w-lg mx-auto leading-relaxed">
          Scourge is more than a tool — it's a network of teams who care deeply about craft, speed, and quality.
        </p>
      </div>

      <!-- Stat row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-lightBlack border border-lightBlack mb-px">
        <div v-for="stat in stats" :key="stat.label"
          class="bg-veryDarkBlue px-8 py-10 text-center hover:bg-almostBlack transition-colors duration-300">
          <p class="text-4xl md:text-5xl font-bold mb-2 tabular-nums" :style="{ color: stat.color }">
            {{ stat.value }}
          </p>
          <p class="text-xs text-slateDark">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Testimonial grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-lightBlack border border-lightBlack border-t-0 mb-16">
        <div v-for="(quote, i) in quotes" :key="i"
          class="bg-veryDarkBlue p-8 flex flex-col gap-6 hover:bg-almostBlack transition-colors duration-300 group">
          <!-- Quote mark -->
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
            <path d="M0 18V11.25C0 7.5 1.5 4.125 4.5 1.125L6.75 3C5.25 4.5 4.25 6.125 3.75 7.875H7.5V18H0ZM13.5 18V11.25C13.5 7.5 15 4.125 18 1.125L20.25 3C18.75 4.5 17.75 6.125 17.25 7.875H21V18H13.5Z"
              :fill="quote.accentColor" fill-opacity="0.4" class="group-hover:fill-opacity-70 transition-all"/>
          </svg>
          <p class="text-sm text-slate leading-relaxed flex-1">"{{ quote.text }}"</p>
          <div class="flex items-center gap-3 pt-4 border-t border-lightBlack">
            <!-- Avatar placeholder -->
            <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
              :style="{ background: quote.accentColor + '22', color: quote.accentColor }">
              {{ quote.initials }}
            </div>
            <div>
              <p class="text-xs font-semibold text-almostWhite">{{ quote.name }}</p>
              <p class="text-[11px] text-slateDark">{{ quote.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Join CTA row -->
      <div class="border border-lightBlack bg-almostBlack rounded-sm p-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 class="text-xl font-bold text-almostWhite mb-2">Join the Scourge community</h3>
          <p class="text-sm text-slate">Connect with thousands of product builders on Discord, share workflows, and shape the future of the product.</p>
        </div>
        <div class="flex items-center gap-4 shrink-0">
          <a href="#"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium text-almostWhite border border-lightBlack hover:border-slateDark hover:bg-veryDarkBlue transition-all duration-200">
            <!-- Discord icon -->
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <path d="M13.545 1.01A13.15 13.15 0 0 0 10.26.001a.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.604 0 8.41 8.41 0 0 0-.412-.833.051.051 0 0 0-.052-.025 13.1 13.1 0 0 0-3.284 1.01.046.046 0 0 0-.021.018C.356 4.27-.213 7.44.066 10.57c.001.014.01.028.02.037a13.18 13.18 0 0 0 3.977 2.01.052.052 0 0 0 .056-.019c.306-.418.58-.858.815-1.32a.05.05 0 0 0-.028-.07 8.66 8.66 0 0 1-1.248-.595.05.05 0 0 1-.005-.083c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007c.08.066.164.132.248.195a.05.05 0 0 1-.004.083 8.2 8.2 0 0 1-1.249.594.05.05 0 0 0-.027.071c.24.461.514.9.814 1.319a.05.05 0 0 0 .056.02 13.14 13.14 0 0 0 3.985-2.011.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.107a.04.04 0 0 0-.02-.019Z" fill="#9BA6B2"/>
            </svg>
            Join Discord
          </a>
          <a href="#"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-medium"
            style="background: rgba(158,92,247,0.15); color: #9E5CF7; border: 1px solid rgba(158,92,247,0.25)">
            Read the blog
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="#9E5CF7" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '28k+',  label: 'Teams using Scourge',   color: '#9E5CF7' },
  { value: '4.8M',  label: 'Issues closed this year', color: '#2BC2FF' },
  { value: '140+',  label: 'Countries represented',   color: '#42DED1' },
  { value: '99.9%', label: 'Uptime SLA',              color: '#F5BE31' },
]

const quotes = [
  {
    text: "Scourge cut our planning meetings in half. The AI intake alone saves us hours of triage every week.",
    name: 'Sarah Chen',
    role: 'Head of Product, Vercel',
    initials: 'SC',
    accentColor: '#9E5CF7',
  },
  {
    text: "I've tried every tool out there. Nothing comes close to the speed and clarity of Scourge's issue tracker.",
    name: 'Marcus Bell',
    role: 'Eng Manager, Loom',
    initials: 'MB',
    accentColor: '#2BC2FF',
  },
  {
    text: "The roadmap feature finally makes quarterly planning feel like something our whole company can rally around.",
    name: 'Priya Nair',
    role: 'CPO, Retool',
    initials: 'PN',
    accentColor: '#42DED1',
  },
]
</script>
