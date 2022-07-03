<!-- Group page "All Itineraries" -->
<template>
  <div class="page container mt-5">
    <h1 class="title">ALL ITINERARIES</h1>
    <div class="jumbotron">
      <div class="container mt-5">
        <p class="lead">
          You know that sensation of being lost when you have to plan a visit to
          a city you don't know? We have got to covered. In this guide you will
          find some of the most beautiful itineraries that you can do to explore
          Towny and it's most beautiful sights. The itineraries are for
          everyone, you will be able to find more information about each one,
          such as the difficulty and the duration of the walk.
        </p>
        <p class="lead">
          They will touch some of the most important points of interest of our
          city and you will be able to explore and get to know more about each
          and every one of them. so, what are you waiting? Grab your comfy shoes
          and someone who loves to explore and start discovering Towny!
        </p>
        <br />

        <!-- Group links to itineraries details -->
        <div class="column-wrapper">
          <nuxt-link
            v-for="item in itineraryList"
            :key="item.id"
            :to="`/itineraries/${item.id}`"
            class="nuxt-clickable"
          >
            <div
              class="p-4 pe-lg-5 align-items-center rounded-3 border shadow-lg service-item"
            >
              <!-- Small map with overview of the route -->
              <img
                :src="require('@/assets/maps/' + item.id + '-map.webp')"
                :alt="`Map of itinerary: ${item.title}`"
                style=""
              />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <!-- <iframe :src="item.map" height="360px"></iframe> -->
              <!-- Info: title, duration, touched points of interest -->
              <div>
                <p class="item-title">
                  {{ item.title.toUpperCase() }}
                </p>
                <!-- <p>Difficulty: {{ item.difficulty }}</p> -->
                <p class="lead">Duration: {{ item.duration }}</p>
                <br />
                <p class="lead">Points of interest:</p>
                <p class="item-subtitle">
                  <nuxt-link
                    v-for="(poi, index) in item.poiItineraries.nodes"
                    :key="poi.poi.id"
                    :to="`/pois/${poi.poi.id}`"
                    class="nuxt-clickable poi"
                  >
                    <span>{{ poi.poi.title.toUpperCase() }}</span>
                    <span v-if="index !== item.poiItineraries.nodes.length - 1"
                      >&nbsp;-&nbsp;</span
                    >
                  </nuxt-link>
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
export default {
  name: 'Itineraries',
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    const itineraries = await client
      .query({
        query: gql`
          query MyQuery {
            itineraries {
              nodes {
                id
                duration
                description
                title
                map
                poiItineraries(orderBy: ORDER_ASC) {
                  nodes {
                    order
                    poi {
                      id
                      title
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .then(({ data }) => {
        // console.log(data)
        return data.itineraries.nodes
      })
    return {
      itineraryList: itineraries,
    }
  },
  head() {
    return {
      title: 'All Itineraries - Towny',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `In this guide you will find some of the most beautiful itineraries that you can do to explore Towny and it's most beautiful sights. The itineraries are for everyone, you will be able to find more information about each one, such as the difficulty and the duration of the walk.`,
        },
      ],
    }
  },
}
</script>

<style scoped>
/* Landscape/Desktop */
@media screen and (min-width: 768px) {
  .service-item {
    display: inline-flex;
    width: 100%;
    margin-bottom: 1.5%;
  }

  .title {
    font-size: 4rem;
  }

  .service-item > img {
    min-width: 400px;
    margin-right: 2.5%;
  }
}

/* Portrait */
@media screen and (max-width: 767px) {
  .service-item {
    margin-bottom: 30px;
  }

  .service-item > img {
    width: 100%;
    margin-bottom: 10px;
  }

  .title {
    font-size: 3.6rem;
  }
}

.item-title,
.item-subtitle {
  color: #26466f;
  font-weight: 500;
  margin-bottom: 10px;
}
.service-item:hover {
  transform: scale(1.05);
  -ms-transform: scale(1.05);
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -o-transform: scale(1.05);
}

.service-item {
  transition: transform 0.2s;
  -webkit-transition: -webkit-transform 0.2s;
  -moz-transition: -moz-transform 0.2s;
  -o-transition: -o-transform 0.2s;
}
.item-subtitle {
  font-size: 20px;
}

.item-title {
  font-weight: bold;
  font-size: 24px;
}

.lead {
  margin-bottom: 15px;
  text-align: justify;
}

.title {
  text-align: center;
  color: #26466f;
  font-weight: 750;
}

.poi {
  pointer-events: none;
}
</style>
