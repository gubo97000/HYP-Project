<template>
  <div class="page container mt-5">
    <h1 class="display-4">Contact us</h1>
    <Breadcrumb class="row justify-items-center mt-4" :crumbs="crumbs" @selected="selected"/>
    <div class="jumbotron">
        <div class="image-container">
            <img :src="require('@/assets/about.png')" alt="" class="image"/>
        </div>
        <div class="container mt-5">
          <hr class="my-4" />
          <h3 class="section-title">CONTACT 1</h3>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit.</p>
          <br>
          <h3 class="section-title">CONTACT 2</h3>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit.</p>
          <br>
          <h3 class="section-title">CONTACT 3</h3>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit.</p>
          <br>
          <h3 class="section-title">CONTACT 4</h3>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit.</p>
          <br>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
export default {
  name: 'Contact',
  components: {
    Breadcrumb
  },
  head(){
    return {
      title: "Contact us"
    }
  },
  data() {
    return {
      crumbs: [{
        name: 'Home',
        path: '/',
      },
      {
        name: 'Contact',
        path: '/contact',
      }]
    }
  },
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
.howtoreach-container {
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;
}
.howtoreach-text {
  width: 60%;
  margin-left: 5%;
}
.howtoreach-text > .lead {
  margin-bottom: 15px;
}
</style>
