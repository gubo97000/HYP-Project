<!-- Group page "All Events" -->
<template>
  <div class="page container mt-5">
    <h1 class="title">ALL EVENTS</h1>
    <div class="jumbotron">
      <div class="container mt-5">
        <p class="lead">
          Whether its a party, celebration, festival or fiesta, Towny knows how to mark important dates with vim and vigour. The city has a calendar full of exciting events that will engage even the most cynical of visitor, covering religion, art, sports and whatever heading bullfighting falls under these days. 
        </p>
        <p class="lead">
          You will be able to experience a lot of different events, Towny is a city that is alive all year long, so feel free to navigate through all the events that our proposed this year and see if there is something that catches your eye.
        </p>
        <br />

        <!-- Three accordions: All-year events, Winter events, Summer events.
          Only one accordion at a time can be open, and each shows the Events related to its corresponding period of the year. -->
        <!-- Each card is a group link to the event details -->
        <div ref="dropdowns">
          <Dropdown
            :ref="'dropdownToggler' + i"
            :title="'ALL YEAR EVENTS'"
            :index="1"
          >
            <div class="d-flex justify-content-center flex-wrap">
              <CardComponent
                v-for="(item, index) in events.nodes"
                v-if="index < 8 || showMore"
                :key="`${item.id}`"
                :to="`/events/${item.id}`"
                :image="`events/${item.id}-thumb.webp`"
                :caption="item.title"
              />
            </div>

            <div class="d-flex justify-content-center flex-wrap">
              <button
                v-if="!showMore"
                type="button"
                class="btn btn-outline-light btn-lg rounded-pill"
                @click="showMore = true"
              >
                SHOW MORE
              </button>
            </div>
          </Dropdown>

          <!-- Events only in Winter (event period is not even partially outside of winter) -->
          <Dropdown :title="'WINTER EVENTS'" :index="2">
            <div class="d-flex justify-content-center flex-wrap">
              <CardComponent
                v-for="(item, index) in events.nodes.filter(
                  (e) => !isSummer(e.info) && isWinter(e.info)
                )"
                v-if="index < 8 || showMore"
                :key="`S${item.id}`"
                :to="`/events/${item.id}`"
                :image="`events/${item.id}-thumb.webp`"
                :caption="item.title"
              />
            </div>

            <div class="d-flex justify-content-center flex-wrap">
              <button
                v-if="!showMore && events.nodes.filter((item) => !isSummer(item.info) && isWinter(item.info)).length > 8"
                type="button"
                class="btn btn-outline-light btn-lg rounded-pill"
                @click="showMore = true"
              >
                SHOW MORE
              </button>
            </div>
          </Dropdown>

          <!-- Events only in Summer (event period is not even partially outside of summer) -->
          <Dropdown :title="'SUMMER EVENTS'" :index="3">
            <div class="d-flex justify-content-center flex-wrap">
              <CardComponent
                v-for="(item, index) in events.nodes.filter(
                  (e) => isSummer(e.info) && !isWinter(e.info)
                )"
                v-if="index < 8 || showMore"
                :key="`W${item.id}`"
                :to="`/events/${item.id}`"
                :image="`events/${item.id}-thumb.webp`"
                :caption="item.title"
              />              
            </div>

            <div class="d-flex justify-content-center flex-wrap">
              <button
                v-if="!showMore && events.nodes.filter((item) => isSummer(item.info) && !isWinter(item.info)).length > 8"
                type="button"
                class="btn btn-outline-light btn-lg rounded-pill"
                @click="showMore = true"
              >
                SHOW MORE
              </button>
            </div>
          </Dropdown>
        </div>

        <br />
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
import { gql } from 'graphql-tag'
import Dropdown from '~/components/Dropdown.vue'
import CardComponent from '~/components/Card.vue'

let dropdowns

export default {
  name: 'Events',
  components: {
    Dropdown,
    CardComponent,
  },
  data() {
    return {
      events: {},

      // Used to hide overflowing cards
      showMore: false,
    }
  },
  head() {
    return {
      title: 'All Events - Towny',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `In Towny there is always something to do, discover all the possibilities here!`,
        },
      ],
    }
  },
  apollo: {
    events: {
      // IMPORTANT: the name of the variable MUST be the same of the entity in the GraphQL query
      // prefetch: true,
      query: gql`
        query MyQuery {
          events {
            nodes {
              id
              title
              info
            }
          }
        }
      `,
      // fetchPolicy: 'network-only',
    },
  },
  mounted() {
    dropdowns = this.$refs.dropdowns

    // Steps 1 and 3 in Dropdown component
    // Step 2: When clicking a dropdown, close all the others (if opened)
    // Also re-enable "show more" button
    this.$on('closeAllDropdowns', (index) => {
      this.showMore = false

      for (let i = 1; i <= dropdowns.children.length; i++)
        if (index != i) this.$emit('closeDropdown')
    })
  },
  methods: {
    isSummer: (info) => {
      if (
        info.includes('Summer') ||
        info.includes('April') ||
        info.includes('May') ||
        info.includes('June') ||
        info.includes('July') ||
        info.includes('August') ||
        info.includes('September')
      )
        return true
      else return false
    },
    isWinter: (info) => {
      if (
        info.includes('Winter') ||
        info.includes('October') ||
        info.includes('November') ||
        info.includes('December') ||
        info.includes('January') ||
        info.includes('February') ||
        info.includes('March')
      )
        return true
      else return false
    },
  },
  // async asyncData({ $axios }) {
  //   const { data } = await $axios.get('/api/events')
  //   return {
  //     eventsList: data,
  //   }
  // },
}
</script>

<style scoped>
h2 {
  font-weight: bolder;
  font-size: 26px;
  font-family: Arial;
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

.btn {
  background-color: #8bdefffe;
  margin-top: 30px;
}

/* 4 cards per row */
@media screen and (min-width: 1550px) {
  .nuxt-clickable {
    width: 25% !important;
  }
}

.page {
  min-height: calc(100vh - 182px);
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

/* Do not overflow caption (For titles 3 rows long) */
@media screen and (max-width: 768px) and (min-width: 600px) {
  .nuxt-clickable >>> figcaption {
    line-height: 20px;
  }
}
</style>
