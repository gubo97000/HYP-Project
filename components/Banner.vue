<!-- Component used to create banners for all the details pages; also used in About us and Contact us -->
<template>
    <div class="image-container">
      <img :src="require(`@/assets/${bannerImage}.webp`)" :alt="altText" class="cover" />
      <h1 class="title">
        {{ title.toUpperCase() }}
      </h1>
      <Badge v-if="badgeLink != ''" class="badge" :link="badgeLink">{{ badgeText }}</Badge>

    </div>
</template>

<script>
import Badge from '~/components/Badge.vue'

export default {
  name: 'Banner',
  components: {
    Badge
  },
  props: {
    bannerImage: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    badgeLink: {
      type: String,
      default: '',
    },
    badgeText: {
      type: String,
      default: '',
    }
  },
}
</script>

<style scoped>
/* Desktop/Landscape */
@media screen and (min-width: 600px) {
  .title {
    font-size: 4rem;
  }
  .badge {
    top: 75%;
  }
}

/* Portrait */
@media screen and (max-width: 599px) {
  .title {
    font-size: 3rem;
  }
  .badge {
    top: 80%;
  }
}

@media screen and (max-width: 400px) {
  .title {
    font-size: 12vw;
  }
}

.image-container {
  text-align: center;
  position: relative;
  top: 0;
  left: 0;
  background: black;
}

.cover {
  position: relative;
  min-width: 100%;
  height: 300px;
  object-fit: cover;
  filter: opacity(0.65);
}

.title {
  width: 90%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-weight: 750;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
}

.badge {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>