<template>
  <div class="min-h-screen bg-veryDarkBlue text-almostWhite">

    <!-- Top hairline -->
    <div class="h-px"
      style="background: linear-gradient(90deg, transparent, rgba(158,92,247,0.5), rgba(43,194,255,0.4), transparent)"></div>

    <!-- ─── HERO ──────────────────────────────────────────────── -->
    <section class="relative pt-20 pb-16 px-6 text-center overflow-hidden">
      <!-- Subtle dot grid -->
      <div class="absolute inset-0 pointer-events-none opacity-20"
        style="background-image: radial-gradient(circle, #394351 1px, transparent 1px); background-size: 28px 28px;"></div>
      <!-- Radial glow -->
      <div class="absolute inset-0 pointer-events-none"
        style="background: radial-gradient(ellipse 50% 45% at 50% 0%, rgba(158,92,247,0.08) 0%, transparent 70%)"></div>

      <div class="relative max-w-xl mx-auto flex flex-col items-center">
        <!-- App icon -->
        <div class="w-24 h-24 rounded-[22px] border border-lightBlack bg-almostBlack flex items-center justify-center mb-8 shadow-2xl"
          style="box-shadow: 0 0 40px rgba(158,92,247,0.15)">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path d="M26 4L48 15.5V36.5L26 48L4 36.5V15.5L26 4Z"
              style="fill: rgba(158,92,247,0.12); stroke: #9E5CF7; stroke-width: 1.2"/>
            <path d="M26 14L40 21.5V36.5L26 44L12 36.5V21.5L26 14Z"
              style="fill: rgba(43,194,255,0.1); stroke: #2BC2FF; stroke-width: 1" opacity="0.8"/>
            <circle cx="26" cy="26" r="5" fill="#9E5CF7" fill-opacity="0.4" stroke="#9E5CF7" stroke-width="1"/>
            <circle cx="26" cy="26" r="2" fill="#9E5CF7"/>
          </svg>
        </div>

        <h1 class="text-4xl md:text-5xl font-bold mb-3" style="letter-spacing: -0.03em;">Download Scourge</h1>
        <p class="text-sm text-slate mb-8">Available for macOS, Windows, iOS, and Android.</p>

        <!-- Primary CTA — auto-detected platform -->
        <button
          class="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-almostWhite rounded-lg transition-all duration-200"
          style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF); box-shadow: 0 0 24px rgba(158,92,247,0.35);"
          @click="downloadPrimary">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M7.5 1v9M4 7l3.5 3.5L11 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1.5 12.5h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          {{ primaryLabel }}
          <kbd class="text-[10px] font-mono bg-white/10 px-1.5 py-0.5 rounded">D</kbd>
        </button>
      </div>
    </section>

    <!-- ─── PLATFORM SECTIONS ─────────────────────────────────── -->
    <div class="max-w-3xl mx-auto px-6 pb-20 space-y-0">

      <!-- Desktop -->
      <div class="border-t border-lightBlack py-14 grid md:grid-cols-2 gap-10 items-start">
        <!-- Left: description -->
        <div>
          <p class="text-sm text-almostWhite mb-2">
            <span class="font-semibold">Scourge Desktop.</span>
            <span class="text-slate"> A fast and focused experience to plan, build, and ship your product.</span>
          </p>
          <ul class="space-y-1.5 mt-4">
            <li v-for="point in desktopPoints" :key="point" class="flex items-center gap-2 text-xs text-slateDark">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M2 5.5l2 2 5-5" stroke="#9E5CF7" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ point }}
            </li>
          </ul>
        </div>

        <!-- Right: download rows -->
        <div class="space-y-0 divide-y divide-lightBlack border border-lightBlack rounded-xl overflow-hidden">
          <div v-for="platform in desktopPlatforms" :key="platform.name"
            class="flex items-center justify-between px-4 py-3.5 bg-almostBlack hover:bg-veryDarkBlue transition-colors duration-150 group">
            <div class="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" v-html="platform.icon" class="text-slateDark group-hover:text-slate transition-colors"></svg>
              <span class="text-sm text-almostWhite">{{ platform.name }}</span>
              <span v-if="platform.badge" class="text-[9px] font-mono px-1.5 py-0.5 rounded"
                style="color: #42DED1; background: rgba(66,222,209,0.12); border: 1px solid rgba(66,222,209,0.2)">
                {{ platform.badge }}
              </span>
            </div>
            <div class="flex items-center gap-2">
              <span v-if="platform.version" class="text-[10px] text-slateDark font-mono hidden sm:block">{{ platform.version }}</span>
              <a :href="platform.href"
                class="text-xs font-medium px-3 py-1.5 rounded-md border border-lightBlack text-slate hover:text-almostWhite hover:border-slateDark bg-veryDarkBlue transition-all duration-150">
                {{ platform.action }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile -->
      <div class="border-t border-lightBlack py-14 grid md:grid-cols-2 gap-10 items-start">
        <!-- Left: description -->
        <div>
          <p class="text-sm text-almostWhite mb-2">
            <span class="font-semibold">Scourge Mobile.</span>
            <span class="text-slate"> Designed for away-from-keyboard workflows that complement the desktop experience.</span>
          </p>
          <ul class="space-y-1.5 mt-4">
            <li v-for="point in mobilePoints" :key="point" class="flex items-center gap-2 text-xs text-slateDark">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M2 5.5l2 2 5-5" stroke="#2BC2FF" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              {{ point }}
            </li>
          </ul>
        </div>

        <!-- Right: store rows -->
        <div class="space-y-0 divide-y divide-lightBlack border border-lightBlack rounded-xl overflow-hidden">
          <div v-for="store in mobileStores" :key="store.name"
            class="flex items-center justify-between px-4 py-3.5 bg-almostBlack hover:bg-veryDarkBlue transition-colors duration-150 group">
            <div class="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" v-html="store.icon" class="text-slateDark group-hover:text-slate transition-colors"></svg>
              <span class="text-sm text-almostWhite">{{ store.name }}</span>
            </div>
            <div class="flex items-center gap-2">
              <!-- QR toggle -->
              <button
                class="text-xs font-medium px-3 py-1.5 rounded-md border border-lightBlack text-slateDark hover:text-slate hover:border-slateDark bg-veryDarkBlue transition-all duration-150"
                @click="activeQR = activeQR === store.name ? null : store.name">
                Scan QR
              </button>
              <a :href="store.href" target="_blank" rel="noopener noreferrer"
                class="text-xs font-medium px-3 py-1.5 rounded-md border border-lightBlack text-slate hover:text-almostWhite hover:border-slateDark bg-veryDarkBlue transition-all duration-150">
                Open store
              </a>
            </div>
          </div>
          <!-- QR panel -->
          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-40"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 max-h-40"
            leave-to-class="opacity-0 max-h-0">
            <div v-if="activeQR" class="overflow-hidden">
              <div class="px-5 py-5 bg-veryDarkBlue flex items-center gap-5">
                <!-- Fake QR code using SVG pattern -->
                <div class="w-20 h-20 rounded-lg border border-lightBlack bg-almostBlack p-2 shrink-0 flex items-center justify-center">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <!-- Corner squares -->
                    <rect x="2" y="2" width="16" height="16" rx="2" stroke="#9E5CF7" stroke-width="1.5" fill="none"/>
                    <rect x="5" y="5" width="10" height="10" rx="1" fill="#9E5CF7" fill-opacity="0.4"/>
                    <rect x="38" y="2" width="16" height="16" rx="2" stroke="#9E5CF7" stroke-width="1.5" fill="none"/>
                    <rect x="41" y="5" width="10" height="10" rx="1" fill="#9E5CF7" fill-opacity="0.4"/>
                    <rect x="2" y="38" width="16" height="16" rx="2" stroke="#9E5CF7" stroke-width="1.5" fill="none"/>
                    <rect x="5" y="41" width="10" height="10" rx="1" fill="#9E5CF7" fill-opacity="0.4"/>
                    <!-- Data dots -->
                    <rect x="22" y="4"  width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.6"/>
                    <rect x="27" y="4"  width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.4"/>
                    <rect x="32" y="4"  width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.7"/>
                    <rect x="22" y="9"  width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.3"/>
                    <rect x="27" y="9"  width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.6"/>
                    <rect x="32" y="9"  width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.5"/>
                    <rect x="4"  y="22" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.5"/>
                    <rect x="9"  y="22" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.7"/>
                    <rect x="4"  y="27" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.4"/>
                    <rect x="9"  y="27" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.6"/>
                    <rect x="4"  y="32" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.7"/>
                    <rect x="22" y="22" width="3" height="3" rx="0.5" fill="#2BC2FF" fill-opacity="0.6"/>
                    <rect x="27" y="22" width="3" height="3" rx="0.5" fill="#2BC2FF" fill-opacity="0.4"/>
                    <rect x="32" y="22" width="3" height="3" rx="0.5" fill="#2BC2FF" fill-opacity="0.7"/>
                    <rect x="22" y="27" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.5"/>
                    <rect x="27" y="27" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.3"/>
                    <rect x="32" y="27" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.6"/>
                    <rect x="22" y="32" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.7"/>
                    <rect x="27" y="32" width="3" height="3" rx="0.5" fill="#2BC2FF" fill-opacity="0.5"/>
                    <rect x="32" y="32" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.4"/>
                    <rect x="41" y="22" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.6"/>
                    <rect x="46" y="22" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.4"/>
                    <rect x="51" y="22" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.7"/>
                    <rect x="41" y="27" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.3"/>
                    <rect x="46" y="27" width="3" height="3" rx="0.5" fill="#2BC2FF" fill-opacity="0.6"/>
                    <rect x="22" y="41" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.5"/>
                    <rect x="27" y="41" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.7"/>
                    <rect x="32" y="41" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.4"/>
                    <rect x="22" y="46" width="3" height="3" rx="0.5" fill="#2BC2FF" fill-opacity="0.6"/>
                    <rect x="27" y="46" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.3"/>
                    <rect x="32" y="46" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.6"/>
                    <rect x="22" y="51" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.7"/>
                    <rect x="41" y="41" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.5"/>
                    <rect x="46" y="41" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.4"/>
                    <rect x="41" y="46" width="3" height="3" rx="0.5" fill="#9BA6B2" fill-opacity="0.7"/>
                    <rect x="46" y="46" width="3" height="3" rx="0.5" fill="#2BC2FF" fill-opacity="0.5"/>
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-medium text-almostWhite mb-1">Scan to download {{ activeQR }}</p>
                  <p class="text-[11px] text-slateDark leading-relaxed">Point your phone camera at the code to open the {{ activeQR }} app store listing.</p>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Browser extension row -->
      <div class="border-t border-lightBlack py-14">
        <div class="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p class="text-sm text-almostWhite mb-2">
              <span class="font-semibold">Browser Extension.</span>
              <span class="text-slate"> Create and manage Scourge issues from any tab without switching context.</span>
            </p>
            <ul class="space-y-1.5 mt-4">
              <li v-for="point in extensionPoints" :key="point" class="flex items-center gap-2 text-xs text-slateDark">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M2 5.5l2 2 5-5" stroke="#42DED1" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ point }}
              </li>
            </ul>
          </div>
          <div class="space-y-0 divide-y divide-lightBlack border border-lightBlack rounded-xl overflow-hidden">
            <div v-for="ext in extensions" :key="ext.name"
              class="flex items-center justify-between px-4 py-3.5 bg-almostBlack hover:bg-veryDarkBlue transition-colors duration-150 group">
              <div class="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" v-html="ext.icon" class="text-slateDark group-hover:text-slate transition-colors"></svg>
                <span class="text-sm text-almostWhite">{{ ext.name }}</span>
              </div>
              <a :href="ext.href" target="_blank" rel="noopener noreferrer"
                class="text-xs font-medium px-3 py-1.5 rounded-md border border-lightBlack text-slate hover:text-almostWhite hover:border-slateDark bg-veryDarkBlue transition-all duration-150">
                Add to {{ ext.browser }}
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Bottom hairline -->
    <div class="h-px"
      style="background: linear-gradient(90deg, transparent, rgba(66,222,209,0.25), transparent)"></div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const config = useRuntimeConfig()
const appUrl = config.public.appUrl

useHead({
  title: 'Download · Scourge',
  meta: [{ name: 'description', content: 'Download Scourge for macOS, Windows, iOS, and Android' }]
})

const activeQR = ref(null)
const primaryLabel = ref('Download for macOS')

onMounted(() => {
  const ua = navigator.userAgent
  if (ua.includes('Windows')) primaryLabel.value = 'Download for Windows'
  else if (/iPhone|iPad/.test(ua)) primaryLabel.value = 'Open on the App Store'
  else if (/Android/.test(ua)) primaryLabel.value = 'Open on Google Play'
  else primaryLabel.value = 'Download for macOS'
})

function downloadPrimary() {
  const ua = navigator.userAgent
  if (ua.includes('Windows')) window.location.href = '#windows'
  else if (/iPhone|iPad/.test(ua)) window.open('https://apps.apple.com', '_blank')
  else if (/Android/.test(ua)) window.open('https://play.google.com', '_blank')
  else window.location.href = '#macos'
}

const desktopPoints = [
  'Native performance on Apple Silicon & Intel',
  'Offline mode with background sync',
  'Global keyboard shortcuts',
  'Push notifications',
]

const mobilePoints = [
  'Full issue management on the go',
  'Push notifications and mentions',
  'Biometric authentication',
  'Dark mode optimised',
]

const extensionPoints = [
  'Create issues from any webpage',
  'Attach URLs and screenshots automatically',
  'Works with Chrome, Edge, and Firefox',
]

const desktopPlatforms = [
  {
    name: 'macOS',
    action: 'Download',
    href: '#macos',
    version: 'v3.4.1',
    badge: 'Universal',
    icon: `<path d="M11.5 3.5C10.5 2.5 9.5 2 8 2c-2 0-3 1-4 1S2.5 2.5 1.5 2c0 2 1 3.5 2 4.5-.5 1-1 2-1 3 0 2.5 1.5 4.5 3.5 4.5.5 0 1-.5 2-.5s1.5.5 2 .5c2 0 3.5-2 3.5-4.5 0-1-.5-2-1-3 .5-.5 1-2 1-4.5z" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/><path d="M8 1C8 1 8.5 0 9.5 0" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>`,
  },
  {
    name: 'Windows',
    action: 'Download',
    href: '#windows',
    version: 'v3.4.1',
    badge: null,
    icon: `<rect x="1" y="1" width="6.5" height="6.5" rx="0.5" stroke="currentColor" stroke-width="1.1"/><rect x="8.5" y="1" width="6.5" height="6.5" rx="0.5" stroke="currentColor" stroke-width="1.1"/><rect x="1" y="8.5" width="6.5" height="6.5" rx="0.5" stroke="currentColor" stroke-width="1.1"/><rect x="8.5" y="8.5" width="6.5" height="6.5" rx="0.5" stroke="currentColor" stroke-width="1.1"/>`,
  },
  {
    name: 'Web app',
    action: 'Open',
    href: appUrl,
    version: null,
    badge: null,
    icon: `<circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.1"/><path d="M8 1.5C6.5 3.5 6 5.5 6 8s.5 4.5 2 6.5M8 1.5C9.5 3.5 10 5.5 10 8s-.5 4.5-2 6.5M1.5 8h13" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>`,
  },
  {
    name: 'Linux',
    action: 'Download',
    href: '#linux',
    version: 'v3.4.1 · AppImage',
    badge: null,
    icon: `<path d="M8 1C5 1 4 4 4 6c0 1.5.5 2.5 1 3-.5 1-1 2.5-1 3.5 0 1.5 1 2.5 2 2.5.5 0 1-.5 2-.5s1.5.5 2 .5c1 0 2-1 2-2.5 0-1-.5-2.5-1-3.5.5-.5 1-1.5 1-3C12 4 11 1 8 1z" stroke="currentColor" stroke-width="1.1"/><path d="M6 9.5c-.5 0-1 .5-1 1M10 9.5c.5 0 1 .5 1 1" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>`,
  },
]

const mobileStores = [
  {
    name: 'iOS',
    href: 'https://apps.apple.com',
    icon: `<path d="M11.5 3.5C10.5 2.5 9.5 2 8 2c-2 0-3 1-4 1S2.5 2.5 1.5 2c0 2 1 3.5 2 4.5-.5 1-1 2-1 3 0 2.5 1.5 4.5 3.5 4.5.5 0 1-.5 2-.5s1.5.5 2 .5c2 0 3.5-2 3.5-4.5 0-1-.5-2-1-3 .5-.5 1-2 1-4.5z" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>`,
  },
  {
    name: 'Android',
    href: 'https://play.google.com',
    icon: `<path d="M2 5.5L8 2l6 3.5v5L8 14 2 10.5V5.5z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/><path d="M2 5.5l6 3.5 6-3.5M8 9v5" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>`,
  },
]

const extensions = [
  {
    name: 'Chrome',
    browser: 'Chrome',
    href: 'https://chrome.google.com/webstore',
    icon: `<circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.1"/><circle cx="8" cy="8" r="2.5" stroke="currentColor" stroke-width="1"/><path d="M8 5.5h6M5.5 9.5L2.5 4.5M10.5 9.5l-3 5" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>`,
  },
  {
    name: 'Firefox',
    browser: 'Firefox',
    href: 'https://addons.mozilla.org',
    icon: `<circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.1"/><path d="M8 3C5.5 3 3.5 5 3.5 8c0 2 1 3.5 2.5 4.5C7.5 10 8 9 8 8c0-1 .5-2 1.5-2.5" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>`,
  },
  {
    name: 'Edge',
    browser: 'Edge',
    href: 'https://microsoftedge.microsoft.com/addons',
    icon: `<path d="M3 10.5C3 12.5 5 14.5 8 14.5c3.5 0 5.5-2.5 5.5-5 0-2-1.5-3.5-3.5-4 1 1 1.5 2 1 3-1-2-3-3-5-2.5 1.5.5 2.5 2 2.5 3.5 0 2-1.5 3-3 2.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>`,
  },
]
</script>
