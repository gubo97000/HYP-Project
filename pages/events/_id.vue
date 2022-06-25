<template>
  <div class="container mt-5">
    <div class="container mt-5">
      <Breadcrumb
        class="row justify-items-center mt-4"
        :crumbs="crumbs"
        @selected="selected"
      />

      <h1 class="display-4 fw-bold lh-1">{{ event.title }}</h1>
      <p class="lead">
        {{ event.info }}
        {{ event }}
      </p>
      <br />
      <h4 class="subsection-title">OVERVIEW</h4>
      <p class="lead">
        {{ event.description }}
      </p>

      <br />
      <!-- <Carousel :slides="[pictures[0].url, pictures[1].url]"/> -->
      <br /><br />

      <h4 class="subsection-title">ABOUT THE PLACE</h4>
      <div class="about-the-place">
        <CardComponent
v-if="event.poi"
          :to="`/event/${event.poi.id}`"
          :caption="event.poi.title.toUpperCase()"
        />
      </div>

      <br /><br />
      <div
        class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3 go-back"
      >
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg px-4"
          @click="backToList"
        >
          ← ALL EVENTS
        </button>
      </div>
    </div>
  </div>
</template>

<script >
import { gql } from 'graphql-tag'
import Breadcrumb from '~/components/Breadcrumb.vue'
import {CardComponent} from '~/components/Card.vue'

export default {
  name: 'DetailsPage',
  components: {
    Breadcrumb,
    CardComponent,
  },

  async asyncData({ route, app }) {
    const { id } = route.params
    const client = app.apolloProvider.defaultClient
    const event  = await client.query({
      query: gql`
        query MyQuery {
          event(id: ${id}) {
            id
            title
            info
            description
            poi {
              id
              title
            }
          }
        }
      `,

    }).then(({ data }) => data.event)
    return {
      event,
      crumbs: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Events',
          path: '/events',
        },
        {
          name: event.title,
          path: '/events/' + id,
        },
      ],
    }
  },
  // data() {
  //   return {
  //     id: this.$route.params.id, // we get the route here so we are sure apollo gets it
  //   }
  // },
  head() {
    return {
      title: `Towny - ${this.event.title}`,
    }
  },
  // apollo: {
  //   event: {
  //     // prefetch: true,
  //     query: gql`
  //       query MyQuery($id: Int!) {
  //         event(id: $id) {
  //           id
  //           info
  //           title
  //           poi {
  //             title
  //             info
  //             id
  //           }
  //         }
  //       }
  //     `,
  //     variables() {
  //       return {
  //         id: parseInt(this.id),
  //       }
  //     },
  //   },
  // },
  methods: {
    backToList() {
      this.$router.push('/events')
    },
  },
}
</script>

<style scoped>
.lead {
  text-align: justify;
}

h2 {
  font-weight: bolder;
  font-size: 26px;
  font-family: Arial;
}
.about-the-place {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.subsection-title {
  color: #26466f;
  font-weight: 700;
  font-size: 22px;
  margin-top: 15px;
}
.about-the-place >>> .image-container {
  padding: 0;
  margin-bottom: 0;
}

/* @media screen and (max-width: 600px) {
  .lead {
    font-size: 18px;
  }
} */
</style>
