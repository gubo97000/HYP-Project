<template>
  <div class="page container mt-5">
    <h1 class="display-4">Points of Interest</h1>
    <Breadcrumb
      class="row justify-items-center mt-4"
      :crumbs="crumbs"
      @selected="selected"
    />
    <br />
    <!-- description of point of interest -->
    <div>This is a description of the points of interest</div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22385.345367822818!2d9.183978311645502!3d45.46641612838561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1652736022694!5m2!1sen!2sit"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <div class="flex flex-wrap space-x-4 space-y-4 justify-around">
      <div
        v-for="n in poises.edges"
        :key="n.node.id"
        class="card card-compact w-96 bg-base-100 shadow-xl basis-1/4 "
      >
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{n.node.title}}</h2>
          <p>{{n.node.info}}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import gql from 'graphql-tag'
import Breadcrumb from '~/components/Breadcrumb.vue'
export default {
  name: 'PointsOfInterest',
  apollo: {
    poises: { // IMPORTANT: the name of the variable MUST be the same of the entity in the GraphQL query
      prefetch: true,
      query: gql`query MyQuery{
                poises {
                  edges {
                    node {
                      id
                      title
                      info
                    }
                  }
                }
              }
              `
    }
  },
  components: {
    Breadcrumb,
  },
  head(){
    return {
      title: "Points of Interest"
    }
  },
  data() {
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
      ],
    }
  },
  // async asyncData({ $axios }) {
  //   const { data } = await $axios.get('/api/page-info/about')
  //   const title = data.title
  //   const image = data.image
  //   const description = data.description
  //   return {
  //     title,
  //     description,
  //     image,
  //   }
  // },
}
</script>
