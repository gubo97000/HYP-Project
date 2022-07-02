<!-- Page "Contact us" -->
<template>
  <div class="jumbotron">
    <Banner banner-image="cover" alt-text="Cover" title="CONTACT US" class="banner"/>
    
    <div class="jumbotron">
      <div class="container mt-5">
        <p class="lead text-justify">
          Do you need any further information or have specific requests? Write
          to one of our contacts below and we'll get back to you as soon as
          possible.
        </p>
        <p class="lead text-justify">Tourist Information for individuals and families</p>
        <p class="lead text-justify">
          The operators of the two official Towny Info Points are happy to
          assist you by giving you competent advice for your stay in the city:
          infotourist@comune.towny.it
        <br />
          We also have an office, that is located in Avenida Alcalde Luis Uruñuela nº1 C.P. 42069 and it is open Monday to Friday, from 9AM to 6PM. 
        </p>
        
        <hr class="my-4" />
        <div class="howtoreach-container">
          <img :src="require('@/assets/contact.webp')"/>
          <div>
            <p class="lead text-justify">
              If you still have requests, questions or suggestions, please don’t hesitate to contact one of the following operators: 
            </p>
            <br />
            
            <h3 class="section-title">CONTACT 1</h3>
            <p class="lead">
              Alessandro (ENG, IT): alessandro.atanassov@mail.polimi.it
            </p>
            <h3 class="section-title">CONTACT 2</h3>
            <p class="lead">
              Elena (ENG, IT): elena.naldoni@mail.polimi.it
            </p>
            <h3 class="section-title">CONTACT 3</h3>
            <p class="lead">
              Guido (ENG, IT): guido.bordonaro@mail.polimi.it
            </p>
            <h3 class="section-title">CONTACT 4</h3>
            <p class="lead">
              Isabel (ENG, ES): isabel.devergaradeorellana@mail.polimi.it
            </p>
            <br />
          </div>
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
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Do you need any further information or have specific requests about Towny? Reach out to our staff to answer all your questions.`,
        },
      ],
    }
  },
}
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .howtoreach-container {
    display: flex;
    height: 400px;
  }

  .howtoreach-container > *:nth-child(2) {
    width: 50%;
    margin-left: 5%;
  }

  .howtoreach-container > *:nth-child(1) {
    width: 45%;
    height: 100%;
    object-fit: cover;
  }
}

@media screen and (max-width: 1023px) {
  .howtoreach-container > *:nth-child(1) {
    width: 100%;
    object-fit: cover;
    margin-bottom: 15px;
  }
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
}

.text-justify {
  text-align: justify;
}

.banner >>> .title {
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
  .banner >>> .title {
    font-size: 3.5rem;
  }
}

@media screen and (min-width: 600px) {
  .banner >>> .title {
    font-size: 4rem;
  }
}
</style>
