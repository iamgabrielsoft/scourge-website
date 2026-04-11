<template>
  <div class="min-h-screen bg-veryDarkBlue text-almostWhite flex flex-col">

    <!-- ─── STICKY HEADER ─────────────────────────────────── -->
    <div class="sticky top-16 z-30 bg-veryDarkBlue/95 backdrop-blur-md border-b border-lightBlack">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between gap-6">
        <h1 class="text-2xl font-bold tracking-tight text-almostWhite">Integrations</h1>
        <!-- Search -->
        <div class="relative w-64">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 text-slateDark" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.3"/>
            <path d="M9.5 9.5L12 12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
          </svg>
          <input
            v-model="search"
            type="text"
            placeholder="Search..."
            class="w-full pl-16 pr-6 py-2 text-sm bg-almostBlack border border-lightBlack rounded-lg text-almostWhite placeholder-slateDark outline-none focus:border-slateDark transition-colors duration-150"
          />
        </div>
      </div>
      <!-- Top hairline accent -->
      <div class="absolute top-0 inset-x-0 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(158,92,247,0.4), rgba(43,194,255,0.3), transparent)"></div>
    </div>

    <!-- ─── BODY: SIDEBAR + CONTENT ───────────────────────── -->
    <div class="max-w-7xl mx-auto w-full px-6 lg:px-8 flex gap-0 flex-1">

      <!-- Left sidebar -->
      <aside class="w-52 shrink-0 py-10 pr-6">
        <nav class="sticky top-36 space-y-0.5 pt-10">
          <button
            v-for="cat in categories"
            :key="cat.id"
            class="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm transition-colors duration-150 group text-left"
            :class="activeCategory === cat.id
              ? 'bg-almostBlack text-almostWhite'
              : 'text-slate hover:text-almostWhite hover:bg-almostBlack/50'"
            @click="setCategory(cat.id)"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
              class="shrink-0 transition-colors"
              :class="activeCategory === cat.id ? 'text-almostWhite' : 'text-slateDark group-hover:text-slate'"
              v-html="cat.icon">
            </svg>
            <span>{{ cat.label }}</span>
          </button>
        </nav>
      </aside>

      <!-- Divider -->
      <div class="w-px bg-lightBlack shrink-0 my-10"></div>

      <!-- Main content -->
      <main class="flex-1 py-10 pr-64 min-w-0">

        <!-- Section heading -->
        <div class="mb-8 pl-10 pt-20">
          <h2 class="text-base font-semibold text-almostWhite mb-1">{{ currentCategory.label }}</h2>
          <p class="text-sm text-slate">{{ currentCategory.description }}</p>
        </div>

        <!-- Cards grid -->
        <div v-if="filteredIntegrations.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 gap-5 pl-10">
          <div
            v-for="item in filteredIntegrations"
            :key="item.name"
            class="group relative  flex flex-col gap-5 rounded-xl border border-lightBlack bg-almostBlack p-5 cursor-pointer transition-all duration-200 hover:border-slateDark"
          >
            <!-- Subtle hover glow -->
            <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              :style="{ background: `radial-gradient(ellipse 80% 60% at 20% 20%, ${item.color}0A 0%, transparent 65%)` }"></div>

            <!-- Top: logo + name -->
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-lightBlack overflow-hidden"
                :style="{ background: item.bg || '#1a1c22' }">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" v-html="item.icon"></svg>
              </div>
              <div>
                <div class="flex items-center gap-1.5">
                  <span class="text-sm font-semibold text-almostWhite">{{ item.name }}</span>
                  <svg v-if="item.verified" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <circle cx="6.5" cy="6.5" r="6" fill="#9E5CF7" fill-opacity="0.2" stroke="#9E5CF7" stroke-width="0.8"/>
                    <path d="M4 6.5l2 2 3.5-3.5" stroke="#9E5CF7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-[11px] text-slateDark">By {{ item.author }}</p>
              </div>
              <span v-if="item.badge"
                class="ml-auto text-[9px] font-mono px-1.5 py-0.5 rounded"
                :style="{ color: item.color, background: item.color + '18', border: `1px solid ${item.color}30` }">
                {{ item.badge }}
              </span>
            </div>

            <!-- Description -->
            <p class="text-xs text-slate leading-relaxed line-clamp-2 flex-1">{{ item.description }}</p>

            <!-- Connect link -->
            <div class="flex items-center gap-1 text-slateDark group-hover:text-slate transition-colors duration-150">
              <span class="text-[11px]">Connect</span>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1 5.5h9M6 1.5l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Empty search state -->
        <div v-else class="flex flex-col items-center justify-center py-24 text-center">
          <div class="w-12 h-12 rounded-xl border border-lightBlack bg-almostBlack flex items-center justify-center mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6.5" stroke="#394351" stroke-width="1.4"/>
              <path d="M14 14L18 18" stroke="#394351" stroke-width="1.4" stroke-linecap="round"/>
            </svg>
          </div>
          <p class="text-sm text-slate mb-1">No results for "{{ search }}"</p>
          <p class="text-xs text-slateDark">Try a different keyword or browse a category</p>
        </div>

        <!-- Browse all link (shown when not in Essentials) -->
        <div v-if="activeCategory !== 'essentials' && filteredIntegrations.length > 0" class="mt-8 pl-10">
          <button class="text-sm font-medium flex items-center gap-1.5 transition-colors duration-150"
            style="color: #9E5CF7"
            @click="setCategory('all')">
            Browse all
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

      </main>
    </div>

    <!-- ─── BUILD YOUR OWN CTA ────────────────────────────── -->
    <section class="border-t border-lightBlack relative overflow-hidden">
      <!-- Crosshatch grid background -->
      <div class="absolute inset-0 pointer-events-none opacity-20"
        style="background-image: linear-gradient(rgba(47,51,54,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(47,51,54,0.6) 1px, transparent 1px); background-size: 32px 32px;"></div>

      <div class="relative max-w-xl mx-auto px-6 py-28 text-center">
        <!-- Big + button -->
        <div class="w-[50%] h-16 rounded-full bg-almostBlack border border-lightBlack flex items-center justify-center mx-auto mb-8 shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="#E6E6E6" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4" style="letter-spacing: -0.02em;">Build your own integration</h2>
        <p class="text-sm text-slate leading-relaxed mb-8 max-w-sm mx-auto">
          Create your own integration with the Scourge API and submit it to the directory.
        </p>
        <a :href="`${appUrl}/create`"
          class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-almostWhite rounded transition-all duration-200"
          style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF); box-shadow: 0 0 24px rgba(158,92,247,0.3);">
          Start building
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const config = useRuntimeConfig()
const appUrl = config.public.appUrl

useHead({ title: 'Integrations · Scourge' })

const search = ref('')
const activeCategory = ref('essentials')

const categories = [
  {
    id: 'essentials', label: 'Essentials',
    description: 'Key integrations to power your Scourge workspace',
    icon: `<path d="M7 1l1.55 3.14L12 4.85l-2.5 2.44.59 3.44L7 9.1l-3.09 1.63L4.5 7.3 2 4.85l3.45-.71L7 1z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>`,
  },
  {
    id: 'engineering', label: 'Engineering',
    description: 'Seamlessly integrate your engineering workflows',
    icon: `<path d="M4 5l-3 3 3 3M10 5l3 3-3 3M7 2l-1 10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    id: 'agents', label: 'AI & Agents',
    description: 'Connect AI teammates and automate delegation',
    icon: `<circle cx="7" cy="7" r="4.5" stroke="currentColor" stroke-width="1.3"/><path d="M7 1v2M7 11v2M1 7h2M11 7h2" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  },
  {
    id: 'design', label: 'Design',
    description: 'Keep design and product in sync',
    icon: `<circle cx="4.5" cy="4.5" r="2" stroke="currentColor" stroke-width="1.2"/><circle cx="9.5" cy="4.5" r="2" stroke="currentColor" stroke-width="1.2"/><circle cx="4.5" cy="9.5" r="2" stroke="currentColor" stroke-width="1.2"/><circle cx="9.5" cy="9.5" r="2" stroke="currentColor" stroke-width="1.2"/>`,
  },
  {
    id: 'collaboration', label: 'Collaboration',
    description: 'Communicate and collaborate without switching apps',
    icon: `<path d="M1 9.5C1 7.01 3.01 5 5.5 5H7V3.5A1.5 1.5 0 0 1 10 3.5V5h1.5A2.5 2.5 0 0 1 14 7.5v2a2.5 2.5 0 0 1-2.5 2.5H5.5A2.5 2.5 0 0 1 3 9.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  },
  {
    id: 'bug-reporting', label: 'Bug Reporting',
    description: 'Capture and triage bugs faster',
    icon: `<path d="M7 1L1 4v6l6 3 6-3V4L7 1z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><path d="M7 4v6M1 4l6 3 6-3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  },
  {
    id: 'automations', label: 'Automations',
    description: 'Trigger actions and connect your workflows',
    icon: `<path d="M8 1L5 7h5l-4 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    id: 'analytics', label: 'Analytics',
    description: 'Measure, track, and improve your team output',
    icon: `<rect x="1" y="9" width="3" height="5" rx="0.5" stroke="currentColor" stroke-width="1.2"/><rect x="6" y="6" width="3" height="8" rx="0.5" stroke="currentColor" stroke-width="1.2"/><rect x="11" y="3" width="3" height="11" rx="0.5" stroke="currentColor" stroke-width="1.2"/>`,
  },
  {
    id: 'security', label: 'Security & Compliance',
    description: 'Enforce access controls and compliance policies',
    icon: `<path d="M7 1L2 3v4c0 3.31 2.24 6.03 5 6.93C9.76 13.03 12 10.31 12 7V3L7 1z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>`,
  },
  {
    id: 'all', label: 'All integrations',
    description: 'Browse every integration available for Scourge',
    icon: `<circle cx="3" cy="3" r="1.5" stroke="currentColor" stroke-width="1.2"/><circle cx="3" cy="8" r="1.5" stroke="currentColor" stroke-width="1.2"/><circle cx="8" cy="3" r="1.5" stroke="currentColor" stroke-width="1.2"/><circle cx="8" cy="8" r="1.5" stroke="currentColor" stroke-width="1.2"/><circle cx="11" cy="11" r="1.5" stroke="currentColor" stroke-width="1.2"/>`,
  },
]

const integrations = [
  // Essentials
  {
    name: 'GitHub', author: 'Scourge', verified: true, badge: null,
    color: '#E6E6E6', bg: '#161b22', categories: ['essentials', 'engineering', 'all'],
    description: 'Automate your pull request and commit workflows and keep issues synced with your codebase.',
    icon: `<path fill="#E6E6E6" d="M11 1.333C5.845 1.333 1.667 5.511 1.667 10.667c0 4.062 2.635 7.504 6.29 8.716.46.083.63-.2.63-.443 0-.218-.008-.943-.012-1.712-2.562.557-3.103-.617-3.103-.617-.419-1.063-1.022-1.346-1.022-1.346-.836-.57.063-.559.063-.559.924.065 1.41.95 1.41.95.82 1.405 2.151 1 2.676.765.083-.595.32-1 .582-1.23-2.041-.232-4.185-1.02-4.185-4.54 0-1.003.358-1.823.945-2.464-.095-.232-.41-1.166.09-2.431 0 0 .77-.246 2.524.94A8.786 8.786 0 0 1 11 6.194c.78.004 1.566.105 2.3.31 1.751-1.186 2.52-.94 2.52-.94.5 1.265.186 2.2.091 2.431.589.641.944 1.461.944 2.464 0 3.528-2.147 4.305-4.194 4.532.33.284.624.845.624 1.703 0 1.228-.011 2.218-.011 2.52 0 .245.165.533.63.443 3.653-1.213 6.286-4.654 6.286-8.714C20.333 5.511 16.155 1.333 11 1.333z"/>`,
  },
  {
    name: 'Slack', author: 'Scourge', verified: true, badge: null,
    color: '#E01E5A', bg: '#1a1016', categories: ['essentials', 'collaboration', 'all'],
    description: 'Create issues from Slack messages and sync threads. Get notified directly in your channels.',
    icon: `<path fill="#E01E5A" d="M5 13.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM5 13.5V8a1.5 1.5 0 0 1 3 0v5.5a1.5 1.5 0 0 1-3 0z"/><path fill="#36C5F0" d="M8.5 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8.5 5H3a1.5 1.5 0 0 1 0-3h5.5a1.5 1.5 0 0 1 0 3z"/><path fill="#2EB67D" d="M17 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zM17 8.5V14a1.5 1.5 0 0 1-3 0V8.5a1.5 1.5 0 0 1 3 0z"/><path fill="#ECB22E" d="M13.5 17a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM13.5 17H19a1.5 1.5 0 0 1 0 3h-5.5a1.5 1.5 0 0 1 0-3z"/>`,
  },
  {
    name: 'Figma', author: 'Scourge', verified: true, badge: null,
    color: '#F24E1E', bg: '#1a100d', categories: ['essentials', 'design', 'all'],
    description: 'Create and link issues directly from Figma. Attach designs to issues and track implementation status.',
    icon: `<path fill="#F24E1E" d="M6.333 20a2.667 2.667 0 0 0 2.667-2.667V14.667H6.333a2.667 2.667 0 0 0 0 5.333z"/><path fill="#A259FF" d="M3.667 11a2.667 2.667 0 0 1 2.666-2.667H9v5.334H6.333A2.667 2.667 0 0 1 3.667 11z"/><path fill="#F24E1E" d="M3.667 5.333A2.667 2.667 0 0 1 6.333 2.667H9V8H6.333A2.667 2.667 0 0 1 3.667 5.333z"/><path fill="#FF7262" d="M9 2.667h2.667a2.667 2.667 0 0 1 0 5.333H9V2.667z"/><path fill="#1ABCFE" d="M14.333 11a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0z"/>`,
  },
  {
    name: 'Jira', author: 'Scourge', verified: true, badge: null,
    color: '#2684FF', bg: '#0c1929', categories: ['essentials', 'all'],
    description: 'Two-way sync between Scourge issues and Jira tickets. Mirror status, assignees, and comments.',
    icon: `<path fill="#2684FF" d="M11 1L6 6l2.5 2.5a.7.7 0 0 0 1 0L13 5 11 1z"/><path fill="#2684FF" fill-opacity=".7" d="M6 6L2 10a.7.7 0 0 0 0 1l4 4 2.5-2.5L6 10V6z"/><path fill="#2684FF" fill-opacity=".7" d="M16 6l-4 4 2.5 2.5L18 9a.7.7 0 0 0 0-1L16 6z"/><path fill="#2684FF" fill-opacity=".4" d="M11 21l5-5-2.5-2.5L11 16l-2.5-2.5L6 16l5 5z"/>`,
  },
  {
    name: 'Notion', author: 'Scourge', verified: true, badge: null,
    color: '#E6E6E6', bg: '#1a1a1a', categories: ['essentials', 'collaboration', 'all'],
    description: 'Pull context from Notion docs into Scourge issues. Link specs, meeting notes, and decisions.',
    icon: `<rect x="3" y="2" width="16" height="18" rx="2" stroke="#E6E6E6" stroke-width="1.3"/><path d="M7 7h8M7 11h5M7 15h6" stroke="#E6E6E6" stroke-width="1.3" stroke-linecap="round"/>`,
  },
  {
    name: 'Google Sheets', author: 'Scourge', verified: true, badge: null,
    color: '#34A853', bg: '#0d1a0f', categories: ['essentials', 'analytics', 'all'],
    description: 'Build custom dashboards and analytics from your Scourge issue and project data.',
    icon: `<rect x="4" y="2" width="14" height="18" rx="1.5" fill="#34A853" fill-opacity="0.15" stroke="#34A853" stroke-width="1.2"/><path d="M7 7h8M7 11h8M7 15h5" stroke="#34A853" stroke-width="1.2" stroke-linecap="round"/><rect x="11" y="11" width="4" height="4" fill="#34A853" fill-opacity="0.3"/>`,
  },
  // Engineering
  {
    name: 'GitLab', author: 'Scourge', verified: true, badge: null,
    color: '#FC6D26', bg: '#1a0f08', categories: ['engineering', 'all'],
    description: 'Automate your Merge Request workflow and keep GitLab pipelines in sync with Scourge.',
    icon: `<path fill="#FC6D26" d="M11 20.5l3.69-11.36H7.31L11 20.5z"/><path fill="#FC6D26" fill-opacity="0.6" d="M11 20.5L7.31 9.14H2.5L11 20.5z"/><path fill="#FC6D26" fill-opacity="0.3" d="M2.5 9.14L1.3 12.9a.8.8 0 0 0 .29.9L11 20.5 2.5 9.14z"/><path fill="#FC6D26" fill-opacity="0.6" d="M11 20.5l3.69-11.36H19.5L11 20.5z"/><path fill="#FC6D26" fill-opacity="0.3" d="M19.5 9.14l1.2 3.76a.8.8 0 0 1-.29.9L11 20.5l8.5-11.36z"/><path fill="#FC6D26" d="M19.5 9.14H14.69l2-6.14a.4.4 0 0 0-.77 0L14.69 9.14H7.31L6.08 3a.4.4 0 0 0-.77 0l2 6.14H2.5"/>`,
  },
  {
    name: 'VS Code', author: 'Community', verified: false, badge: null,
    color: '#007ACC', bg: '#091520', categories: ['engineering', 'all'],
    description: 'Easily build VS Code extensions with Scourge Connect. Browse and update issues without leaving your editor.',
    icon: `<path fill="#007ACC" d="M16.5 1.5l-10 9.5L2 7l-1.5 1 5 5L18 3l-1.5-1.5z"/><path fill="#007ACC" fill-opacity="0.5" d="M18 3L6.5 12.5 2 8.5l-1.5 1.5 6 5.5L19.5 4 18 3z"/>`,
  },
  {
    name: 'Sentry', author: 'Sentry', verified: false, badge: null,
    color: '#FF5C80', bg: '#1a0a0f', categories: ['engineering', 'bug-reporting', 'all'],
    description: 'Create and link issues with Sentry and automate issue creation from errors and performance regressions.',
    icon: `<path fill="#FF5C80" fill-opacity="0.85" d="M11 1L3 19h16L11 1zm0 4l5.5 13H5.5L11 5z"/>`,
  },
  {
    name: 'Datadog', author: 'Datadog', verified: false, badge: null,
    color: '#774AA4', bg: '#120f1a', categories: ['engineering', 'analytics', 'all'],
    description: 'Surface alerts and metric anomalies as Scourge issues. Link monitors directly to engineering work.',
    icon: `<rect x="3" y="3" width="16" height="16" rx="2" fill="#774AA4" fill-opacity="0.15" stroke="#774AA4" stroke-width="1.2"/><path d="M7 14l2.5-4 2 3 2.5-5 2 6" stroke="#774AA4" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    name: 'Raycast', author: 'Raycast', verified: false, badge: null,
    color: '#FF6363', bg: '#1a0d0d', categories: ['engineering', 'all'],
    description: 'Create, search, and modify your Scourge issues from anywhere with a keyboard shortcut.',
    icon: `<path fill="#FF6363" fill-opacity="0.85" d="M4 11L11 4l7 7-7 7-7-7z"/><path d="M11 7v8M7 11h8" stroke="#FF6363" stroke-opacity="0.5" stroke-width="1.2" stroke-linecap="round"/>`,
  },
  // Collaboration
  {
    name: 'Discord', author: 'Community', verified: false, badge: null,
    color: '#5865F2', bg: '#0c0e1f', categories: ['collaboration', 'all'],
    description: 'Post Scourge notifications to Discord channels and create issues from server messages.',
    icon: `<path fill="#5865F2" d="M16.94 4.57a16.51 16.51 0 0 0-4.07-1.27.06.06 0 0 0-.07.03c-.18.32-.37.73-.51 1.05a15.24 15.24 0 0 0-4.58 0 10.6 10.6 0 0 0-.51-1.05.06.06 0 0 0-.07-.03A16.47 16.47 0 0 0 3.06 4.57a.06.06 0 0 0-.03.02C1.4 7.11.96 9.57 1.17 12a.07.07 0 0 0 .03.05 16.59 16.59 0 0 0 4.99 2.52.07.07 0 0 0 .07-.02c.38-.53.72-1.08 1.01-1.67a.06.06 0 0 0-.03-.09 10.92 10.92 0 0 1-1.56-.75.07.07 0 0 1 0-.1c.1-.08.21-.16.31-.24a.06.06 0 0 1 .06 0c3.28 1.5 6.83 1.5 10.07 0a.06.06 0 0 1 .07 0c.1.08.2.16.31.24a.07.07 0 0 1 0 .1c-.5.3-1.02.55-1.57.74a.07.07 0 0 0-.03.09c.3.59.64 1.14 1.01 1.67a.07.07 0 0 0 .07.02 16.55 16.55 0 0 0 5-2.52.07.07 0 0 0 .03-.05c.25-2.8-.42-5.24-1.76-7.4a.05.05 0 0 0-.03-.03zM7.68 10.5c-.99 0-1.8-.91-1.8-2.03s.8-2.03 1.8-2.03c1.01 0 1.82.92 1.8 2.03 0 1.12-.8 2.03-1.8 2.03zm6.63 0c-.99 0-1.8-.91-1.8-2.03s.8-2.03 1.8-2.03c1.01 0 1.82.92 1.8 2.03 0 1.12-.79 2.03-1.8 2.03z"/>`,
  },
  {
    name: 'Intercom', author: 'Community', verified: false, badge: null,
    color: '#2BC2FF', bg: '#091520', categories: ['collaboration', 'all'],
    description: 'Keep a tight feedback loop between customers and engineering. File issues straight from Intercom conversations.',
    icon: `<rect x="3" y="3" width="16" height="16" rx="3" fill="#2BC2FF" fill-opacity="0.15" stroke="#2BC2FF" stroke-width="1.2"/><path d="M7 8h8M7 11h6M7 14h4" stroke="#2BC2FF" stroke-width="1.3" stroke-linecap="round"/>`,
  },
  // Design
  {
    name: 'Framer', author: 'Community', verified: false, badge: 'New',
    color: '#0099FF', bg: '#091620', categories: ['design', 'all'],
    description: 'Attach Framer prototype links to issues and track design-to-dev handoff status automatically.',
    icon: `<path fill="#0099FF" fill-opacity="0.9" d="M5 3h12v7h-6L5 3z"/><path fill="#0099FF" fill-opacity="0.6" d="M5 10h6l6 7H5v-7z"/><path fill="#0099FF" fill-opacity="0.3" d="M5 17h6l-3 4H5v-4z"/>`,
  },
  // Automations
  {
    name: 'Zapier', author: 'Community', verified: false, badge: null,
    color: '#FF4A00', bg: '#1a0c00', categories: ['automations', 'all'],
    description: 'Connect Scourge to 5,000+ apps via Zapier. Trigger actions and sync data across your entire stack.',
    icon: `<path fill="#FF4A00" d="M11 3l2 6h6l-5 3.5 2 6L11 15l-5 3.5 2-6L3 9h6l2-6z"/>`,
  },
  {
    name: 'Make', author: 'Community', verified: false, badge: null,
    color: '#9E5CF7', bg: '#130d1f', categories: ['automations', 'all'],
    description: 'Build advanced automation scenarios with Scourge using Make\'s visual workflow builder.',
    icon: `<circle cx="11" cy="11" r="8" stroke="#9E5CF7" stroke-width="1.3"/><path d="M8 11h6M11 8v6" stroke="#9E5CF7" stroke-width="1.3" stroke-linecap="round"/>`,
  },
  // Analytics
  {
    name: 'Mixpanel', author: 'Community', verified: false, badge: null,
    color: '#7856FF', bg: '#110f1f', categories: ['analytics', 'all'],
    description: 'Create issues from Mixpanel funnel drop-offs and user behaviour anomalies automatically.',
    icon: `<path fill="#7856FF" fill-opacity="0.85" d="M3 18V9l4 3 4-6 4 4 4-5v13H3z"/>`,
  },
  // Security
  {
    name: 'Okta', author: 'Scourge', verified: true, badge: null,
    color: '#007DC1', bg: '#091520', categories: ['security', 'all'],
    description: 'Enforce SSO and SCIM provisioning. Manage workspace access through your Okta org.',
    icon: `<circle cx="11" cy="11" r="8" stroke="#007DC1" stroke-width="1.3"/><circle cx="11" cy="11" r="3" fill="#007DC1" fill-opacity="0.3" stroke="#007DC1" stroke-width="1"/>`,
  },
  // Bug Reporting
  {
    name: 'Linear', author: 'Community', verified: false, badge: null,
    color: '#5E6AD2', bg: '#0e0f1f', categories: ['bug-reporting', 'all'],
    description: 'Migrate issues from Linear to Scourge or run both in parallel during your transition.',
    icon: `<path fill="#5E6AD2" d="M3.5 14.5l8.5-11 5.5 5.5-11 8.5L3.5 14.5z"/><path fill="#5E6AD2" fill-opacity="0.4" d="M3 11.5L11.5 3 14 5.5 5.5 14 3 11.5z"/>`,
  },
]

function setCategory(id) {
  activeCategory.value = id
  search.value = ''
}

const currentCategory = computed(
  () => categories.find(c => c.id === activeCategory.value) || categories[0]
)

const filteredIntegrations = computed(() => {
  const q = search.value.toLowerCase().trim()
  return integrations.filter(i => {
    const inCategory = activeCategory.value === 'all'
      ? true
      : i.categories.includes(activeCategory.value)
    const matchesSearch = q
      ? i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)
      : true
    return inCategory && matchesSearch
  })
})

// When searching, show all categories
watch(search, (val) => {
  if (val.trim()) activeCategory.value = 'all'
})
</script>
