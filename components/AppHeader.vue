<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <span class="text-xl font-bold text-gray-900">Scourge</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:ml-6 md:flex md:space-x-8">
          <NuxtLink
            v-for="item in navItems"
            :key="item.name"
            :to="item.href"
            class="group relative inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 transition-colors duration-200"
            :class="{ 'text-gray-900': $route.path === item.href }"
          >
            <span class="relative">
              {{ item.name }}
              <span
                class="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full"
                :class="{ 'w-full': $route.path === item.href }"
              ></span>
            </span>
          </NuxtLink>
        </nav>

        <!-- Right side items -->
        <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center gap-3">
          <template v-if="isLoggedIn">
            <a
              :href="`${appUrl}/home`"
              class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              Open App
            </a>
          </template>
          <template v-else>
            <a
              :href="appUrl"
              class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Login
            </a>
            <a
              :href="`${appUrl}/create`"
              class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              Get Started
            </a>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const config = useRuntimeConfig()
const appUrl = config.public.appUrl
const { isLoggedIn } = useAuthState()

const navItems = [
  { name: 'Products', href: '/products' },
  { name: 'Community', href: '/community' },
  { name: 'About', href: '/about' },
]
</script>
