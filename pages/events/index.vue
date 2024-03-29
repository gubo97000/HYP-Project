<!-- Group page "All Events" -->
<template>
  <div class="page container mt-5">
    <h1 class="title">ALL EVENTS</h1>
    <div class="jumbotron">
      <div class="container mt-5">
        <p class="lead">
          Whether its a party, celebration, festival or fiesta, Towny knows how
          to mark important dates with vim and vigour. The city has a calendar
          full of exciting events that will engage even the most cynical of
          visitor, covering religion, art, sports and whatever heading
          bullfighting falls under these days.
        </p>
        <p class="lead">
          You will be able to experience a lot of different events, Towny is a
          city that is alive all year long, so feel free to navigate through all
          the events that our proposed this year and see if there is something
          that catches your eye.
        </p>
        <br />

        <!-- Three accordions: All-year events, Winter events, Summer events.
          Only one accordion at a time can be open, and each shows the Events related to its corresponding period of the year. -->
        <!-- The first dropdown (All-Year) is open by default at the beginning -->
        <!-- Each card is a group link to the event details -->
        <div v-if="events.nodes" ref="dropdowns">
          <Dropdown
            :title="'ALL YEAR EVENTS'"
            :index="1"
            :toggled="true"
          >
            <div class="d-flex justify-content-center flex-wrap">
              <!-- All the cards here -->
              <CardComponent
                v-for="(item, index) in events.nodes"
                v-if="index < maxLength || showMore"
                :key="`${item.id}`"
                :to="`/events/${item.id}`"
                :image="`events/${item.id}-thumb.webp`"
                :caption="item.title"
                :subcaption="item.period"
              />
            </div>

            <!-- "Show more" button -->
            <div class="d-flex justify-content-center flex-wrap">
              <!-- Not shown if there are not enough events -->
              <button
                v-if="events.nodes.length > maxLength"
                type="button"
                class="btn btn-outline-light btn-lg rounded-pill"
                @click="showMore = !showMore"
              >
                <span v-if="!showMore">SHOW MORE</span>
                <span v-if="showMore">SHOW LESS</span>
              </button>
            </div>
          </Dropdown>

          <!-- Events only in Winter (event period is not even partially outside of winter) -->
          <Dropdown :title="'WINTER EVENTS'" :index="2">
            <div class="d-flex justify-content-center flex-wrap">
              <!-- All the cards here -->
              <CardComponent
                v-for="(item, index) in events.nodes.filter(
                  (e) => !isSummer(e.period) && isWinter(e.period)
                )"
                v-if="index < maxLength || showMore"
                :key="`S${item.id}`"
                :to="`/events/${item.id}`"
                :image="`events/${item.id}-thumb.webp`"
                :caption="item.title"
                :subcaption="item.period"
              />
            </div>

            <!-- "Show more" button -->
            <div class="d-flex justify-content-center flex-wrap">
              <!-- Not shown if there are not enough events -->
              <button
                v-if="
                  events.nodes.filter(
                    (item) => !isSummer(item.period) && isWinter(item.period)
                  ).length > maxLength
                "
                type="button"
                class="btn btn-outline-light btn-lg rounded-pill"
                @click="showMore = !showMore"
              >
                <span v-if="!showMore">SHOW MORE</span>
                <span v-if="showMore">SHOW LESS</span>
              </button>
            </div>
          </Dropdown>

          <!-- Events only in Summer (event period is not even partially outside of summer) -->
          <Dropdown :title="'SUMMER EVENTS'" :index="3">
            <div class="d-flex justify-content-center flex-wrap">
              <!-- All the cards here -->
              <CardComponent
                v-for="(item, index) in events.nodes.filter(
                  (e) => isSummer(e.period) && !isWinter(e.period)
                )"
                v-if="index < maxLength || showMore"
                :key="`W${item.id}`"
                :to="`/events/${item.id}`"
                :image="`events/${item.id}-thumb.webp`"
                :caption="item.title"
                :subcaption="item.period"
              />
            </div>

            <!-- "Show more" button -->
            <div class="d-flex justify-content-center flex-wrap">
              <!-- Not shown if there are not enough events -->
              <button
                v-if="
                  events.nodes.filter(
                    (item) => isSummer(item.period) && !isWinter(item.period)
                  ).length > maxLength
                "
                type="button"
                class="btn btn-outline-light btn-lg rounded-pill"
                @click="showMore = !showMore"
              >
                <span v-if="!showMore">SHOW MORE</span>
                <span v-if="showMore">SHOW LESS</span>
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
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    const events = await client
      .query({
        query: gql`
          query MyQuery {
            events(orderBy: TITLE_ASC) {
              nodes {
                id
                title
                period
              }
            }
          }
        `,
      })
      .then(({ data }) => {
        // console.log(data.servicetypes.nodes)
        return data.events
      })
    return {
      events,
    }
  },
  data() {
    return {
      events: {},

      // Used to hide overflowing cards (if false)
      showMore: false,
      // Length under which the show more button does not appear
      maxLength: 8,
    }
  },
  head() {
    return {
      title: 'All Events - Towny',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Towny is a city that is alive all year long, so feel free to navigate through all the events that our proposed this year and see if there is something that catches your eye!`,
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

    dropdowns = this.$refs.dropdowns

    // Steps 1 and 3 in Dropdown component
    // Step 2: When clicking a dropdown, close all the others (if opened)
    // Also re-enable "show more" button
    this.$on('closeAllDropdowns', (index) => {
      this.showMore = false
      if (!dropdowns?.children?.length === 0) return
      for (let i = 1; i <= dropdowns.children.length; i++)
        if (index != i) this.$emit('closeDropdown')
    })
  },
  methods: {
    isSummer: (period) => {
      if (
        period.includes('Summer') ||
        period.includes('April') ||
        period.includes('May') ||
        period.includes('June') ||
        period.includes('July') ||
        period.includes('August') ||
        period.includes('September')
      )
        return true
      else return false
    },
    isWinter: (period) => {
      if (
        period.includes('Winter') ||
        period.includes('October') ||
        period.includes('November') ||
        period.includes('December') ||
        period.includes('January') ||
        period.includes('February') ||
        period.includes('March')
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
  line-height: normal;
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
@media screen and (min-width: 1024px) and (max-width: 1550px) {
  .nuxt-clickable {
    width: 33% !important;
  }
}

/* 2 cards per row */
@media screen and (max-width: 1024px) and (min-width: 600px) {
  .nuxt-clickable {
    width: 50% !important;
  }
}
</style>
