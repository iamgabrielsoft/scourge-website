<template>
  <section class="bg-indigo-700">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <div class="max-w-xl">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          <span class="block">Ready to transform your team's workflow?</span>
        </h2>
        <p class="mt-4 text-lg leading-6 text-indigo-200">
          Join thousands of teams who are already working more efficiently with our platform.
        </p>
      </div>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <a
            :href="isLoggedIn ? `${appUrl}/home` : `${appUrl}/create`"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
          >
            {{ isLoggedIn ? 'Open App' : 'Get started' }}
          </a>
        </div>
        <div class="ml-3 inline-flex rounded-md shadow">
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 bg-opacity-60 hover:bg-opacity-70"
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()
const appUrl = config.public.appUrl
const { isLoggedIn } = useAuthState()
</script>
