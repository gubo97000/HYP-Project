<!-- Component for header, used by default layout, and always inserted at the top of a page. -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <!-- Landmark that brings to Home page, represented by the website logo. -->
    <a class="navbar-brand" href="/"
      ><img :src="require('@/assets/logo.png')" alt="Towny" width="50"
    /></a>

    <!-- Button used only in mobile version, to open the landmarks as an accordion. -->
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

    <div id="navbarToggler" class="collapse navbar-collapse">
      <!-- List of links (landmarks) accessible by the header (other than Home) -->
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

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      // Landmarks (not counting "Home")
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

<style scoped>
/* Header is fixed to the top of the screen, regardless of the scroll position (unlike footer, which is found after scrolling to bottom) */
.header {
  background: #8bdeff;
  position: fixed;
  z-index: 2;
  width: 100%;
  top: 0%;
}
.nav-link {
  color: white !important;
  font-size: 22px;
  font-weight: 600;
}
</style>

<style scoped>
.header {
  background: #8bdeff;
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
