<template>
  <div class="container my-5">
    <Breadcrumb
      class="row justify-items-center mt-4"
      :crumbs="crumbs"
      @selected="selected"
    />
    {{ pois.id }}
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
      id: this.$route.params.id,
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
