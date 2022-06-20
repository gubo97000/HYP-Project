<template>
  <div class="jumbotron">
    <div class="image-container">
        <img :src="require('@/assets/newcover.png')" alt="" class="cover"/>
        <img :src="require('@/assets/logo.png')" alt="" class="logo"/>
        <p class="cover-text">EXPLORE ONE OF THE MOST BEAUTIFUL CITIES IN THE WORLD: <br>
          YOUR TOUR STARTS FROM HERE!</p>
    </div>
    <div class="container mt-5">
      <div class="d-flex justify-content-center flex-wrap card-container">
          <CardComponent 
            :to="`/events`" 
            class="card-component"
            :image="'restaurant-card.png'"
            :caption="'EVENTS'" />
          <CardComponent 
            :to="`/pois`" 
            class="card-component"
            :image="'poi-card.png'"
            :caption="'POINTS OF INTEREST'" />
          <CardComponent 
            :to="`/itineraries`" 
            class="card-component"
            :image="'itineraries.png'"
            :caption="'ITINERARIES'" />
          <CardComponent 
            :to="`/services`" 
            class="card-component"
            :image="'supermarket-card.png'"
            :caption="'SERVICES'" />
        </div>
    </div>
  </div>
</template>

<script>
import CardComponent from '~/components/Card.vue'

export default {
  name: 'IndexPage',
  components: {
    CardComponent
  },
  head(){
    return {
      title: "Towny"
    }
  },
}
</script>

<style scoped>
.image-container {
  position: relative;
  top: 0;
  left: 0;
}
.image-container::after {
  background-image:  linear-gradient(to bottom, transparent, #352d2d);
    content:'';
    display:block;
    height:60%;
    bottom:0px;
    position:absolute;
    width:100%;
}
.cover {
  position: relative;
  min-width: 100%;
  min-height: 400px;
  object-fit: cover;
}
.logo {
  position: absolute;
  height: 25%;
  left: 50%;
  top: 7.5%;
  transform: translate(-50%, 0%)
}
.cover-text {
  position: absolute;
  height: 55%;
  left: 50%;
  top: 40%;
  transform: translate(-50%, 0%);

  font-size: 48px;
  font-weight: 900;
  line-height: 58px;
  letter-spacing: 0em;
  text-align: center;
  color: white;

  text-shadow: 2px 2px #000000;
}
p {
  text-align: left;
}
.container {
  display: flex;
  justify-content: center;
  margin-bottom: -5%;
}

@media screen and (min-width: 600px) {
  .column_wrapper {
    column-count: 4;
  }
  .card-component {
    width: 22.5%;
    margin-left: 15px;
    margin-right: 15px;
  }
  .card-container {
    flex-shrink: 0;
    width: 110%;
    height: 450px;
    padding-right: 15px;
    box-sizing: border-box;
    margin-top: -600px;
  }
}

.card-component >>> .card {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.card-component >>> .card > * {
  flex: 1;
}
.card-component >>> img {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  height: 85%;
  object-fit: cover;
}
.card-component >>> figure {
  box-shadow: 0 0 20px black, 10px 15px 100px rgba(200, 200, 200, 0.2),
                                -10px 15px 100px rgba(200, 200, 200, 0.2),
                                -10px -5px 100px rgba(200, 200, 200, 0.2),
                                10px -5px 100px rgba(200, 200, 200, 0.2)
}
.card-component >>> figcaption {
  padding-top: 2.5%;
}
.card-component {
  height: 100%;
}
</style>

