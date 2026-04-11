<template>
  <section id="products" class="bg-almostBlack py-28 px-6 lg:px-8 overflow-hidden">
    <div class="max-w-7xl mx-auto">

      <!-- Section label + headline -->
      <div class="mb-20">
        <p class="text-[10px] tracking-[0.25em] uppercase font-mono text-slateDark mb-4">Product</p>
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 class="text-4xl md:text-5xl font-bold text-almostWhite leading-tight max-w-2xl">
            Everything you need to<br/>
            <span class="text-brand-purple">ship faster.</span>
          </h2>
          <p class="text-slate max-w-sm text-sm leading-relaxed">
            A complete suite of tools built around how modern product teams actually work — from idea to deployment.
          </p>
        </div>
      </div>

      <!-- Bento grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-px bg-lightBlack border border-lightBlack">

        <!-- Big card: Intake — spans 7 cols -->
        <div class="md:col-span-7 bg-almostBlack p-8 lg:p-10 group hover:bg-veryDarkBlue transition-colors duration-300">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 rounded flex items-center justify-center" style="background: rgba(158,92,247,0.12)">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4h12M2 8h8M2 12h5" stroke="#9E5CF7" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <span class="text-xs font-medium text-slateDark tracking-wide">Intake</span>
          </div>
          <h3 class="text-xl font-semibold text-almostWhite mb-3">Capture every request, automatically</h3>
          <p class="text-sm text-slate leading-relaxed mb-8">
            Scourge collects feedback from Slack, email, and support tickets and turns it into structured product insights — no manual triage required.
          </p>
          <!-- Mini UI mockup -->
          <div class="rounded border border-lightBlack bg-veryDarkBlue p-4 space-y-2">
            <div v-for="item in intakeItems" :key="item.label"
              class="flex items-center justify-between py-2 px-3 rounded text-xs border border-lightBlack group-hover:border-slateDark transition-colors">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full" :style="{ background: item.color }"></span>
                <span class="text-slate">{{ item.label }}</span>
              </div>
              <span class="text-slateDark">{{ item.source }}</span>
            </div>
          </div>
        </div>

        <!-- Small card: Plan — spans 5 cols -->
        <div class="md:col-span-5 bg-almostBlack p-8 lg:p-10 group hover:bg-veryDarkBlue transition-colors duration-300">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 rounded flex items-center justify-center" style="background: rgba(43,194,255,0.1)">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="1" width="6" height="6" rx="1" stroke="#2BC2FF" stroke-width="1.4"/>
                <rect x="9" y="1" width="6" height="6" rx="1" stroke="#2BC2FF" stroke-width="1.4" stroke-opacity="0.5"/>
                <rect x="1" y="9" width="6" height="6" rx="1" stroke="#2BC2FF" stroke-width="1.4" stroke-opacity="0.5"/>
                <rect x="9" y="9" width="6" height="6" rx="1" stroke="#2BC2FF" stroke-width="1.4" stroke-opacity="0.3"/>
              </svg>
            </div>
            <span class="text-xs font-medium text-slateDark tracking-wide">Plan</span>
          </div>
          <h3 class="text-xl font-semibold text-almostWhite mb-3">Roadmaps that stay in sync</h3>
          <p class="text-sm text-slate leading-relaxed mb-8">
            Build quarter plans that connect directly to the work happening in your team — no spreadsheet juggling.
          </p>
          <!-- Tiny roadmap visual -->
          <div class="space-y-3">
            <div v-for="row in roadmapRows" :key="row.label" class="flex items-center gap-3">
              <span class="text-xs text-slateDark w-12 shrink-0">{{ row.label }}</span>
              <div class="flex-1 h-5 rounded bg-veryDarkBlue border border-lightBlack relative overflow-hidden">
                <div class="h-full rounded transition-all duration-500"
                  :style="{ width: row.width, background: row.color, opacity: 0.7 }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Small card: Build — spans 5 cols -->
        <div class="md:col-span-5 bg-almostBlack p-8 lg:p-10 group hover:bg-veryDarkBlue transition-colors duration-300">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 rounded flex items-center justify-center" style="background: rgba(66,222,209,0.1)">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="#42DED1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="text-xs font-medium text-slateDark tracking-wide">Build</span>
          </div>
          <h3 class="text-xl font-semibold text-almostWhite mb-3">Issues that move at your speed</h3>
          <p class="text-sm text-slate leading-relaxed mb-8">
            Lightweight issue tracking that doesn't slow down engineers. Keyboard-first, blazing fast, and opinionated by design.
          </p>
          <!-- Status chips -->
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in buildTags" :key="tag.label"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs border border-lightBlack text-slate">
              <span class="w-1.5 h-1.5 rounded-full" :style="{ background: tag.color }"></span>
              {{ tag.label }}
            </span>
          </div>
        </div>

        <!-- Big card: Agents — spans 7 cols -->
        <div class="md:col-span-7 bg-almostBlack p-8 lg:p-10 group hover:bg-veryDarkBlue transition-colors duration-300 relative overflow-hidden">
          <!-- Glow -->
          <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style="background: radial-gradient(circle, rgba(158,92,247,0.08) 0%, transparent 70%)"></div>
          <div class="flex items-center gap-3 mb-6 relative">
            <div class="w-8 h-8 rounded flex items-center justify-center" style="background: rgba(245,190,49,0.1)">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.22 3.22l1.42 1.42M11.36 11.36l1.42 1.42M3.22 12.78l1.42-1.42M11.36 4.64l1.42-1.42" stroke="#F5BE31" stroke-width="1.3" stroke-linecap="round"/>
                <circle cx="8" cy="8" r="2.5" stroke="#F5BE31" stroke-width="1.3"/>
              </svg>
            </div>
            <span class="text-xs font-medium text-slateDark tracking-wide">AI Agents</span>
            <span class="ml-auto text-[10px] px-2 py-0.5 rounded-full border text-brand-yellow font-mono" style="border-color: rgba(245,190,49,0.3); color: #F5BE31">NEW</span>
          </div>
          <h3 class="text-xl font-semibold text-almostWhite mb-3 relative">Let agents do the heavy lifting</h3>
          <p class="text-sm text-slate leading-relaxed mb-8 relative">
            AI agents draft specs, write tests, triage bugs, and open PRs — so your team focuses on decisions that need human judgment.
          </p>
          <!-- Agent log feed -->
          <div class="rounded border border-lightBlack bg-veryDarkBlue p-4 font-mono text-xs space-y-2 relative">
            <div v-for="(log, idx) in agentLogs" :key="idx" class="flex items-start gap-2">
              <span class="text-slateDark shrink-0">{{ log.time }}</span>
              <span :style="{ color: log.color }">{{ log.action }}</span>
              <span class="text-slateDark truncate">{{ log.detail }}</span>
            </div>
            <div class="flex items-center gap-2 pt-1">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
              <span class="text-slateDark">agent running…</span>
            </div>
          </div>
        </div>

        <!-- Full-width bottom card: Monitor -->
        <div class="md:col-span-12 bg-almostBlack p-8 lg:p-10 group hover:bg-veryDarkBlue transition-colors duration-300">
          <div class="flex flex-col lg:flex-row lg:items-center gap-8">
            <div class="lg:w-1/2">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-8 rounded flex items-center justify-center" style="background: rgba(255,92,128,0.1)">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <polyline points="1,12 5,6 8,9 11,4 15,7" stroke="#FF5C80" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <span class="text-xs font-medium text-slateDark tracking-wide">Monitor</span>
              </div>
              <h3 class="text-xl font-semibold text-almostWhite mb-3">Pulse on your product, always</h3>
              <p class="text-sm text-slate leading-relaxed">
                Track cycle time, deployment frequency, and team velocity. Surface bottlenecks before they become blockers.
              </p>
            </div>
            <!-- Metric pills -->
            <div class="lg:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div v-for="metric in metrics" :key="metric.label"
                class="rounded border border-lightBlack bg-veryDarkBlue p-4">
                <p class="text-2xl font-bold mb-1" :style="{ color: metric.color }">{{ metric.value }}</p>
                <p class="text-xs text-slateDark">{{ metric.label }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const intakeItems = [
  { label: 'Dark mode toggle on mobile', source: 'Slack', color: '#9E5CF7' },
  { label: 'Export to CSV broken', source: 'Support', color: '#FF5C80' },
  { label: 'Bulk invite team members', source: 'Email', color: '#2BC2FF' },
  { label: 'Keyboard shortcuts guide', source: 'Intercom', color: '#42DED1' },
]

const roadmapRows = [
  { label: 'Q1', width: '100%', color: '#9E5CF7' },
  { label: 'Q2', width: '72%',  color: '#2BC2FF' },
  { label: 'Q3', width: '38%',  color: '#42DED1' },
  { label: 'Q4', width: '12%',  color: '#394351' },
]

const buildTags = [
  { label: 'In Progress', color: '#2BC2FF' },
  { label: 'In Review',   color: '#F5BE31' },
  { label: 'Done',        color: '#42DED1' },
  { label: 'Backlog',     color: '#394351' },
  { label: 'Blocked',     color: '#FF5C80' },
  { label: 'Todo',        color: '#9BA6B2' },
]

const agentLogs = [
  { time: '09:42', action: 'drafted',  detail: 'PRD for dark mode v2 feature', color: '#9E5CF7' },
  { time: '09:43', action: 'opened',   detail: 'PR #812 — fix CSV export edge case', color: '#42DED1' },
  { time: '09:45', action: 'triaged',  detail: '14 new support requests → 3 issues created', color: '#2BC2FF' },
  { time: '09:46', action: 'notified', detail: 'team: cycle time increased 18% this week', color: '#F5BE31' },
]

const metrics = [
  { label: 'Avg cycle time',      value: '2.4d',  color: '#9E5CF7' },
  { label: 'Deploy frequency',    value: '4.1/wk', color: '#2BC2FF' },
  { label: 'Issues closed',       value: '148',    color: '#42DED1' },
  { label: 'On-time delivery',    value: '94%',    color: '#F5BE31' },
]
</script>
