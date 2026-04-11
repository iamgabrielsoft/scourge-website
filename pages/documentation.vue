<template>
  <div class="min-h-screen bg-veryDarkBlue text-almostWhite flex flex-col">


    <div class="flex pt-12 flex-1">

      <!-- ─── LEFT SIDEBAR ────────────────────────────────────── -->
      <aside class="fixed top-12 left-0 bottom-0 w-56 border-r border-lightBlack bg-veryDarkBlue overflow-y-auto flex flex-col z-40">
        <nav class="flex-1 py-4 px-2 space-y-0.5">
          <div v-for="section in navSections" :key="section.label">
            <!-- Section header -->
            <button
              class="w-full flex items-center justify-between gap-2 px-3 py-1.5 rounded-md text-xs transition-colors duration-150 group"
              :class="openSections.includes(section.label)
                ? 'text-almostWhite'
                : 'text-slate hover:text-almostWhite'"
              @click="toggleSection(section.label)"
            >
              <div class="flex items-center gap-2">
                <svg v-if="section.icon" width="13" height="13" viewBox="0 0 13 13" fill="none"
                  v-html="section.icon" class="shrink-0 text-slateDark group-hover:text-slate transition-colors"></svg>
                <span class="font-medium">{{ section.label }}</span>
              </div>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                class="shrink-0 text-slateDark transition-transform duration-200"
                :class="openSections.includes(section.label) ? 'rotate-180' : ''">
                <path d="M2 4l3.5 3.5L9 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <!-- Children -->
            <div v-if="openSections.includes(section.label)" class="ml-3 mt-0.5 space-y-0.5 border-l border-lightBlack pl-3">
              <button
                v-for="item in section.items"
                :key="item.label"
                class="w-full text-left flex items-center gap-2 px-2 py-1 rounded text-xs transition-colors duration-150"
                :class="activeDoc === item.label
                  ? 'text-almostWhite bg-almostBlack'
                  : 'text-slate hover:text-almostWhite hover:bg-almostBlack/50'"
                @click="activeDoc = item.label"
              >
                <svg v-if="item.icon" width="11" height="11" viewBox="0 0 11 11" fill="none"
                  v-html="item.icon" :style="item.color ? { color: item.color } : {}"
                  class="shrink-0 text-slateDark"></svg>
                {{ item.label }}
              </button>
            </div>
          </div>
        </nav>

        <!-- Bottom links -->
        <div class="border-t border-lightBlack p-3 space-y-0.5">
          <a href="/documentation/api"
            class="flex items-center gap-2 px-3 py-2 rounded-md text-xs text-slate hover:text-almostWhite hover:bg-almostBlack transition-colors duration-150">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect x="1" y="3" width="10" height="6" rx="1" stroke="currentColor" stroke-width="1.1"/>
              <path d="M4 6h4M3 5l-1 1 1 1M9 5l1 1-1 1" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Scourge API
          </a>
          <a href="/contact"
            class="flex items-center gap-2 px-3 py-2 rounded-md text-xs text-slate hover:text-almostWhite hover:bg-almostBlack transition-colors duration-150">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 9.5C2 7.5 3.5 6 6 6s4 1.5 4 3.5M6 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>
            </svg>
            Contact support
          </a>
        </div>
      </aside>

      <!-- ─── MAIN CONTENT ─────────────────────────────────────── -->
      <main class="ml-56 flex-1 px-10 py-10 max-w-5xl">

        <!-- Page header -->
        <div class="mb-10">
          <h1 class="text-3xl font-bold mb-2" style="letter-spacing: -0.02em;">Scourge Docs</h1>
          <p class="text-sm text-slate">Get an overview of Scourge's features, integrations, and how to use them.</p>
        </div>

        <!-- Popular -->
        <div class="mb-12">
          <h2 class="text-base font-semibold text-almostWhite mb-4">Popular</h2>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              v-for="card in popularCards"
              :key="card.title"
              class="group relative flex flex-col gap-0 rounded-xl border border-lightBlack bg-almostBlack overflow-hidden text-left hover:border-slateDark transition-all duration-200 p-5 pt-8"
              @click="activeDoc = card.title"
            >
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                :style="{ background: `radial-gradient(ellipse 80% 60% at 20% 20%, ${card.color}0C 0%, transparent 70%)` }"></div>
              <!-- Icon top-left -->
              <div class="absolute top-4 left-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" v-html="card.icon"
                  :style="{ color: card.color }"></svg>
              </div>
              <h3 class="text-sm font-semibold text-almostWhite mb-2 mt-4">{{ card.title }}</h3>
              <p class="text-xs text-slate leading-relaxed">{{ card.description }}</p>
              <!-- Bottom accent -->
              <div class="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                :style="{ background: `linear-gradient(90deg, transparent, ${card.color}50, transparent)` }"></div>
            </button>
          </div>
        </div>

        <!-- Basics -->
        <div class="mb-12">
          <h2 class="text-base font-semibold text-almostWhite mb-4">Scourge basics</h2>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              v-for="card in basicCards"
              :key="card.title"
              class="group relative flex flex-col gap-0 rounded-xl border border-lightBlack bg-almostBlack overflow-hidden text-left hover:border-slateDark transition-all duration-200 p-5 pt-8"
              @click="activeDoc = card.title"
            >
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                :style="{ background: `radial-gradient(ellipse 80% 60% at 20% 20%, ${card.color}0C 0%, transparent 70%)` }"></div>
              <div class="absolute top-4 left-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" v-html="card.icon"
                  :style="{ color: card.color }"></svg>
              </div>
              <h3 class="text-sm font-semibold text-almostWhite mb-2 mt-4">{{ card.title }}</h3>
              <p class="text-xs text-slate leading-relaxed">{{ card.description }}</p>
              <div class="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                :style="{ background: `linear-gradient(90deg, transparent, ${card.color}50, transparent)` }"></div>
            </button>
          </div>
        </div>

        <!-- AI & Agents -->
        <div class="mb-12">
          <h2 class="text-base font-semibold text-almostWhite mb-4">AI & Agents</h2>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              v-for="card in agentCards"
              :key="card.title"
              class="group relative flex flex-col gap-0 rounded-xl border border-lightBlack bg-almostBlack overflow-hidden text-left hover:border-slateDark transition-all duration-200 p-5 pt-8"
              @click="activeDoc = card.title"
            >
              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                :style="{ background: `radial-gradient(ellipse 80% 60% at 20% 20%, ${card.color}0C 0%, transparent 70%)` }"></div>
              <div class="absolute top-4 left-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" v-html="card.icon"
                  :style="{ color: card.color }"></svg>
              </div>
              <h3 class="text-sm font-semibold text-almostWhite mb-2 mt-4">{{ card.title }}</h3>
              <p class="text-xs text-slate leading-relaxed">{{ card.description }}</p>
              <div class="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                :style="{ background: `linear-gradient(90deg, transparent, ${card.color}50, transparent)` }"></div>
            </button>
          </div>
        </div>


      </main>
    </div>

    <!-- ─── SEARCH MODAL ──────────────────────────────────────── -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="searchOpen"
        class="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4"
        style="background: rgba(8,9,12,0.85); backdrop-filter: blur(4px);"
        @click.self="searchOpen = false">
        <div class="w-full max-w-xl bg-almostBlack border border-lightBlack rounded-2xl overflow-hidden shadow-2xl">
          <!-- Search input -->
          <div class="flex items-center gap-3 px-4 py-3.5 border-b border-lightBlack">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" class="text-slateDark shrink-0">
              <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" stroke-width="1.3"/>
              <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
            <input
              v-model="searchQuery"
              ref="searchInput"
              type="text"
              placeholder="Search documentation..."
              class="flex-1 bg-transparent text-sm text-almostWhite placeholder-slateDark outline-none"
              @keydown.escape="searchOpen = false"
            />
            <kbd class="text-[9px] font-mono border border-lightBlack rounded px-1.5 py-0.5 text-slateDark">ESC</kbd>
          </div>
          <!-- Results / quick links -->
          <div class="py-2 max-h-80 overflow-y-auto">
            <div v-if="!searchQuery" class="px-4 pb-2">
              <p class="text-[10px] uppercase tracking-widest font-mono text-slateDark mb-2 mt-2">Popular</p>
              <div class="space-y-0.5">
                <button v-for="card in popularCards" :key="card.title"
                  class="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate hover:text-almostWhite hover:bg-veryDarkBlue transition-colors duration-150 text-left"
                  @click="activeDoc = card.title; searchOpen = false">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" v-html="card.icon" :style="{ color: card.color }"></svg>
                  {{ card.title }}
                </button>
              </div>
            </div>
            <div v-else class="px-4 pb-2">
              <div v-for="result in searchResults" :key="result.title"
                class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate hover:text-almostWhite hover:bg-veryDarkBlue transition-colors cursor-pointer"
                @click="activeDoc = result.title; searchOpen = false">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" v-html="result.icon" :style="{ color: result.color }"></svg>
                <div>
                  <p class="text-almostWhite text-xs font-medium">{{ result.title }}</p>
                  <p class="text-[11px] text-slateDark">{{ result.description }}</p>
                </div>
              </div>
              <p v-if="searchResults.length === 0" class="text-sm text-slateDark text-center py-6">No results for "{{ searchQuery }}"</p>
            </div>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed, nextTick, watch } from 'vue'

const config = useRuntimeConfig()
const appUrl = config.public.appUrl

useHead({
  title: 'Documentation · Scourge',
  meta: [{ name: 'description', content: 'Complete documentation for Scourge platform' }]
})

const searchOpen = ref(false)
const searchQuery = ref('')
const searchInput = ref(null)
const activeDoc = ref('Getting started')
const openSections = ref(['Getting started', 'Account'])

function toggleSection(label) {
  const idx = openSections.value.indexOf(label)
  if (idx >= 0) openSections.value.splice(idx, 1)
  else openSections.value.push(label)
}

// Open search modal with ⌘K
if (process.client) {
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      searchOpen.value = true
      nextTick(() => searchInput.value?.focus())
    }
  })
}

watch(searchOpen, (val) => {
  if (val) nextTick(() => searchInput.value?.focus())
})

// ── Nav sections ──────────────────────────────────────────────────────────────
const navSections = [
  {
    label: 'Getting started',
    icon: `<path d="M8 1L1 4.5v7L8 15l7-3.5v-7L8 1z" stroke="currentColor" stroke-width="1.1" stroke-linejoin="round"/>`,
    items: [
      { label: 'Introduction',         icon: `<path d="M2 8h12M8 2v12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>` },
      { label: 'Quickstart',           icon: `<path d="M8 1L5 7h5l-4 8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>` },
      { label: 'Import from Jira',     icon: null },
      { label: 'Import from Linear',   icon: null },
      { label: 'Keyboard shortcuts',   icon: null },
    ],
  },
  {
    label: 'Account',
    icon: `<circle cx="6.5" cy="4" r="2.5" stroke="currentColor" stroke-width="1.1"/><path d="M1 12c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>`,
    items: [
      { label: 'Profile',          icon: `<circle cx="6.5" cy="4" r="2.5" stroke="currentColor" stroke-width="1.1"/>`, color: '#9E5CF7' },
      { label: 'Preferences',      icon: `<rect x="1" y="1" width="11" height="11" rx="1.5" stroke="currentColor" stroke-width="1.1"/><path d="M4 6.5h5M6.5 4v5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>`, color: '#2BC2FF' },
      { label: 'Notifications',    icon: `<path d="M6.5 1v1M2 8.5c0-2.5 2-4.5 4.5-4.5S11 6 11 8.5l1 2H1.5l1-2z" stroke="currentColor" stroke-width="1.1"/><path d="M5 10.5v.5a1.5 1.5 0 0 0 3 0v-.5" stroke="currentColor" stroke-width="1.1"/>`, color: '#42DED1' },
      { label: 'Security & Access', icon: `<path d="M6.5 1L1 3.5v3.5C1 9.5 3.5 12 6.5 13c3-1 5.5-3.5 5.5-6V3.5L6.5 1z" stroke="currentColor" stroke-width="1.1"/>`, color: '#FF5C80' },
    ],
  },
  {
    label: 'Issues',
    icon: `<circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" stroke-width="1.1"/><path d="M6.5 3.5v3l2 1.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>`,
    items: [
      { label: 'Creating issues',    icon: null },
      { label: 'Issue properties',   icon: null },
      { label: 'Issue relations',    icon: null },
      { label: 'Workflows',          icon: null },
      { label: 'Select & bulk edit', icon: null },
    ],
  },
  {
    label: 'Projects',
    icon: `<rect x="1" y="1" width="5" height="5" rx="0.8" stroke="currentColor" stroke-width="1.1"/><rect x="7" y="1" width="5" height="5" rx="0.8" stroke="currentColor" stroke-width="1.1"/><rect x="1" y="7" width="5" height="5" rx="0.8" stroke="currentColor" stroke-width="1.1"/><rect x="7" y="7" width="5" height="5" rx="0.8" stroke="currentColor" stroke-width="1.1"/>`,
    items: [
      { label: 'Overview',        icon: null },
      { label: 'Roadmaps',        icon: null },
      { label: 'Milestones',      icon: null },
      { label: 'Project updates', icon: null },
    ],
  },
  {
    label: 'Teams',
    icon: `<circle cx="4" cy="5" r="2" stroke="currentColor" stroke-width="1.1"/><circle cx="9" cy="5" r="2" stroke="currentColor" stroke-width="1.1"/><path d="M1 12c0-2 1.5-3 3-3s2.5 1 3 2c.5-1 1.5-2 3-2s3 1 3 3" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>`,
    items: [
      { label: 'Creating teams',  icon: null },
      { label: 'Team settings',   icon: null },
      { label: 'Members & roles', icon: null },
    ],
  },
  {
    label: 'Cycles',
    icon: `<path d="M11 3A6 6 0 1 1 5 10" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/><path d="M11 3l-2-2M11 3l-2 2" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>`,
    items: [
      { label: 'What are Cycles?', icon: null },
      { label: 'Running a cycle',  icon: null },
      { label: 'Cycle analytics',  icon: null },
    ],
  },
  {
    label: 'AI & Agents',
    icon: `<circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" stroke-width="1.1"/><path d="M6.5 1v2M6.5 10v2M1 6.5h2M10 6.5h2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>`,
    items: [
      { label: 'AI overview',      icon: null },
      { label: 'Agents',           icon: null },
      { label: 'AI summaries',     icon: null },
      { label: 'Smart commands',   icon: null },
    ],
  },
  {
    label: 'Integrations',
    icon: `<path d="M4 6.5H1M12 6.5h2M6.5 1v2M6.5 10v2" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/><circle cx="6.5" cy="6.5" r="2.5" stroke="currentColor" stroke-width="1.1"/>`,
    items: [
      { label: 'GitHub',  icon: null },
      { label: 'Slack',   icon: null },
      { label: 'Figma',   icon: null },
      { label: 'Jira',    icon: null },
      { label: 'All integrations', icon: null },
    ],
  },
  {
    label: 'Analytics',
    icon: `<rect x="1" y="8" width="3" height="5" rx="0.5" stroke="currentColor" stroke-width="1.1"/><rect x="6" y="5" width="3" height="8" rx="0.5" stroke="currentColor" stroke-width="1.1"/><rect x="11" y="2" width="3" height="11" rx="0.5" stroke="currentColor" stroke-width="1.1"/>`,
    items: [
      { label: 'Dashboards',   icon: null },
      { label: 'Reports',      icon: null },
      { label: 'Metrics',      icon: null },
    ],
  },
  {
    label: 'Administration',
    icon: `<rect x="1" y="1" width="11" height="11" rx="1.5" stroke="currentColor" stroke-width="1.1"/><path d="M4 6.5h5M6.5 4v5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/>`,
    items: [
      { label: 'Workspace settings', icon: null },
      { label: 'SSO & SCIM',         icon: null },
      { label: 'Audit log',          icon: null },
      { label: 'API keys',           icon: null },
    ],
  },
]

// ── Doc cards ─────────────────────────────────────────────────────────────────
const popularCards = [
  {
    title: 'Start Guide',
    color: '#9E5CF7',
    description: 'Learn how to use the app and follow best practices for software building.',
    icon: `<path d="M8 1l7 4v6l-7 4-7-4V5l7-4z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>`,
  },
  {
    title: 'Import Issues',
    color: '#2BC2FF',
    description: 'Quickly move issues from your existing issue tracker into Scourge.',
    icon: `<path d="M8 1v10M4 8l4 4 4-4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 14h12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`,
  },
  {
    title: 'Projects',
    color: '#42DED1',
    description: 'Shape your product ideas and plan what to build next with roadmaps.',
    icon: `<rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/><rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.2"/>`,
  },
  {
    title: 'GitHub Automations',
    color: '#E6E6E6',
    description: 'Link issues and automate pull request workflows directly from GitHub.',
    icon: `<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 0 1 8 3.8c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.53 16 8c0-4.42-3.58-8-8-8z" fill="currentColor"/>`,
  },
]

const basicCards = [
  {
    title: 'Workflows',
    color: '#9E5CF7',
    description: 'Create new statuses and design custom issue workflows for your team.',
    icon: `<path d="M8 1L3 4v8l5 3 5-3V4L8 1z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>`,
  },
  {
    title: 'Select Issues',
    color: '#2BC2FF',
    description: 'Learn how to take actions on multiple issues at a time with bulk editing.',
    icon: `<path d="M2 8l4 4 8-8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: 'Issue Relations',
    color: '#F5BE31',
    description: 'Indicate blocked, blocking, related, and duplicate issues in your workspace.',
    icon: `<path d="M2 8h12M8 2l6 6-6 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: 'Display Options',
    color: '#42DED1',
    description: 'Order, sort, and group issues and projects and customize your views.',
    icon: `<path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`,
  },
  {
    title: 'Cycles',
    color: '#FF5C80',
    description: 'Run time-boxed sprints and track velocity over time with Cycles.',
    icon: `<path d="M13 5A7 7 0 1 1 7 14" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M13 5l-2-2M13 5l-2 2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: 'Roadmaps',
    color: '#FF4DFA',
    description: 'Visualise your long-term product plan with timeline-based roadmaps.',
    icon: `<path d="M2 4h12M2 8h9M2 12h6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`,
  },
  {
    title: 'Views',
    color: '#9E5CF7',
    description: 'Create saved views to filter and group your issues in any way you need.',
    icon: `<circle cx="8" cy="8" r="2.5" stroke="currentColor" stroke-width="1.2"/><path d="M1 8C2.5 4.5 5 2.5 8 2.5S13.5 4.5 15 8c-1.5 3.5-4 5.5-7 5.5S2.5 11.5 1 8z" stroke="currentColor" stroke-width="1.2"/>`,
  },
  {
    title: 'Analytics',
    color: '#42DED1',
    description: 'Track cycle time, throughput, and team performance with built-in analytics.',
    icon: `<rect x="2" y="10" width="3" height="5" rx="0.5" stroke="currentColor" stroke-width="1.2"/><rect x="7" y="6" width="3" height="9" rx="0.5" stroke="currentColor" stroke-width="1.2"/><rect x="12" y="2" width="3" height="13" rx="0.5" stroke="currentColor" stroke-width="1.2"/>`,
  },
]

const agentCards = [
  {
    title: 'AI Overview',
    color: '#9E5CF7',
    description: 'Understand how Scourge uses AI to help your team ship faster.',
    icon: `<circle cx="8" cy="8" r="5.5" stroke="currentColor" stroke-width="1.2"/><path d="M8 2v2M8 12v2M2 8h2M12 8h2" stroke="currentColor" stroke-width="1" stroke-linecap="round"/><circle cx="8" cy="8" r="2" fill="currentColor" fill-opacity="0.3"/>`,
  },
  {
    title: 'Assigning Agents',
    color: '#2BC2FF',
    description: 'Learn how to delegate issues to AI agents and track their progress.',
    icon: `<circle cx="8" cy="5" r="3" stroke="currentColor" stroke-width="1.2"/><path d="M2 14c0-3.5 2.5-6 6-6s6 2.5 6 6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  },
  {
    title: 'AI Summaries',
    color: '#42DED1',
    description: 'Auto-generated summaries for issues, projects, and weekly updates.',
    icon: `<path d="M3 4h10M3 8h7M3 12h5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`,
  },
  {
    title: 'Build Your Own Agent',
    color: '#FF4DFA',
    description: 'Use the Scourge API to create custom agents for your team\'s workflows.',
    icon: `<rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.2"/><path d="M6 8h4M8 6v4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  },
]

// ── Search ────────────────────────────────────────────────────────────────────
const allCards = [...popularCards, ...basicCards, ...agentCards]
const searchResults = computed(() => {
  if (!searchQuery.value.trim()) return []
  const q = searchQuery.value.toLowerCase()
  return allCards.filter(c =>
    c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
  )
})

// ── Keyboard shortcuts table ──────────────────────────────────────────────────
const shortcuts = [
  { action: 'Create new issue',        keys: ['C'] },
  { action: 'Search',                  keys: ['⌘', 'K'] },
  { action: 'Go to inbox',             keys: ['G', 'I'] },
  { action: 'Go to issues',            keys: ['G', 'E'] },
  { action: 'Go to projects',          keys: ['G', 'P'] },
  { action: 'Assign to me',            keys: ['A'] },
  { action: 'Change priority',         keys: ['P'] },
  { action: 'Change status',           keys: ['S'] },
  { action: 'Toggle sidebar',          keys: ['⌘', '\\'] },
  { action: 'Copy issue URL',          keys: ['⌘', 'Shift', '.'] },
]
</script>

<style scoped>
aside::-webkit-scrollbar { width: 0; }
</style>
