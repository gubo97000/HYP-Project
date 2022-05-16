<template>
  <div class="page container mt-5">
    <h1 class="display-4">About us</h1>
    <Breadcrumb class="row justify-items-center mt-4" :crumbs="crumbs" @selected="selected"/>
    <about-page :image="image" :contactus="contactus" :aboutus="aboutus"/>
    <br>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
import AboutPage from '~/components/AboutPage.vue'
export default {
  name: 'About',
  components: {
    AboutPage,
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

  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/about')
    // const title = data.title
    const image = data.image
    const aboutus = data.aboutus
    const contactus = data.contactus
    return {
      image,
      aboutus,
      contactus,
    }
  },

}
</script>
