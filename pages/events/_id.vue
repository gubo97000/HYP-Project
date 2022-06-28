<!-- Detail page of Events -->
<template>
  <div class="container mt-5">
    <div class="container mt-5">
      <div class="title-container">
        <h1 class="title">
          {{ event.title.toUpperCase() }}
        </h1>
      </div>

      <Breadcrumb
        class="row justify-items-center mt-4"
        :crumbs="crumbs"
        @selected="selected"
      />
      <!-- Info concerns the time in which the event occurs -->
      <h4 class="subsection-title">
        PERIOD:
        <span class="lead">
          {{ event.info }}
        </span>
      </h4>

      <br />
      <h4 class="subsection-title">OVERVIEW</h4>
      <p class="lead">
        {{ event.description }}
      </p>
      <br />

      <!-- Representative images -->
      <Carousel
        :slides="event.pictures.nodes.map((p) => `events/${p.url}`)"
        class="carousel"
      />
      <br /><br />

      <!-- Transition link to the related point of interest  -->
      <h4 class="subsection-title">ABOUT THE PLACE</h4>
      <div class="about-the-place">
        <CardComponent
          v-if="event.poi"
          :to="`/pois/${event.poi.id}`"
          :image="`pois/${event.poi.picturesByPoiId.nodes[0].url}`"
          :caption="event.poi.title.toUpperCase()"
        />
      </div>
      <br /><br />

      <!-- Group link to All events (Index pattern) -->
      <div
        class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3 go-back"
      >
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg px-4"
          @click="backToList"
        >
          ← ALL EVENTS
        </button>
      </div>
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
    const event = await client
      .query({
        query: gql`
        query MyQuery {
          event(id: ${id}) {
            id
            title
            info
            description
            poi {
              id
              title
              picturesByPoiId {
        nodes {
          url
        }
      }
            }
            pictures {
      nodes {
        url
      }
    }
          }
        }
      `,
      })
      .then(({ data }) => data.event)
    return {
      event,
      crumbs: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Events',
          path: '/events',
        },
        {
          name: event.title,
          path: '/events/' + id,
        },
      ],
    }
  },
  // data() {
  //   return {
  //     id: this.$route.params.id, // we get the route here so we are sure apollo gets it
  //   }
  // },
  head() {
    return {
      title: `${this.event.title} - Events - Towny`,
    }
  },
  // apollo: {
  //   event: {
  //     // prefetch: true,
  //     query: gql`
  //       query MyQuery($id: Int!) {
  //         event(id: $id) {
  //           id
  //           info
  //           title
  //           poi {
  //             title
  //             info
  //             id
  //           }
  //         }
  //       }
  //     `,
  //     variables() {
  //       return {
  //         id: parseInt(this.id),
  //       }
  //     },
  //   },
  // },
  methods: {
    backToList() {
      this.$router.push('/events')
    },
  },
}
</script>

<style scoped>
.title-container {
  text-align: center;
  position: relative;
  top: 0;
  left: 0;
}

.lead {
  text-align: justify;
  color: rgb(33, 37, 41);
}

h2 {
  font-weight: bolder;
  font-size: 26px;
  font-family: Arial;
}

.about-the-place {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.subsection-title {
  color: #26466f;
  font-weight: 700;
  font-size: 22px;
  margin-top: 15px;
}

.about-the-place >>> .image-container {
  padding: 0;
  margin-bottom: 0;
}

.nuxt-clickable {
  height: 250px;
  /* width: 60%; */
}

.nuxt-clickable >>> img {
  height: 200px;
  object-fit: cover;
}

/* Desktop/Landscape */
@media screen and (min-width: 600px) {
  .title {
    color: #26466f;
    font-weight: 750;
    font-size: 3.4rem;
  }

  .nuxt-clickable >>> img {
    height: 300px;
    object-fit: cover;
  }

  .nuxt-clickable {
    height: 350px;
  }
}

/* Portrait */
@media screen and (max-width: 600px) {
  .title {
    color: #26466f;
    font-weight: 750;
    font-size: 2.8rem;
  }

  .carousel >>> img {
    height: 300px;
  }

  .carousel {
    height: 300px;
  }
}
</style>
