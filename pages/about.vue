<template>
  <div class="page container mt-5">
    <h1 class="display-4">About us</h1>
    <Breadcrumb class="row justify-items-center mt-4" :crumbs="crumbs" @selected="selected"/>
    <div class="jumbotron">
        <div class="image-container">
            <img :src="require('@/assets/event.png')" alt="" class="image"/>
        </div>
        <div class="container mt-5">
          <hr class="my-4" />
          <h3 class="section-title">HOW TO REACH US</h3>
          <div class="howtoreach-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22385.345367822818!2d9.183978311645502!3d45.46641612838561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1652736022694!5m2!1sen!2sit"
              width="35%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="howtoreach-text">
              <h4 class="subsection-title">BY CAR</h4>
              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.</p>
              <h4 class="subsection-title">BY BUS</h4>
              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.</p>
              <h4 class="subsection-title">BY PLANE</h4>
              <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.</p>
            </div>
          </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
export default {
  name: 'About',
  components: {
    Breadcrumb
  },
  head(){
    return {
      title: "About us"
    }
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

  // async asyncData({ $axios }) {
  //   const { data } = await $axios.get('/api/page-info/about')
  //   const image = data.image
  //   const bycar = data.bycar
  //   const bybus = data.bybus
  //   const byplane = data.byplane
  //   return {
  //     image,
  //     bycar,
  //     bybus,
  //     byplane,
  //   }
  // },
}
</script>

<style scoped>
.image-container {
  position: relative;
  top: 0;
  left: 0;
}
p {
  text-align: left;
}
.section-title {
  color: #26466F;
  font-weight: 800;
  font-size: 24px;
}
.subsection-title {
  color: #26466F;
  font-weight: 700;
  font-size: 22px;
  margin-top: 15px;
}
@media screen and (min-width: 600px) {
  .howtoreach-container {
    display: flex;
  }
  .howtoreach-text {
    width: 60%;
    margin-left: 5%;
  }
  iframe {
    width: 35%
  }
}

@media screen and (max-width: 600px) {
  iframe {
    width: 100%;
    aspect-ratio: 1 / 1;
  }
}

.howtoreach-container {
  margin-top: 20px;
  margin-bottom: 50px;
}
.howtoreach-text > .lead {
  margin-bottom: 15px;
}
</style>
