<template>
    <home-page :image="image" :overview="overview" :howtoreach="howtoreach" :logo="logo"/>
</template>

<script>
import HomePage from '~/components/HomePage.vue'
export default {
  name: 'IndexPage',
  components: {
    HomePage,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/index')
    // const title = data.title
    const image = data.image
    const overview = data.overview
    const howtoreach = data.howtoreach
    const logo = data.logo
    return {
      image,
      overview,
      howtoreach,
      logo,
    }
  },
}
</script>
