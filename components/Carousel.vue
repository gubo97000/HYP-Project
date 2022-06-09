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
    object-fit: cover;
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