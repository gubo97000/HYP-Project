<template>
  <div class="container mt-5">
    <Breadcrumb class="row justify-items-center mt-4" :crumbs="crumbs" @selected="selected"/>
    
      <div class="container mt-5">
        <h1 class="display-4 fw-bold lh-1">{{ title }}</h1>
        <p class="lead">
          {{ period }}
        </p>
        <br>
        <h2>Description:</h2>
        <p class="lead">
          {{ description }}
        </p>

        <br>
          <Carousel :slides="[pictures[0].url, pictures[1].url]"/>
        <br><br>

        <h2>About the place:</h2>
        <nuxt-link :to="`/pois/${poi.id}`" class="nuxt-clickable">
          <div class="image-container">
            <figure>
               <img :src="require('@/assets/' + poi.picture.url)" alt="" />
              <figcaption>{{ poi.title }}</figcaption>
            </figure>
          </div>
        </nuxt-link>

        <br><br>
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
        >
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg px-4"
            @click="backToList"
          >
            ALL EVENTS
          </button>
        </div>
      </div>
    </div>
</template>


<style scoped>
h2 {
    font-weight: bolder;
    font-size: 26px;
    font-family: Arial;
}
.nuxt-clickable {
  display: inline-block;
  width: 100%;
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
import CommonMixin from '~/mixins/common'
export default {
  name: 'DetailsPage',
  mixins: [CommonMixin],
  components: {
    Breadcrumb
  },

  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/events/' + id)
    return {
      title: data.title,
      period: data.period,
      pictures: data.picture,
      description: data.description,
      poi: data.poi,

      crumbs: [{
        name: 'Home',
        path: '/',
      },
      {
        name: 'Events',
        path: '/events',
      },
      {
        name: data.title,
        path: '/events/' + id,
      }]
    }
  },
  head(){
    return {
      title: this.title
    }
  },
  mounted(){
    const date = new Date()
    // Example on hwo to use mixinx
    console.log(this.formatMyDate(date.toLocaleDateString()))
  },
  methods: {
    backToList() {
      this.$router.push('/events')
    },
  },
}
</script>
