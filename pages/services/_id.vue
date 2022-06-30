<!-- Detail page of Services -->
<template>
  <div class="jumbotron">
    <!-- Cover with representative image + title -->
    <div class="image-container">
      <img :src="require(`@/assets/services/${serviceType.id}-c.webp`)" :alt="'Representation of ' + serviceType.name.toLowerCase()" class="cover" />
      <h1 class="title">
        {{ serviceType.name.toUpperCase() }}
      </h1>
    </div>
    <div class="container my-5">

      <h3 class="section-title">OVERVIEW</h3>
      <p class="lead">
        {{ serviceType.descrition }}
      </p>
      <br />

      <div class="image-container">
        <!-- <img :src="require('@/assets/' + map)" alt="" class="cover" /> -->
      </div>
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

  .title {
    font-size: 4rem;
  }

  .service-item>>>img {
    width: 300px;
    max-width: 40%;
  }
}

/* Portrait */
@media screen and (max-width: 599px) {
  .title {
    font-size: 3rem;
  }

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

.image-container {
  text-align: center;
  position: relative;
  top: 0;
  left: 0;
  background: black;
}

.service-info {
  margin-left: 5%;
}

.cover {
  position: relative;
  min-width: 100%;
  height: 300px;
  object-fit: cover;
  filter: opacity(0.85);
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-weight: 750;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
}

.item-title {
  color: #26466f;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;
}

.section-title {
  color: #26466f;
  font-weight: 800;
  font-size: 24px;
}

.go-back {
  margin-top: 5%;
}

.lead {
  text-align: justify;
}

.service-item>>>img {
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}
</style>
