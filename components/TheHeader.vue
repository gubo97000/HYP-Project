<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <a class="navbar-brand" href="/"><img :src="require('@/assets/logo.png')" alt="Towny" width="50"></a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarToggler">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
        >
          <nuxt-link :to="navItem.path" class="nav-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.header {
  background: #8bdeff;
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0%;
}
.logo {
  color: white;
  font-size: 32px;
}
.nav-link {
    color: white !important;
    font-size: 22px;
    font-weight: 600;
}
</style>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'EVENTS',
          path: '/events',
        },
        {
          name: 'POINTS OF INTEREST',
          path: '/pois',
        },
        {
          name: 'ITINERARIES',
          path: '/itineraries',
        },
        {
          name: 'SERVICES',
          path: '/services',
        },
      ],
    }
  },
}
</script>
