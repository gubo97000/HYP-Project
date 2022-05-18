<!-- <template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators" >
        <li data-target="#carouselExampleIndicators" :data-slide-to="si" :class="{ active: isActive(si) }" v-for="(slide, si) in slides" :key="si"></li>
    </ol>
    <div class="carousel-inner" >
        <div class="carousel-item" :class="{ active: isActive(si) }" v-for="(slide, si) in slides" :key="si">
            <img class="d-block w-100" :src="require('@/assets/' + slide)" alt=""> -->
            <!-- <div class="carousel-caption d-none d-md-block">
                <h5>...</h5>
                <p>...</p>
            </div> -->
        <!-- </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <button class="carousel-control-next" :onclick="handleNext()" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>
    </div>
</template> -->

<!-- <div class="relative" data-carousel="static">
        <div class="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            <div class="duration-700 ease-in-out" :class="{hidden: isHidden(si)}" :data-carousel-item="isActive(si) ? 'active': ''" v-for="(slide, si) in slides" :key="si">
                <img :src="require('@/assets/' + slide)" class="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="">
            </div>
        </div>
        <div class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button v-for="(slide, si) in slides" :key="si" type="button" class="w-3 h-3 rounded-full" :aria-current="isActive(si)" aria-label="Slide 1" :data-carousel-slide-to="si"></button>
        </div>
        <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev :onclick="handlePrev()">
            <span class="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="hidden">Previous</span>
            </span>
        </button>
        <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next :onclick="handleNext()">
            <span class="inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="hidden">Next</span>
            </span>
        </button>
    </div> -->

<template>
<div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button v-for="(slide, si) in slides" :key="si"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      :data-bs-slide-to="si"
      :class="{ active: isActive(si) }"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item relative float-left img-container" v-for="(slide, si) in slides" :key="si" :class="{ active: isActive(si) }">
      <img 
        :src="require('@/assets/' + slide)"
        class="block carousel-img"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style scoped>
.img-container {
    /* min-width: 100%; */
    overflow: hidden;
    height: 450px; 
}
.carousel-img {
    height: 100%;
}
</style>

<script>
let slideIndex = 0;

export default {
  name: 'Carousel',
  props: {
      slides: {
          type: Array,
          required: true
      }
  },
  methods: {
    isActive(index) {
        return index === slideIndex;
    },
    isHidden(index) {
        return !(this.isActive(index) || this.isActive((index + 1) % this.slides.length) || this.isActive((index - 1) % this.slides.length));
    },

    handleNext(){
        console.log("PREV")
        slideIndex = (slideIndex + 1) % this.slides.length;
    },
    handlePrev(){
        console.log("NEXT")
        slideIndex = (slideIndex - 1) % this.slides.length;
    }
  }
}
</script>