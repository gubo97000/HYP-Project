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
    <br>

        <h2>Location:</h2>
        <p class="lead">
          {{ poi.location }}
        </p>
        <br>
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
        >
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg px-4"
            @click="backToList"
          >
            Back to all events
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
