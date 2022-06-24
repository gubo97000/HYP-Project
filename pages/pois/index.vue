<template>
  <div class="page container mt-5">
    <h1 class="title">POINTS OF INTEREST</h1>
    <Breadcrumb
      class="row justify-items-center mt-4"
      :crumbs="crumbs"
      @selected="selected"
    />
    <br />
    <!-- description of point of interest -->
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
      Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.</p>
    <br>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22385.345367822818!2d9.183978311645502!3d45.46641612838561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1652736022694!5m2!1sen!2sit"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>

    <div class="column_wrapper">
    </div>

    <div >
      <div
         v-for="n in poises.edges"
        :key="n.node.id"
        class="column_wrapper"
      >
        <Card
            :key="n.node.id"
            :to="`/pois/${n.node.id}`"
            :image="'cover.png'"
            :caption="n.node.title"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag'
import Breadcrumb from '~/components/Breadcrumb.vue'
import Card from '~/components/Card.vue'
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
    Breadcrumb,
    Card
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
      title: 'Points of Interest',
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
iframe {
  width: 100%;
  height: 400px;
}
.lead {
  text-align: justify;
}

@media screen and (min-width: 600px) {
  .column_wrapper {
    column-count: 4;
  }
}
.title {
  text-align: center;
  color: #26466F;
  font-weight: 750;
  font-size: 4rem;
}
</style>
