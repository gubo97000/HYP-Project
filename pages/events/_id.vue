<!-- Detail page of Events -->
<template>
  <div class="jumbotron">
    <Banner
      banner-image="event-banner"
      alt-text="Banner for event page"
      :title="event.title"
      badge-link="/events/"
      badge-text="Event"
    />

    <div class="container mt-5">
      <!-- Info concerns the time in which the event occurs -->
      <b class="subsection-title">
        DATE / PERIOD:
        <span class="lead">
          {{ event.period }}
        </span>
      </b>

      <br />
      <b class="subsection-title">OVERVIEW</b>
      <p class="lead">
        {{ event.description }}
      </p>
      <br />

      <!-- Representative images (carousel) -->
      <Carousel
        :slides="event.pictures.nodes.map((p) => `events/${p.url}`)"
        class="carousel"
      />
      <br /><br />

      <!-- Transition link to the related point of interest  -->
      <b class="subsection-title">ABOUT THE PLACE</b>
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
import CardComponent from '~/components/Card.vue'

export default {
  name: 'DetailsPage',
  components: {
    CardComponent,
  },

  async asyncData({ route, app, error }) {
    const { id } = route.params
    const client = app.apolloProvider.defaultClient
    const event = await client
      .query({
        query: gql`
        query MyQuery {
          event(id: ${id}) {
            id
            title
            period
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
      .then(({ data }) => {
        if (data.event === null) {
          error({ statusCode: 404, message: '404 This page does not exist' })
          return data
        }
        return data.event
      })
    return {
      event,
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: event.title,
        description: event.description,
        location: {
          '@type': 'Place',
          name: event.poi.title,
        },
        startDate: event.period,
      },
    }
  },
  head() {
    return {
      title: `${this.event.title} - Events - Towny`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.event.description}`,
        },
      ],
      script: [{ type: 'application/ld+json', json: this.structuredData }],
    }
  },
  methods: {
    backToList() {
      this.$router.push('/events')
    },
  },
}
</script>

<style scoped>
.btn {
  margin-bottom: 20px;
  margin-top: -10px;
}

.lead {
  text-align: justify;
  color: rgb(33, 37, 41);
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
  .carousel >>> img {
    height: 300px;
  }

  .carousel {
    height: 300px;
  }
}
</style>
