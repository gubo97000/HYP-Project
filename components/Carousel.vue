<!-- Component for image slideshow. -->
<template>
  <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
    <!-- Carousel indicators (the set of dots at the bottom that controls the current slide) -->
    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <!-- One "dot" per slide -->
      <button
      v-for="(slide, si) in slides"
      v-if="slides.length > 1" :key="si" type="button" data-bs-target="#carouselExampleCaptions"
        class="control" :data-bs-slide-to="si" :class="{ active: isActive(si) }" aria-current="true"
        aria-label="Slide 1"></button>
    </div>

    <!-- Actual slide images (with captions) -->
    <div class="carousel-inner relative w-full overflow-hidden">
      <div
        v-for="(slide, si) in slides" :key="si" class="carousel-item relative float-left img-container"
        :class="{ active: isActive(si) }">
        <!-- Image -->
        <img :src="require('@/assets/' + slide)" class="block carousel-img" alt="Representative image" />
        <!-- Caption -->
        <!-- <div class="carousel-caption hidden md:block absolute text-center">
          <h5 class="text-xl">First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div> -->
      </div>
    </div>

    <!-- Button "previous slide" -->
    <button
      v-if="slides.length > 1"
      class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 btn-left"
      type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <!-- Button "next slide" -->
    <button
      v-if="slides.length > 1"
      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 btn-right"
      type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
let slideIndex = 0

export default {
  name: 'Carousel',
  props: {
    // Each item is a path to an image
    slides: {
      type: Array,
      required: true,
    },
  },
  methods: {
    // True if current slide
    isActive(index) {
      return index === slideIndex
    },
    // True if neither this item, nor the adjacent ones, anre the current slide
    isHidden(index) {
      return !(
        this.isActive(index) ||
        this.isActive((index + 1) % this.slides.length) ||
        this.isActive((index - 1) % this.slides.length)
      )
    },

    // Next slide
    handleNext() {
      slideIndex = (slideIndex + 1) % this.slides.length
    },
    // Previous slide
    handlePrev() {
      slideIndex = (slideIndex - 1) % this.slides.length
    },
  },
}
</script>

<style scoped>
.img-container {
  /* min-width: 100%; */
  overflow: hidden;
  height: 650px;
}

.carousel-img {
  height: 100%;
  width: 100%;
  object-fit: cover;

  border-radius: 15px;
}

.btn-right:hover {
  background-color: transparent;
  background-image: linear-gradient(to right, transparent, #ffffff8e);
}

.btn-left:hover {
  background-color: transparent;
  background-image: linear-gradient(to right, #ffffff8e, transparent);
}
</style>
