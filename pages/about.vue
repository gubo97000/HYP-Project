<template>
  <div class="page container mt-5">
    <h1 class="display-4">About us</h1>
    <Breadcrumb class="row justify-items-center mt-4" :crumbs="crumbs" @selected="selected"/>
    <br>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
export default {
  name: 'AboutPage',
  components: {
    Breadcrumb
  },
  data() {
    return {
      crumbs: [{
        name: 'Home',
        path: '/',
      },
      {
        name: 'About',
        path: '/about',
      }]
    }
  },
  // methods: {
  //   selected(crumb) {
  //     console.log(crumb);
  //   }
  // },

  // Note: This happens on backend (server) side
  // async asyncData({ $axios }) {
  //   // const { data } = await $axios.get('http://localhost:3000/api/cats')
  //   const { data } = await $axios.get('/api/cats')
  //   return {
  //     catList: data,
  //   }
  // },

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>
