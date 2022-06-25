<!-- Component for clickable rectangular cards.
A card contains an image and a caption, and is animated when hovered on. -->
<template>
  <nuxt-link :to="`${to}`" class="nuxt-clickable">
    <div class="image-container card">
      <figure>
        <img :src="require('@/assets/' + image)" alt="" width="100%" />
        <figcaption>{{ caption }}</figcaption>
      </figure>
    </div>
  </nuxt-link>
</template>

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

<script>
export default {
  name: 'CardComponent',
  props: {
    // Destination href on click.
    to: {
      type: String,
      required: true,
    },
    // Card representative image.
    image: {
      type: String,
      required: true,
    },
    // A caption that is representative of where the hyperlink brings to (e.g. "Events").
    caption: {
      type: String,
      required: true,
    },
  },
}
</script>

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
img {
  border-radius: 5px 5px 0 0;
}
.card {
  border: none;
  background-color: transparent;
}

/* Desktop / Landscape */
@media screen and (min-width: 600px) {
  figcaption {
    font-size: 22px;
  }
}
/* Portrait */
@media screen and (max-width: 600px) {
  figcaption {
    font-size: 18px;
  }
  img {
    height: 150px;
    object-fit: cover;
  }
}
</style>
