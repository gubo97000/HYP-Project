<template>
  <div class="page container mt-5">
    <h1 class="display-4">Events</h1>
    <Breadcrumb class="row justify-items-center mt-4" :crumbs="crumbs" @selected="selected"/>
    <br>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
export default {
  name: 'Events',
  components: {
    Breadcrumb
  },
  head(){
    return {
      title: "Events"
    }
  },
  data() {
    return {
      crumbs: [{
        name: 'Home',
        path: '/',
      },
      {
        name: 'Events',
        path: '/events',
      }]
    }
  },
  // async asyncData({ $axios }) {
  //   const { data } = await $axios.get('/api/page-info/about')
  //   const title = data.title
  //   const image = data.image
  //   const description = data.description
  //   return {
  //     title,
  //     description,
  //     image,
  //   }
  // },
}
</script>
