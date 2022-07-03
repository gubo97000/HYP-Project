<!-- Group page "All Points of Interest" -->
<template>
  <div class="page container mt-5">
    <h1 class="title">ALL POINTS OF INTEREST</h1>

    <div class="jumbotron">
      <div class="container mt-5">
        <!-- description of point of interest -->
        <p class="lead">
          Towny is filled with beautiful monuments, museums, churches and
          fundamental pieces off the history of art. Here you can browse through
          all off the points of interest that you really need to see in the
          city.
        </p>
        <p class="lead">
          Make sure not to miss the most important ones, but we will guide you
          also to discover new places that most of the tourists have never heard
          of. We hope that you will enjoy the sights of Towny as much as we do.
        </p>
        <br />

        <!-- Location of the points of interest -->
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1F-5rPEHeFpHj26d7Qas48I3hDRtLCwY&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>

        <!-- Group links to POIs details -->
        <div class="d-flex justify-content-center flex-wrap card-container">
          <!-- All the cards here -->
          <CardComponent
            v-for="(n, index) in poises.edges"
            v-if="index < maxLength || showMore"
            :key="n.node.id"
            :to="`/pois/${n.node.id}`"
            :image="`pois/${n.node.id}-thumb.webp`"
            :caption="n.node.title"
          />
        </div>

        <!-- "Show more" button -->
        <div class="d-flex justify-content-center flex-wrap">
          <!-- Not shown if there are not enough events -->
          <button
            type="button"
            class="btn btn-outline-light btn-lg rounded-pill"
            @click="showMore = !showMore"
          >
            <span v-if="!showMore">SHOW MORE</span>
            <span v-if="showMore">SHOW LESS</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import CardComponent from '~/components/Card.vue'
export default {
  name: 'PointsOfInterest',
  apollo: {
    poises: {
      // IMPORTANT: the name of the variable MUST be the same of the entity in the GraphQL query
      // prefetch: true,
      query: gql`
        query MyQuery {
          poises(orderBy: TITLE_ASC) {
            edges {
              node {
                id
                title
                info
              }
            }
          }
        }
      `,
      // fetchPolicy: 'network-only',
    },
  },
  components: {
    CardComponent,
  },
  data() {
    return {
      poises: {},

      // Used to hide overflowing cards
      showMore: false,
      // Length under which the show more button does not appear
      maxLength: 8,
    }
  },
  head() {
    return {
      title: 'All Points of Interest - Towny',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Towny is filled with beautiful monuments, museums, churches and fundamental pieces off the history of art. Here you can browse through all off the points of interest that you really need to see in the city.`,
        },
      ],
    }
  },
  mounted() {
    // Calculate maxLength based on portrait/landscape
    this.maxLength = window.innerWidth < 600 ? 4 : 8
    window.addEventListener('resize', () => {
      this.maxLength = window.innerWidth < 600 ? 4 : 8
    })
  },
  // async asyncData({ $axios }) {
  //   const { data } = await $axios.get('/api/page-info/about')
  //   const title = data.title
  //   const image = data.image
  //   const description = data.description
  //   return {
  //     title,
  //     description,
  //     image,
  //   }
  // },
}
</script>

<style scoped>
iframe {
  width: 100%;
  height: 400px;
}

.lead {
  margin-bottom: 15px;
  text-align: justify;
}

.title {
  text-align: center;
  color: #26466f;
  font-weight: 750;
  font-size: 4rem;
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

.card-container {
  margin-top: 30px;
  margin-bottom: 60px;
}

.btn {
  background-color: #8bdefffe;
  margin-bottom: 40px;
  margin-top: -10px;
}

/* 4 cards per row */
@media screen and (min-width: 1550px) {
  .nuxt-clickable {
    width: 25% !important;
  }
}

/* 3 cards per row */
@media screen and (min-width: 800px) and (max-width: 1550px) {
  .nuxt-clickable {
    width: 33% !important;
  }
}

/* 2 cards per row */
@media screen and (max-width: 800px) and (min-width: 600px) {
  .nuxt-clickable {
    width: 50% !important;
  }
}
</style>
