<template>
  <div class="jumbotron">
    <div class="title-container">
      <h1 class="title">
        {{ name.toUpperCase() }}
      </h1>
    </div>
    <div class="container my-5">
      <Breadcrumb class="row justify-items-center mt-4" :crumbs="crumbs" @selected="selected"/>
      <div
        class="row p-4 pb-0 pe-lg-0 pt-lg-5 pb-lg-5 pe-lg-5 align-items-center rounded-3 border shadow-lg"
      >
        <div class="p-3 p-lg-5 pt-lg-3">
          <b class="section-title">DURATION: {{ duration }}</b>
          <p class="lead">
            {{ description }}
          </p>
          <br>
          <div>
            <img :src="require('@/assets/' + map)" alt="" class="cover"/>
          </div>
          <br>

          <b class="section-title">Points of interest touched by this itinerary:</b>

          <CarouselMultiItem :slides="pois"/>

          <!-- <nuxt-link v-for="item in pois" :to="`/pois/${item.id}`" class="nuxt-clickable">
            <div class="image-container">
              <figure>
                <img :src="require('@/assets/' + item.image)" alt="" width="100%"/>
                <figcaption>{{ item.name }}</figcaption>
              </figure>
            </div>
          </nuxt-link> -->
          <div
            class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3 go-back"
          >
            <button
              type="button"
              class="btn btn-outline-secondary btn-lg px-4"
              @click="backToList"
            >
              ←  ALL ITINERARIES
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title-container {
  text-align: center;
  position: relative;
  top: 0;
  left: 0;
}
.service-item {
  display: inline-flex;
  width: 100%;
  margin-bottom: 1.5%;
}
.service-info {
  margin-left: 5%;
}
.cover {
  position: relative;
  min-width: 100%;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #26466F;
  font-weight: 750;
  font-size: 4rem;
}
.item-title {
  color: #26466F;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
}
.section-title {
  color: #26466F;
  font-weight: 800;
  font-size: 24px;
}
.go-back {
  margin-top: 5%;
}
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
import Breadcrumb from '~/components/Breadcrumb.vue'
import CarouselMultiItem from '~/components/CarouselMultiItem.vue'
export default {
  name: 'DetailsPage',
  components: {
    Breadcrumb,
    CarouselMultiItem
},

  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/itineraries/' + id)
    return {
      name: data.name,
      duration: data.duration,
      description: data.description,
      map: data.map,
      pois: data.pois,

      crumbs: [{
        name: 'Home',
        path: '/',
      },
      {
        name: 'Itineraries',
        path: '/itineraries',
      },
      {
        name: data.name,
        path: '/itineraries/' + id,
      }]
    }
  },
  head(){
    return {
      title: this.name
    }
  },
  methods: {
    backToList() {
      this.$router.push('/itineraries')
    },
  },
}
</script>
