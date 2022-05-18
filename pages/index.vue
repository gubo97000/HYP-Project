<template>
    <home-page :image="image" :overview="overview" :bycar="bycar" :bybus="bybus" :byplane="byplane" :logo="logo"/>
</template>

<script>
import HomePage from '~/components/HomePage.vue'
export default {
  name: 'IndexPage',
  components: {
    HomePage,
  },
  head(){
    return {
      title: "Towny"
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/index')
    // const title = data.title
    const image = data.image
    const overview = data.overview
    const bycar = data.bycar
    const bybus = data.bybus
    const byplane = data.byplane
    const logo = data.logo
    return {
      image,
      overview,
      bycar,
      bybus,
      byplane,
      logo,
    }
  },
}
</script>
