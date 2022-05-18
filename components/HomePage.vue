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
            <p class="lead">{{ bycar }}</p>
            <h4 class="subsection-title">BY BUS</h4>
            <p class="lead">{{ bybus }}</p>
            <h4 class="subsection-title">BY PLANE</h4>
            <p class="lead">{{ byplane }}</p>
          </div>
        </div>
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

<script>
export default {
    name: "HomePage",
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
        bycar: {
            type: String,
            required: true,
        },
        bybus: {
            type: String,
            required: true,
        },
        byplane: {
            type: String,
            required: true,
        },
    },
}
</script>