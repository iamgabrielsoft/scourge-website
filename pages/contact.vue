<template>
  <div class="min-h-screen bg-veryDarkBlue text-almostWhite">

    <!-- Top hairline -->
    <div class="h-px w-full"
      style="background: linear-gradient(90deg, transparent, rgba(158,92,247,0.5), rgba(43,194,255,0.4), transparent)"></div>

    <!-- ─── HERO ───────────────────────────────────────────── -->
    <section class="relative pt-24 pb-20 px-6 text-center overflow-hidden">
      <!-- Radial glow -->
      <div class="absolute inset-0 pointer-events-none"
        style="background: radial-gradient(ellipse 55% 45% at 50% 0%, rgba(158,92,247,0.08) 0%, transparent 70%)"></div>

      <div class="relative max-w-2xl mx-auto">
        <p class="text-[10px] tracking-[0.28em] uppercase font-mono text-slateDark mb-6">Contact</p>
        <h1 class="text-5xl md:text-6xl font-bold mb-5" style="letter-spacing: -0.03em;">
          How can we help?
        </h1>
        <p class="text-sm text-slate leading-relaxed max-w-md mx-auto">
          Get in touch with our sales and support teams for demos,
          onboarding help, or product questions.
        </p>
      </div>
    </section>

    <!-- ─── PRIMARY CARDS ─────────────────────────────────── -->
    <section class="px-6 pb-16">
      <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-3">

        <div v-for="primary in primaryCards" :key="primary.title"
          class="group relative rounded-2xl border border-lightBlack bg-almostBlack p-7 flex flex-col gap-5 transition-all duration-200 hover:border-slateDark overflow-hidden">
          <!-- Hover glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            :style="{ background: `radial-gradient(ellipse 80% 60% at 20% 20%, ${primary.color}0C 0%, transparent 65%)` }"></div>

          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center"
              :style="{ background: primary.color + '18', border: `1px solid ${primary.color}30` }">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" v-html="primary.icon"></svg>
            </div>
            <h2 class="text-base font-semibold text-almostWhite">{{ primary.title }}</h2>
          </div>

          <p class="text-sm text-slate leading-relaxed flex-1">{{ primary.description }}</p>

          <div>
            <a :href="primary.href"
              class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg border transition-all duration-150"
              :class="primary.cta.style === 'gradient'
                ? 'text-almostWhite border-transparent'
                : 'text-slate hover:text-almostWhite border-lightBlack hover:border-slateDark'"
              :style="primary.cta.style === 'gradient'
                ? `background: linear-gradient(135deg, ${primary.color}, ${primary.cta.colorEnd}); box-shadow: 0 0 18px ${primary.color}30`
                : ''"
            >
              {{ primary.cta.label }}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── DIVIDER ────────────────────────────────────────── -->
    <div class="max-w-3xl mx-auto px-6">
      <div class="h-px bg-lightBlack"></div>
    </div>

    <!-- ─── SECONDARY GRID ────────────────────────────────── -->
    <section class="px-6 py-16">
      <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-12">

        <div v-for="item in secondaryItems" :key="item.title" class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-almostWhite">{{ item.title }}</h3>
          <p class="text-sm text-slate leading-relaxed">{{ item.description }}</p>
          <a :href="item.href"
            class="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-150 group/link"
            :style="{ color: item.color }"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
          >
            <svg v-if="item.icon === 'mail'" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <rect x="1" y="2.5" width="11" height="8" rx="1" stroke="currentColor" stroke-width="1.2"/>
              <path d="M1 4l5.5 3.5L12 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
            {{ item.linkLabel }}
            <svg v-if="item.external" width="11" height="11" viewBox="0 0 11 11" fill="none"
              class="opacity-60 group-hover/link:opacity-100 transition-opacity">
              <path d="M3 8.5L8.5 3M8.5 3H4.5M8.5 3V7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else width="11" height="11" viewBox="0 0 11 11" fill="none"
              class="opacity-60 group-hover/link:opacity-100 transition-opacity">
              <path d="M1 5.5h9M6 1.5l4 4-4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>

    <!-- ─── DIVIDER ────────────────────────────────────────── -->
    <div class="max-w-3xl mx-auto px-6">
      <div class="h-px bg-lightBlack"></div>
    </div>

    <!-- ─── INLINE CONTACT FORM ───────────────────────────── -->
    <section class="px-6 py-16">
      <div class="max-w-3xl mx-auto">
        <div class="mb-8">
          <h2 class="text-base font-semibold text-almostWhite mb-1">Send us a message</h2>
          <p class="text-sm text-slate">We'll get back to you within one business day.</p>
        </div>

        <form @submit.prevent="submitForm" class="grid md:grid-cols-2 gap-4">
          <!-- Name -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs text-slateDark">Name</label>
            <input v-model="form.name" type="text" placeholder="Your name" required
              class="w-full px-3.5 py-2.5 text-sm bg-almostBlack border border-lightBlack rounded-lg text-almostWhite placeholder-slateDark outline-none focus:border-slateDark transition-colors duration-150"/>
          </div>
          <!-- Email -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs text-slateDark">Work email</label>
            <input v-model="form.email" type="email" placeholder="you@company.com" required
              class="w-full px-3.5 py-2.5 text-sm bg-almostBlack border border-lightBlack rounded-lg text-almostWhite placeholder-slateDark outline-none focus:border-slateDark transition-colors duration-150"/>
          </div>
          <!-- Company -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs text-slateDark">Company</label>
            <input v-model="form.company" type="text" placeholder="Acme Inc."
              class="w-full px-3.5 py-2.5 text-sm bg-almostBlack border border-lightBlack rounded-lg text-almostWhite placeholder-slateDark outline-none focus:border-slateDark transition-colors duration-150"/>
          </div>
          <!-- Topic -->
          <div class="flex flex-col gap-1.5">
            <label class="text-xs text-slateDark">Topic</label>
            <select v-model="form.topic"
              class="w-full px-3.5 py-2.5 text-sm bg-almostBlack border border-lightBlack rounded-lg text-almostWhite outline-none focus:border-slateDark transition-colors duration-150 appearance-none cursor-pointer">
              <option value="" disabled class="text-slateDark">Select a topic</option>
              <option v-for="t in topics" :key="t" :value="t">{{ t }}</option>
            </select>
          </div>
          <!-- Message -->
          <div class="md:col-span-2 flex flex-col gap-1.5">
            <label class="text-xs text-slateDark">Message</label>
            <textarea v-model="form.message" rows="4" placeholder="Tell us what's on your mind…" required
              class="w-full px-3.5 py-2.5 text-sm bg-almostBlack border border-lightBlack rounded-lg text-almostWhite placeholder-slateDark outline-none focus:border-slateDark transition-colors duration-150 resize-none"></textarea>
          </div>
          <!-- Submit -->
          <div class="md:col-span-2 flex items-center justify-between gap-4">
            <p class="text-xs text-slateDark">
              By submitting, you agree to our
              <a href="/privacy" class="underline hover:text-slate transition-colors">Privacy Policy</a>.
            </p>
            <button type="submit"
              class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-almostWhite rounded-lg transition-all duration-200 shrink-0"
              :class="submitted ? 'opacity-60 cursor-not-allowed' : ''"
              :disabled="submitted"
              style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF); box-shadow: 0 0 20px rgba(158,92,247,0.3);">
              <template v-if="submitted">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5l3 3 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Sent!
              </template>
              <template v-else>
                Send message
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </template>
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Bottom hairline -->
    <div class="h-px w-full"
      style="background: linear-gradient(90deg, transparent, rgba(66,222,209,0.25), transparent)"></div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Contact · Scourge',
  meta: [{ name: 'description', content: 'Get in touch with the Scourge team' }]
})

const primaryCards = [
  {
    title: 'Sales',
    color: '#9E5CF7',
    description: 'Speak to our sales team about plans, pricing, enterprise contracts, or to book a personalised demo.',
    href: 'mailto:sales@scourge.app',
    cta: { label: 'Talk to sales', style: 'gradient', colorEnd: '#2BC2FF' },
    icon: `<rect x="1" y="2" width="13" height="9" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M1 4l6.5 4L14 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  },
  {
    title: 'Help & support',
    color: '#2BC2FF',
    description: 'Ask product questions, report bugs, or leave feedback directly with our support team.',
    href: 'mailto:support@scourge.app',
    cta: { label: 'Contact support', style: 'ghost' },
    icon: `<circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" stroke-width="1.2"/><path d="M7.5 5.5a2 2 0 0 1 1 3.73V10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><circle cx="7.5" cy="11.5" r="0.5" fill="currentColor"/>`,
  },
]

const secondaryItems = [
  {
    title: 'Join the community',
    description: 'More than 28,000 Scourge users share questions, workflows, and best practices in our Discord community.',
    href: 'https://discord.com',
    linkLabel: 'Join Discord',
    color: '#5865F2',
    external: true,
  },
  {
    title: 'General communication',
    description: 'For other queries, please get in touch with us via email and we\'ll route your message to the right team.',
    href: 'mailto:hello@scourge.app',
    linkLabel: 'hello@scourge.app',
    color: '#9BA6B2',
    icon: 'mail',
    external: false,
  },
  {
    title: 'Documentation',
    description: 'Browse our guides, API references, and tutorials to get the most out of Scourge.',
    href: '/documentation',
    linkLabel: 'Read the docs',
    color: '#42DED1',
    external: false,
  },
  {
    title: 'Developers',
    description: 'Build on top of Scourge using our public API, webhooks, and integration SDK.',
    href: '/documentation',
    linkLabel: 'Developer docs',
    color: '#F5BE31',
    external: false,
  },
  {
    title: 'Status',
    description: 'Check the real-time status of Scourge services, uptime history, and subscribe to incident alerts.',
    href: '/status',
    linkLabel: 'View status page',
    color: '#42DED1',
    external: true,
  },
  {
    title: 'Press & media',
    description: 'For press enquiries, brand assets, or interview requests, reach out to our comms team.',
    href: 'mailto:press@scourge.app',
    linkLabel: 'press@scourge.app',
    color: '#FF4DFA',
    icon: 'mail',
    external: false,
  },
]

const topics = [
  'Sales & pricing',
  'Product question',
  'Bug report',
  'Enterprise',
  'Partnership',
  'Press & media',
  'Other',
]

const form = ref({ name: '', email: '', company: '', topic: '', message: '' })
const submitted = ref(false)

function submitForm() {
  // In production connect to your form handler / CRM
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 4000)
}
</script>
