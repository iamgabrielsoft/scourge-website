<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Everything your team needs in one place
        </h2>
        <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Powerful features designed to help you and your team work more efficiently.
        </p>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <!-- Feature 1 -->
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="w-14 h-14 bg-indigo-50 rounded-lg flex items-center justify-center mb-6">
            <svg class="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Project Management</h3>
          <p class="text-gray-600">
            Organize tasks, set deadlines, and track progress with our intuitive project management tools.
          </p>
        </div>

        <!-- Feature 2 -->
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="w-14 h-14 bg-green-50 rounded-lg flex items-center justify-center mb-6">
            <svg class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Team Collaboration</h3>
          <p class="text-gray-600">
            Work together in real-time with chat, comments, and file sharing all in one place.
          </p>
        </div>

        <!-- Feature 3 -->
        <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          <div class="w-14 h-14 bg-purple-50 rounded-lg flex items-center justify-center mb-6">
            <svg class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Advanced Analytics</h3>
          <p class="text-gray-600">
            Get insights into your team's performance with detailed analytics and reports.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesSection'
}
</script>
