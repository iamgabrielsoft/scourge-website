<template>
  <section id="about" class="bg-almostBlack ">
    <div class="max-w-7xl mx-auto">

      <!-- Label -->
      <p class="text-[10px] tracking-[0.25em] uppercase font-mono text-slateDark mb-16">About us</p>

      <!-- Top: mission statement -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 pb-24 border-b border-lightBlack">
        <div class="lg:col-span-7">
          <h2 class="text-4xl md:text-5xl font-bold leading-tight">
            <span class="text-almostWhite">We're building the tool we</span>
            <br/>
            <span class="text-slateDark">always wished we had.</span>
          </h2>
        </div>
        <div class="lg:col-span-5 flex flex-col justify-center gap-6">
          <p class="text-sm text-slate leading-relaxed">
            Scourge started as a frustration. We spent years inside fast-moving product teams and kept hitting the same wall: the tools were either too heavy or too shallow. Nothing was built for the way modern teams actually think and move.
          </p>
          <p class="text-sm text-slate leading-relaxed">
            So we built it ourselves. Scourge is opinionated by design — fast by default, and shaped around the real workflow of product engineers and their teams.
          </p>
        </div>
      </div>

      <!-- Values grid -->
      <div class="mb-24">
        <p class="text-xs text-slateDark uppercase tracking-widest mb-10">What drives us</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-lightBlack border border-lightBlack">
          <div v-for="value in values" :key="value.title"
            class="bg-almostBlack p-8 group hover:bg-veryDarkBlue transition-colors duration-300">
            <div class="w-9 h-9 rounded flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-0.5"
              :style="{ background: value.color + '18' }">
              <component :is="value.icon" :color="value.color" />
            </div>
            <h3 class="text-sm font-semibold text-almostWhite mb-2">{{ value.title }}</h3>
            <p class="text-xs text-slate leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="mb-24 pb-24 border-b border-lightBlack">
        <p class="text-xs text-slateDark uppercase tracking-widest mb-12">Our journey</p>
        <div class="relative">
          <!-- Vertical line (desktop) -->
          <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-lightBlack -translate-x-1/2"></div>
          <div class="space-y-12">
            <div v-for="(milestone, i) in milestones" :key="milestone.year"
              class="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
              <!-- Year bubble (center) -->
              <div class="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-lightBlack items-center justify-center bg-almostBlack z-10">
                <span class="text-[10px] font-mono text-slateDark">{{ milestone.year }}</span>
              </div>
              <!-- Content: alternate sides -->
              <div :class="i % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'">
                <span class="lg:hidden text-[10px] font-mono text-slateDark mb-1 block">{{ milestone.year }}</span>
                <h4 class="text-sm font-semibold text-almostWhite mb-1">{{ milestone.title }}</h4>
                <p class="text-xs text-slate leading-relaxed">{{ milestone.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team + open roles -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div class="lg:col-span-5">
          <h3 class="text-2xl font-bold text-almostWhite mb-4">A small team,<br/>serious about craft.</h3>
          <p class="text-sm text-slate leading-relaxed mb-8">
            We're a lean team of engineers, designers, and product thinkers who have shipped at scale. No fluff. Just people who care about making great software.
          </p>
          <!-- Avatar stack -->
          <div class="flex items-center gap-4">
            <div class="flex -space-x-2">
              <div
                v-for="member in team"
                :key="member.initials"
                class="avatar-flip-wrapper cursor-pointer relative w-9 h-9"
                style="perspective: 500px;"
              >
                <div
                  class="avatar-flip-inner w-full h-full"
                  style="position: relative; transform-style: preserve-3d; transition: transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1);"
                >
                  <!-- Front -->
                  <div
                    class="w-9 h-9 rounded-full border-2 border-almostBlack flex items-center justify-center text-xs font-bold absolute inset-0"
                    style="backface-visibility: hidden; -webkit-backface-visibility: hidden;"
                    :style="{ background: member.color + '33', color: member.color }"
                  >{{ member.initials }}</div>
                  <!-- Back -->
                  <div
                    class="w-9 h-9 rounded-full border-2 border-almostBlack flex items-center justify-center text-xs font-bold absolute inset-0"
                    style="backface-visibility: hidden; -webkit-backface-visibility: hidden; transform: rotateY(180deg);"
                    :style="{ background: member.color, color: '#111319' }"
                  >{{ member.initials }}</div>
                </div>
              </div>
            </div>
            <span class="text-xs text-slateDark">+ 12 more brilliant people</span>
          </div>
        </div>

        <!-- Open roles -->
        <div class="lg:col-span-7">
          <p class="text-xs text-slateDark uppercase tracking-widest mb-6">Open roles</p>
          <div class="space-y-px border border-lightBlack">
            <a v-for="role in openRoles" :key="role.title" href="#"
              class="flex items-center justify-between px-6 py-4 bg-veryDarkBlue hover:bg-almostBlack transition-colors duration-200 group border-b border-lightBlack last:border-b-0">
              <div>
                <p class="text-sm font-medium text-almostWhite group-hover:text-white transition-colors">{{ role.title }}</p>
                <p class="text-xs text-slateDark mt-0.5">{{ role.team }} · {{ role.location }}</p>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-[10px] px-2 py-0.5 rounded-full border font-mono"
                  :style="{ borderColor: role.color + '40', color: role.color, background: role.color + '12' }">
                  {{ role.type }}
                </span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" class="text-slateDark group-hover:text-slate transition-colors group-hover:translate-x-0.5 transform duration-200">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </a>
          </div>
          <a href="#" class="inline-flex items-center gap-2 mt-5 text-xs text-slateDark hover:text-slate transition-colors">
            View all open positions
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { defineComponent, h } from 'vue'

// Inline icon components
const IconSpeed = defineComponent({
  props: { color: String },
  setup(props) {
    return () => h('svg', { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none' }, [
      h('circle', { cx: 9, cy: 9, r: 7, stroke: props.color, 'stroke-width': '1.3' }),
      h('path', { d: 'M9 5v4l2.5 2.5', stroke: props.color, 'stroke-width': '1.3', 'stroke-linecap': 'round' }),
    ])
  }
})

const IconCraft = defineComponent({
  props: { color: String },
  setup(props) {
    return () => h('svg', { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none' }, [
      h('path', { d: 'M3 15l4-4 2 2 6-6', stroke: props.color, 'stroke-width': '1.3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
      h('circle', { cx: 14, cy: 4, r: 2, stroke: props.color, 'stroke-width': '1.3' }),
    ])
  }
})

const IconTransparency = defineComponent({
  props: { color: String },
  setup(props) {
    return () => h('svg', { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none' }, [
      h('rect', { x: 2, y: 2, width: 6, height: 6, rx: 1, stroke: props.color, 'stroke-width': '1.3' }),
      h('rect', { x: 10, y: 10, width: 6, height: 6, rx: 1, stroke: props.color, 'stroke-width': '1.3' }),
      h('path', { d: 'M8 5h2M13 8v2M5 8v2M8 13h2', stroke: props.color, 'stroke-width': '1.3', 'stroke-linecap': 'round', 'stroke-opacity': 0.5 }),
    ])
  }
})

const IconUsers = defineComponent({
  props: { color: String },
  setup(props) {
    return () => h('svg', { width: 18, height: 18, viewBox: '0 0 18 18', fill: 'none' }, [
      h('circle', { cx: 7, cy: 6, r: 3, stroke: props.color, 'stroke-width': '1.3' }),
      h('path', { d: 'M1 16c0-3 2.686-5 6-5s6 2 6 5', stroke: props.color, 'stroke-width': '1.3', 'stroke-linecap': 'round' }),
      h('path', { d: 'M13 9c1.657 0 3 1.343 3 3s0 4 0 4', stroke: props.color, 'stroke-width': '1.3', 'stroke-linecap': 'round', 'stroke-opacity': 0.5 }),
      h('circle', { cx: 13, cy: 5, r: 2, stroke: props.color, 'stroke-width': '1.3', 'stroke-opacity': 0.7 }),
    ])
  }
})

const values = [
  { title: 'Speed above all', desc: 'Every interaction should feel instant. Latency is a bug, not a feature. We optimize obsessively for feel.', color: '#9E5CF7', icon: IconSpeed },
  { title: 'Craft in everything', desc: 'Details matter. We sweat the small stuff — from micro-animations to error messages — because our users notice.', color: '#2BC2FF', icon: IconCraft },
  { title: 'Radical transparency', desc: 'Our roadmap is public. Our reasoning is shared. We say what we mean and mean what we ship.', color: '#42DED1', icon: IconTransparency },
  { title: 'Teams first', desc: 'We design for teams, not individuals. Every feature asks: does this make the whole group better?', color: '#F5BE31', icon: IconUsers },
]

const milestones = [
  { year: '2021', title: 'Founded in San Francisco', desc: 'Three engineers left their jobs after one too many bad sprint plannings. Scourge was born on a whiteboard.' },
  { year: '2022', title: 'First 100 teams onboarded', desc: 'Word spread fast. Early adopters shaped the core of what Scourge is today — we still talk to every one of them.' },
  { year: '2023', title: 'AI Agents shipped', desc: 'We launched the first AI-native workflows in product tooling. Agents that draft, triage, and ship alongside your team.' },
  { year: '2024', title: '28,000 teams & growing', desc: 'Scourge became the default choice for product-led engineering teams worldwide. We\'re just getting started.' },
]

const team = [
  { initials: 'AK', color: '#9E5CF7' },
  { initials: 'JL', color: '#2BC2FF' },
  { initials: 'MB', color: '#42DED1' },
  { initials: 'SR', color: '#F5BE31' },
  { initials: 'PN', color: '#FF5C80' },
]

const openRoles = [
  { title: 'Senior Product Engineer', team: 'Core',    location: 'Remote', type: 'Full-time', color: '#9E5CF7' },
  { title: 'AI/ML Engineer',          team: 'Agents',  location: 'SF / Remote', type: 'Full-time', color: '#2BC2FF' },
  { title: 'Product Designer',        team: 'Design',  location: 'Remote', type: 'Full-time', color: '#42DED1' },
  { title: 'Developer Advocate',      team: 'Growth',  location: 'Remote', type: 'Contract',  color: '#F5BE31' },
]
</script>

<style scoped>
.avatar-flip-wrapper:hover .avatar-flip-inner {
  transform: rotateY(180deg);
}
</style>
