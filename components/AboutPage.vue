<template>
    <div class="jumbotron">
        <div class="image-container">
            <img :src="require('@/assets/' + image)" alt="" class="image"/>
        </div>
        <div class="container mt-5">
        <hr class="my-4" />
        <h3 class="section-title">ABOUT US</h3>
        <p class="lead">{{ aboutus }}</p>
        <br>
        <h3 id="contact" class="section-title">CONTACT US</h3>
        <p class="lead">{{ contactus }}</p>
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
  name: 'AboutPage',
  props: {
    image: {
      type: String,
      required: true,
    },
    contactus: {
      type: String,
      required: true,
    },
    aboutus: {
      type: String,
      required: true,
    },
  },
}
</script>