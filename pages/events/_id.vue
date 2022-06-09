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

        <h4 class="subsection-title">ABOUT THE PLACE:</h4>
        <div class="about-the-place">
          <CardComponent
            :to="`/pois/${poi.id}`"
            :image="poi.picture.url"
            :caption="poi.title"
          />
        </div>

        <br><br>
        <div
          class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3 go-back"
        >
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg px-4"
            @click="backToList"
          >
            ←  ALL EVENTS
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
.about-the-place {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.subsection-title {
  color: #26466F;
  font-weight: 700;
  font-size: 22px;
  margin-top: 15px;
}

</style>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
import CardComponent from '~/components/Card.vue'

export default {
  name: 'DetailsPage',
  components: {
    Breadcrumb,
    CardComponent
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
  methods: {
    backToList() {
      this.$router.push('/events')
    },
  },
}
</script>
