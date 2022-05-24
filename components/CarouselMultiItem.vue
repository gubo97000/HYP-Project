<template>
<div class="carousel-container"  ref="carouselContainer">
  <div class="carousel-inner">
    <div class="track" ref="track">
      <div class="card-container" ref="cardContainer">
        <div class="card">
          <div class="img">1</div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">2</div>
          <div class="info">
            Title 2
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">3</div>
          <div class="info">
            Title 3
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">4</div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">5</div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">6</div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">7</div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">8</div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">9</div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">9</div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">9</div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">8.5</div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">9.5</div>
          <div class="info">
            Title 1
          </div>
        </div>
      </div>
      <div class="card-container">
        <div class="card">
          <div class="img">10</div>
          <div class="info">
            Title 1
          </div>
        </div>
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
@media screen and (max-width: 768px) {
  .carousel-container {
    width: 80%;
  }
}
@media screen and (max-width: 1024px) {
  .carousel-container {
    width: 85%;
  }
}
.carousel-container .carousel-inner {
  overflow: hidden;
}
.carousel-container .track {
  display: inline-flex;
  transition: transform 0.5s;
}
.carousel-container .card-container {
  width: 259px;
  flex-shrink: 0;
  height: 250px;
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
}
.card .info {
  flex-basis: 40px;
  background: #333;
  color: #fff;
  flex-grow: 0;
  padding: 10px;
  box-sizing: border-box;
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
      // if ((slideIndex + 1) >= this.$refs.track.children.length - visibleCount){
        if((slideIndex) * cardWidth >= maxWidth - 15) {
            this.$refs.next.classList.add('hide');
        }
      
      // if (this.$refs.track.offsetWidth - (slideIndex * cardWidth) < cardWidth) {
      
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
    cardWidth = this.$refs.cardContainer.offsetWidth
    visibleCount = this.$refs.carouselContainer.offsetWidth / this.$refs.cardContainer.offsetWidth
    maxWidth = this.$refs.track.offsetWidth - this.$refs.carouselContainer.offsetWidth
    
    window.addEventListener('resize', () => {
      cardWidth = this.$refs.cardContainer.offsetWidth;
      visibleCount = this.$refs.carouselContainer.offsetWidth / this.$refs.cardContainer.offsetWidth
      maxWidth = this.$refs.track.offsetWidth - this.$refs.carouselContainer.offsetWidth
      
      if (slideIndex >= this.$refs.track.children.length - this.$refs.carouselContainer.offsetWidth){
        console.log("asdidbe")
        slideIndex = Math.floor(this.$refs.track.children.length - visibleCount);
        this.$refs.track.style.transform = `translateX(-${slideIndex * cardWidth}px)`;
        if((slideIndex) * cardWidth >= maxWidth - 15) {
            this.$refs.next.classList.add('hide');
        } else {
          this.$refs.next.classList.remove('hide');
        }
      }
    })
  }
}
</script>