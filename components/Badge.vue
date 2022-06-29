<template>
  <!-- A component that shows a rounded badge with text passed as child and a prop for the link -->
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
  margin: 0 0.5rem;
}
.badgeA {
  display: inline-block;
  padding: 0.3rem 1rem;
  border-radius: 0.25rem;
  background-color: #8bdefffe;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
}
</style>
