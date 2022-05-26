<template>
  <div class="page container mt-5">
    <h1 class="display-4">Services</h1>
    <Breadcrumb class="row justify-items-center mt-4" :crumbs="crumbs" @selected="selected"/>
    <div class="jumbotron">
      <div class="container mt-5">
        <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.
        </p>
        <br>
        <div class="d-flex justify-content-center flex-wrap">
          <nuxt-link v-for="item in serviceList" :to="`/services/${item.id}`" class="nuxt-clickable">
            <div class="image-container">
              <figure>
                <img :src="require('@/assets/' + item.image)" alt="" width="100%"/>
                <figcaption>{{ item.name }}</figcaption>
              </figure>
            </div>
          </nuxt-link>
        </div>
        <br>
      </div>
    </div>
    <br><br>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
export default {
  name: 'Events',
  components: {
    Breadcrumb
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/services')
    return {
      serviceList: data,
    }
  },
  data() {
    return {
      crumbs: [{
        name: 'Home',
        path: '/',
      },
      {
        name: 'Services',
        path: '/services',
      }]
    }
  },
  head(){
    return {
      title: "Services"
    }
  },
}
</script>

<style scoped>
.column_wrapper {
  column-count: 2;
}
.nuxt-clickable {
  display: inline-block;
  max-width: 500px;
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
