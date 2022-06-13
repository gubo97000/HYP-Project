<template>
  <nuxt-link :to="`${to}`" class="nuxt-clickable">
    <div class="image-container card">
      <figure>
        <img :src="require('@/assets/' + image)" alt="" width="100%"/>
        <figcaption>{{ caption }}</figcaption>
      </figure>
    </div>
  </nuxt-link>
</template>

<style scoped>
.image-container {
  text-align: center;
}
figcaption {
  font-variant: small-caps;
  font-family: Arial;
  font-weight: bold;
  font-size: 22px;
  line-height: 2;
  color: #26466f;
}
figure {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}
.image-container:hover {
  transform: scale(1.1);
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
}
.image-container {
  padding: 5%;
  margin-bottom: -5%;

  transition: transform 0.2s;
  -webkit-transition: -webkit-transform 0.2s;
  -moz-transition: -moz-transform 0.2s;
  -o-transition: -o-transform 0.2s;
}
.nuxt-clickable {
  display: inline-block;
  width: 100%;
}

.card {
  border: none;
  background-color: transparent;
}

</style>

<script>
export default {
  name: 'CardComponent',
  props: {
    to: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
  },
}
</script>
