<template>
  <div class="container my-5">
    <Breadcrumb
      class="row justify-items-center mt-4"
      :crumbs="crumbs"
      @selected="selected"
    />
    <div class="container mt-5">
      <h1 class="display-4 fw-bold lh-1">PUNTO DI INTERESSE</h1>
      <br />
      <p class="lead">
        Fu lui verso che speranza giudicio che fallo quale. Che giudicio da
        ignoranza cosa piú che. Né e e di sé il forza ma. D'angoscia.
      </p>
    </div>
    <h2 class="mt-5">Visiting Info</h2>
    <div class="flex container">
      <br />
      <p class="lead">
        Come alla forse dea cosí cosa dico udita. Che e le noi occulta pericoli
        cospetto quale cosa dio, né sí impetrata se fosse per priegano che
        grazia potendo. Non per spezial pregato priegano maesta. 'l segreto di
        potremmo priegano mente.
      </p>
      <div class="">Image</div>
    </div>
    <br />
    <!-- <Carousel :slides="[pictures[0].url, pictures[1].url]" /> -->
    <br />
    <h2>This place has the following itineraries</h2>
    <div v-for="i in 2">Itinerary</div>
    <p class="lead">
      <!-- {{ poi.location }} -->
    </p>
    <br />
    <h2>Events happening here</h2>
    <div class="flex flex-wrap space-x-4 space-y-4 justify-around">
      <div
        v-for="n in 3"
        :key="n"
        class="card card-compact w-96 bg-base-100 shadow-xl basis-1/4"
      >
        <nuxt-link :to="`/pois/${n}`" class="nuxt-clickable">
          <div class="image-container">
            <figure>
              <!-- <img
                :src="require('@/assets/' + item.image)"
                alt=""
                width="100%"
              /> -->
              <figcaption>{{ n }}</figcaption>
            </figure>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4"
        @click="backToList"
      >
        ALL POINTS OF INTEREST
      </button>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Breadcrumb from '~/components/Breadcrumb.vue'
export default {
  name: 'DetailsPage',

  components: {
    Breadcrumb,
  },
  async asyncData({ route }) {
    const { id } = route.params
    return {
      pois: {},
      crumbs: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Points of Interest',
          path: '/pois',
        },
        {
          // name: data.name,
          path: '/pois/' + id,
        },
      ],
    }
  },
  data() {
    return {
      id: this.$route.params.id, // we get the route here so we are sure apollo gets it
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  apollo: {
    pois: {
      // prefetch: true,
      query: gql`
        query MyQuery($id: Int!) {
          pois(id: $id) {
            id
            info
            title
            description
            createdAt
            coordinates
          }
        }
      `,
      variables() {
        return {
          id: parseInt(this.id),
        }
      },
    },
  },

  methods: {
    backToList() {
      this.$router.push('/pois')
    },
  },
}
</script>
