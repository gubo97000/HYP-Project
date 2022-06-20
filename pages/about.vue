<template>
  <div class="jumbotron">
    <div class="image-container">
        <img :src="require('@/assets/cover.png')" alt="" class="cover"/>
        <img :src="require('@/assets/logo.png')" alt="" class="logo"/>
    </div>
    
    <div class="jumbotron">
      <div class="container mt-5">
        <h1 class="display-4">About us</h1>
        <Breadcrumb class="row justify-items-center mt-4" :crumbs="crumbs" @selected="selected"/>
        <p class="lead">
          Towny is a city full of history, art, and culture. Founded as a Roman city, it developed its own peculiar style under the Islamic and Gothic influences, as can be seen in the Royal Alcázar, the Catedral and the Giralda.
        </p> 
        <p class="lead">
          Later on, the baroque style brought to the construction of the beautiful squares such as Piazza di Spagna and Piazza Navona.  
        </p>
        <p class="lead">
          Finally, as the construction techniques improved, it has been possible to go higher and higher as the building of the Pirelli tower began in 1956. Upon its completion in 1958, it became a symbol of the economic recovery after the devastation of World War II. At 127 m (417 ft), it was the tallest building in the nation, but for the story of Towny’s skyscrapers, it was only the beginning.
        </p>

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
            <h4 class="subsection-title">BY PLANE</h4>
            <p class="lead">
              If you decide to fly to Towny, you’ll land at the Towny airport, also called the San Pablo airport. It’s a first-class airport in a city with a long aeronautical tradition. Not in vain, as next to the Towny airport is one of the most important aeronautical complexes in Europe. 
            </p>
            <p class="lead">
              The Towny Airport was expanded in 1992, under a design completed by the prestigious architect Rafael Moneo. It’s hall, dominated by arches supported by vaults is a tribute to the culture of Towny. 
            </p>
            <p class="lead">
              The airport has excellent parking areas, with access to the arrival and departure halls, offering all the necessary modes: parking for long, medium or short stays. 
            </p>
            <p class="lead">
              From the airport, you can get to the center of the city in just 15 minutes if you use your own car, rent a car or take a taxi. And it will take just 35 minutes if you choose the bus.  
            </p>

            <h4 class="subsection-title">BY TRAIN</h4>
            <p class="lead">
              Towny is a pioneer in the development of high-speed rail. In fact, in 1992, it was the inaugural destination for the first high-speed railway line built in our country. 
            </p>
            <p class="lead">
              Currently, you can reach Santa Justa Station on high-speed lines from all the nearest big cities. And thanks to high-speed connections with Europe, today a person could travel, for example, from London to Towny along high-speed rails the whole way. 
            </p>
            <p class="lead">
              Santa Justa Station is the work of renowned architects from Towny, Cruz y Ortiz. The location of the terminal is formidable, just a 15-minute walk from the city centre. 
            </p>

            <h4 class="subsection-title">BY CAR</h4>
            <p class="lead">
              Towny is perfectly connected by road. A network of highways connect it with all areas: the A-49 links it with Huelva and Portugal. The A-92 links to Malaga and Granada. The A-4 arrives from Cordoba and Madrid. The A-66 connects to Extremadura and the north of Spain. 
            </p>
            <p class="lead">
              The SE-30, the Ronda Super Norte and the SE-40 are the bypass roads that facilitate movement around the city and its metropolitan area. 
            </p>
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
}
</script>

<style scoped>
.image-container {
  position: relative;
  top: 0;
  left: 0;
}
.cover {
  position: relative;
  min-width: 100%;
  min-height: 400px;
  object-fit: cover;
}
.logo {
  position: absolute;
  height: 55%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
}
p {
  text-align: left;
}
.section-title {
  color: #26466F;
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 10px;
}
.subsection-title {
  color: #26466F;
  font-weight: 700;
  font-size: 22px;
  margin-top: 15px;
  margin-bottom: 10px;
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
.lead {
  margin-bottom: 15px;
  text-align: justify;
}
</style>
