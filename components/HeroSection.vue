<template>
  <div class="relative bg-white overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 transform -skew-y-3 origin-top-left"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left content -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Work Better, <span class="text-indigo-600\">Together</span>
          </h1>
          <p class="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
            The all-in-one collaboration platform that brings your team together, no matter where they are. Share, create, and achieve more as one seamless unit.
          </p>
          
          <div class="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#" class="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Get Started for Free
            </a>
            <a href="#" class="px-8 py-4 bg-white hover:bg-gray-50 text-indigo-600 font-medium rounded-lg border-2 border-indigo-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Watch Demo
            </a>
          </div>
          
          <div class="mt-10 flex items-center justify-center lg:justify-start space-x-6">
            <div class="flex -space-x-2">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/12.jpg" alt="User 1">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/42.jpg" alt="User 2">
              <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/63.jpg" alt="User 3">
            </div>
            <div class="text-sm text-gray-600">
              <span class="font-medium text-indigo-600">10,000+</span> teams trust our platform
            </div>
          </div>
        </div>
        
        <!-- Right content - Illustration -->
        <div class="relative">
          <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
            <div class="aspect-w-10 aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none">
              <img class="object-cover rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Team collaboration">
            </div>
            
            <!-- Stats cards -->
            <div class="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
              <div class="flex items-center">
                <div class="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                  <svg class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-500">Average time saved</p>
                  <p class="text-2xl font-bold text-gray-900">4.5 hours</p>
                </div>
              </div>
            </div>
            
            <div class="absolute -top-8 -right-8 bg-indigo-600 p-6 rounded-xl shadow-xl text-white">
              <div class="flex items-center">
                <div>
                  <p class="text-sm font-medium">Team productivity</p>
                  <p class="text-2xl font-bold">+47%</p>
                  <p class="text-xs opacity-80 mt-1">reported by teams</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Trusted by logos -->
      <div class="mt-24">
        <p class="text-center text-sm font-semibold text-gray-500 tracking-wider uppercase">
          Trusted by innovative teams
        </p>
        <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div class="col-span-1 flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity">
            <span class="text-2xl font-bold text-gray-800">Acme</span>
          </div>
          <div class="col-span-1 flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity">
            <span class="text-2xl font-bold text-blue-600">Stark</span>
          </div>
          <div class="col-span-1 flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity">
            <span class="text-2xl font-bold text-green-600">Zenith</span>
          </div>
          <div class="col-span-1 flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity">
            <span class="text-2xl font-bold text-purple-600">Nova</span>
          </div>
          <div class="col-span-1 flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity">
            <span class="text-2xl font-bold text-red-600">Pulse</span>
          </div>
          <div class="col-span-1 flex justify-center items-center opacity-70 hover:opacity-100 transition-opacity">
            <span class="text-2xl font-bold text-yellow-600">Orbit</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>
