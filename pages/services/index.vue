<!-- Group page "All Service Types" -->
<template>
  <div class="page container mt-5">
    <h1 class="title">ALL SERVICES</h1>
    <div class="jumbotron">
      <div class="container mt-5">
        <p class="lead">
          Towny isn't a huge city, but there is nothing missing. The info about all the different kinds of services that you may need are in this page. Whether you are a visitor or you have been living here, and the following lists you will be able to find for sure something new, that you didn't know you needed. 
        </p>
        <p class="lead">
          There are restaurants, museums, exhibitions, and every kind of shop whatever are your needs we are sure that you will find the right thing for you.
        </p>
        <br />

        <!-- Group links to services details -->
        <div class="d-flex justify-content-center flex-wrap">
          <CardComponent
v-for="item in serviceList" :key="`${item.id}`" :to="`/services/${item.id}`"
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
import CardComponent from '~/components/Card.vue'

export default {
  name: 'Events',
  components: {
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
  head() {
    return {
      title: 'All Services - Towny',
    }
  },
}
</script>

<style scoped>
/* Desktop/Landscape */
@media screen and (min-width: 600px) {
  .column_wrapper {
    column-count: 2;
  }

  .card-component {
    width: 50% !important;
  }
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

.row {
  margin-bottom: -30px;
}

.card-component>>>img {
  height: 150px;
  object-fit: cover;
}
</style>
