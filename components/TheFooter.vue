<!-- Component for footer, used by default layout, and always inserted at the bottom of a page. -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light px-3 header">
    <div class="collapse navbar-collapse" id="footerNavbarToggler">

      <!-- List of links (landmarks) accessible by the footer -->
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0 footer-links">
        <li
          v-for="(navItem, navItemIndex) of footerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
        >
          <nuxt-link :to="navItem.path" class="nav-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <!-- Button used only in mobile version, to open the landmarks as an accordion. -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#footerNavbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</template>

<style scoped>
.header {
  position:relative;
  bottom:0;
  width: 100%;
  background: #26466f;
}
.nav-link {
    color: white !important;
    font-size: 20px;
    font-weight: 500;
}
.footer-links {
  margin-left: auto; 
  margin-right: 0;
}
@media screen and (max-width: 600px) {
  #footerNavbarToggler {
    margin-bottom: 20px;
  }
}
</style>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      footerList: [
        {
          name: 'ABOUT US',
          path: '/about',
        },
        {
          name: 'CONTACT US',
          path: '/contact',
        },
      ],
    }
  },
}
</script>
