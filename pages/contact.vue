<!-- Page "Contact us" -->
<template>
  <div class="jumbotron">
    <div class="image-container">
      <img :src="require('@/assets/cover.webp')" alt="Cover" class="cover" />
      <!-- <img :src="require('@/assets/logo.webp')" alt="" class="logo"/> -->
      <h1 class="title">CONTACT US</h1>
    </div>

    <div class="jumbotron">
      <div class="container mt-5">
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
        <p class="lead">
          We also have an office, that is located in Avenida Alcalde Luis Uruñuela nº1 C.P. 42069 and it is open Monday to Friday, from 9AM to 6PM. 
        </p>
        

        <hr class="my-4" />
        <div class="container mt-5">
          <p class="lead">
            If you still have requests, questions or suggestions, please don’t hesitate to contact one of the following operators: 
          </p>
          <br />
          
          <h3 class="section-title">CONTACT 1</h3>
          <p class="lead">
            Alessandro (ENG, IT): +34 955471232
          </p>
          <h3 class="section-title">CONTACT 2</h3>
          <p class="lead">
            Elena (ENG, IT): +34 955471232  
          </p>
          <h3 class="section-title">CONTACT 3</h3>
          <p class="lead">
            Guido (ENG, IT): +34 955471232 
          </p>
          <h3 class="section-title">CONTACT 4</h3>
          <p class="lead">
            Isabel (ENG, ES): +34 955471232
          </p>
          <br />
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
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
  background: black;
}

.cover {
  position: relative;
  min-width: 100%;
  height: 300px;
  object-fit: cover;
  filter: opacity(0.85);
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
  width: 100%;
}

@media screen and (max-width: 600px) {
  .title {
    font-size: 3.5rem;
  }
}

@media screen and (min-width: 600px) {
  .title {
    font-size: 4rem;
  }
}
</style>
