<template>
  <div class="container my-5">
    <Breadcrumb
      class="row justify-items-center mt-4"
      :crumbs="crumbs"
      @selected="selected"
    />
      <h1 class="display-4 fw-bold lh-1">PUNTO DI INTERESSE</h1>
      <br />
      <p class="lead">
        Fu lui verso che speranza giudicio che fallo quale. Che giudicio da
        ignoranza cosa piú che. Né e e di sé il forza ma. D'angoscia.
      </p>
    <div class="howtoreach-container">
      <div class="howtoreach-text">
        <h4 class="subsection-title">VISIT INFO</h4>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22385.345367822818!2d9.183978311645502!3d45.46641612838561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1652736022694!5m2!1sen!2sit"
        width="35%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <br />
    <Carousel :slides="['cover.png', 'cover.png']"/>
    <br />
    <h2>This place has the following itineraries</h2>

    <!--Itinerary 1: name
      duration: 45’
      difficulty: easy

      Itinerary 2: name
      duration: 45’
      difficulty: easy-->


    <ul style="display: list-item">
      <li v-for="i in 2" style="display: list-item">
        <div>
          <p class="lead">
            Itinerary 1: name
          </p>
          <p class="lead">
            duration: 45’
          </p>
          <p class="lead">
            difficulty: easy
          </p>
        </div>
      </li>
    </ul>
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
    <div
      class="d-grid gap-2 d-md-flex justify-content-center mb-4 mb-lg-3 go-back"
    >
      <button
        type="button"
        class="btn btn-outline-secondary btn-lg px-4"
        @click="backToList"
      >
        ←  ALL POINTS OF INTEREST
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

<style scoped>
@media screen and (min-width: 600px) {
  .howtoreach-container {
    display: flex;
    margin-top: 20px;
  }
  .howtoreach-text {
    width: 70%;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  iframe {
    width: 25%;
    aspect-ratio: 1.5 / 1;
  }
}

@media screen and (max-width: 600px) {
  iframe {
    width: 100%;
    aspect-ratio: 1 / 1;
    margin-top: 20px;
  }
}

.subsection-title {
  color: #26466F;
  font-weight: 700;
  font-size: 22px;
  margin-top: 15px;
}
ul {
  width: 100%;
}
ul, li {
    display:inline
}
li {
    margin-left: 10px;
    list-style-type: circle;
}
.lead {
  text-align: justify;
}
</style>
