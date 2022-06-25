<template>
  <div class="page container mt-5">
    <h1 class="title">EVENTS</h1>
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

        <div ref="dropdowns">
          <Dropdown :ref="'dropdownToggler' + i" :title="'ALL YEAR EVENTS'" :index="1">
            <div class="d-flex justify-content-center flex-wrap">
              <CardComponent v-for="item in events.nodes" :key="`${item.id}`" :to="`/events/${item.id}`"
                :image="`events/${item.id}-1.webp`" :caption="item.title" />
            </div>
          </Dropdown>

          <Dropdown :title="'WINTER EVENTS'" :index="2">
            <div class="d-flex justify-content-center flex-wrap">
              <CardComponent v-for="item in events.nodes" v-if="!isSummer(item.info) && isWinter(item.info)"
                :key="`S${item.id}`" :to="`/events/${item.id}`" :image="`events/${item.id}-1.webp`"
                :caption="item.title" />
            </div>
          </Dropdown>

          <Dropdown :title="'SUMMER EVENTS'" :index="3">
            <div class="d-flex justify-content-center flex-wrap">
              <CardComponent v-for="item in events.nodes" v-if="isSummer(item.info) && !isWinter(item.info)"
                :key="`W${item.id}`" :to="`/events/${item.id}`" :image="`events/${item.id}-1.webp`"
                :caption="item.title" />
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
import Breadcrumb from '~/components/Breadcrumb.vue'
import Dropdown from '~/components/Dropdown.vue'
import CardComponent from '~/components/Card.vue'

let dropdowns

export default {
  name: 'Events',
  components: {
    Breadcrumb,
    Dropdown,
    CardComponent,
  },
  data() {
    return {
      events: {},
      crumbs: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Events',
          path: '/events',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Events',
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
    this.$on('closeAllDropdowns', (index) => {
      for (let i = 1; i <= dropdowns.children.length; i++)
        if (index != i) this.$emit('closeDropdown')
    })
  },
  methods: {
    isSummer: (info) => {
      if (
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

.nuxt-clickable>>>img {
  height: 185px;
  object-fit: cover;
}

.nuxt-clickable>>>figure {
  height: 250px;
}

.nuxt-clickable>>>figcaption {
  line-height: 30px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 1550px) {
  .nuxt-clickable {
    width: 25%;
  }
}

@media screen and (min-width: 800px) and (max-width: 1550px) {
  .nuxt-clickable {
    width: 33%;
  }
}

@media screen and (max-width: 800px) {
  .nuxt-clickable {
    width: 50%;
  }
}
</style>
