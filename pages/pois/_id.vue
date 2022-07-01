<!-- Detail page of Points of Interest -->
<template>
  <div class="jumbotron">
    <Banner banner-image="poi-banner" alt-text="Banner for point of interest page" :title="pois.title" badge-link="/pois/" badge-text="Point of Interest"/>

    <div class="container my-5">
      
      <div class="howtoreach-container">
        <div class="howtoreach-text">          
          <p class="lead">
            {{ pois.description }}
            <!-- {{ pois }} -->
          </p>

          <h4 class="subsection-title">VISIT INFO</h4>
          <p class="lead">{{ pois.info }}</p>
          <p class="lead">Address: {{ pois.coordinates }}</p>
        </div>

        <!-- Location of point of interest -->
        <iframe
          :title="'Location of: ' + pois.title"
          :src="pois.map"
          width="45%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <br />

      <!-- Representative images -->
      <Carousel
        :slides="pois.picturesByPoiId.nodes.map((p) => `pois/${p.url}`)"
        class="carousel"
      />
      <br />

      <div class="transition-links-container">
        <!-- Transition links to the related Itineraries -->
        <div v-if="pois.eventsByPoiId">
          <div>
            <h4 class="subsection-title">RELATED ITINERARIES</h4>
            <div
              class="flex flex-wrap space-x-4 space-y-4 transition-links"
            >
              <div class="d-flex flex-wrap related-itinerary">
                <nuxt-link v-for="i in pois.poiItinerariesByPoiId.nodes" :key="i.id" :to="'/itineraries/' + i.itinerary.id">
                  <div
                    class="pe-lg-5 align-items-center rounded-3 border shadow-lg"
                  >   
                    <div>
                      <p class="lead item-title">
                        {{ i.itinerary.title.toUpperCase() }}
                      </p>
                      <p class="lead item-text">Stop number {{ i.order }} of the itinerary</p>
                      <p class="lead item-text">Duration: {{ i.itinerary.duration }}</p>
                    </div>
                    <svg v-if="windowWidth >= 640" style="color: #8bdefffe" xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" fill="#8bdefffe"></path> </svg>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <br />

        <!-- Transition links to the related Events -->
        <div v-if="pois.eventsByPoiId">
          <div>
            <h4 class="subsection-title">EVENTS HAPPENING HERE</h4>
            <div
              class="flex flex-wrap space-x-4 space-y-4 justify-around transition-links"
            >
              <div class="d-flex justify-content-center flex-wrap event-cards">
                <CardComponent
                  v-for="event in pois.eventsByPoiId.nodes"
                  :key="`${event.id}`"
                  :to="`/events/${event.id}`"
                  :image="`events/${event.pictures.nodes[0].url}`"
                  class="card-component"
                  :caption="event.title.toUpperCase()"
                  :class="{ 'long-title': event.title.length > 27 }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Group link to All Points of Interest (Index pattern) -->
      <div
        class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3 go-back"
      >
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg px-4"
          @click="backToList"
        >
          ← ALL POINTS OF INTEREST
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import CardComponent from '~/components/Card.vue'
import Badge from '~/components/Badge.vue'

export default {
  name: 'DetailsPage',

  components: {
    CardComponent,
    Badge
  },
  async asyncData({ route, app, error }) {
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
    map
    poiItinerariesByPoiId {
      nodes {
        order
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
        pictures {
          nodes {
            url
          }
        }
      }
    }
    picturesByPoiId {
      nodes {
        url
      }
    }
  }
}
      `,
      })
      .then(({ data }) => {
        if (data.pois === null) {
          error({ statusCode: 404, message: '404 This page does not exist' })
          return data
        }
        return data.pois
      })
    return {
      pois,
    }
  },
  data() {
    return {
      id: this.$route.params.id, // we get the route here so we are sure apollo gets it
      windowWidth: this.windowWidth
    }
  },
  head() {
    return {
      title: `${this.pois.title} - Points of Interest - Towny`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.pois.description}`,
        },
      ],
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  methods: {
    backToList() {
      this.$router.push('/pois')
    },
  },
}
</script>

<style scoped>
/* Landscape/Desktop */
@media screen and (min-width: 640px) {
  .title {
    color: #26466f;
    font-weight: 750;
    font-size: 4rem;
  }

  .howtoreach-container {
    display: flex;
    margin-top: 20px;
  }

  .howtoreach-text {
    width: 60%;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  iframe {
    width: 35%;
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

  .event-cards > * {
    width: 100%;
    flex: 1;
    flex-grow: 1;
  }

  .transition-links-container > *:nth-child(1) {
    width: 47.5%;
    margin-left: 2.5%;
    border-right: 1px dashed #333;
  }

  .transition-links-container > *:nth-child(3) {
    width: 45%;
    margin-left: 5%;
  }

  .transition-links {
    height: 300px;
    display: flex;
    align-items: center;
  }

  .related-itinerary > * {
    margin-top: 30px;
    margin-right: 15%;
    width: 100%;
  }

  .related-itinerary div {
    padding: 0.7rem;
  }

  .related-itinerary > a > div {
    display: flex;
  }

  .related-itinerary > a > div > *:nth-child(1) {
    width: 80%;
    height: 110%;
  }
}

.item-title {
  color: #26466f;
  font-weight: 500;
  font-weight: bold;
  font-size: 20px;
}

/* Portrait */
@media screen and (max-width: 639px) {
  .title {
    color: #26466f;
    font-weight: 750;
    font-size: 3.6rem;
  }

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

  .event-cards {
    width: 100%;
  }

  .carousel >>> img {
    height: 300px;
  }

  .carousel {
    height: 300px;
  }
  .related-itinerary div {
    padding: 1.5rem;
  }
  .related-itinerary > * {
    width: 100%;
  }
}

.related-itinerary > * {
  margin-top: 15px;
}
.related-itinerary {
  margin-top: 15px;
  width: 100%;
  z-index: 1;
}

.related-itinerary div {
  height: 90%;
}

.subsection-title {
  color: #26466f;
  font-weight: 700;
  font-size: 22px;
  margin-top: 30px;
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

.lead:not(.item-title):not(.item-text) {
  text-align: justify;
}

.transition-links-container {
  margin-bottom: 50px;
}

.card-component >>> img {
  height: 165px;
  object-fit: cover;
}

.card-component >>> figure {
  height: 230px;
}

.card-component >>> figcaption {
  line-height: 30px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Handles overflowing captions for some screen widths, in case of long event titles */
@media screen and (max-width: 1024px) and (min-width: 640px) {
  .long-title >>> figcaption {
    line-height: 20px;
    font-size: 2.4vw;
  }
}
</style>
