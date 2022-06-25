<template>
  <div class="page container mt-5">
    <h1 class="title">SERVICES</h1>
    <Breadcrumb class="row justify-items-center mt-4" :crumbs="crumbs" @selected="selected" />
    <div class="jumbotron">
      <div class="container mt-5">
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
        <div class="d-flex justify-content-center flex-wrap">
          <CardComponent v-for="item in serviceList" :key="`${item.id}`" :to="`/services/${item.id}`"
            :image="`services/${item.id}-c.webp`" class="card-component" :caption="item.name.toUpperCase()" />
        </div>
        <br />
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import Breadcrumb from '~/components/Breadcrumb.vue'
import CardComponent from '~/components/Card.vue'

export default {
  name: 'Events',
  components: {
    Breadcrumb,
    CardComponent,
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    const serviceTypes = await client
      .query({
        query: gql`
          query MyQuery {
            servicetypes {
              nodes {
                id
                image
                name
                description
              }
            }
          }
        `,
      })
      .then(({ data }) => {
        console.log(data.servicetypes.nodes)
        return data.servicetypes.nodes
      })
    return {
      serviceList: serviceTypes,
    }
  },
  data() {
    return {
      crumbs: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Services',
          path: '/services',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Services',
    }
  },
}
</script>

<style scoped>
.lead {
  text-align: justify;
}

@media screen and (min-width: 600px) {
  .column_wrapper {
    column-count: 2;
  }

  .card-component {
    width: 50%;
  }
}

.title {
  text-align: center;
  color: #26466f;
  font-weight: 750;
  font-size: 4rem;
}

.row {
  margin-bottom: -30px;
}

.card-component>>>img {
  height: 150px;
  object-fit: cover;
}
</style>
