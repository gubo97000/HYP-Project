<template>
  <div class="page container mt-5">
    <h1 class="display-4">Itineraries in Towny</h1>
    <Breadcrumb class="row justify-items-center mt-4" :crumbs="crumbs" @selected="selected"/>
  <div class="jumbotron">
      <div class="container mt-5">
        <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.
        </p>
        <br>
        <div class="column_wrapper">
          <nuxt-link v-for="item in itineraryList" :to="`/itinerary/${item.id}`" class="nuxt-clickable">
            <div
              class="p-4 pe-lg-5 align-items-center rounded-3 border shadow-lg service-item"
            >
              <img :src="require('@/assets/' + item.map)" alt="" width="500"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div class="itinerary-info">
                <p class="item-title">
                  {{ item.name.toUpperCase() }}
                </p>
                <p>
                  Difficulty: {{ item.difficulty }}
                </p>
                <p>
                  Duration: {{ item.duration }}
                </p>
                <br>
                <p>
                  Points of interes:
                </p>
                <p class="item-title">
                  <nuxt-link v-for="poi in item.pois" :to="`/pois/${poi.id}`" class="nuxt-clickable">
                    {{ poi.name.toUpperCase() }} &nbsp; &nbsp;
                  </nuxt-link>
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
  </div>
  <br><br>
  </div>
</template>


<style scoped>
.image-container {
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
  color: #ffffff;
  font-weight: 750;
  font-size: 4rem;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
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
</style>



<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
export default {
  name: 'Events',
  components: {
    Breadcrumb
  },
  head(){
    return {
      title: "Itineraries"
    }
  },
  data() {
    return {
      crumbs: [{
        name: 'Home',
        path: '/',
      },
      {
        name: 'Itineraries',
        path: '/itineraries',
      }]
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/itineraries')
    return {
      itineraryList: data,
    }
  },
}
</script>
