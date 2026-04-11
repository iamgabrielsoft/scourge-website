<template>
  <!-- Backdrop blur overlay when mobile menu is open -->
  <div
    v-if="mobileOpen"
    class="fixed inset-0 z-40 bg-almostBlack/80 backdrop-blur-sm lg:hidden"
    @click="mobileOpen = false"
  ></div>

  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled
      ? 'bg-almostBlack/95 backdrop-blur-md border-b border-lightBlack'
      : 'bg-transparent border-b border-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5 shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L22 7.5V16.5L12 22L2 16.5V7.5L12 2Z"
              style="fill: rgba(158,92,247,0.15); stroke: #9E5CF7; stroke-width: 1.2"/>
            <path d="M12 6L18 9.5V16.5L12 20L6 16.5V9.5L12 6Z"
              style="fill: rgba(43,194,255,0.12); stroke: #2BC2FF; stroke-width: 1" opacity="0.8"/>
            <circle cx="12" cy="12" r="2" fill="#9E5CF7"/>
          </svg>
          <span class="text-base font-bold text-almostWhite tracking-tight">Scourge</span>
        </NuxtLink>

        <!-- Desktop nav (center) -->
        <nav class="hidden lg:flex items-center gap-1">
          <button
            v-for="item in navItems"
            :key="item.name"
            class="relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 group"
            :class="activeSection === item.id
              ? 'text-almostWhite'
              : 'text-slate hover:text-almostWhite'"
            @click="scrollTo(item.id)"
          >
            {{ item.name }}
            <!-- Active/hover underline -->
            <span
              class="absolute bottom-1 left-4 right-4 h-px rounded-full transition-all duration-300"
              :class="activeSection === item.id
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-60'"
              style="background: linear-gradient(90deg, #9E5CF7, #2BC2FF)"
            ></span>
          </button>
        </nav>

        <!-- Desktop right actions -->
        <div class="hidden lg:flex items-center gap-3">
          <template v-if="isLoggedIn">
            <a
              :href="`${appUrl}/home`"
              class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-almostWhite rounded transition-all duration-200"
              style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF); box-shadow: 0 0 20px rgba(158,92,247,0.3);"
            >
              Open App
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </template>
          <template v-else>
            <a
              :href="appUrl"
              class="text-sm font-medium text-slate hover:text-almostWhite transition-colors duration-200 px-3 py-2"
            >
              Log in
            </a>
            <a
              :href="`${appUrl}/create`"
              class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-almostWhite rounded transition-all duration-200"
              style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF); box-shadow: 0 0 20px rgba(158,92,247,0.3);"
            >
              Get started
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </template>
        </div>

        <!-- Mobile hamburger -->
        <button
          class="lg:hidden flex flex-col items-center justify-center w-9 h-9 gap-1.5 rounded-md border border-lightBlack hover:border-slateDark transition-colors duration-200"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
        >
          <span
            class="block w-4 h-px bg-slate transition-all duration-300 origin-center"
            :class="mobileOpen ? 'translate-y-[7px] rotate-45 bg-almostWhite' : ''"
          ></span>
          <span
            class="block w-4 h-px bg-slate transition-all duration-300"
            :class="mobileOpen ? 'opacity-0 scale-x-0' : ''"
          ></span>
          <span
            class="block w-4 h-px bg-slate transition-all duration-300 origin-center"
            :class="mobileOpen ? '-translate-y-[7px] -rotate-45 bg-almostWhite' : ''"
          ></span>
        </button>

      </div>
    </div>

    <!-- Mobile menu panel -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="lg:hidden border-t border-lightBlack bg-almostBlack/98 backdrop-blur-md"
      >
        <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">

          <!-- Nav links -->
          <button
            v-for="item in navItems"
            :key="item.name"
            class="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 group"
            :class="activeSection === item.id
              ? 'bg-veryDarkBlue text-almostWhite'
              : 'text-slate hover:text-almostWhite hover:bg-veryDarkBlue'"
            @click="scrollTo(item.id); mobileOpen = false"
          >
            {{ item.name }}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="opacity-40 group-hover:opacity-80 transition-opacity">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- Divider -->
          <div class="h-px bg-lightBlack my-3"></div>

          <!-- Auth actions -->
          <template v-if="isLoggedIn">
            <a
              :href="`${appUrl}/home`"
              class="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-almostWhite rounded-lg transition-all duration-200"
              style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF)"
            >
              Open App
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </template>
          <template v-else>
            <a
              :href="appUrl"
              class="flex items-center justify-center px-4 py-3 text-sm font-medium text-slate hover:text-almostWhite border border-lightBlack hover:border-slateDark rounded-lg transition-colors duration-200"
            >
              Log in
            </a>
            <a
              :href="`${appUrl}/create`"
              class="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-almostWhite rounded-lg transition-all duration-200"
              style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF)"
            >
              Get started free
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </template>

        </div>
      </div>
    </Transition>

  </header>

  <!-- Spacer so content doesn't hide under fixed header -->
  <div class="h-16"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const config = useRuntimeConfig()
const appUrl = config.public.appUrl
const { isLoggedIn } = useAuthState()

const mobileOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('')

const navItems = [
  { name: 'Products',  id: 'products'  },
  { name: 'Community', id: 'community' },
  { name: 'About',     id: 'about'     },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const headerHeight = 64 // h-16
  const top = el.getBoundingClientRect().top + window.scrollY - headerHeight
  window.scrollTo({ top, behavior: 'smooth' })
}

function handleScroll() {
  scrolled.value = window.scrollY > 20

  // Determine which section is currently in view
  const sectionIds = navItems.map(i => i.id)
  let current = ''
  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (!el) continue
    const rect = el.getBoundingClientRect()
    // Section is "active" when its top is within the top half of the viewport
    if (rect.top <= window.innerHeight / 2) {
      current = id
    }
  }
  activeSection.value = current
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
