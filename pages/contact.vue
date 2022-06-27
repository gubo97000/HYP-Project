<!-- Page "Contact us" -->
<template>
  <div class="jumbotron">
    <div class="image-container">
      <img :src="require('@/assets/cover.png')" alt="" class="cover" />
      <!-- <img :src="require('@/assets/logo.png')" alt="" class="logo"/> -->
      <h1 class="title">CONTACT US</h1>
    </div>

    <div class="jumbotron">
      <div class="container mt-5">
        <Breadcrumb class="row justify-items-center mt-4" :crumbs="crumbs" @selected="selected" />
        <p class="lead">
          Do you need any further information or have specific requests? Write
          to one of our contacts below and we'll get back to you as soon as
          possible.
        </p>
        <p class="lead">Tourist Information for individuals and families</p>
        <p class="lead">
          The operators of the two official Towny Info Points are happy to
          assist you by giving you competent advice for your stay in the city:
          infotourist@comune.towny.it
        </p>

        <hr class="my-4" />
        <div class="container mt-5">
          <h3 class="section-title">CONTACT 1</h3>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            tincidunt elit, in finibus elit.
          </p>
          <br />
          <h3 class="section-title">CONTACT 2</h3>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            tincidunt elit, in finibus elit.
          </p>
          <br />
          <h3 class="section-title">CONTACT 3</h3>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            tincidunt elit, in finibus elit.
          </p>
          <br />
          <h3 class="section-title">CONTACT 4</h3>
          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
            tincidunt elit, in finibus elit.
          </p>
          <br />
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/Breadcrumb.vue'
export default {
  name: 'Contact',
  components: {
    Breadcrumb,
  },
  data() {
    return {
      crumbs: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Contact',
          path: '/contact',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Contact us - Towny',
    }
  },
}
</script>

<style scoped>
.image-container {
  text-align: center;
  position: relative;
  top: 0;
  left: 0;
}

.cover {
  position: relative;
  min-width: 100%;
  height: 300px;
  object-fit: cover;
}

.logo {
  position: absolute;
  height: 55%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

p {
  text-align: left;
}

.section-title {
  color: #26466f;
  font-weight: 800;
  font-size: 24px;
}

.lead {
  margin-bottom: 15px;
  text-align: justify;
}

.title {
  position: absolute;
  /* top: 80%; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-weight: 750;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
  font-size: 3.5rem;
  width: 100%;
}
</style>
