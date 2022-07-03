<template>
  <!-- A component that shows a rounded badge with text passed as child and a prop for the link. This component is used to display orientation info. -->
  <div class="badge-container">
    <nuxt-link :to="link" class="badgeA">
      <slot></slot>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.badge-container {
  display: inline-block;
  margin-bottom: 30px;
}
.badgeA {
  display: inline-block;
  padding: 0.7rem 1.2rem;
  border-radius: 10rem;
  border: 5px solid #81c3de;
  background-color: #b2e9fe;
  font-size: 24px;
  color: #04658e;
  font-weight: 600;
  text-decoration: none;
}

/* Center badge on mobile */
@media screen and (max-width: 600px) {
  .badge-container {
    display: flex;
    justify-content: center;
  }
}
</style>
