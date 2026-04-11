<template>
    <div>
        <!-- Hero Section -->
        <HeroSection />

        <!-- Value Proposition Section -->
        <ValuePropSection />

        <!-- Product Section -->
        <ProductSection />

        <!-- Community Section -->
        <CommunitySection />

        <!-- About Section -->
        <AboutSection />

        <!-- Features Section -->
        <FeaturesSection />

        <!-- Testimonials Section -->
        <TestimonialsSection />

        <!-- Call to Action -->
        <CallToAction />


    </div>
</template>

<script setup>
// Import components
import HeroSection from '~/components/HeroSection.vue'
import ValuePropSection from '~/components/ValuePropSection.vue'
import ProductSection from '~/components/ProductSection.vue'
import CommunitySection from '~/components/CommunitySection.vue'
import AboutSection from '~/components/AboutSection.vue'
import FeaturesSection from '~/components/FeaturesSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import CallToAction from '~/components/CallToAction.vue'
import FooterSection from '~/components/FooterSection.vue'

// Set page title
useHead({
  title: 'Scourge - Your collaborative platform',
  meta: [
    { name: 'description', content: 'Scourge - Your collaborative platform' }
  ]
})
</script>
