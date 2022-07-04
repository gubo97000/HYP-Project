<!-- Page corresponding to "About us" -->
<template>
  <div class="jumbotron">
    <Banner
      banner-image="cover"
      alt-text="Cover"
      title="ABOUT US"
      class="banner"
    />

    <div class="jumbotron">
      <div class="container mt-5">
        <p class="lead">
          Towny is a city full of history, art, and culture. Founded as a Roman
          city, it developed its own peculiar style under the Islamic and Gothic
          influences, as can be seen in the Royal Alcázar, the Catedral and the
          Giralda.
        </p>
        <p class="lead">
          Later on, the baroque style brought to the construction of the
          beautiful squares such as Piazza di Spagna and Piazza Navona.
        </p>
        <p class="lead">
          Finally, as the construction techniques improved, it has been possible
          to go higher and higher as the building of the Pirelli tower began in
          1956. Upon its completion in 1958, it became a symbol of the economic
          recovery after the devastation of World War II. At 127 m (417 ft), it
          was the tallest building in the nation, but for the story of Towny’s
          skyscrapers, it was only the beginning.
        </p>

        <hr class="my-4" />
        <b class="section-title">HOW TO REACH US</b>
        <div class="howtoreach-container">
          <iframe
            title="How to reach Towny"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.326943957717!2d9.191857605845534!3d45.46321748160289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ac55555555%3A0x7e5ef10adc0a1c31!2sInfoPoint%20Ufficio%20Informazioni%20Turistiche%20Milano!5e0!3m2!1sen!2sit!4v1656841706836!5m2!1sen!2sit"
            width="35%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div class="howtoreach-text">
            <b class="subsection-title">BY PLANE</b>
            <p class="lead">
              If you decide to fly to Towny, you’ll land at the Towny airport,
              also called the San Pablo airport. It’s a first-class airport in a
              city with a long aeronautical tradition. Not in vain, as next to
              the Towny airport is one of the most important aeronautical
              complexes in Europe.
            </p>
            <p class="lead">
              The Towny Airport was expanded in 1992, under a design completed
              by the prestigious architect Rafael Moneo. It’s hall, dominated by
              arches supported by vaults is a tribute to the culture of Towny.
            </p>
            <p class="lead">
              The airport has excellent parking areas, with access to the
              arrival and departure halls, offering all the necessary modes:
              parking for long, medium or short stays.
            </p>
            <p class="lead">
              From the airport, you can get to the center of the city in just 15
              minutes if you use your own car, rent a car or take a taxi. And it
              will take just 35 minutes if you choose the bus.
            </p>

            <b class="subsection-title">BY TRAIN</b>
            <p class="lead">
              Towny is a pioneer in the development of high-speed rail. In fact,
              in 1992, it was the inaugural destination for the first high-speed
              railway line built in our country.
            </p>
            <p class="lead">
              Currently, you can reach Santa Justa Station on high-speed lines
              from all the nearest big cities. And thanks to high-speed
              connections with Europe, today a person could travel, for example,
              from London to Towny along high-speed rails the whole way.
            </p>
            <p class="lead">
              Santa Justa Station is the work of renowned architects from Towny,
              Cruz y Ortiz. The location of the terminal is formidable, just a
              15-minute walk from the city centre.
            </p>

            <b class="subsection-title">BY CAR</b>
            <p class="lead">
              Towny is perfectly connected by road. A network of highways
              connect it with all areas: the A-49 links it with Huelva and
              Portugal. The A-92 links to Malaga and Granada. The A-4 arrives
              from Cordoba and Madrid. The A-66 connects to Extremadura and the
              north of Spain.
            </p>
            <p class="lead">
              The SE-30, the Ronda Super Norte and the SE-40 are the bypass
              roads that facilitate movement around the city and its
              metropolitan area.
            </p>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: 'About us - Towny',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Find out more curiosities about Towny, and get to know how to reach the place by plane, by train or by car.`,
        },
      ],
    }
  },
}
</script>

<style scoped>
/*Desktop*/
@media screen and (min-width: 600px) and (min-height: 600px) and (min-aspect-ratio: 3/2) {
  .howtoreach-container {
    display: flex;
  }

  .howtoreach-text {
    width: 60%;
    margin-left: 5%;
  }

  iframe {
    width: 35%;
  }
}

/*Phone portrait*/
@media screen and (max-width: 800px) {
  iframe {
    width: 100%;
    aspect-ratio: 1 / 1;
  }
}

/*Tablet*/
@media screen and ((max-aspect-ratio: 3/2) and (min-width: 800px)) {
  iframe {
    width: 100%;
    aspect-ratio: 3 / 2;
  }
}

/*Phone landscape*/
@media screen and (max-height: 600px) {
  iframe {
    width: 100%;
    aspect-ratio: 2 / 1;
  }
}

p {
  text-align: left;
}

.section-title {
  color: #26466f;
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 10px;
}

.subsection-title {
  color: #26466f;
  font-weight: 700;
  font-size: 22px;
  margin-top: 15px;
  margin-bottom: 10px;
}

.howtoreach-container {
  margin-top: 20px;
  margin-bottom: 50px;
}

.lead {
  margin-bottom: 15px;
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
  font-size: 4rem;
  width: 100%;
}
</style>
