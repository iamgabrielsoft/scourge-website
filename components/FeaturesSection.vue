<template>
  <section class="bg-veryDarkBlue py-28 px-6 lg:px-8 overflow-hidden relative">

    <!-- Top hairline glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
      style="background: linear-gradient(90deg, transparent, rgba(158,92,247,0.4), transparent)"></div>

    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
        <div>
          <p class="text-[10px] tracking-[0.25em] uppercase font-mono text-slateDark mb-4">Features</p>
          <h2 class="text-4xl md:text-5xl font-bold text-almostWhite leading-tight max-w-xl">
            Everything your team<br/>needs in one place.
          </h2>
        </div>
        <p class="text-sm text-slate max-w-sm leading-relaxed">
          Powerful features designed to help you and your team work more efficiently — without the bloat.
        </p>
      </div>

      <!-- Cards grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-lightBlack border border-lightBlack">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="group relative bg-veryDarkBlue p-8 hover:bg-almostBlack transition-colors duration-300 flex flex-col gap-6 overflow-hidden"
        >
          <!-- Per-card radial glow on hover -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :style="{ background: `radial-gradient(ellipse 70% 40% at 50% 0%, ${feature.color}0D 0%, transparent 70%)` }"></div>

          <!-- Icon badge -->
          <div
            class="relative w-10 h-10 rounded flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
            :style="{ background: feature.color + '18' }"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" v-html="feature.iconPath" />
          </div>

          <!-- Text -->
          <div class="relative flex flex-col gap-2 flex-1">
            <h3 class="text-sm font-semibold text-almostWhite">{{ feature.title }}</h3>
            <p class="text-sm text-slate leading-relaxed">{{ feature.description }}</p>
          </div>

          <!-- Mini visual -->
          <div class="relative rounded border border-lightBlack bg-almostBlack p-4 group-hover:border-slateDark transition-colors duration-300">
            <component :is="feature.visual" :color="feature.color" />
          </div>

          <!-- Bottom accent line on hover -->
          <div class="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            :style="{ background: `linear-gradient(90deg, transparent, ${feature.color}60, transparent)` }"></div>
        </div>
      </div>

      <!-- Footer row -->
      <div class="mt-px border border-t-0 border-lightBlack bg-almostBlack px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-sm text-slateDark">
          Trusted by <span class="text-almostWhite font-medium">28,000+</span> product teams worldwide.
        </p>
        <a href="#" class="inline-flex items-center gap-2 text-sm font-medium text-almostWhite hover:text-white transition-colors group">
          Explore all features
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
            class="group-hover:translate-x-0.5 transform transition-transform duration-150">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { defineComponent, h } from 'vue'

// ── Mini visual components ─────────────────────────────────────────

const VisualProjectMgmt = defineComponent({
  props: { color: String },
  setup(props) {
    const rows = [
      { label: 'Design system',  pct: '85%', active: true  },
      { label: 'API integration', pct: '60%', active: false },
      { label: 'QA & testing',   pct: '30%', active: false },
    ]
    return () => h('div', { class: 'space-y-2.5' },
      rows.map(row =>
        h('div', { class: 'flex items-center gap-3', key: row.label }, [
          h('span', {
            class: 'w-1.5 h-1.5 rounded-full shrink-0',
            style: { background: row.active ? props.color : '#394351' }
          }),
          h('span', { class: 'text-xs text-slateDark flex-1 truncate' }, row.label),
          h('div', { class: 'w-20 h-1 rounded-full overflow-hidden shrink-0', style: { background: '#2F3336' } }, [
            h('div', { class: 'h-full rounded-full transition-all', style: { width: row.pct, background: props.color, opacity: row.active ? 1 : 0.35 } })
          ]),
        ])
      )
    )
  }
})

const VisualCollaboration = defineComponent({
  props: { color: String },
  setup(props) {
    const messages = [
      { initials: 'AK', text: 'Shipped onboarding revamp 🚀', c: '#9E5CF7' },
      { initials: 'JL', text: 'PR merged. Great work!',        c: '#2BC2FF' },
      { initials: 'SR', text: 'Closing this issue ✓',           c: '#42DED1' },
    ]
    return () => h('div', { class: 'space-y-2' },
      messages.map((msg, i) =>
        h('div', { class: 'flex items-center gap-2', key: i }, [
          h('div', {
            class: 'w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0',
            style: { background: msg.c + '28', color: msg.c }
          }, msg.initials),
          h('span', { class: 'text-xs text-slateDark truncate' }, msg.text),
        ])
      )
    )
  }
})

const VisualAnalytics = defineComponent({
  props: { color: String },
  setup(props) {
    const bars = [40, 65, 50, 80, 60, 90, 72]
    return () => h('div', { class: 'flex items-end gap-1.5 h-10' },
      bars.map((pct, i) =>
        h('div', {
          key: i,
          class: 'flex-1 rounded-sm',
          style: { height: pct + '%', background: i === 5 ? props.color : props.color + '30' }
        })
      )
    )
  }
})

const VisualDocuments = defineComponent({
  props: { color: String },
  setup(props) {
    const lines = [{ w: '90%', active: true }, { w: '70%' }, { w: '85%' }, { w: '55%' }, { w: '40%' }]
    return () => h('div', { class: 'space-y-1.5' },
      lines.map((line, i) =>
        h('div', {
          key: i,
          class: 'h-1.5 rounded-full',
          style: { width: line.w, background: line.active ? props.color : '#2F3336', opacity: line.active ? 0.9 : 0.5 }
        })
      )
    )
  }
})

const VisualAutomation = defineComponent({
  props: { color: String },
  setup(props) {
    const node = (label) => h('div', {
      class: 'w-9 h-8 rounded border flex items-center justify-center text-[10px] font-mono shrink-0',
      style: { borderColor: props.color + '40', color: props.color, background: props.color + '12' }
    }, label)
    const arrow = () => h('div', { class: 'flex-1 flex items-center gap-0.5' }, [
      h('div', { class: 'flex-1 h-px', style: { background: props.color + '40' } }),
      h('div', { class: 'w-1 h-1 rounded-full', style: { background: props.color } }),
      h('div', { class: 'flex-1 h-px', style: { background: props.color + '40' } }),
    ])
    const checkNode = () => h('div', {
      class: 'w-9 h-8 rounded border flex items-center justify-center shrink-0',
      style: { borderColor: props.color + '40', background: props.color + '12' }
    }, [
      h('svg', { width: 10, height: 10, viewBox: '0 0 10 10', fill: 'none' }, [
        h('path', { d: 'M2 5l2 2 4-4', stroke: props.color, 'stroke-width': '1.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
      ])
    ])
    return () => h('div', { class: 'flex items-center gap-1.5' }, [
      node('IF'), arrow(), node('DO'), arrow(), checkNode()
    ])
  }
})

const VisualIntegrations = defineComponent({
  props: { color: String },
  setup(props) {
    const tools = [
      {
        name: 'GitHub',
        color: '#E6E6E6',
        // GitHub mark
        svg: `<path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>`,
        vb: '0 0 16 16',
      },
      {
        name: 'Slack',
        color: '#E01E5A',
        // Slack hash/grid mark
        svg: `<path fill="#E01E5A" d="M5.042 11.5a1.458 1.458 0 1 1-2.917 0 1.458 1.458 0 0 1 2.917 0zm0 0V6.958a1.458 1.458 0 1 1 2.916 0V11.5a1.458 1.458 0 0 1-2.916 0zm7.916-6.458a1.458 1.458 0 1 1 0 2.916H8.416a1.458 1.458 0 0 1 0-2.916h4.542zm-6.458 0A1.458 1.458 0 1 1 6.5 2.125a1.458 1.458 0 0 1 0 2.917zm6.458 7.916a1.458 1.458 0 0 1-2.916 0V8.417a1.458 1.458 0 0 1 2.916 0V13a1.458 1.458 0 0 1 0-1.542zm0 1.542a1.458 1.458 0 1 1 0-2.917 1.458 1.458 0 0 1 0 2.917zM5.042 8.417A1.458 1.458 0 0 1 2.125 8.5a1.458 1.458 0 0 1 2.917-.083z"/>`,
        vb: '0 0 16 16',
      },
      {
        name: 'Jira',
        color: '#2684FF',
        // Jira diamond mark
        svg: `<path fill="url(#jira-grad)" d="M7.998.065L4.38 3.683l2.18 2.18a.617.617 0 0 0 .874 0l3.183-3.183L7.998.065z"/><path fill="#2684FF" d="M4.38 3.683L.762 7.301a.617.617 0 0 0 0 .874l3.618 3.618 2.18-2.18-3.18-3.93z" opacity=".7"/><path fill="#2684FF" d="M11.617 3.683l-3.619 3.618 2.18 2.18 3.618-3.618a.617.617 0 0 0 0-.874l-.18-.18z" opacity=".7"/><path fill="#2684FF" d="M7.998 9.502l-2.18 2.18 2.18 2.18 2.18-2.18z" opacity=".4"/><defs><linearGradient id="jira-grad" x1="7.998" y1=".065" x2="4.38" y2="3.683" gradientUnits="userSpaceOnUse"><stop stop-color="#2684FF"/><stop offset="1" stop-color="#0052CC"/></linearGradient></defs>`,
        vb: '0 0 16 16',
      },
      {
        name: 'Figma',
        color: '#F24E1E',
        // Figma logomark (simplified)
        svg: `<path fill="#F24E1E" d="M5.333 16A2.667 2.667 0 0 0 8 13.333V10.667H5.333a2.667 2.667 0 0 0 0 5.333z"/><path fill="#A259FF" d="M2.667 8A2.667 2.667 0 0 1 5.333 5.333H8V10.667H5.333A2.667 2.667 0 0 1 2.667 8z"/><path fill="#F24E1E" d="M2.667 2.667A2.667 2.667 0 0 1 5.333 0H8v5.333H5.333A2.667 2.667 0 0 1 2.667 2.667z"/><path fill="#FF7262" d="M8 0h2.667a2.667 2.667 0 0 1 0 5.333H8V0z"/><path fill="#1ABCFE" d="M13.333 8a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0z"/>`,
        vb: '0 0 16 16',
      },
      {
        name: 'Trello',
        color: '#0052CC',
        // Trello board mark
        svg: `<rect width="16" height="16" rx="2" fill="#0052CC"/><rect x="2" y="2" width="5" height="9" rx="1" fill="white"/><rect x="9" y="2" width="5" height="6" rx="1" fill="white"/>`,
        vb: '0 0 16 16',
      },
    ]

    return () => h('div', { class: 'flex items-center justify-between' },
      tools.map(t =>
        h('div', {
          key: t.name,
          title: t.name,
          class: 'w-8 h-8 rounded-full border flex items-center justify-center shrink-0',
          style: { borderColor: t.color + '50', background: t.color + '16' }
        }, [
          h('svg', {
            width: 14, height: 14,
            viewBox: t.vb,
            fill: 'none',
            innerHTML: t.svg,
          })
        ])
      )
    )
  }
})

// ── Feature definitions ────────────────────────────────────────────

const features = [
  {
    title: 'Project Management',
    description: 'Organize tasks, set deadlines, and track progress with tools built for how engineering teams actually work.',
    color: '#9E5CF7',
    visual: VisualProjectMgmt,
    iconPath: `<path d="M2 4h14M2 9h10M2 14h6" stroke="#9E5CF7" stroke-width="1.4" stroke-linecap="round"/>`,
  },
  {
    title: 'Team Collaboration',
    description: 'Work together in real-time with threaded comments, mentions, and shared views — no context switching.',
    color: '#2BC2FF',
    visual: VisualCollaboration,
    iconPath: `<circle cx="6" cy="5" r="2.5" stroke="#2BC2FF" stroke-width="1.3"/><circle cx="12" cy="5" r="2.5" stroke="#2BC2FF" stroke-width="1.3" stroke-opacity="0.5"/><path d="M1 15c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5" stroke="#2BC2FF" stroke-width="1.3" stroke-linecap="round"/><path d="M12 10.5c2.2.3 4 1.9 4 4.5" stroke="#2BC2FF" stroke-width="1.3" stroke-linecap="round" stroke-opacity="0.5"/>`,
  },
  {
    title: 'Advanced Analytics',
    description: 'Get deep insights into team performance, cycle time, and delivery trends with beautiful, actionable reports.',
    color: '#42DED1',
    visual: VisualAnalytics,
    iconPath: `<rect x="1" y="10" width="3" height="7" rx="0.5" stroke="#42DED1" stroke-width="1.3"/><rect x="7" y="6" width="3" height="11" rx="0.5" stroke="#42DED1" stroke-width="1.3"/><rect x="13" y="2" width="3" height="15" rx="0.5" stroke="#42DED1" stroke-width="1.3"/>`,
  },
  {
    title: 'Smart Documents',
    description: 'Write specs, RFCs, and meeting notes that stay connected to your issues, roadmap, and team context.',
    color: '#F5BE31',
    visual: VisualDocuments,
    iconPath: `<rect x="3" y="2" width="12" height="14" rx="1" stroke="#F5BE31" stroke-width="1.3"/><path d="M6 6h6M6 9h4M6 12h5" stroke="#F5BE31" stroke-width="1.3" stroke-linecap="round"/>`,
  },
  {
    title: 'Automations',
    description: 'Build powerful workflows without writing code. Auto-assign, auto-close, and auto-notify on any trigger.',
    color: '#FF5C80',
    visual: VisualAutomation,
    iconPath: `<path d="M10 2L6 9h6l-4 7" stroke="#FF5C80" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>`,
  },
  {
    title: 'Integrations',
    description: 'Connect GitHub, Slack, Figma, and 50+ tools. Scourge fits into your stack — not the other way around.',
    color: '#FF4DFA',
    visual: VisualIntegrations,
    iconPath: `<circle cx="9" cy="9" r="2" stroke="#FF4DFA" stroke-width="1.3"/><path d="M9 2v3M9 13v3M2 9h3M13 9h3" stroke="#FF4DFA" stroke-width="1.3" stroke-linecap="round"/><path d="M4.22 4.22l2.12 2.12M11.66 11.66l2.12 2.12M4.22 13.78l2.12-2.12M11.66 6.34l2.12-2.12" stroke="#FF4DFA" stroke-width="1.3" stroke-linecap="round" stroke-opacity="0.5"/>`,
  },
]
</script>
