<template>
  <section class="bg-veryDarkBlue py-28 px-6 lg:px-8 overflow-hidden">
    <div class="max-w-7xl mx-auto">

      <!-- Large headline: bold primary + faded continuation -->
      <div class="max-w-5xl mb-24">
        <h2 class="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight">
          <span class="text-almostWhite">A new product tool.</span>
          <span class="text-slateDark">
            {{ ' ' }}Purpose-built for modern teams with AI workflows at its core, Scourge sets a new standard for planning and collaborating with teams.
          </span>
        </h2>
      </div>

      <!-- Three figure cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 border border-lightBlack divide-y md:divide-y-0 md:divide-x divide-lightBlack">

        <div
          v-for="(card, i) in cards"
          :key="card.title"
          class="group relative flex flex-col p-8 lg:p-10 hover:bg-white05 transition-colors duration-300"
        >
          <!-- Figure label -->
          <p class="text-[10px] tracking-[0.2em] uppercase text-slateDark mb-10 font-mono">
            FIG 0.{{ i + 2 }}
          </p>

          <!-- Isometric illustration -->
          <div class="flex-1 flex items-center justify-center py-10">
            <div class="relative w-44 h-44">
              <svg
                viewBox="0 0 200 200"
                class="w-full h-full transition-opacity duration-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- Stack / layered platform -->
                <template v-if="i === 0">
                  <rect x="38" y="124" width="124" height="14" rx="1" :stroke="accentColors[0]" stroke-width="1.2" stroke-opacity="0.9"/>
                  <rect x="50"  y="110" width="100" height="14" rx="1" :stroke="accentColors[0]" stroke-width="1.2" stroke-opacity="0.75"/>
                  <rect x="62"  y="96"  width="76"  height="14" rx="1" :stroke="accentColors[0]" stroke-width="1.2" stroke-opacity="0.6"/>
                  <rect x="74"  y="82"  width="52"  height="14" rx="1" :stroke="accentColors[0]" stroke-width="1.2" stroke-opacity="0.45"/>
                  <rect x="86"  y="68"  width="28"  height="14" rx="1" :stroke="accentColors[0]" stroke-width="1.2" stroke-opacity="0.3"/>
                  <ellipse cx="100" cy="64" rx="14" ry="4" :stroke="accentColors[0]" stroke-width="1.2" stroke-opacity="0.5"/>
                  <!-- horizontal fill lines inside each slab -->
                  <line x1="50" y1="117" x2="150" y2="117" :stroke="accentColors[0]" stroke-width="0.5" stroke-opacity="0.2"/>
                  <line x1="62" y1="103" x2="138" y2="103" :stroke="accentColors[0]" stroke-width="0.5" stroke-opacity="0.2"/>
                  <line x1="74" y1="89"  x2="126" y2="89"  :stroke="accentColors[0]" stroke-width="0.5" stroke-opacity="0.2"/>
                </template>

                <!-- Hexagonal cluster / blocks -->
                <template v-if="i === 1">
                  <!-- center hex -->
                  <polygon points="100,34 126,49 126,79 100,94 74,79 74,49"
                    :stroke="accentColors[1]" stroke-width="1.3" stroke-opacity="0.9"/>
                  <!-- left lower hex -->
                  <polygon points="62,94 84,106 84,130 62,142 40,130 40,106"
                    :stroke="accentColors[1]" stroke-width="1.3" stroke-opacity="0.7"/>
                  <!-- right lower hex -->
                  <polygon points="138,94 160,106 160,130 138,142 116,130 116,106"
                    :stroke="accentColors[1]" stroke-width="1.3" stroke-opacity="0.7"/>
                  <!-- connectors -->
                  <line x1="74" y1="79"  x2="62"  y2="94"  :stroke="accentColors[1]" stroke-width="0.8" stroke-opacity="0.5"/>
                  <line x1="126" y1="79" x2="138" y2="94"  :stroke="accentColors[1]" stroke-width="0.8" stroke-opacity="0.5"/>
                  <!-- inner verticals -->
                  <line x1="100" y1="34" x2="100" y2="94"  :stroke="accentColors[1]" stroke-width="0.5" stroke-opacity="0.2" stroke-dasharray="4,4"/>
                  <line x1="62"  y1="94" x2="62"  y2="142" :stroke="accentColors[1]" stroke-width="0.5" stroke-opacity="0.2" stroke-dasharray="4,4"/>
                  <line x1="138" y1="94" x2="138" y2="142" :stroke="accentColors[1]" stroke-width="0.5" stroke-opacity="0.2" stroke-dasharray="4,4"/>
                </template>

                <!-- Ascending bars / momentum -->
                <template v-if="i === 2">
                  <rect x="20"  y="152" width="22" height="18"  :stroke="accentColors[2]" stroke-width="1.2" stroke-opacity="0.4"/>
                  <rect x="48"  y="132" width="22" height="38"  :stroke="accentColors[2]" stroke-width="1.2" stroke-opacity="0.55"/>
                  <rect x="76"  y="108" width="22" height="62"  :stroke="accentColors[2]" stroke-width="1.2" stroke-opacity="0.7"/>
                  <rect x="104" y="82"  width="22" height="88"  :stroke="accentColors[2]" stroke-width="1.2" stroke-opacity="0.85"/>
                  <rect x="132" y="54"  width="22" height="116" :stroke="accentColors[2]" stroke-width="1.2" stroke-opacity="1"/>
                  <!-- top highlights -->
                  <line x1="20"  y1="152" x2="31"  y2="146" :stroke="accentColors[2]" stroke-width="0.7" stroke-opacity="0.5"/>
                  <line x1="42"  y1="152" x2="53"  y2="146" :stroke="accentColors[2]" stroke-width="0.7" stroke-opacity="0.5"/>
                  <line x1="48"  y1="132" x2="59"  y2="126" :stroke="accentColors[2]" stroke-width="0.7" stroke-opacity="0.6"/>
                  <line x1="70"  y1="132" x2="81"  y2="126" :stroke="accentColors[2]" stroke-width="0.7" stroke-opacity="0.6"/>
                  <line x1="76"  y1="108" x2="87"  y2="102" :stroke="accentColors[2]" stroke-width="0.7" stroke-opacity="0.7"/>
                  <line x1="98"  y1="108" x2="109" y2="102" :stroke="accentColors[2]" stroke-width="0.7" stroke-opacity="0.7"/>
                  <line x1="104" y1="82"  x2="115" y2="76"  :stroke="accentColors[2]" stroke-width="0.7" stroke-opacity="0.85"/>
                  <line x1="126" y1="82"  x2="137" y2="76"  :stroke="accentColors[2]" stroke-width="0.7" stroke-opacity="0.85"/>
                  <line x1="132" y1="54"  x2="143" y2="48"  :stroke="accentColors[2]" stroke-width="0.7" stroke-opacity="1"/>
                  <line x1="154" y1="54"  x2="165" y2="48"  :stroke="accentColors[2]" stroke-width="0.7" stroke-opacity="1"/>
                </template>
              </svg>
            </div>
          </div>

          <!-- Title + description -->
          <div class="mt-8 pt-8 border-t border-lightBlack">
            <h3 class="text-sm font-semibold text-almostWhite mb-2">{{ card.title }}</h3>
            <p class="text-sm text-slate leading-relaxed">{{ card.description }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// One brand accent per card
const accentColors = ['#9E5CF7', '#2BC2FF', '#42DED1']

const cards = [
  {
    title: 'Built for purpose',
    description: 'Scourge is shaped by the practices and principles of world-class product teams.',
  },
  {
    title: 'Powered by AI agents',
    description: 'Designed for workflows shared by humans and agents. From drafting PRDs to pushing PRs.',
  },
  {
    title: 'Designed for speed',
    description: 'Reduces noise and restores momentum to help teams ship with high velocity and focus.',
  },
]
</script>
