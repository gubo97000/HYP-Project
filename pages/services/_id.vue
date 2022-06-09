<template>
  <div class="jumbotron">
    <div class="image-container">
      <img :src="require('@/assets/' + image)" alt="" class="cover"/>
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
          <b class="section-title">OVERVIEW</b>
          <p class="lead">
            {{ overview }}
          </p>
          <br>
          <div class="image-container">
            <img :src="require('@/assets/' + map)" alt="" class="cover"/>
          </div>
          <br>
          <div v-for="item in singleServices">
            <div
              class="p-4 pe-lg-5 align-items-center rounded-3 border shadow-lg service-item"
            >
              <img :src="require('@/assets/' + item.image)" alt=""/>
              <div class="service-info">
                <p class="item-title">
                  {{ item.name.toUpperCase() }}
                </p>
                <p>
                  Address: {{ item.address }}
                </p>
                <p>
                  Opening hours: {{ item.openhours }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3 go-back"
          >
            <button
              type="button"
              class="btn btn-outline-secondary btn-lg px-4"
              @click="backToList"
            >
              ←  ALL SERVICES
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 600px) {
  .service-item {
    display: inline-flex;
    width: 100%;
    margin-bottom: 1.5%;
  }
}
.image-container {
  text-align: center;
  position: relative;
  top: 0;
  left: 0;
}
.service-info {
  margin-left: 5%;
}
.cover {
  position: relative;
  min-width: 100%;
  min-height: 300px;
  object-fit: cover;
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
  name: 'DetailsPage',
  components: {
    Breadcrumb
  },

  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/services/' + id)
    return {
      name: data.name,
      image: data.image,
      overview: data.overview,
      map: data.map,
      singleServices: data.services,

      crumbs: [{
        name: 'Home',
        path: '/',
      },
      {
        name: 'Services',
        path: '/services',
      },
      {
        name: data.name,
        path: '/services/' + id,
      }]
    }
  },
  head(){
    return {
      title: this.name
    }
  },
  // mounted(){
  //   const date = new Date()
  //   // Example on hwo to use mixinx
  //   console.log(this.formatMyDate(date.toLocaleDateString()))
  // },
  methods: {
    backToList() {
      this.$router.push('/services')
    },
  },
}
</script>
