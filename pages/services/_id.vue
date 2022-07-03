<!-- Detail page of Services -->
<template>
  <div class="jumbotron">
    <!-- Cover with representative image + title -->
    <Banner :banner-image="`services/${serviceType.id}-c`" :alt-text="'Representation of ' + serviceType.name.toLowerCase()" :title="serviceType.name" badge-link="/services/" badge-text="Service" class="banner"/>

    <div class="container my-5">
      <br />

      <!-- List of instances of this service type: image, name of shop/instance, address, opening hours -->
      <div v-for="(item, i) in serviceType.services.nodes">
        <div class="p-4 pe-lg-5 align-items-center rounded-3 border shadow-lg service-item">
          <img
          :src="require(`@/assets/services/${serviceType.id}-${i + 1}.webp`)"
          alt="View of the shop" />
          <div class="service-info">
            <p class="item-title">
              {{ item.name.toUpperCase() }}
            </p>
            <p>Address: {{ item.address }}</p>
            <p>Opening hours: {{ item.openhours }}</p>
          </div>
        </div>
      </div>

      <!-- Group link to All services (Index pattern) -->
      <div class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3 go-back">
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" @click="backToList">
          ← ALL SERVICES
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
export default {
  name: 'DetailsPage',

  async asyncData({ route, app }) {
    const { id } = route.params
    const client = app.apolloProvider.defaultClient
    const serviceType = await client
      .query({
        query: gql`
        query MyQuery {
  servicetype(id: ${id}) {
    services {
      nodes {
        id
        name
        openhours
        address
      }
    }
    name
    image
    id
    description
  }
}
      `,
      })
      .then(({ data }) => {
        console.log(data.servicetype)
        return data.servicetype
      })
    return {
      serviceType,
    }
  },
  head() {
    return {
      title: `${this.serviceType.name} - Services - Towny`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Towny isn't a huge city, but there is nothing missing. This page is dedicated to everything related to the ${this.serviceType.name.toLowerCase()} service.`,
        },
      ],
    }
  },

  methods: {
    backToList() {
      this.$router.push('/services')
    },
  },
}
</script>

<style scoped>
/* Desktop/Landscape */
@media screen and (min-width: 600px) {
  .service-item {
    display: inline-flex;
    width: 100%;
    margin-bottom: 1.5%;
  }

  .service-item>>>img {
    width: 300px;
    max-width: 40%;
  }
}

/* Portrait */
@media screen and (max-width: 599px) {
  .service-item {
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 3.5%;
  }

  .service-item>* {
    width: 100%;
  }
}

.service-info {
  margin-left: 5%;
}

.banner >>> .cover {
  position: relative;
  min-width: 100%;
  height: 300px;
  object-fit: cover;
  filter: opacity(0.85);
}

.item-title {
  color: #26466f;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
}

.go-back {
  margin-top: 5%;
}

.service-item>>>img {
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}
</style>
