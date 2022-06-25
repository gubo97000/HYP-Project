<!-- <template>
  <div>
    <div v-for="client in images">
      <img :src="client.pathLong" />
    </div>
  </div>
</template>

<script >
export default {
  name: 'SectionOurClients',
  data() {
    return {
      images: [],
    }
  },

  mounted() {
    this.importAll(require.context('~/assets/events/1', true, /\.jpg$/))

    console.log('tes')
    console.log(this.images)
  },

  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      )
    },
  },
}
</script> -->
