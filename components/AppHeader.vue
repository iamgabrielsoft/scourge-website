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
        <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
          <!-- <button class="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="sr-only">View notifications</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button> -->

          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <!-- <div>
              <button @click="isProfileMenuOpen = !isProfileMenuOpen" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="sr-only">Open user menu</span>
                <div class="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span class="text-indigo-600 font-medium">U</span>
                </div>
              </button>
            </div> -->
            
            <!-- Dropdown menu -->
            <!-- <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div v-if="isProfileMenuOpen" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50">
                <NuxtLink 
                  v-for="item in userMenuItems" 
                  :key="item.name" 
                  :to="item.href"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  @click.native="isProfileMenuOpen = false"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
            </transition> -->
          </div>
        </div>

        <!-- Mobile menu button -->
        <!-- <div class="-mr-2 flex items-center md:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" :class="{'hidden': isMobileMenuOpen, 'block': !isMobileMenuOpen}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="h-6 w-6" :class="{'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div> -->
      </div>
    </div>

    <!-- Mobile menu -->
    <!-- <div class="md:hidden" v-show="isMobileMenuOpen">
      <div class="pt-2 pb-3 space-y-1">
        <NuxtLink 
          v-for="item in navItems" 
          :key="item.name" 
          :to="item.href"
          class="block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          :class="{
            'bg-indigo-50 border-indigo-500 text-indigo-700': $route.path === item.href,
            'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800': $route.path !== item.href
          }"
          @click.native="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <div class="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <span class="text-indigo-600 font-medium">U</span>
            </div>
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">User Name</div>
            <div class="text-sm font-medium text-gray-500">user@example.com</div>
          </div>
        </div>
        <div class="mt-3 space-y-1">
          <NuxtLink 
            v-for="item in userMenuItems" 
            :key="item.name" 
            :to="item.href"
            class="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            @click.native="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div> -->
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isProfileMenuOpen: false,
      isMobileMenuOpen: false,
      navItems: [
        { name: 'Products', href: '/products' },
        { name: 'Community', href: '/community' },
        { name: 'About', href: '/about' },
      ],
      userMenuItems: [
        { name: 'Your Profile', href: '/profile' },
        { name: 'Settings', href: '/settings' },
        { name: 'Sign out', href: '/logout' },
      ]
    }
  },
  mounted() {
    // Close dropdown when clicking outside
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isProfileMenuOpen = false
      }
    }
  }
}
</script>
