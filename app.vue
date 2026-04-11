<template>
  <div class="min-h-screen bg-almostBlack">
    <AppHeader />
    <main class="overflow-hidden">
      <!-- Page Content -->
      <div class=" 6">
        <NuxtPage />
      </div>
    </main>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import FooterSection from '~/components/FooterSection.vue'

export default {
  head() {
    return {
      title: 'Scourge',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Scourge - Your collaborative platform' }
      ]
    }
  },
  components: {
    AppHeader,
    FooterSection,
  }
}
</script>
