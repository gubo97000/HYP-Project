<!-- Home (Splash) page -->
<template>
  <div class="jumbotron">
    <div class="image-container">
      <img :src="require('@/assets/newcover.png')" alt="" class="cover" />
      <img :src="require('@/assets/logo.png')" alt="" class="logo" />
      <p class="cover-text">
        EXPLORE ONE OF THE MOST BEAUTIFUL CITIES IN THE WORLD: <br />
        YOUR TOUR STARTS FROM HERE!
      </p>
    </div>
    <div class="container mt-5">
      <div class="d-flex justify-content-center flex-wrap card-container">
        <CardComponent :to="`/events`" class="card-component" :image="'restaurant-card.png'" :caption="'EVENTS'" />
        <CardComponent :to="`/pois`" class="card-component" :image="'poi-card.png'" :caption="'POINTS OF INTEREST'" />
        <CardComponent
:to="`/itineraries`" class="card-component" :image="'itineraries.png'"
          :caption="'ITINERARIES'" />
        <CardComponent :to="`/services`" class="card-component" :image="'supermarket-card.png'" :caption="'SERVICES'" />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from '~/components/Card.vue'

export default {
  name: 'IndexPage',
  components: {
    CardComponent,
  },
  head() {
    return {
      title: 'Towny',
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
  background-image: linear-gradient(to bottom, transparent, #352d2d);
  content: '';
  display: block;
  height: 60%;
  bottom: 0px;
  position: absolute;
  width: 100%;
}

.cover {
  position: relative;
  min-width: 100%;
  min-height: 400px;
  height: 160vh;
  object-fit: cover;
}

.logo {
  position: absolute;
  height: 25%;
  left: 50%;
  top: 7.5%;
  transform: translate(-50%, 0%);
}

.cover-text {
  position: absolute;
  height: 55%;
  left: 50%;
  top: 40%;
  transform: translate(-50%, 0%);

  font-weight: 900;
  font-size: 5vmin;
  letter-spacing: 0em;
  text-align: center;
  color: white;

  text-shadow: 2px 2px #000000;

  width: 80vw;
  max-width: 1000px;
}

p {
  text-align: left;
}

/* Mobile portrait */
@media screen and (max-width: 600px) {
  .cover-text {
    top: 60%;
    font-size: 23px;
    font-weight: 800;
    line-height: 36px;
    width: 100%;
    z-index: 1;
  }

  .cover {
    height: 95vh;
  }

  .image-container {
    height: 95vh;
  }

  .card-component>>>img {
    height: 150px;
    object-fit: cover;
  }

  .card-container {
    margin-top: -30px;
    margin-bottom: 30px;
  }
}

/* Not mobile portrait */
@media screen and (min-width: 600px) {

  /* Tablet portrait */
  @media (max-aspect-ratio: 3/2) and (max-width: 900px) {
    .nuxt-clickable {
      width: 50% !important;
    }

    .card-component>>>img {
      height: 200px;
      object-fit: cover;
    }

    .card-container {
      margin-top: -75vh;
      height: 0;
    }

    .logo {
      height: 30vh;
      top: 5%;
    }

    .cover-text {
      top: 32.5%;
    }
  }

  /* Tablet landscape */
  @media (max-aspect-ratio: 3/2) and (min-width: 900px) {
    .card-component>>>img {
      height: 75%;
    }

    .card-component>>>figcaption {
      height: 25%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  /* Not tablet */
  @media (min-aspect-ratio: 3/2) {
    .card-component>>>img {
      height: 85%;
    }
  }

  /* Desktop/Landscape or Tablet landscape */
  @media screen and (min-aspect-ratio: 3/2),
  screen and (min-width: 900px) {
    .nuxt-clickable {
      width: 25% !important;
    }

    .card-component>>>.card {
      width: 100%;
      height: 55vmin;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }

    .card-component>>>img {
      display: flex;
      justify-content: center;
      align-items: center;
      object-fit: cover;
    }

    .card-component {
      height: 100%;
    }

    .card-container {
      margin-top: -70vmin;
    }
  }

  .container {
    display: flex;
    justify-content: center;
    margin-bottom: -50px;
  }

  .card-container {
    flex-shrink: 0;
    width: 100%;
    padding-right: 10px;
    padding-left: 10px;
    box-sizing: border-box;
  }

  .card-component>>>.card>* {
    flex: 1;
  }

  .card-component>>>figure {
    box-shadow: 0 0 20px black, 10px 15px 100px rgba(200, 200, 200, 0.2),
      -10px 15px 100px rgba(200, 200, 200, 0.2),
      -10px -5px 100px rgba(200, 200, 200, 0.2),
      10px -5px 100px rgba(200, 200, 200, 0.2);
  }

  .card-component>>>figcaption {
    padding-top: 2.5%;
    font-size: 2.8vmin;
  }
}
</style>
