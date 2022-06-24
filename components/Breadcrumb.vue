<template>
    <nav>
        <ol class="breadcrumb">
            <div v-for="(crumb, ci) in crumbs" :key="ci" class="crumb-item">
                <li>
                    <nuxt-link :class="{'disabled-link': isLast(ci)}" :to="crumb.path">
                        <div class="btn btn-link hover:text-blue-300" :class="{ disabled: isLast(ci) }">
                            {{ crumb.name }}
                        </div>
                    </nuxt-link>
                </li>
                <li>
                    <div v-if="!isLast(ci)" disabled="isLast(ci)" class="separator" >
                        {{ "&#187;" }}
                    </div>
                </li>
            </div>
        </ol>
    </nav>
</template>

<style scoped>
@media screen and (min-width: 600px) {
    .breadcrumb {
        background-color: white;
        border: 1px solid rgba(0,0,0,0.125);
        border-radius: 0.37rem;
        width: auto;
    }
}
@media screen and (max-width: 600px) {
    .breadcrumb {
        justify-content: center;
    }
}
.separator {
    font-size: 22px;
    color: #6c757d;
}
.crumb-item {
    display: flex;
}
.disabled-link {
   pointer-events: none
 }
 </style>

<script>
export default {
  name: 'Breadcrumb',
  props: {
      crumbs: {
          type: Array,
          required: true
      }
  },
  methods: {
      isLast(index) {
          return index === this.crumbs.length - 1;
      },
    //   selected(crumb) {
    //       this.$emit('selected', crumb);
    //   }
  }
}
</script>
