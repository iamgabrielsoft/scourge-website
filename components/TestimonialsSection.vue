<template>
  <section class="bg-almostBlack py-28 px-6 lg:px-8 overflow-hidden relative">

    <!-- Subtle glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-px pointer-events-none"
      style="background: linear-gradient(90deg, transparent, rgba(66,222,209,0.3), transparent)"></div>

    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
        <div>
          <p class="text-[10px] tracking-[0.25em] uppercase font-mono text-slateDark mb-4">Testimonials</p>
          <h2 class="text-4xl md:text-5xl font-bold text-almostWhite leading-tight">
            Loved by teams<br/>worldwide.
          </h2>
        </div>
        <p class="text-sm text-slate max-w-xs leading-relaxed">
          Join thousands of teams who have transformed the way they ship products.
        </p>
      </div>

      <!-- Featured large testimonial -->
      <div class="border border-lightBlack bg-veryDarkBlue p-10 lg:p-14 mb-px relative overflow-hidden group hover:bg-almostBlack transition-colors duration-300">
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style="background: radial-gradient(ellipse 60% 60% at 20% 50%, rgba(158,92,247,0.05) 0%, transparent 70%)"></div>

        <!-- Large quote mark -->
        <svg width="48" height="36" viewBox="0 0 48 36" fill="none" class="mb-8 opacity-30">
          <path d="M0 36V22.5C0 15 3 8.25 9 2.25L13.5 6C10.5 9 8.5 12.25 7.5 15.75H15V36H0ZM27 36V22.5C27 15 30 8.25 36 2.25L40.5 6C37.5 9 35.5 12.25 34.5 15.75H42V36H27Z"
            fill="#9E5CF7"/>
        </svg>

        <blockquote class="text-2xl md:text-3xl font-medium text-almostWhite leading-snug max-w-4xl mb-10">
          "Scourge didn't just change our tools — it changed how we think about building. We ship twice as fast and with half the meetings."
        </blockquote>

        <div class="flex items-center justify-between flex-wrap gap-6">
          <div class="flex items-center gap-4">
            <div class="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
              style="background: rgba(158,92,247,0.2); color: #9E5CF7">GL</div>
            <div>
              <p class="text-sm font-semibold text-almostWhite">Grace Liu</p>
              <p class="text-xs text-slateDark">CPO, Vercel</p>
            </div>
          </div>
          <!-- Stars -->
          <div class="flex items-center gap-1">
            <svg v-for="i in 5" :key="i" width="14" height="14" viewBox="0 0 14 14" fill="#F5BE31">
              <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 8.885 3.91 10.51l.59-3.44L2 4.632l3.455-.502L7 1z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Grid of smaller testimonials -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-lightBlack border border-lightBlack border-t-0">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="group bg-veryDarkBlue p-8 flex flex-col gap-5 hover:bg-almostBlack transition-colors duration-300 relative overflow-hidden"
        >
          <!-- Hover glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :style="{ background: `radial-gradient(ellipse 80% 50% at 50% 100%, ${testimonial.color}08 0%, transparent 70%)` }"></div>

          <!-- Quote icon -->
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
            <path d="M0 16V10C0 6.667 1.333 3.667 4 1L6 3C4.667 4.333 3.833 5.833 3.5 7.5H7V16H0ZM11 16V10C11 6.667 12.333 3.667 15 1L17 3C15.667 4.333 14.833 5.833 14.5 7.5H18V16H11Z"
              :fill="testimonial.color" fill-opacity="0.35" class="group-hover:fill-opacity-60 transition-all duration-300"/>
          </svg>

          <!-- Quote text -->
          <p class="text-sm text-slate leading-relaxed flex-1 relative">
            "{{ testimonial.quote }}"
          </p>

          <!-- Stars -->
          <div class="flex items-center gap-0.5 relative">
            <svg v-for="i in 5" :key="i" width="11" height="11" viewBox="0 0 14 14"
              :fill="i <= testimonial.rating ? '#F5BE31' : '#394351'">
              <path d="M7 1l1.545 3.13 3.455.502-2.5 2.437.59 3.44L7 8.885 3.91 10.51l.59-3.44L2 4.632l3.455-.502L7 1z"/>
            </svg>
          </div>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-4 border-t border-lightBlack relative">
            <div class="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
              :style="{ background: testimonial.color + '22', color: testimonial.color }">
              {{ testimonial.initials }}
            </div>
            <div>
              <p class="text-xs font-semibold text-almostWhite">{{ testimonial.name }}</p>
              <p class="text-[11px] text-slateDark">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Press logos row -->
      <div class="mt-px border border-t-0 border-lightBlack bg-veryDarkBlue px-8 py-8">
        <!-- <p class="text-[10px] tracking-[0.2em] uppercase font-mono text-slateDark text-center mb-8">As seen in</p>
        <div class="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          <span
            v-for="press in pressLogos"
            :key="press.name"
            class="text-lg font-bold transition-colors duration-200 cursor-default"
            :style="{ color: '#394351' }"
            @mouseenter="e => e.target.style.color = press.color"
            @mouseleave="e => e.target.style.color = '#394351'"
          >
            {{ press.name }}
          </span>
        </div> -->
      </div>

    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: "The AI intake alone saves us three hours of triage every single week. It's the first tool that actually gets out of our way.",
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    initials: 'SJ',
    color: '#2BC2FF',
    rating: 5,
  },
  {
    quote: "The analytics dashboard is worth the price alone. We improved team productivity by 40% in the first month.",
    name: 'Michael Chen',
    role: 'Head of Product, InnoTech',
    initials: 'MC',
    color: '#42DED1',
    rating: 5,
  },
  {
    quote: "I've tried every tool out there. Nothing matches Scourge for speed, clarity, and how well it fits an engineering-led team.",
    name: 'Emma Rodriguez',
    role: 'CEO, DesignHub',
    initials: 'ER',
    color: '#FF5C80',
    rating: 5,
  },
  {
    quote: "Scourge replaced four different tools for us. Our onboarding time dropped from weeks to days.",
    name: 'Daniel Park',
    role: 'Eng Manager, Stripe',
    initials: 'DP',
    color: '#9E5CF7',
    rating: 5,
  },
  {
    quote: "The roadmap feature finally makes quarterly planning feel like something the whole company can rally around.",
    name: 'Priya Nair',
    role: 'CPO, Retool',
    initials: 'PN',
    color: '#F5BE31',
    rating: 5,
  },
  {
    quote: "Customer support is exceptional. They're responsive, proactive, and actually listen to feature requests.",
    name: 'Marcus Bell',
    role: 'VP Engineering, Loom',
    initials: 'MB',
    color: '#FF4DFA',
    rating: 5,
  },
]

const pressLogos = [
  { name: 'Forbes',       color: '#F5BE31' },
  { name: 'TechCrunch',  color: '#FF5C80' },
  { name: 'Wired',       color: '#9E5CF7' },
  { name: 'The Verge',   color: '#2BC2FF' },
  { name: 'Fast Company', color: '#42DED1' },
]
</script>
