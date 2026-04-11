<template>
  <div class="bg-veryDarkBlue text-almostWhite">

    <!-- ─── HERO ──────────────────────────────────────────────── -->
    <section class="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">

      <!-- Dot grid -->
      <div class="absolute inset-0 pointer-events-none opacity-25"
        style="background-image: radial-gradient(circle, #394351 1px, transparent 1px); background-size: 28px 28px;"></div>

      <!-- Central glow -->
      <div class="absolute inset-0 pointer-events-none"
        style="background: radial-gradient(ellipse 60% 55% at 50% 50%, rgba(158,92,247,0.1) 0%, rgba(43,194,255,0.05) 50%, transparent 75%)"></div>

      <!-- Top hairline -->
      <div class="absolute top-0 inset-x-0 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(158,92,247,0.5), rgba(43,194,255,0.5), transparent)"></div>

      <div class="relative text-center max-w-3xl mx-auto">
        <!-- Eyebrow -->
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lightBlack bg-almostBlack/60 mb-8">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
          <span class="text-[11px] font-mono text-slate tracking-wide">Now available · AI Agents</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-bold leading-[1.05] mb-6" style="letter-spacing: -0.03em;">
          Artificial teammates.<br/>
          <span style="background: linear-gradient(135deg, #9E5CF7 0%, #2BC2FF 55%, #42DED1 100%);
                       -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
            Natural collaboration.
          </span>
        </h1>

        <p class="text-base text-slate max-w-xl mx-auto leading-relaxed mb-10">
          Build and deploy AI agents that work alongside your team as full members.
          Assign them issues, @mention them in threads, delegate entire workflows end-to-end.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a :href="`${appUrl}/create`"
            class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-almostWhite rounded transition-all duration-200"
            style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF); box-shadow: 0 0 28px rgba(158,92,247,0.35);">
            Start building
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <button
            class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate hover:text-almostWhite border border-lightBlack hover:border-slateDark rounded transition-all duration-200"
            @click="showDemo = true">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" stroke-width="1.2"/>
              <path d="M5 4.5L9 6.5L5 8.5V4.5Z" fill="currentColor"/>
            </svg>
            Watch demo
          </button>
        </div>
      </div>

      <!-- Mock "Assign to" dropdown -->
      <div class="relative mt-20 w-full max-w-md mx-auto">
        <div class="rounded-xl border border-lightBlack bg-almostBlack/80 backdrop-blur-sm overflow-hidden shadow-2xl">
          <div class="px-4 py-3 border-b border-lightBlack">
            <input
              readonly value="Assign to..."
              class="w-full bg-transparent text-sm text-slateDark outline-none cursor-default"
            />
          </div>
          <div class="py-1">
            <div v-for="(agent, i) in assignees" :key="agent.name"
              class="flex items-center gap-3 px-4 py-2.5 transition-colors duration-150 cursor-pointer"
              :class="i === 0 ? 'bg-veryDarkBlue' : 'hover:bg-veryDarkBlue'"
            >
              <div class="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                :style="{ background: agent.color + '28', color: agent.color, border: `1.5px solid ${agent.color}50` }">
                {{ agent.initials }}
              </div>
              <span class="text-sm text-almostWhite flex-1">{{ agent.name }}</span>
              <span v-if="agent.isAgent"
                class="text-[9px] font-mono px-1.5 py-0.5 rounded border"
                :style="{ color: agent.color, borderColor: agent.color + '50', background: agent.color + '14' }">
                Agent
              </span>
              <svg v-if="i === 0" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" :stroke="agent.color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <!-- Fade out bottom -->
        <div class="absolute bottom-0 inset-x-0 h-14 pointer-events-none rounded-b-xl"
          style="background: linear-gradient(to bottom, transparent, rgba(8,9,12,0.95))"></div>
      </div>

    </section>

    <!-- ─── FEATURE SPLIT 1 ───────────────────────────────────── -->
    <section class="py-28 px-6 lg:px-8 border-t border-lightBlack">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p class="text-[10px] tracking-[0.25em] uppercase font-mono text-slateDark mb-5">Team members</p>
          <h2 class="text-3xl md:text-4xl font-bold leading-snug mb-5" style="letter-spacing: -0.02em;">
            Fast, focused, and reliable.<br/>
            <span class="text-slate font-normal">Just like the rest of your team.</span>
          </h2>
          <p class="text-sm text-slate leading-relaxed max-w-md">
            Agents are full members of your Scourge workspace. Assign them to issues, add them to projects, or @mention them in comment threads to get things done.
          </p>
          <div class="flex flex-col gap-3 mt-8">
            <div v-for="point in teamPoints" :key="point.text" class="flex items-start gap-3">
              <div class="w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5"
                :style="{ background: point.color + '18' }">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" :stroke="point.color" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="text-sm text-slate">{{ point.text }}</span>
            </div>
          </div>
        </div>

        <!-- Comment mockup -->
        <div class="rounded-xl border border-lightBlack bg-almostBlack p-5 space-y-4">
          <div class="flex items-start gap-3">
            <div class="w-7 h-7 rounded-full bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center text-[10px] font-bold text-brand-purple shrink-0">JL</div>
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs font-semibold text-almostWhite">Jamie</span>
                <span class="text-[10px] text-slateDark">2m ago</span>
              </div>
              <p class="text-xs text-slate">Can you spec out this issue <span class="text-brand-purple">@Forge</span> and draft the acceptance criteria?</p>
            </div>
          </div>
          <!-- @mention dropdown -->
          <div class="ml-10 rounded-lg border border-lightBlack bg-veryDarkBlue overflow-hidden">
            <div class="px-3 py-2 border-b border-lightBlack">
              <span class="text-[10px] font-mono text-slateDark uppercase tracking-widest">Agents</span>
            </div>
            <div v-for="(m, i) in mentionItems" :key="m.name"
              class="flex items-center gap-2.5 px-3 py-2 cursor-pointer transition-colors"
              :class="i === 0 ? 'bg-almostBlack' : 'hover:bg-almostBlack'">
              <div class="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0"
                :style="{ background: m.color + '28', color: m.color }">
                {{ m.initials }}
              </div>
              <span class="text-xs text-almostWhite flex-1">{{ m.name }}</span>
              <span class="text-[8px] font-mono px-1 py-0.5 rounded"
                :style="{ color: m.color, background: m.color + '14' }">Agent</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── FEATURE SPLIT 2 ───────────────────────────────────── -->
    <section class="py-28 px-6 lg:px-8 border-t border-lightBlack bg-almostBlack">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <!-- Properties cards mockup -->
        <div class="flex gap-3 overflow-hidden">
          <div v-for="col in propertyCols" :key="col.status"
            class="flex-1 min-w-0 rounded-xl border border-lightBlack bg-veryDarkBlue p-4 space-y-3">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-2 h-2 rounded-full" :style="{ background: col.color }"></span>
              <span class="text-xs font-semibold text-almostWhite">{{ col.status }}</span>
            </div>
            <div v-for="row in col.rows" :key="row.name" class="flex items-center gap-2">
              <div class="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold"
                :style="{ background: row.color + '28', color: row.color }">
                {{ row.initials }}
              </div>
              <span class="text-[11px] text-slate truncate">{{ row.name }}</span>
              <span v-if="row.isAgent" class="text-[8px] font-mono text-slateDark ml-auto">Agent</span>
            </div>
          </div>
        </div>

        <div>
          <p class="text-[10px] tracking-[0.25em] uppercase font-mono text-slateDark mb-5">Accountability</p>
          <h2 class="text-3xl md:text-4xl font-bold leading-snug mb-5" style="letter-spacing: -0.02em;">
            Delegate issues,<br/>
            <span class="text-slate font-normal">but not accountability.</span>
          </h2>
          <p class="text-sm text-slate leading-relaxed max-w-md">
            When an issue gets delegated to an agent, the human remains the primary assignee. The agent is added as a contributor — so you stay in control while the work still gets done.
          </p>
        </div>

      </div>
    </section>

    <!-- ─── AGENT CARDS GRID ──────────────────────────────────── -->
    <section class="py-28 px-6 lg:px-8 border-t border-lightBlack">
      <div class="max-w-6xl mx-auto">

        <div class="text-center mb-16">
          <p class="text-[10px] tracking-[0.25em] uppercase font-mono text-slateDark mb-4">Integrations</p>
          <h2 class="text-4xl md:text-5xl font-bold mb-4" style="letter-spacing: -0.02em;">
            Agents for every use case,<br/>ready to deploy
          </h2>
          <p class="text-sm text-slate max-w-md mx-auto">
            From coding to QA, connect the agents your team already uses. Scourge fits into your stack.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-lightBlack border border-lightBlack rounded-xl overflow-hidden">
          <div v-for="agent in agentCards" :key="agent.name"
            class="group relative bg-veryDarkBlue p-8 flex flex-col gap-4 cursor-pointer transition-colors duration-200 hover:bg-almostBlack">
            <!-- Hover glow -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-none"
              :style="{ background: `radial-gradient(ellipse 80% 60% at 30% 20%, ${agent.color}0C 0%, transparent 70%)` }"></div>

            <!-- Icon -->
            <div class="w-12 h-12 rounded-xl flex items-center justify-center relative"
              :style="{ background: agent.color + '18', border: `1px solid ${agent.color}30` }">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" v-html="agent.icon"></svg>
            </div>

            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-sm font-semibold text-almostWhite">{{ agent.name }}</span>
                <span v-if="agent.badge"
                  class="text-[9px] font-mono px-1.5 py-0.5 rounded"
                  :style="{ color: agent.color, background: agent.color + '18' }">
                  {{ agent.badge }}
                </span>
              </div>
              <p class="text-xs text-slate leading-relaxed">{{ agent.description }}</p>
            </div>

            <!-- Arrow -->
            <div class="flex items-center gap-1 text-slateDark group-hover:text-slate transition-colors duration-200">
              <span class="text-[11px]">Learn more</span>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1 5.5h9M6 1.5l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <!-- Bottom accent on hover -->
            <div class="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              :style="{ background: `linear-gradient(90deg, transparent, ${agent.color}60, transparent)` }"></div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── LOOP / ORCHESTRATE ────────────────────────────────── -->
    <section class="py-28 px-6 lg:px-8 border-t border-lightBlack bg-almostBlack">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <p class="text-[10px] tracking-[0.25em] uppercase font-mono text-slateDark mb-5">Visibility</p>
          <h2 class="text-3xl md:text-4xl font-bold leading-snug mb-5" style="letter-spacing: -0.02em;">
            Stay in the loop<br/>
            <span class="text-slate font-normal">every step of the way.</span>
          </h2>
          <p class="text-sm text-slate leading-relaxed max-w-md mb-8">
            Agents act on your behalf, but never in the dark. Understand every change at a glance — full audit trail, live status, instant notifications.
          </p>
          <div class="flex flex-col gap-3">
            <div v-for="stat in loopStats" :key="stat.label" class="flex items-center gap-4">
              <div class="text-xl font-bold tabular-nums" :style="{ color: stat.color }">{{ stat.value }}</div>
              <span class="text-sm text-slate">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- Activity log mockup -->
        <div class="rounded-xl border border-lightBlack bg-veryDarkBlue overflow-hidden">
          <div class="flex items-center justify-between px-4 py-3 border-b border-lightBlack">
            <span class="text-xs font-semibold text-almostWhite">Agent activity</span>
            <span class="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
          </div>
          <div class="divide-y divide-lightBlack">
            <div v-for="log in activityLog" :key="log.id" class="flex items-start gap-3 px-4 py-3">
              <div class="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 mt-0.5"
                :style="{ background: log.color + '28', color: log.color }">
                {{ log.agent }}
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs text-almostWhite truncate">{{ log.action }}</p>
                <p class="text-[10px] text-slateDark mt-0.5">{{ log.time }}</p>
              </div>
              <span class="text-[9px] font-mono px-1.5 py-0.5 rounded shrink-0"
                :style="{ color: log.color, background: log.color + '14' }">
                {{ log.status }}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── BUILD YOUR OWN ────────────────────────────────────── -->
    <section class="py-28 px-6 lg:px-8 border-t border-lightBlack relative overflow-hidden">

      <!-- Background glow -->
      <div class="absolute inset-0 pointer-events-none"
        style="background: radial-gradient(ellipse 70% 60% at 50% 80%, rgba(158,92,247,0.07) 0%, transparent 70%)"></div>

      <div class="max-w-3xl mx-auto text-center relative">
        <p class="text-[10px] tracking-[0.25em] uppercase font-mono text-slateDark mb-6">API</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-5" style="letter-spacing: -0.02em;">
          Create your own agents
        </h2>
        <p class="text-sm text-slate max-w-md mx-auto leading-relaxed mb-10">
          Build custom AI teammates with the Scourge API. Keep them private for your team or share them with the community.
        </p>

        <!-- Code snippet -->
        <div class="rounded-xl border border-lightBlack bg-almostBlack text-left overflow-hidden mb-10 mx-auto max-w-lg">
          <div class="flex items-center gap-1.5 px-4 py-3 border-b border-lightBlack">
            <span class="w-2.5 h-2.5 rounded-full bg-lightBlack"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-lightBlack"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-lightBlack"></span>
            <span class="ml-3 text-[10px] font-mono text-slateDark">agent.ts</span>
          </div>
          <div class="px-5 py-4 font-mono text-xs leading-relaxed">
            <div><span class="text-slateDark">// Register your agent with Scourge</span></div>
            <div class="mt-2"><span class="text-brand-purple">import</span> <span class="text-almostWhite">&#123; ScourgeAgent &#125;</span> <span class="text-brand-purple">from</span> <span class="text-brand-green">'@scourge/agents'</span></div>
            <div class="mt-3"><span class="text-brand-marine">const</span> <span class="text-almostWhite">agent</span> <span class="text-slateDark">=</span> <span class="text-brand-purple">new</span> <span class="text-almostWhite">ScourgeAgent(&#123;</span></div>
            <div class="pl-4"><span class="text-brand-yellow">name</span><span class="text-slateDark">:</span> <span class="text-brand-green">'Forge'</span><span class="text-slateDark">,</span></div>
            <div class="pl-4"><span class="text-brand-yellow">role</span><span class="text-slateDark">:</span> <span class="text-brand-green">'Engineering'</span><span class="text-slateDark">,</span></div>
            <div class="pl-4"><span class="text-brand-yellow">trigger</span><span class="text-slateDark">:</span> <span class="text-brand-green">'on:assign'</span><span class="text-slateDark">,</span></div>
            <div><span class="text-almostWhite">&#125;)</span></div>
            <div class="mt-2"><span class="text-almostWhite">agent</span><span class="text-slateDark">.</span><span class="text-brand-marine">deploy()</span></div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a :href="`${appUrl}/create`"
            class="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-almostWhite rounded transition-all duration-200"
            style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF); box-shadow: 0 0 24px rgba(158,92,247,0.3);">
            Start building
          </a>
          <NuxtLink to="/documentation"
            class="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate hover:text-almostWhite border border-lightBlack hover:border-slateDark rounded transition-all duration-200">
            Read the docs
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Bottom hairline -->
      <div class="absolute bottom-0 inset-x-0 h-px"
        style="background: linear-gradient(90deg, transparent, rgba(66,222,209,0.3), transparent)"></div>
    </section>

  </div>
</template>

<script setup>
const config = useRuntimeConfig()
const appUrl = config.public.appUrl
const showDemo = ref(false)

useHead({ title: 'AI Agents · Scourge' })

const assignees = [
  { name: 'Forge',         initials: 'FO', color: '#9E5CF7', isAgent: true  },
  { name: 'Scout',         initials: 'SC', color: '#2BC2FF', isAgent: true  },
  { name: 'Relay',         initials: 'RL', color: '#42DED1', isAgent: true  },
  { name: 'Leila Hassan',  initials: 'LH', color: '#F5BE31', isAgent: false },
  { name: 'Marcus Chen',   initials: 'MC', color: '#FF5C80', isAgent: false },
]

const mentionItems = [
  { name: 'Forge', initials: 'FO', color: '#9E5CF7' },
  { name: 'Scout', initials: 'SC', color: '#2BC2FF' },
  { name: 'Relay', initials: 'RL', color: '#42DED1' },
]

const teamPoints = [
  { text: 'Assigned as a real workspace member, not a bot', color: '#9E5CF7' },
  { text: '@mention in any comment to delegate in context', color: '#2BC2FF' },
  { text: 'Added to projects and tracked on roadmaps',      color: '#42DED1' },
]

const propertyCols = [
  {
    status: 'In Progress', color: '#9E5CF7',
    rows: [
      { name: 'Leila',   initials: 'LH', color: '#F5BE31', isAgent: false },
      { name: 'Forge',   initials: 'FO', color: '#9E5CF7', isAgent: true  },
    ]
  },
  {
    status: 'In Review', color: '#2BC2FF',
    rows: [
      { name: 'Marcus',  initials: 'MC', color: '#FF5C80', isAgent: false },
      { name: 'Scout',   initials: 'SC', color: '#2BC2FF', isAgent: true  },
    ]
  },
  {
    status: 'Done', color: '#42DED1',
    rows: [
      { name: 'Relay',  initials: 'RL', color: '#42DED1', isAgent: true  },
      { name: 'Priya',  initials: 'PR', color: '#FF4DFA', isAgent: false },
    ]
  },
]

const agentCards = [
  {
    name: 'GitHub Copilot',
    badge: 'Popular',
    color: '#E6E6E6',
    description: 'Converts Scourge issues into GitHub pull requests automatically.',
    icon: `<path fill="currentColor" d="M11 0C4.927 0 0 4.927 0 11c0 4.866 3.152 8.979 7.523 10.437.55.102.752-.238.752-.53 0-.26-.009-1.128-.014-2.049-3.059.664-3.705-.737-3.705-.737-.499-1.269-1.22-1.607-1.22-1.607-.999-.682.075-.668.075-.668 1.104.077 1.685 1.133 1.685 1.133.979 1.678 2.569 1.194 3.195.913.099-.71.383-1.194.696-1.468-2.437-.277-4.998-1.218-4.998-5.421 0-1.198.427-2.177 1.129-2.944-.113-.278-.489-1.392.107-2.902 0 0 .921-.294 3.015 1.124A10.487 10.487 0 0 1 11 5.375c.932.004 1.87.126 2.746.37 2.09-1.418 3.009-1.124 3.009-1.124.598 1.511.222 2.624.109 2.902.703.767 1.128 1.746 1.128 2.944 0 4.213-2.564 5.141-5.007 5.412.394.339.744 1.008.744 2.032 0 1.467-.013 2.65-.013 3.01 0 .293.197.637.754.529C18.851 19.975 22 15.864 22 11c0-6.073-4.927-11-11-11z"/>`,
  },
  {
    name: 'Forge',
    badge: 'Built-in',
    color: '#9E5CF7',
    description: 'Scourge\'s native AI agent. Writes specs, drafts PRDs, and resolves issues autonomously.',
    icon: `<circle cx="11" cy="11" r="9" stroke="currentColor" stroke-width="1.4"/><path d="M7 11h8M11 7v8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="11" cy="11" r="2.5" fill="currentColor" opacity="0.3"/>`,
  },
  {
    name: 'Scout',
    badge: 'Built-in',
    color: '#2BC2FF',
    description: 'Monitors your codebase, surfaces regressions, and files issues before your users notice.',
    icon: `<circle cx="10" cy="10" r="6" stroke="currentColor" stroke-width="1.4"/><path d="M14.5 14.5L19 19" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M8 10h4M10 8v4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`,
  },
  {
    name: 'Relay',
    badge: null,
    color: '#42DED1',
    description: 'Syncs standup updates, writes changelogs, and keeps your team informed without meetings.',
    icon: `<path d="M4 6h14M4 11h10M4 16h7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="17" cy="15" r="3" stroke="currentColor" stroke-width="1.3"/><path d="M17 13.5v1.5l1 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`,
  },
  {
    name: 'Sentry Agent',
    badge: null,
    color: '#FF5C80',
    description: 'Runs root-cause analysis on errors, links them to issues, and proposes fixes.',
    icon: `<path d="M11 3L3 19h16L11 3z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M11 10v4M11 16.5v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>`,
  },
  {
    name: 'Notion AI',
    badge: null,
    color: '#F5BE31',
    description: 'Pulls context from your Notion docs to keep issues, specs, and decisions in sync.',
    icon: `<rect x="3" y="3" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.4"/><path d="M7 8h8M7 11h6M7 14h4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>`,
  },
]

const loopStats = [
  { value: '100%',  label: 'of actions logged with full audit trail', color: '#9E5CF7' },
  { value: '<2s',   label: 'average notification delivery time',       color: '#2BC2FF' },
  { value: '0',     label: 'silent failures — every error surfaces',   color: '#42DED1' },
]

const activityLog = [
  { id: 1, agent: 'FO', color: '#9E5CF7', action: 'Drafted acceptance criteria for SCR-481', time: 'Just now',   status: 'Done'    },
  { id: 2, agent: 'SC', color: '#2BC2FF', action: 'Detected regression in /api/auth endpoint', time: '3m ago',   status: 'Filed'   },
  { id: 3, agent: 'RL', color: '#42DED1', action: 'Posted weekly changelog to #engineering',   time: '1h ago',   status: 'Done'    },
  { id: 4, agent: 'FO', color: '#9E5CF7', action: 'Assigned PR #204 as sub-issue to SCR-477',  time: '2h ago',   status: 'Done'    },
  { id: 5, agent: 'SC', color: '#2BC2FF', action: 'Running performance audit on checkout flow', time: '3h ago',   status: 'Running' },
]
</script>
