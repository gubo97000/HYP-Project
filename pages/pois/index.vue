<!-- Group page "All Points of Interest" -->
<template>
  <div class="page container mt-5">
    <h1 class="title">ALL POINTS OF INTEREST</h1>

    <div class="jumbotron">
      <div class="container mt-5">
        <!-- description of point of interest -->
        <p class="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
          tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus
          erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse
          potenti. Sed quis efficitur erat. Pellentesque non velit ipsum.
          Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh
          sit amet ante consectetur, non cursus elit feugiat. Integer vitae elit
          at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus
          consectetur mauris eget neque posuere, vitae sagittis massa congue.
          Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat,
          id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula
          blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus
          lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et
          vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a
          leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac
          interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper
          tempus eros.
        </p>
        <br />

        <!-- Location of the points of interest -->
        <iframe
          title="Points of interest of Towny"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22385.345367822818!2d9.183978311645502!3d45.46641612838561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1652736022694!5m2!1sen!2sit"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <!-- Group links to POIs details -->
        <div class="d-flex justify-content-center flex-wrap card-container">
          <CardComponent
            v-for="n in poises.edges"
            :key="n.node.id"
            :to="`/pois/${n.node.id}`"
            :image="`pois/${n.node.id}-thumb.webp`"
            :caption="n.node.title"
          />
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
          poises {
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
      crumbs: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Points of Interest',
          path: '/pois',
        },
      ],
    }
  },
  head() {
    return {
      title: 'All Points of Interest - Towny',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Towny is a city full of incredible places here you can see all the points of interest of the city.`,
        },
      ],
    }
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
/* Desktop/Landscape */
@media screen and (min-width: 600px) {
  .column_wrapper {
    column-count: 4;
  }
}

iframe {
  width: 100%;
  height: 400px;
}

.lead {
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
