<!-- Detail page of Itineraries -->
<template>
  <div class="jumbotron">
    <Banner banner-image="itinerary-banner" alt-text="Banner for itinerary page" :title="itinerary.title" badge-link="/itineraries/" badge-text="Itinerary"/>
    <div class="container my-5">

      <b class="section-title">DURATION: {{ itinerary.duration }}</b>
      <p class="lead">
        {{ itinerary.description }}
      </p>
      <br />

      <div>
        <iframe :title="`Map of itinerary: ${itinerary.title}`" :src="itinerary.map" height="480"></iframe>
      </div>
      <br />

      <!-- Transition links to the related points of interest  -->
      <b class="section-title">Points of interest touched by this itinerary:</b>

      <!-- Shows as multi-carousel on wide screen (non-portrait) -->
      <CarouselMultiItem
        v-if="windowWidth >= 768"
        :slides="
          itinerary.poiItineraries.nodes.map((e) => {
            return {
              ...e.poi,
              image: `pois/${e.poi.id}-thumb.webp`, //Thumb size
              name: `${e.order}. ${e.poi.title}`,
            }
          })
        "
      ></CarouselMultiItem>

      <!-- Otherwise shows as list of cards -->
      <div
        v-else
        class="d-flex justify-content-center flex-wrap card-container"
      >
        <CardComponent
          v-for="n in itinerary.poiItineraries.nodes"
          :key="n.poi.id"
          :to="`/pois/${n.poi.id}`"
          :image="`pois/${n.poi.id}-thumb.webp`"
          :caption="`${n.order}. ${n.poi.title}`"
        />
      </div>

      <!-- Group link to All itineraries (Index pattern) -->
      <div
        class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3 go-back"
      >
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg px-4"
          @click="backToList"
        >
          ← ALL ITINERARIES
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import CarouselMultiItem from '~/components/CarouselMultiItem.vue'
import CardComponent from '~/components/Card.vue'
import Banner from '~/components/Banner.vue'
export default {
  name: 'DetailsPage',
  components: {
    CardComponent,
    CarouselMultiItem,
    Banner
  },
  async asyncData({ route, app, error }) {
    const { id } = route.params
    const client = app.apolloProvider.defaultClient
    const itinerary = await client
      .query({
        query: gql`
        query MyQuery {
  itinerary(id: ${id}) {
    id
    title
        duration
    description
    map
    poiItineraries(orderBy: ORDER_ASC) {
      nodes {
        order
        nodeId
        poi {
          id
          title
          coordinates
        }
      }
    }
  }
}
      `,
      })
      .then(({ data }) => {
        if (data.itinerary === null) {
          error({ statusCode: 404, message: '404 This page does not exist' })
          return data
        }
        return data.itinerary
      })
    return {
      itinerary,
    }
  },
  data() {
    return {
      // Used for responsive conditional rendering of multi-item carousel
      windowWidth: this.windowWidth,
    }
  },
  head() {
    return {
      title: `${this.itinerary.title} - Itineraries - Towny`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.itinerary.description}`,
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
      this.$router.push('/itineraries')
    },
  },
}
</script>

<style scoped>
.lead {
  text-align: justify;
}
.section-title {
  color: #26466f;
  font-weight: 800;
  font-size: 24px;
}
iframe {
  min-width: 100%;
}
.go-back {
  margin-top: 5%;
}
.nuxt-clickable >>> img {
  height: 185px;
  object-fit: cover;
}
.nuxt-clickable >>> figure {
  height: 250px;
}
.nuxt-clickable >>> figcaption {
  line-height: 30px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 2 cards per row */
@media screen and (max-width: 768px) and (min-width: 600px) {
  .nuxt-clickable {
    width: 50%;
  }
}
</style>
