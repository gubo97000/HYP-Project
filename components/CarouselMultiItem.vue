<!-- Component for carousel that displays multiple cards at a time.
It includes previous/next buttons to skip to other N cards (where N is the count of visible cards at a time).
It also includes logic to handle resizing of the window -->
<template>
  <div ref="carouselContainer" class="carousel-container">
    <div class="carousel-inner" ref="carouselInner">
      <div ref="track" class="track">
        <!-- Every card is displayed here -->
        <div v-for="(item, si) in slides" :key="si" ref="cardContainer" class="card-container">
          <CardComponent :to="`/pois/${item.id}`" :image="item.image" :caption="item.name" class="card-component" />
        </div>
      </div>
    </div>
    <div class="nav">
      <!-- Control to go to previous cards -->
      <button ref="prev" class="prev" @click="handlePrev()">
        <i class="material-icons"> keyboard_arrow_left </i>
      </button>
      <!-- Control to go to next cards -->
      <button ref="next" class="next" @click="handleNext()">
        <i class="material-icons"> keyboard_arrow_right </i>
      </button>
    </div>
  </div>
</template>

<script>
import CardComponent from '~/components/Card.vue'

let slideIndex = 0

let cardWidth
let visibleCount
let maxWidth

export default {
  name: 'CarouselMultiItem',
  components: {
    CardComponent,
  },
  props: {
    slides: {
      // Every slide has an id (for navigation to POI's details), the POI title for the caption, and an image
      type: Array,
      required: true,
    },
  },
  mounted() {
    cardWidth = this.$refs.cardContainer[0].offsetWidth
    visibleCount =
      this.$refs.carouselContainer.offsetWidth /
      this.$refs.cardContainer[0].offsetWidth
    maxWidth =
      this.$refs.track.offsetWidth - this.$refs.carouselContainer.offsetWidth

    // If cards don't overflow (i.e. there are no more than 4 cards when there is space for 4), remove the prev/next arrows
    if (this.$refs.track.children.length <= visibleCount) {
      this.$refs.next.classList.add('hide')
      // Class 'no-overflow' centers the cards to the screen (makes sense if there are max 3 cards for a space of 4)
      this.$refs.carouselInner.classList.add('no-overflow')
    }

    // Handles resizing of window to recompute some parameters (X axis, show/hide controls)
    window.addEventListener('resize', () => {
      // Recomputes width and visible count after resize, needed for following instructions
      visibleCount =
        this.$refs.carouselContainer.offsetWidth /
        this.$refs.cardContainer[0].offsetWidth
      maxWidth =
        this.$refs.track.offsetWidth - this.$refs.carouselContainer.offsetWidth

      // If cards don't overflow with the new size, remove the prev/next arrows
      if (this.$refs.track.children.length <= visibleCount) {
        // Jump back to first card
        slideIndex = 0;
        // this.$refs.track.style.transform = `translateX(0px)`
        this.$refs.carouselInner.scrollLeft = 0

        // Center remaining cards
        this.$refs.carouselInner.classList.add('no-overflow')

        // Remove prev/next controls
        this.$refs.next.classList.add('hide')
        this.$refs.prev.classList.remove('show')
        return;
      } else {
        // Do not center cards anymore (needed for proper prev/next movements)
        this.$refs.carouselInner.classList.remove('no-overflow')
      }

      // When enlarging window: this branch prevents to go too far to the right (i.e. blank space on the right, after the last item), by fixing slideIndex
      if (slideIndex + 1 >= this.$refs.track.children.length - visibleCount) {
        slideIndex = Math.floor(this.$refs.track.children.length - visibleCount)
        // this.$refs.track.style.transform = `translateX(-${slideIndex * cardWidth
        //   }px)`
        this.$refs.carouselInner.scrollLeft = slideIndex * cardWidth
      }

      // Dynamically toggles the Next arrow based on new position in the carousel after resizing (disappears if at the last card)
      if (slideIndex * cardWidth >= maxWidth - 10) {
        this.$refs.next.classList.add('hide')
      } else {
        this.$refs.next.classList.remove('hide')
      }
    })

    // Handles scroll with gesture as alternative to prev/next
    this.$refs.carouselInner.addEventListener('scroll', () => {
      const newSlideIndex = /*Math.floor(this.$refs.carouselInner.scrollLeft / cardWidth);*/ this.$refs.carouselInner.scrollLeft / cardWidth
      console.log(newSlideIndex, slideIndex)

      // Unchanged
      if (newSlideIndex === slideIndex) return;

      // Next
      if (newSlideIndex > slideIndex) {
        slideIndex = newSlideIndex;
        this.controlNext();
      }
      // Prev
      else {
        slideIndex = newSlideIndex;
        this.controlPrev();
      }
    })
  },
  methods: {
    handleNext() {
      console.log(slideIndex)
      // slideIndex increased by visibleCount, and capped at length-1
      slideIndex = Math.min(slideIndex + visibleCount, this.$refs.track.children.length - 1)
      console.log(slideIndex)

      // Move to the new visible card index
      this.$refs.carouselInner.scrollLeft = Math.min(
        maxWidth,
        slideIndex * cardWidth
      )

      // Handle show/hide of prev/next
      this.controlNext();

    },
    handlePrev() {
      console.log(slideIndex)// slideIndex decreased by visibleCount, and capped at 0
      slideIndex = Math.max(slideIndex - visibleCount, 0)
      console.log(slideIndex)

      // Move to the new visible card index
      this.$refs.carouselInner.scrollLeft = slideIndex * cardWidth

      // Handle show/hide of prev/next
      this.controlPrev();
    },

    controlNext() {
      // Enable button Prev to skip back
      if (slideIndex > 0.1)
        this.$refs.prev.classList.add('show')

      // Disable button Next if last card
      if (slideIndex * cardWidth >= maxWidth - 10) {
        this.$refs.next.classList.add('hide')
      }
    },

    controlPrev() {
      // Re-enable button Next to skip forward
      if (slideIndex * cardWidth < maxWidth - 10)
        this.$refs.next.classList.remove('hide')

      // Disable button Prev if back to first card
      if (slideIndex === 0) {
        this.$refs.prev.classList.remove('show')
      }

    }
  },
}
</script>

<style scoped>
/* Import font used for previous/next arrows */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.carousel-container {
  width: 1280px;
  margin: 50px auto;
  min-height: 200px;
  position: relative;
}

.carousel-container {
  width: 93.5%;
}

.carousel-container .carousel-inner {
  height: 400px;
  align-items: center;
  display: flex;
  /* overflow: hidden; */
}

.carousel-inner {
  overflow-x: scroll;
  scroll-snap-type: x;
  scrollbar-width: none;
}

/* .card-container {
  scroll-snap-align: start;
} */

.carousel-inner::-webkit-scrollbar {
  display: none;
}

.carousel-container .track {
  display: inline-flex;
  /* transition: transform 0.5s; */

  padding-left: 10px;
  padding-right: 10px;
}

.carousel-inner {
  scroll-behavior: smooth;
}

.carousel-container .card-container {
  width: 315px;
  flex-shrink: 0;
  height: 350px;
  padding-right: 10px;
  padding-left: 10px;
  box-sizing: border-box;
}

.card-component>>>.card {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.nav button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #aaa;
  background-color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.nav .prev {
  left: -30px;
  display: none;
}

.nav .prev.show {
  display: block;
}

.nav .next {
  right: -30px;
}

.nav .next.hide {
  display: none;
}

.card-component>>>.card>* {
  flex: 1;
}

.card-component>>>img {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  height: 80%;
  object-fit: cover;
}

.card-component>>>figcaption {
  height: 20%;
  justify-content: center;
  line-height: 30px;
  display: flex;
  align-items: center;
}

.card-component {
  height: 100%;
}

.no-overflow {
  justify-content: center;
}
</style>
