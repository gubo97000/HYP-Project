<!-- Detail page of Points of Interest -->
<template>
  <div class="container my-5">
    <Breadcrumb class="row justify-items-center mt-4" :crumbs="crumbs" @selected="selected" />

    <h1 class="display-4 fw-bold lh-1">{{ pois.title }}</h1>
    <br />


    <div class="howtoreach-container">
      <div class="howtoreach-text">
        <p class="lead">
          {{ pois.description }}
          <!-- {{ pois }} -->
        </p>
        <h4 class="subsection-title">VISIT INFO</h4>
        <p class="lead">{{ pois.info }}</p>
      </div>

      <!-- Location of point of interest -->
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22385.345367822818!2d9.183978311645502!3d45.46641612838561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1652736022694!5m2!1sen!2sit"
        width="35%" style="border: 0" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <br />

    <!-- Representative images -->
    <Carousel :slides="[`pois/${pois.id}-1.webp`, `pois/${pois.id}-2.webp`]" class="carousel" />
    <br />

    <div class="transition-links-container">
      <!-- Transition links to the related Itineraries -->
      <div v-if="pois.eventsByPoiId">
        <div>
          <h4 class="subsection-title">RELATED ITINERARIES</h4>
          <div class="transition-links itinerary-list">
            <ul style="display: list-item">
              <li v-for="i in pois.poiItinerariesByPoiId.nodes" :key="i.id" style="display: list-item">
                <div>
                  <nuxt-link :to="'/itineraries/' + i.itinerary.id">
                    <p class="lead itinerary-name">Itinerary: {{ i.itinerary.title }}</p>
                  </nuxt-link>
                  <p class="lead">Duration: {{ i.itinerary.duration }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />

      <!-- Transition links to the related Events -->
      <div v-if="pois.eventsByPoiId">
        <div>
          <h4 class="subsection-title">EVENTS HAPPENING HERE</h4>
          <div class="flex flex-wrap space-x-4 space-y-4 justify-around transition-links">
            <div class="d-flex justify-content-center flex-wrap event-cards">
              <CardComponent v-for="event in pois.eventsByPoiId.nodes" :key="`${event.id}`" :to="`/events/${event.id}`"
                :image="`events/${event.id}-1.webp`" class="card-component" :caption="event.title.toUpperCase()" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Group link to All Points of Interest (Index pattern) -->
    <div class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3 go-back">
      <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="backToList">
        ← ALL POINTS OF INTEREST
      </button>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import Breadcrumb from '~/components/Breadcrumb.vue'
import CardComponent from '~/components/Card.vue'

export default {
  name: 'DetailsPage',

  components: {
    Breadcrumb,
    CardComponent,
  },
  async asyncData({ route, app }) {
    const { id } = route.params
    const client = app.apolloProvider.defaultClient
    const pois = await client
      .query({
        query: gql`
        query MyQuery {
          pois(id: ${id}) {
            coordinates
             description
             id
             info
             title
             poiItinerariesByPoiId {
               nodes {
                 itinerary {
                   id
                   title
                   duration
                 }
               }
             }
             eventsByPoiId {
               nodes {
                 id
                 title
               }
             }
          }
        }
      `,
      })
      .then(({ data }) => data.pois)
    return {
      pois,
      crumbs: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Points of Interest',
          path: '/pois',
        },
        {
          name: pois.title,
          path: '/pois/' + id,
        },
      ],
    }
  },
  data() {
    return {
      id: this.$route.params.id, // we get the route here so we are sure apollo gets it
    }
  },
  head() {
    return {
      title: `Towny - ${this.pois.title}`,
    }
  },
  // apollo: {
  //   pois: {
  //     // prefetch: true,
  //     query: gql`
  //       query MyQuery($id: Int!) {
  //         pois(id: $id) {
  //           coordinates
  //           description
  //           id
  //           info
  //           title
  //           poiItinerariesByPoiId {
  //             nodes {
  //               itinerary {
  //                 id
  //                 title
  //                 duration
  //               }
  //             }
  //           }
  //           eventsByPoiId {
  //             nodes {
  //               id
  //               title
  //             }
  //           }
  //         }
  //       }
  //     `,
  //     variables() {
  //       return {
  //         id: parseInt(this.id),
  //       }
  //     },
  //     result: (data) => {
  //       console.log(data.pois)
  //     },
  //   },
  // },

  methods: {
    backToList() {
      this.$router.push('/pois')
    },
  },
}
</script>

<style scoped>
/* Landscape/Desktop */
@media screen and (min-width: 600px) {
  .howtoreach-container {
    display: flex;
    margin-top: 20px;
  }

  .howtoreach-text {
    width: 70%;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  iframe {
    width: 25%;
    aspect-ratio: 1.5 / 1;
  }

  .transition-links-container {
    margin-top: 30px;
    display: flex;
  }

  .event-cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .event-cards>* {
    width: 100%;
    flex: 1;
    flex-grow: 1;
  }

  .transition-links-container>*:nth-child(1) {
    width: 45%;
    border-right: 1px dashed #333;
  }

  .transition-links-container>*:nth-child(3) {
    width: 45%;
  }

  .transition-links-container>* {
    margin-left: 5%;
  }

  .transition-links {
    height: 300px;
    display: flex;
    align-items: center;
  }
}

/* Portrait */
@media screen and (max-width: 600px) {
  iframe {
    width: 100%;
    aspect-ratio: 1 / 1;
    margin-top: 20px;
  }

  li {
    margin-left: 20px;
  }

  .subsection-title {
    text-align: center;
  }

  .itinerary-list {
    margin-top: 30px;
  }

  .event-cards {
    width: 100%;
  }

  .carousel>>>img {
    height: 300px;
  }

  .carousel {
    height: 300px;
  }
}

.subsection-title {
  color: #26466f;
  font-weight: 700;
  font-size: 22px;
  margin-top: 15px;
}

ul {
  width: 100%;
}

ul,
li {
  display: inline;
}

li {
  margin-left: 10px;
  margin-bottom: 5%;
  list-style-type: circle;
}

.lead {
  text-align: justify;
}

.itinerary-name {
  text-decoration: underline;
  font-weight: bold;
}

.transition-links-container {
  margin-bottom: 50px;
}

.card-component>>>img {
  height: 165px;
  object-fit: cover;
}

.card-component>>>figure {
  height: 230px;
}

.card-component>>>figcaption {
  line-height: 30px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
