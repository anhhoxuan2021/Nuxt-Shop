<template>
  <Carousel id="my-testimonial" :items-to-show="6.5" :wrap-around="true">
    <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item">
          <div class="movie-card m-1 mx-4">
                        <div class="movie-img parent-img">
                          <img :src="`_nuxt/assets/images/testimonial/${slide.img}`" alt="Anh Ho" />
                        </div>
                        <div class="movie-title parent-text">
                            <p class="text-white text-sm-center font-small flex-center clss-child">{{ slide.title }}</p>
                        </div>
                    </div>
        </div>
        
      </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'WrapAround',
    components: {
      Carousel,
      Slide,
      Navigation,
      Pagination
    },
    props: ['slides'],
  })
  </script>
  
  <style scoped>
    
  </style>
  