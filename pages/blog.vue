<template>
  <div class="min-h-screen bg-veryDarkBlue text-almostWhite">

    <!-- Top hairline -->
    <div class="h-px"
      style="background: linear-gradient(90deg, transparent, rgba(158,92,247,0.5), rgba(43,194,255,0.4), transparent)"></div>

    <!-- ─── STICKY NAV ─────────────────────────────────────── -->
    <div class="sticky top-16 z-30 bg-veryDarkBlue/95 backdrop-blur-md border-b border-lightBlack">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between gap-6">

        <!-- Title + category tabs -->
        <div class="flex items-center gap-8 min-w-0">
          <h1 class="text-xl font-bold tracking-tight shrink-0">Blog</h1>
          <nav class="flex items-center gap-0.5 overflow-x-auto scrollbar-none">
            <button
              v-for="cat in categories"
              :key="cat"
              class="px-3 py-1.5 text-sm rounded-md whitespace-nowrap transition-colors duration-150"
              :class="activeCategory === cat
                ? 'text-almostWhite bg-almostBlack'
                : 'text-slate hover:text-almostWhite'"
              @click="activeCategory = cat"
            >
              {{ cat }}
            </button>
          </nav>
        </div>

        <!-- Search + RSS -->
        <div class="flex items-center gap-2 shrink-0">
          <div class="relative w-48">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 text-slateDark" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" stroke-width="1.3"/>
              <path d="M8.5 8.5L11 11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
            <input v-model="search" type="text" placeholder="Search..."
              class="w-full pl-8 pr-10 py-1.5 text-sm bg-almostBlack border border-lightBlack rounded-lg text-almostWhite placeholder-slateDark outline-none focus:border-slateDark transition-colors"/>
           
          </div>

        </div>

      </div>
    </div>

    <!-- ─── CONTENT ────────────────────────────────────────── -->
    <div class="max-w-6xl mx-auto pt-24 px-6 lg:px-8 py-12">

      <!-- Featured 2-col large cards -->
      <div v-if="!search && activeCategory === 'All'" class="grid md:grid-cols-2 gap-3 mb-3">
        <NuxtLink
          v-for="post in featuredPosts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="group flex flex-col rounded-xl border border-lightBlack bg-almostBlack overflow-hidden hover:border-slateDark transition-all duration-200"
        >
          <!-- Cover art -->
          <div class="relative h-52 overflow-hidden flex items-center justify-center"
            :style="{ background: post.coverBg }">
            <div class="absolute inset-0 opacity-20"
              style="background-image: radial-gradient(circle, #394351 1px, transparent 1px); background-size: 20px 20px;"></div>
            <!-- SVG illustration -->
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" v-html="post.coverSvg" class="relative z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></svg>
            <!-- Category badge -->
            <span class="absolute top-3 left-3 text-[9px] font-mono px-2 py-0.5 rounded"
              :style="{ color: post.color, background: post.color + '20', border: `1px solid ${post.color}30` }">
              {{ post.category }}
            </span>
          </div>
          <!-- Meta -->
          <div class="p-6 flex flex-col gap-3 flex-1">
            <p class="text-[11px] text-slateDark">{{ post.author }} · {{ post.date }}</p>
            <h2 class="text-lg font-semibold text-almostWhite leading-snug group-hover:text-white transition-colors">
              {{ post.title }}
            </h2>
            <p class="text-sm text-slate leading-relaxed line-clamp-2 flex-1">{{ post.excerpt }}</p>
            <div class="flex items-center gap-1 text-xs mt-1" :style="{ color: post.color }">
              Read more
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1 5.5h9M6 1.5l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- 3-column regular grid -->
      <div v-if="filteredPosts.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <NuxtLink
          v-for="post in visiblePosts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="group flex flex-col rounded-xl border border-lightBlack bg-almostBlack overflow-hidden hover:border-slateDark transition-all duration-200"
        >
          <!-- Cover art -->
          <div class="relative h-40 flex items-center justify-center overflow-hidden"
            :style="{ background: post.coverBg }">
            <div class="absolute inset-0 opacity-15"
              style="background-image: radial-gradient(circle, #394351 1px, transparent 1px); background-size: 18px 18px;"></div>
            <svg width="80" height="52" viewBox="0 0 80 52" fill="none" v-html="post.coverSvg" class="relative z-10 opacity-75 group-hover:opacity-100 transition-opacity duration-300"></svg>
            <span class="absolute top-2.5 left-2.5 text-[9px] font-mono px-1.5 py-0.5 rounded"
              :style="{ color: post.color, background: post.color + '20', border: `1px solid ${post.color}30` }">
              {{ post.category }}
            </span>
          </div>
          <!-- Meta -->
          <div class="p-5 flex flex-col gap-2 flex-1">
            <p class="text-[10px] text-slateDark">{{ post.author }} · {{ post.date }}</p>
            <h3 class="text-sm font-semibold text-almostWhite leading-snug group-hover:text-white transition-colors flex-1">
              {{ post.title }}
            </h3>
            <p class="text-xs text-slate leading-relaxed line-clamp-2">{{ post.excerpt }}</p>
          </div>
        </NuxtLink>
      </div>

      <!-- Empty state -->
      <div v-else class="flex flex-col items-center justify-center py-24 text-center">
        <div class="w-10 h-10 rounded-lg border border-lightBlack bg-almostBlack flex items-center justify-center mb-4">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="#394351" stroke-width="1.3"/>
            <path d="M11 11L14 14" stroke="#394351" stroke-width="1.3" stroke-linecap="round"/>
          </svg>
        </div>
        <p class="text-sm text-slate mb-1">No posts found</p>
        <p class="text-xs text-slateDark">Try a different keyword or category</p>
      </div>

      <!-- Load more -->
      <div v-if="filteredPosts.length > visibleCount" class="flex justify-center mt-12">
        <button
          class="px-6 py-2.5 text-sm font-medium text-slate hover:text-almostWhite border border-lightBlack hover:border-slateDark rounded-lg bg-almostBlack transition-all duration-150"
          @click="visibleCount += PAGE_SIZE">
          Load more
        </button>
      </div>

    </div>

    <!-- Bottom hairline -->
    <div class="h-px"
      style="background: linear-gradient(90deg, transparent, rgba(66,222,209,0.25), transparent)"></div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'Blog · Scourge',
  meta: [{ name: 'description', content: 'Read the latest news and updates from the Scourge team' }]
})

const PAGE_SIZE = 6
const categories = ['All', 'Product', 'AI', 'Engineering', 'Community', 'Changelog', 'Practices']
const activeCategory = ref('All')
const search = ref('')
const visibleCount = ref(PAGE_SIZE)

// ── Cover SVGs (abstract generative art matching brand colors) ──────────────
const starburstSvg = `
  <g opacity="0.9">
    ${Array.from({ length: 24 }, (_, i) => {
      const angle = (i / 24) * Math.PI * 2
      const x1 = 60 + Math.cos(angle) * 4
      const y1 = 40 + Math.sin(angle) * 4
      const x2 = 60 + Math.cos(angle) * 52
      const y2 = 40 + Math.sin(angle) * 36
      return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#9E5CF7" stroke-width="0.8" stroke-opacity="0.7"/>`
    }).join('')}
    <circle cx="60" cy="40" r="3" fill="#9E5CF7"/>
  </g>`

const wavesSvg = `
  <path d="M0 30 Q20 15 40 30 T80 30" stroke="#2BC2FF" stroke-width="1.5" fill="none" stroke-opacity="0.8"/>
  <path d="M0 38 Q20 23 40 38 T80 38" stroke="#2BC2FF" stroke-width="1.2" fill="none" stroke-opacity="0.5"/>
  <path d="M0 46 Q20 31 40 46 T80 46" stroke="#2BC2FF" stroke-width="0.9" fill="none" stroke-opacity="0.3"/>
  <circle cx="40" cy="30" r="2.5" fill="#2BC2FF" opacity="0.7"/>`

const gridSvg = `
  ${Array.from({ length: 6 }, (_, row) =>
    Array.from({ length: 9 }, (_, col) =>
      `<rect x="${col * 10 + 5}" y="${row * 10 + 5}" width="5" height="5" rx="0.8" fill="#42DED1" fill-opacity="${0.1 + Math.random() * 0.5}"/>`
    ).join('')
  ).join('')}`

const barsSvg = `
  <rect x="5"  y="28" width="10" height="24" rx="1.5" fill="#F5BE31" fill-opacity="0.7"/>
  <rect x="20" y="18" width="10" height="34" rx="1.5" fill="#F5BE31" fill-opacity="0.8"/>
  <rect x="35" y="8"  width="10" height="44" rx="1.5" fill="#F5BE31" fill-opacity="0.9"/>
  <rect x="50" y="22" width="10" height="30" rx="1.5" fill="#F5BE31" fill-opacity="0.6"/>
  <rect x="65" y="14" width="10" height="38" rx="1.5" fill="#F5BE31" fill-opacity="0.75"/>`

const agentSvg = `
  <circle cx="40" cy="26" r="14" stroke="#9E5CF7" stroke-width="1.2" fill="none"/>
  <circle cx="40" cy="26" r="6"  fill="#9E5CF7" fill-opacity="0.25" stroke="#9E5CF7" stroke-width="0.8"/>
  <circle cx="40" cy="26" r="2"  fill="#9E5CF7"/>
  <line x1="40" y1="6"  x2="40" y2="12" stroke="#9E5CF7" stroke-width="1" opacity="0.5"/>
  <line x1="40" y1="40" x2="40" y2="46" stroke="#9E5CF7" stroke-width="1" opacity="0.5"/>
  <line x1="20" y1="26" x2="26" y2="26" stroke="#9E5CF7" stroke-width="1" opacity="0.5"/>
  <line x1="54" y1="26" x2="60" y2="26" stroke="#9E5CF7" stroke-width="1" opacity="0.5"/>
  <circle cx="20" cy="26" r="2.5" fill="#2BC2FF" opacity="0.8"/>
  <circle cx="60" cy="26" r="2.5" fill="#2BC2FF" opacity="0.8"/>
  <circle cx="40" cy="6"  r="2.5" fill="#42DED1" opacity="0.8"/>
  <circle cx="40" cy="46" r="2.5" fill="#FF5C80" opacity="0.8"/>`

const hexSvg = `
  <polygon points="40,4 70,20 70,52 40,68 10,52 10,20" stroke="#FF4DFA" stroke-width="1.2" fill="none" opacity="0.7"/>
  <polygon points="40,16 58,26 58,46 40,56 22,46 22,26" stroke="#FF4DFA" stroke-width="0.9" fill="#FF4DFA" fill-opacity="0.07" opacity="0.9"/>
  <circle cx="40" cy="36" r="5" fill="#FF4DFA" fill-opacity="0.3" stroke="#FF4DFA" stroke-width="0.8"/>`

const codeBlockSvg = `
  <rect x="4" y="8" width="72" height="44" rx="3" stroke="#FF5C80" stroke-width="1" fill="none" stroke-opacity="0.4"/>
  <rect x="4" y="8" width="72" height="8"  rx="3" fill="#FF5C80" fill-opacity="0.12"/>
  <circle cx="12" cy="12" r="1.5" fill="#FF5C80" opacity="0.5"/>
  <circle cx="18" cy="12" r="1.5" fill="#FF5C80" opacity="0.3"/>
  <circle cx="24" cy="12" r="1.5" fill="#FF5C80" opacity="0.2"/>
  <rect x="10" y="22" width="22" height="2.5" rx="1" fill="#9E5CF7" fill-opacity="0.7"/>
  <rect x="36" y="22" width="14" height="2.5" rx="1" fill="#2BC2FF" fill-opacity="0.5"/>
  <rect x="10" y="30" width="16" height="2.5" rx="1" fill="#42DED1" fill-opacity="0.6"/>
  <rect x="30" y="30" width="28" height="2.5" rx="1" fill="#F5BE31" fill-opacity="0.4"/>
  <rect x="10" y="38" width="36" height="2.5" rx="1" fill="#9E5CF7" fill-opacity="0.4"/>
  <rect x="50" y="38" width="18" height="2.5" rx="1" fill="#FF5C80" fill-opacity="0.5"/>`

const loopSvg = `
  <path d="M20 26 Q40 8 60 26 Q40 44 20 26z" stroke="#42DED1" stroke-width="1.3" fill="#42DED1" fill-opacity="0.08"/>
  <circle cx="20" cy="26" r="3.5" fill="#42DED1" fill-opacity="0.5"/>
  <circle cx="60" cy="26" r="3.5" fill="#42DED1" fill-opacity="0.5"/>
  <path d="M57 20 L63 26 L57 32" stroke="#42DED1" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`

const pixelSvg = `
  ${Array.from({ length: 8 }, (_, row) =>
    Array.from({ length: 12 }, (_, col) => {
      const lit = Math.random() > 0.55
      return lit ? `<rect x="${col * 7 + 2}" y="${row * 6 + 2}" width="5" height="4" rx="0.5" fill="#F5BE31" fill-opacity="${(0.3 + Math.random() * 0.7).toFixed(2)}"/>` : ''
    }).join('')
  ).join('')}`

const nodesSvg = `
  <circle cx="40" cy="26" r="5" fill="#9E5CF7" fill-opacity="0.4" stroke="#9E5CF7" stroke-width="1"/>
  <circle cx="18" cy="14" r="3.5" fill="#2BC2FF" fill-opacity="0.4" stroke="#2BC2FF" stroke-width="0.9"/>
  <circle cx="62" cy="14" r="3.5" fill="#42DED1" fill-opacity="0.4" stroke="#42DED1" stroke-width="0.9"/>
  <circle cx="18" cy="38" r="3.5" fill="#FF5C80" fill-opacity="0.4" stroke="#FF5C80" stroke-width="0.9"/>
  <circle cx="62" cy="38" r="3.5" fill="#F5BE31" fill-opacity="0.4" stroke="#F5BE31" stroke-width="0.9"/>
  <line x1="40" y1="26" x2="18" y2="14" stroke="#9BA6B2" stroke-width="0.8" stroke-opacity="0.4"/>
  <line x1="40" y1="26" x2="62" y2="14" stroke="#9BA6B2" stroke-width="0.8" stroke-opacity="0.4"/>
  <line x1="40" y1="26" x2="18" y2="38" stroke="#9BA6B2" stroke-width="0.8" stroke-opacity="0.4"/>
  <line x1="40" y1="26" x2="62" y2="38" stroke="#9BA6B2" stroke-width="0.8" stroke-opacity="0.4"/>`

// ── Posts data ───────────────────────────────────────────────────────────────
const allPosts = [
  {
    slug: 'how-we-use-ai-agents-at-scourge',
    featured: true,
    category: 'AI',
    color: '#9E5CF7',
    author: 'Leila Hassan',
    date: 'Apr 10, 2026',
    title: 'How we use AI agents at Scourge',
    excerpt: 'The workflows that proved most useful across CX, Product, and Engineering — and what they tell us about working with agents day to day.',
    coverBg: 'linear-gradient(135deg, #0d0a1a 0%, #130d1f 100%)',
    coverSvg: starburstSvg,
  },
  {
    slug: 'post-mortem-on-march-24-incident',
    featured: true,
    category: 'Engineering',
    color: '#FF5C80',
    author: 'Marcus Chen',
    date: 'Apr 06, 2026',
    title: 'Post mortem on the March 24th incident',
    excerpt: 'A code change temporarily weakened workspace-level permissions for approximately one hour. Here\'s exactly what happened and what we fixed.',
    coverBg: 'linear-gradient(135deg, #1a0a0f 0%, #160810 100%)',
    coverSvg: codeBlockSvg,
  },
  {
    slug: 'why-we-committed-to-zero-bugs',
    featured: false,
    category: 'Practices',
    color: '#F5BE31',
    author: 'Priya Nair · Marcus Chen',
    date: 'Mar 24, 2026',
    title: 'Why we committed to a zero-bugs policy',
    excerpt: 'Shipping fast doesn\'t mean shipping broken. How we made quality a first-class constraint and what we learned.',
    coverBg: 'linear-gradient(135deg, #141009 0%, #1a1408 100%)',
    coverSvg: pixelSvg,
  },
  {
    slug: 'analytics-for-product-teams',
    featured: false,
    category: 'Product',
    color: '#2BC2FF',
    author: 'Leila Hassan',
    date: 'Mar 17, 2026',
    title: 'How to use Analytics to track and guide your roadmap',
    excerpt: 'A deep dive into using Scourge\'s Analytics module to make data-informed decisions on what to build next.',
    coverBg: 'linear-gradient(135deg, #091520 0%, #0a1a1a 100%)',
    coverSvg: wavesSvg,
  },
  {
    slug: 'building-triage-intelligence',
    featured: false,
    category: 'Engineering',
    color: '#42DED1',
    author: 'Leila Hassan · Priya Nair',
    date: 'Mar 10, 2026',
    title: 'How we built Triage Intelligence',
    excerpt: 'A walkthrough of the ML pipeline and heuristics that power automatic issue prioritisation in Scourge.',
    coverBg: 'linear-gradient(135deg, #091a19 0%, #0d1a18 100%)',
    coverSvg: gridSvg,
  },
  {
    slug: 'agents-for-cursor-integration',
    featured: false,
    category: 'AI',
    color: '#9E5CF7',
    author: 'Marcus Chen',
    date: 'Mar 03, 2026',
    title: 'How Cursor integrated with Scourge Agents',
    excerpt: 'A story about how two tools built for the same developer audience found a natural integration path through our Agents API.',
    coverBg: 'linear-gradient(135deg, #0d0a1a 0%, #110e1f 100%)',
    coverSvg: nodesSvg,
  },
  {
    slug: 'giving-teams-liquidity',
    featured: false,
    category: 'Community',
    color: '#FF4DFA',
    author: 'Priya Nair',
    date: 'Feb 24, 2026',
    title: 'Giving our team liquidity through Scourge\'s first tender offer',
    excerpt: 'How we structured our first tender offer and the principles we used to balance employee and investor interests.',
    coverBg: 'linear-gradient(135deg, #1a0519 0%, #160418 100%)',
    coverSvg: loopSvg,
  },
  {
    slug: 'quality-wednesdays',
    featured: false,
    category: 'Practices',
    color: '#F5BE31',
    author: 'Leila Hassan',
    date: 'Feb 17, 2026',
    title: 'Quality Wednesdays: training your team to see what doesn\'t work',
    excerpt: 'The ritual we invented that turned bug-bashing into a cultural cornerstone — and measurably improved our p90 bug resolution time.',
    coverBg: 'linear-gradient(135deg, #141009 0%, #1a1408 100%)',
    coverSvg: barsSvg,
  },
  {
    slug: 'changelog-march-2026',
    featured: false,
    category: 'Changelog',
    color: '#42DED1',
    author: 'Scourge',
    date: 'Mar 01, 2026',
    title: 'Changelog: March 2026',
    excerpt: 'New: AI Agent delegation, improved keyboard shortcuts, Figma embed support, and 14 smaller fixes.',
    coverBg: 'linear-gradient(135deg, #091a19 0%, #0a1a18 100%)',
    coverSvg: hexSvg,
  },
  {
    slug: 'agent-design-principles',
    featured: false,
    category: 'AI',
    color: '#9E5CF7',
    author: 'Marcus Chen',
    date: 'Jan 29, 2026',
    title: 'Design principles behind Scourge Agents',
    excerpt: 'Why agents should feel like teammates, not tools. The philosophy we used to shape every interaction model decision.',
    coverBg: 'linear-gradient(135deg, #0d0a1a 0%, #130d1f 100%)',
    coverSvg: agentSvg,
  },
]

const featuredPosts = computed(() => allPosts.filter(p => p.featured))

const filteredPosts = computed(() => {
  const q = search.value.toLowerCase().trim()
  return allPosts
    .filter(p => !p.featured)
    .filter(p => {
      const inCat = activeCategory.value === 'All' || p.category === activeCategory.value
      const inSearch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      return inCat && inSearch
    })
})

const visiblePosts = computed(() => filteredPosts.value.slice(0, visibleCount.value))

watch([activeCategory, search], () => { visibleCount.value = PAGE_SIZE })
</script>

<style scoped>
.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
</style>
