<template>
  <div class="bg-veryDarkBlue text-almostWhite">

    <!-- Top hairline -->
    <div class="h-px"
      style="background: linear-gradient(90deg, transparent, rgba(158,92,247,0.5), rgba(43,194,255,0.4), transparent)"></div>

    <!-- ─── HERO ──────────────────────────────────────────── -->
    <section class="relative pt-24 pb-20 px-6 text-center overflow-hidden">
      <!-- Dot grid -->
      <div class="absolute inset-0 pointer-events-none opacity-20"
        style="background-image: radial-gradient(circle, #394351 1px, transparent 1px); background-size: 30px 30px;"></div>
      <!-- Radial glow -->
      <div class="absolute inset-0 pointer-events-none"
        style="background: radial-gradient(ellipse 60% 55% at 50% 0%, rgba(158,92,247,0.08) 0%, transparent 70%)"></div>

      <div class="relative max-w-3xl mx-auto">
        <p class="text-[10px] tracking-[0.28em] uppercase font-mono text-slateDark mb-6">Security</p>
        <h1 class="text-5xl md:text-7xl font-bold leading-[1.05] mb-6" style="letter-spacing: -0.03em;">
          Safe, secure,<br/>and private.
        </h1>
        <p class="text-base text-slate leading-relaxed max-w-lg mx-auto">
          Everything in Scourge is designed to keep your work safe and secure.
          Because your business is nobody else's business.
        </p>
      </div>

      <!-- Compliance badges -->
      <!-- <div class="relative flex items-center justify-center gap-6 md:gap-10 mt-16 flex-wrap">
        <div v-for="badge in badges" :key="badge.label"
          class="group w-36 h-36 rounded-full border flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:scale-105 cursor-default"
          :style="{ borderColor: '#2F3336', background: 'radial-gradient(ellipse at 40% 30%, rgba(158,92,247,0.04) 0%, #0d0e12 100%)' }"
        >
          <div v-if="badge.stars" class="flex flex-col items-center gap-0.5 mb-1">
 
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <g v-for="(pos, i) in gdprStarPositions" :key="i">
                <text :x="pos.x" :y="pos.y" text-anchor="middle" dominant-baseline="middle"
                  font-size="5" fill="#9BA6B2" fill-opacity="0.6">★</text>
              </g>
              <text x="26" y="28" text-anchor="middle" dominant-baseline="middle"
                font-size="10" font-weight="700" fill="#9BA6B2" letter-spacing="0.5">GDPR</text>
            </svg>
          </div>
          <template v-else-if="badge.hipaa">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 3 L14 3 C14 3 8 6 8 12 C8 16 10 19 14 21 C18 19 20 16 20 12 C20 6 14 3 14 3Z"
                stroke="#9BA6B2" stroke-opacity="0.5" stroke-width="1" fill="none"/>
              <path d="M11 14 h6 M14 11 v6" stroke="#9BA6B2" stroke-opacity="0.5" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
            <span class="text-[9px] font-mono text-slate/50 tracking-widest mt-0.5">HIPAA</span>
            <span class="text-[8px] font-mono text-slate/40 tracking-widest">COMPLIANT</span>
          </template>
          <template v-else>
            <span class="text-[11px] font-mono text-slate/50 tracking-widest">AICPA</span>
            <div class="h-px w-10 bg-slate/20 my-0.5"></div>
            <span class="text-xl font-bold text-slate/60 tracking-wider">SOC2</span>
          </template>
        </div>
      </div> -->
    </section>

    <!-- ─── 3-COL FEATURE GRID ────────────────────────────── -->
    <!-- <section class="border-t border-lightBlack px-6 py-20">
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div v-for="feat in features" :key="feat.title" class="flex flex-col gap-4">
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              :style="{ background: feat.color + '18', border: `1px solid ${feat.color}30` }">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" v-html="feat.icon" :style="{ color: feat.color }"></svg>
            </div>
            <h3 class="text-sm font-semibold" :style="{ color: feat.color }">{{ feat.label }}</h3>
          </div>
          <h4 class="text-base font-semibold text-almostWhite leading-snug">{{ feat.title }}</h4>
          <p class="text-sm text-slate leading-relaxed">{{ feat.description }}</p>
        </div>
      </div>
    </section> -->

    <!-- ─── BENTO SECURITY DETAILS ────────────────────────── -->
    <section class="border-t border-lightBlack px-6 py-20 bg-almostBlack">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-[10px] tracking-[0.28em] uppercase font-mono text-slateDark mb-3">How we protect you</p>
          <h2 class="text-3xl md:text-4xl font-bold" style="letter-spacing: -0.02em;">Built for security from the ground up</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-lightBlack border border-lightBlack rounded-xl overflow-hidden">
          <div v-for="detail in securityDetails" :key="detail.title"
            class="group relative bg-veryDarkBlue p-7 flex flex-col gap-3 hover:bg-almostBlack transition-colors duration-200">
            <!-- Hover glow -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              :style="{ background: `radial-gradient(ellipse 80% 60% at 20% 20%, ${detail.color}0A 0%, transparent 70%)` }"></div>
            <div class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              :style="{ background: detail.color + '18', border: `1px solid ${detail.color}30` }">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" v-html="detail.icon" :style="{ color: detail.color }"></svg>
            </div>
            <h3 class="text-sm font-semibold text-almostWhite">{{ detail.title }}</h3>
            <p class="text-xs text-slate leading-relaxed">{{ detail.description }}</p>
            <!-- Bottom accent -->
            <div class="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :style="{ background: `linear-gradient(90deg, transparent, ${detail.color}50, transparent)` }"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── TRUST LOGOS ────────────────────────────────────── -->
    <!-- <section class="border-t border-lightBlack px-6 py-20">
      <div class="max-w-5xl mx-auto text-center">
        <p class="text-xs text-slateDark mb-10">Trusted by more than 28,000 product teams around the globe</p>
        <div class="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          <span v-for="logo in trustLogos" :key="logo"
            class="text-sm font-semibold tracking-wide text-slateDark hover:text-slate transition-colors duration-200 cursor-default font-mono">
            {{ logo }}
          </span>
        </div>
      </div>
    </section> -->

    <!-- ─── FAQ ───────────────────────────────────────────── -->
    <!-- <section class="border-t border-lightBlack px-6 py-20 bg-almostBlack">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-[10px] tracking-[0.28em] uppercase font-mono text-slateDark mb-3">FAQ</p>
          <h2 class="text-3xl font-bold" style="letter-spacing: -0.02em;">Common questions</h2>
        </div>
        <div class="space-y-2">
          <div v-for="(faq, i) in faqs" :key="i"
            class="border border-lightBlack rounded-xl overflow-hidden bg-veryDarkBlue">
            <button
              class="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-almostWhite hover:text-white transition-colors duration-150"
              @click="openFaq = openFaq === i ? null : i">
              {{ faq.q }}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="shrink-0 text-slateDark transition-transform duration-200"
                :class="openFaq === i ? 'rotate-180' : ''">
                <path d="M3 5l4 4 4-4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div v-if="openFaq === i" class="px-5 pb-5">
              <div class="h-px bg-lightBlack mb-4"></div>
              <p class="text-sm text-slate leading-relaxed">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- ─── BOTTOM CTA ─────────────────────────────────────── -->
    <section class="border-t border-lightBlack px-6 py-20 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none"
        style="background: radial-gradient(ellipse 60% 60% at 50% 100%, rgba(158,92,247,0.07) 0%, transparent 70%)"></div>
      <div class="max-w-2xl mx-auto text-center relative">
        <h2 class="text-3xl md:text-4xl font-bold mb-4" style="letter-spacing: -0.02em;">
          Have more security questions?
        </h2>
        <p class="text-sm text-slate mb-8">Our security team is happy to answer your questions, share our full audit reports, or walk you through our practices.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="/contact"
            class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-almostWhite rounded-lg transition-all duration-200"
            style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF); box-shadow: 0 0 24px rgba(158,92,247,0.3);">
            Contact security team
          </a>
          <a :href="`${appUrl}/create`"
            class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate hover:text-almostWhite border border-lightBlack hover:border-slateDark rounded-lg bg-almostBlack transition-all duration-200">
            Get started free
          </a>
        </div>
      </div>
    </section>

    <!-- Bottom hairline -->
    <div class="h-px"
      style="background: linear-gradient(90deg, transparent, rgba(66,222,209,0.25), transparent)"></div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const config = useRuntimeConfig()
const appUrl = config.public.appUrl

useHead({
  title: 'Security · Scourge',
  meta: [{ name: 'description', content: 'Learn about Scourge security practices and data protection' }]
})

const openFaq = ref(null)

// Positions for GDPR stars in a circle
const gdprStarPositions = Array.from({ length: 12 }, (_, i) => {
  const angle = (i / 12) * Math.PI * 2 - Math.PI / 2
  return { x: (26 + Math.cos(angle) * 21).toFixed(1), y: (26 + Math.sin(angle) * 21).toFixed(1) }
})

const badges = [
  { label: 'SOC 2', soc: true },
  { label: 'GDPR',  stars: true },
  { label: 'HIPAA', hipaa: true },
]

const features = [
  {
    label: 'Enterprise-grade security',
    title: 'Peace of mind as a service.',
    color: '#9E5CF7',
    description: 'Scourge is built with enterprise security in mind. We use industry-standard encryption, access controls, and audit logging to keep your data safe.',
    icon: `<path d="M6.5 1.5L1.5 3.5v3c0 3 2.5 5.5 5 6.5 2.5-1 5-3.5 5-6.5v-3L6.5 1.5z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>`,
  },
  {
    label: 'SOC 2 compliance',
    title: 'Independently audited and certified.',
    color: '#2BC2FF',
    description: 'Scourge has undergone a Service Organization Control 2 Type II audit by an independent auditor. Our report is available on request.',
    icon: `<rect x="1.5" y="1.5" width="10" height="10" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M4 6.5l1.5 1.5 3-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    label: 'HIPAA compliance',
    title: 'Privacy and security by design.',
    color: '#42DED1',
    description: 'Scourge supports HIPAA-compliant workflows for teams handling protected health information. BAAs are available on our Enterprise plan.',
    icon: `<path d="M6.5 1L1 3.5v4C1 10.5 3.5 12.5 6.5 13c3-0.5 5.5-2.5 5.5-5.5v-4L6.5 1z" stroke="currentColor" stroke-width="1.2"/><path d="M4.5 7h4M6.5 5v4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  },
]

const securityDetails = [
  {
    title: 'AES-256 encryption at rest',
    color: '#9E5CF7',
    description: 'All data stored in Scourge is encrypted at rest using AES-256, the same standard used by financial institutions worldwide.',
    icon: `<rect x="2" y="6" width="10" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M4 6V4.5a3 3 0 0 1 6 0V6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  },
  {
    title: 'TLS 1.3 in transit',
    color: '#2BC2FF',
    description: 'All data in transit between your browser and our servers is protected by TLS 1.3, ensuring your data cannot be intercepted or tampered with.',
    icon: `<path d="M7 1l5.5 2.5v3C12.5 9.5 10 11.5 7 12.5 4 11.5 1.5 9.5 1.5 6.5v-3L7 1z" stroke="currentColor" stroke-width="1.2"/>`,
  },
  {
    title: 'Role-based access control',
    color: '#42DED1',
    description: 'Fine-grained permissions let admins control exactly who can see, edit, or delete any resource. Supports SSO, SCIM, and custom roles.',
    icon: `<circle cx="7" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.2"/><path d="M1.5 12c0-2.5 2.5-4 5.5-4s5.5 1.5 5.5 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  },
  {
    title: 'Full audit logging',
    color: '#F5BE31',
    description: 'Every action taken in Scourge — who did what and when — is logged and exportable. Perfect for compliance reviews and incident investigations.',
    icon: `<path d="M2 3.5h9M2 7h7M2 10.5h5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="11" cy="10.5" r="2" stroke="currentColor" stroke-width="1.1"/>`,
  },
  // {
  //   title: 'Single sign-on (SSO)',
  //   color: '#FF5C80',
  //   description: 'Integrate with Okta, Google Workspace, Azure AD, and any SAML 2.0 provider. Enforce SSO across your entire organisation.',
  //   icon: `<rect x="1.5" y="4" width="11" height="7" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M5 7.5h4M7 6v3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  // },
  // {
  //   title: 'Penetration testing',
  //   color: '#FF4DFA',
  //   description: 'We conduct annual third-party penetration tests and maintain a responsible disclosure programme. Security researchers can report issues via HackerOne.',
  //   icon: `<path d="M4 2L2 7h4L4 2z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/><circle cx="9.5" cy="9.5" r="3" stroke="currentColor" stroke-width="1.1"/><path d="M11.5 11.5L13 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  // },
  // {
  //   title: 'Data residency options',
  //   color: '#9E5CF7',
  //   description: 'Enterprise customers can choose to have their data stored exclusively in the EU or US. We operate infrastructure in both regions via AWS.',
  //   icon: `<circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.2"/><path d="M7 1.5C5.5 3.5 5 5 5 7s.5 3.5 2 5.5M7 1.5C8.5 3.5 9 5 9 7s-.5 3.5-2 5.5M1.5 7h11" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>`,
  // },
  {
    title: '99.9% uptime SLA',
    color: '#42DED1',
    description: 'We guarantee 99.9% uptime backed by a formal SLA for Enterprise customers. Our status page provides real-time and historical uptime data.',
    icon: `<path d="M1.5 9.5l3-4 2.5 3 2.5-5 3 4.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: 'GDPR ready',
    color: '#2BC2FF',
    description: 'Scourge is fully GDPR-compliant. We act as a data processor, offer DPAs, support data subject access requests, and never sell your data.',
    icon: `<path d="M7 1.5L2 4v4c0 2.5 2 4.5 5 5.5 3-1 5-3 5-5.5V4L7 1.5z" stroke="currentColor" stroke-width="1.2"/><path d="M4.5 7l1.5 1.5 3-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
]

const trustLogos = ['Vercel', 'Stripe', 'Loom', 'Retool', 'Notion', 'Linear', 'Figma', 'Raycast']

const faqs = [
  {
    q: 'Is Scourge SOC 2 Type II certified?',
    a: 'Yes. Scourge has completed a SOC 2 Type II audit covering the Security, Availability, and Confidentiality trust service criteria. Our full report is available to Enterprise customers under NDA.',
  },
  {
    q: 'Where is my data stored?',
    a: 'By default, data is stored in the United States on AWS infrastructure. Enterprise customers can elect EU-only data residency. All data is encrypted at rest with AES-256.',
  },
  {
    q: 'Does Scourge support SSO?',
    a: 'Yes. We support SAML 2.0-based SSO with providers including Okta, Google Workspace, and Azure AD. SCIM provisioning for automated user management is available on the Enterprise plan.',
  },
  {
    q: 'Can I get a Data Processing Agreement (DPA)?',
    a: 'Yes. We offer a standard DPA for all paid customers as part of our GDPR compliance programme. Contact our security team to request one.',
  },
  {
    q: 'Does Scourge have a bug bounty programme?',
    a: 'Yes. We run a responsible disclosure programme through HackerOne. Security researchers who report valid vulnerabilities are acknowledged and rewarded based on severity.',
  },
  {
    q: 'How do you handle a data breach?',
    a: 'We have an incident response plan that requires us to notify affected customers within 72 hours of becoming aware of a breach, in line with GDPR requirements. A dedicated security@ email is monitored 24/7.',
  },
]
</script>
