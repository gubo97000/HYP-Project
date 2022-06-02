<template>
<div class="carousel-container"  ref="carouselContainer">
  <div class="carousel-inner">
    <div class="track" ref="track">
      
      <div class="card-container" v-for="(item, si) in slides" :key="si" ref="cardContainer">
        <nuxt-link :to="`/pois/${item.id}`" class="nuxt-clickable">
            <div class="image-container card">
              <figure>
                <img :src="require('@/assets/' + item.image)" alt="" class="img"/>
                <figcaption class="info">{{ item.name }}</figcaption>
              </figure>
            </div>
          </nuxt-link>
      </div>
      
    </div>
  </div>
  <div class="nav">
    <button class="prev" ref="prev" @click="handlePrev()">
      <i class="material-icons">
      keyboard_arrow_left
      </i>
    </button>
    <button class="next" ref="next" @click="handleNext()">
      <i class="material-icons">
      keyboard_arrow_right
      </i>
    </button>
  </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.carousel-container {
  width: 1280px;
  margin: 50px auto;
  min-height: 200px;
  position: relative;
}
.carousel-container {
    width: 93%;
  }
.carousel-container .carousel-inner {
  overflow: hidden;
}
.carousel-container .track {
  display: inline-flex;
  transition: transform 0.5s;
}
.carousel-container .card-container {
  width: 320px;
  flex-shrink: 0;
  height: 350px;
  padding-right: 15px;
  box-sizing: border-box;
}
.carousel-container .card-container .card {
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

.card > * {
  flex: 1;
}
.card .img {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  height: 80%;
  object-fit: cover;
}
figcaption {
    padding-top: 2.5%;
}

/*TODO create component for this, don't copy-paste*/
.image-container {
  text-align: center;
}
figcaption {
    font-variant: small-caps;
    font-family: Arial;
    font-weight: bold;
    font-size: 22px;
    line-height: 2;
    color: #26466F;
}
figure {
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
}
.image-container:hover {
    transform: scale(1.1);
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
}
.image-container {
    padding: 5%;
    margin-bottom: -5%;

    transition: transform 0.2s;
    -webkit-transition: -webkit-transform 0.2s;
    -moz-transition: -moz-transform 0.2s;
    -o-transition: -o-transform 0.2s;
}

</style>

<script>

let slideIndex = 0;

let cardWidth;
let visibleCount;
let maxWidth;

export default {
  name: 'CarouselMultiItem',
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
    isActiveRange(index, range) {
      for(var i = 0; i < range; i++) {
          if(index === slideIndex + i)
          return true;
      }
      return false;
    },

    handleNext(){
      slideIndex++;
      this.$refs.prev.classList.add('show');

      this.$refs.track.style.transform = `translateX(-${Math.min(maxWidth - 15, slideIndex * cardWidth)}px)`;
      
      if((slideIndex) * cardWidth >= maxWidth - 15) {
          this.$refs.next.classList.add('hide');
      }
    },
    handlePrev(){
      slideIndex--;
      this.$refs.next.classList.remove('hide');
      if (slideIndex === 0) {
        this.$refs.prev.classList.remove('show');
      }
      this.$refs.track.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
    }
  },
  mounted(){
    cardWidth = this.$refs.cardContainer[0].offsetWidth
    visibleCount = this.$refs.carouselContainer.offsetWidth / this.$refs.cardContainer[0].offsetWidth
    maxWidth = this.$refs.track.offsetWidth - this.$refs.carouselContainer.offsetWidth
    
    window.addEventListener('resize', () => {
      // Recomputes width and visible count after resize, needed for next part
      visibleCount = this.$refs.carouselContainer.offsetWidth / this.$refs.cardContainer[0].offsetWidth
      maxWidth = this.$refs.track.offsetWidth - this.$refs.carouselContainer.offsetWidth
      
      // When enlarging window: this branch prevents to go too far to the right (i.e. blank space on the right, after the last item), by fixing slideIndex
      if ((slideIndex + 1) >= this.$refs.track.children.length - visibleCount){
        slideIndex = Math.floor(this.$refs.track.children.length - visibleCount);
        this.$refs.track.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
      }

      // Dynamically toggles the Next arrow based on new position in the carousel after resizing
      if((slideIndex) * cardWidth >= maxWidth - 15) {
          this.$refs.next.classList.add('hide');
      } else {
        this.$refs.next.classList.remove('hide');
      }
    })
  }
}
</script>