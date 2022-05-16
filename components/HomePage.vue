<template>
    <div class="jumbotron">
        <div class="image-container">
            <img :src="require('@/assets/' + image)" alt="" class="cover"/>
            <img :src="require('@/assets/' + logo)" alt="" class="logo"/>
        </div>
        <div class="container mt-5">
        <hr class="my-4" />
        <h3 class="section-title">OVERVIEW</h3>
        <p class="lead">{{ overview }}</p>
        <br>
        <h3 class="section-title">HOW TO REACH US</h3>
        <p class="lead">{{ howtoreach }}</p>
        <br>
      </div>
    </div>
</template>



<style scoped>
.image-container {
  position: relative;
  top: 0;
  left: 0;
}
.cover {
  position: relative;
  min-width: 100%;
}
.logo {
  position: absolute;
  top: 32.5%;
  left: 42.5%;
  width: 15%;
}
.page {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
p {
  text-align: left;
}
.section-title {
    color: #26466F;
    font-weight: 800;
    font-size: 24px;
}
</style>

<script>
export default {
  name: 'HomePage',
  props: {
    image: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true, 
    },
    overview: {
      type: String,
      required: true,
    },
    howtoreach: {
      type: String,
      required: true,
    },
  },
}
</script>