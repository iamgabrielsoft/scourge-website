<template>
  <section class="relative bg-veryDarkBlue overflow-hidden min-h-screen flex flex-col justify-center px-6 lg:px-8">

    <!-- Grid background pattern -->
    <div class="absolute inset-0 pointer-events-none"
      style="background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px); background-size: 48px 48px;"></div>

    <!-- Central radial glow -->
    <div class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse 70% 60% at 50% 40%, rgba(158,92,247,0.1) 0%, rgba(43,194,255,0.04) 40%, transparent 70%)"></div>

    <!-- Top edge hairline -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px pointer-events-none"
      style="background: linear-gradient(90deg, transparent, rgba(158,92,247,0.5), rgba(43,194,255,0.4), transparent)"></div>

    <div class="relative max-w-7xl mx-auto w-full py-32 md:py-40">
      <div class="flex flex-col items-center text-center">

        <!-- Eyebrow badge -->
        <div class="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-lightBlack bg-almostBlack">
          <span class="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
          <span class="text-xs font-medium text-slate">AI Agents now available</span>
          <span class="text-slateDark">·</span>
          <a href="#" class="text-xs font-medium hover:text-almostWhite transition-colors duration-150"
            style="color: #9E5CF7">See what's new →</a>
        </div>

        <!-- Main headline -->
        <h1 class="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-8 max-w-5xl">
          <span class="text-almostWhite">Work better,</span><br/>
          <span style="background: linear-gradient(135deg, #9E5CF7 0%, #2BC2FF 50%, #42DED1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
            together.
          </span>
        </h1>

        <!-- Sub-headline -->
        <p class="text-base md:text-lg text-slate max-w-xl leading-relaxed mb-12">
          The all-in-one product platform built for modern engineering teams — from idea to deployment, at the speed your team actually moves.
        </p>

        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row items-center gap-4 mb-20">
          <a
            :href="isLoggedIn ? `${appUrl}/home` : `${appUrl}/create`"
            class="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold text-almostWhite transition-all duration-200 hover:-translate-y-px"
            style="background: linear-gradient(135deg, #9E5CF7, #2BC2FF); box-shadow: 0 0 24px rgba(158,92,247,0.3)"
          >
            {{ isLoggedIn ? 'Open app' : 'Get started free' }}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-medium text-slate hover:text-almostWhite border border-lightBlack hover:border-slateDark bg-almostBlack transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.3"/>
              <path d="M5.5 4.5l4 2.5-4 2.5V4.5z" fill="currentColor"/>
            </svg>
            Watch demo
          </a>
        </div>

        <!-- Social proof strip -->
        <div class="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 mb-20">
          <!-- Avatar stack -->
          <div class="flex items-center gap-3">
            <div class="flex -space-x-2.5">
              <div
                v-for="avatar in avatars"
                :key="avatar.initials"
                class="avatar-flip-wrapper cursor-pointer relative w-8 h-8"
                style="perspective: 500px;"
              >
                <div
                  class="avatar-flip-inner w-full h-full"
                  style="position: relative; transform-style: preserve-3d; transition: transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1);"
                >
                  <!-- Front -->
                  <div
                    class="w-8 h-8 rounded-full border-2 border-veryDarkBlue flex items-center justify-center text-[10px] font-bold absolute inset-0"
                    style="backface-visibility: hidden; -webkit-backface-visibility: hidden;"
                    :style="{ background: avatar.color + '28', color: avatar.color }"
                  >{{ avatar.initials }}</div>
                  <!-- Back -->
                  <div
                    class="w-8 h-8 rounded-full border-2 border-veryDarkBlue flex items-center justify-center text-[10px] font-bold absolute inset-0"
                    style="backface-visibility: hidden; -webkit-backface-visibility: hidden; transform: rotateY(180deg);"
                    :style="{ background: avatar.color, color: '#111319' }"
                  >{{ avatar.initials }}</div>
                </div>
              </div>
            </div>
            <div class="text-sm text-slate">
              <span class="text-almostWhite font-semibold">28,000+</span> teams shipping faster
            </div>
          </div>
          <div class="w-px h-5 bg-lightBlack hidden sm:block"></div>
          <!-- Stars -->
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-0.5">
              <svg v-for="i in 5" :key="i" width="13" height="13" viewBox="0 0 14 14" fill="#F5BE31">
                <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 8.885 3.91 10.51l.59-3.44L2 4.632l3.455-.502L7 1z"/>
              </svg>
            </div>
            <span class="text-sm text-slate"><span class="text-almostWhite font-semibold">4.9</span> / 5 rating</span>
          </div>
        </div>

        <!-- Product UI mockup -->
        <div class="w-full max-w-5xl relative">
          <!-- Glow behind the card -->
          <div class="absolute -inset-4 pointer-events-none"
            style="background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(158,92,247,0.08) 0%, transparent 70%)"></div>

          <!-- Browser chrome frame -->
          <div class="relative rounded-xl border border-lightBlack overflow-hidden"
            style="box-shadow: 0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.6)">

            <!-- Browser top bar -->
            <div class="flex items-center gap-2 px-4 py-3 border-b border-lightBlack bg-almostBlack">
              <div class="flex items-center gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full" style="background:#FF5C80; opacity:0.7"></div>
                <div class="w-2.5 h-2.5 rounded-full" style="background:#F5BE31; opacity:0.7"></div>
                <div class="w-2.5 h-2.5 rounded-full" style="background:#42DED1; opacity:0.7"></div>
              </div>
              <div class="flex-1 flex justify-center">
                <div class="px-4 py-1 rounded bg-veryDarkBlue border border-lightBlack text-[11px] text-slateDark font-mono">
                  app.scourge.com/team/roadmap
                </div>
              </div>
            </div>

            <!-- App content -->
            <div class="bg-almostBlack flex" style="min-height: 360px;">

              <!-- Sidebar -->
              <div class="w-52 shrink-0 border-r border-lightBlack p-4 hidden sm:flex flex-col gap-1">
                <div class="flex items-center gap-2 px-2 py-1.5 mb-3">
                  <div class="w-5 h-5 rounded flex items-center justify-center" style="background: rgba(158,92,247,0.2)">
                    <div class="w-2 h-2 rounded-sm" style="background:#9E5CF7"></div>
                  </div>
                  <span class="text-xs font-semibold text-almostWhite">Scourge</span>
                </div>
                <div v-for="item in sidebarItems" :key="item.label"
                  class="flex items-center gap-2.5 px-2 py-1.5 rounded text-xs transition-colors duration-150 cursor-default"
                  :class="item.active ? 'bg-veryDarkBlue text-almostWhite' : 'text-slateDark hover:text-slate'">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" v-html="item.icon" />
                  {{ item.label }}
                  <span v-if="item.badge"
                    class="ml-auto text-[9px] px-1.5 py-0.5 rounded-full font-mono"
                    :style="{ background: item.badgeColor + '22', color: item.badgeColor }">
                    {{ item.badge }}
                  </span>
                </div>
              </div>

              <!-- Main content -->
              <div class="flex-1 p-6 overflow-hidden">
                <!-- Page header -->
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <h3 class="text-sm font-semibold text-almostWhite">Q2 Roadmap</h3>
                    <p class="text-[11px] text-slateDark mt-0.5">12 initiatives · Updated 2 min ago</p>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="px-3 py-1.5 rounded border border-lightBlack bg-veryDarkBlue text-[11px] text-slateDark">Filter</div>
                    <div class="px-3 py-1.5 rounded text-[11px] font-medium text-almostWhite"
                      style="background: rgba(158,92,247,0.2); border: 1px solid rgba(158,92,247,0.3)">+ Add</div>
                  </div>
                </div>

                <!-- Issue rows -->
                <div class="space-y-2">
                  <div v-for="issue in issues" :key="issue.title"
                    class="flex items-center gap-3 px-3 py-2.5 rounded border border-lightBlack bg-veryDarkBlue hover:border-slateDark transition-colors duration-150 cursor-default group">
                    <!-- Status dot -->
                    <div class="w-2 h-2 rounded-full shrink-0" :style="{ background: issue.color }"></div>
                    <!-- Title -->
                    <span class="text-xs text-slate flex-1 truncate group-hover:text-almostWhite transition-colors">{{ issue.title }}</span>
                    <!-- Assignee -->
                    <div class="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 hidden md:flex"
                      :style="{ background: issue.color + '28', color: issue.color }">
                      {{ issue.assignee }}
                    </div>
                    <!-- Priority -->
                    <span class="text-[10px] px-2 py-0.5 rounded-full font-mono shrink-0 hidden lg:block"
                      :style="{ background: issue.color + '18', color: issue.color }">
                      {{ issue.status }}
                    </span>
                  </div>
                </div>

                <!-- AI agent chip -->
                <div class="mt-4 flex items-center gap-2 px-3 py-2 rounded border bg-veryDarkBlue"
                  style="border-color: rgba(66,222,209,0.25)">
                  <span class="w-1.5 h-1.5 rounded-full animate-pulse shrink-0" style="background: #42DED1"></span>
                  <span class="text-[11px] font-mono" style="color: #42DED1">Agent:</span>
                  <span class="text-[11px] text-slateDark truncate">Triaged 8 new requests · opened 3 issues · assigned to sprint</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Trusted by logos -->
    <div class="relative border-t border-lightBlack">
      <!-- <div class="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <p class="text-center text-[10px] tracking-[0.2em] uppercase font-mono text-slateDark mb-6">
          Trusted by teams at
        </p>
        <div class="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          <span v-for="logo in logos" :key="logo.name"
            class="text-base font-bold transition-colors duration-200 cursor-default"
            :style="{ color: '#394351' }"
            @mouseenter="e => e.target.style.color = logo.color"
            @mouseleave="e => e.target.style.color = '#394351'">
            {{ logo.name }}
          </span>
        </div>
      </div> -->
    </div>

  </section>
</template>

<script setup>
const config = useRuntimeConfig()
const appUrl = config.public.appUrl
const { isLoggedIn } = useAuthState()

const avatars = [
  { initials: 'AK', color: '#9E5CF7' },
  { initials: 'JL', color: '#2BC2FF' },
  { initials: 'MB', color: '#42DED1' },
  { initials: 'SR', color: '#F5BE31' },
  { initials: 'PN', color: '#FF5C80' },
]

const sidebarItems = [
  { label: 'Home',      active: false, icon: `<path d="M2 7L7 2l5 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><rect x="4" y="7" width="6" height="5" rx="0.5" stroke="currentColor" stroke-width="1.2"/>` },
  { label: 'Inbox',     active: false, badge: '4', badgeColor: '#9E5CF7', icon: `<rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" stroke-width="1.2"/><path d="M1 5l6 4 6-4" stroke="currentColor" stroke-width="1.2"/>` },
  { label: 'Roadmap',   active: true,  icon: `<path d="M2 4h10M2 7h7M2 10h5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>` },
  { label: 'Issues',    active: false, badge: '12', badgeColor: '#2BC2FF', icon: `<circle cx="7" cy="7" r="5.5" stroke="currentColor" stroke-width="1.2"/><path d="M7 4v3l2 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>` },
  { label: 'Projects',  active: false, icon: `<rect x="1" y="1" width="5" height="5" rx="0.5" stroke="currentColor" stroke-width="1.2"/><rect x="8" y="1" width="5" height="5" rx="0.5" stroke="currentColor" stroke-width="1.2"/><rect x="1" y="8" width="5" height="5" rx="0.5" stroke="currentColor" stroke-width="1.2"/><rect x="8" y="8" width="5" height="5" rx="0.5" stroke="currentColor" stroke-width="1.2"/>` },
  { label: 'Agents',    active: false, badge: 'NEW', badgeColor: '#42DED1', icon: `<path d="M7 2v3M7 9v3M2 7h3M9 7h3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><circle cx="7" cy="7" r="2" stroke="currentColor" stroke-width="1.2"/>` },
  { label: 'Analytics', active: false, icon: `<rect x="1" y="8" width="3" height="5" rx="0.3" stroke="currentColor" stroke-width="1.2"/><rect x="6" y="5" width="3" height="8" rx="0.3" stroke="currentColor" stroke-width="1.2"/><rect x="11" y="2" width="3" height="11" rx="0.3" stroke="currentColor" stroke-width="1.2"/>` },
]

const issues = [
  { title: 'Dark mode — mobile navigation overflow',  color: '#9E5CF7', assignee: 'AK', status: 'In Progress' },
  { title: 'AI agent: draft PRD from Slack thread',   color: '#42DED1', assignee: 'JL', status: 'In Review'   },
  { title: 'Bulk export to CSV broken on Safari',     color: '#FF5C80', assignee: 'MB', status: 'Blocked'     },
  { title: 'Keyboard shortcut for quick-add issue',   color: '#2BC2FF', assignee: 'SR', status: 'Todo'        },
  { title: 'Onboarding checklist for new workspaces', color: '#F5BE31', assignee: 'PN', status: 'Backlog'     },
]

const logos = [
  { name: 'Vercel',    color: '#E6E6E6' },
  { name: 'Stripe',    color: '#9E5CF7' },
  { name: 'Loom',      color: '#FF5C80' },
  { name: 'Retool',    color: '#2BC2FF' },
  { name: 'Notion',    color: '#E6E6E6' },
  { name: 'Linear',    color: '#42DED1' },
  { name: 'Figma',     color: '#FF4DFA' },
]
</script>

<style scoped>
.avatar-flip-wrapper:hover .avatar-flip-inner {
  transform: rotateY(180deg);
}
</style>
