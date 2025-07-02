<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Loved by teams worldwide
        </h2>
        <p class="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Join thousands of satisfied teams who have transformed their workflow.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Testimonial 1 -->
        <!-- <div class="bg-gray-50 p-8 rounded-xl">
          <div class="flex items-center mb-4">
            <div class="flex-shrink-0">
              <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/32.jpg" alt="Sarah Johnson">
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-semibold text-gray-900">Sarah Johnson</h4>
              <p class="text-indigo-600">CTO, TechCorp</p>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "This platform has completely transformed how our remote team collaborates. The real-time features are game-changing."
          </p>
          <div class="mt-4 flex text-yellow-400">
            <svg v-for="i in 5" :key="i" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div> -->

        <!-- Testimonial 2 -->
        <!-- <div class="bg-gray-50 p-8 rounded-xl">
          <div class="flex items-center mb-4">
            <div class="flex-shrink-0">
              <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/men/54.jpg" alt="Michael Chen">
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-semibold text-gray-900">Michael Chen</h4>
              <p class="text-indigo-600">Product Manager, InnoTech</p>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "The analytics dashboard alone is worth the price. We've improved our team's productivity by 40% since switching."
          </p>
          <div class="mt-4 flex text-yellow-400">
            <svg v-for="i in 5" :key="i" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div> -->

        <!-- Testimonial 3 -->
        <!-- <div class="bg-gray-50 p-8 rounded-xl">
          <div class="flex items-center mb-4">
            <div class="flex-shrink-0">
              <img class="h-12 w-12 rounded-full" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Emma Rodriguez">
            </div>
            <div class="ml-4">
              <h4 class="text-lg font-semibold text-gray-900">Emma Rodriguez</h4>
              <p class="text-indigo-600">CEO, DesignHub</p>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "The customer support is exceptional. They've been incredibly responsive to our team's needs and feature requests."
          </p>
          <div class="mt-4 flex text-yellow-400">
            <svg v-for="i in 5" :key="i" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div> -->
      </div>

      <div class="mt-16 text-center">
        <p class="text-lg font-medium text-gray-900">Trusted by over 10,000+ teams worldwide</p>
        <div class="mt-6 flex justify-center space-x-8">
          <div class="opacity-60 hover:opacity-100 transition-opacity">
            <span class="text-2xl font-bold text-blue-600">Forbes</span>
          </div>
          <div class="opacity-60 hover:opacity-100 transition-opacity">
            <span class="text-2xl font-bold text-green-600">TechCrunch</span>
          </div>
          <div class="opacity-60 hover:opacity-100 transition-opacity">
            <span class="text-2xl font-bold text-purple-600">Wired</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection'
}
</script>
