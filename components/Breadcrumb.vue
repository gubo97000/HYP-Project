    <!-- <nav>
          <ol class="breadcrumb">
          <li
            v-for="(crumb, ci) in crumbs" :key="ci"
            class="breadcrumb-item align">
            <button class="btn btn-link" :class="{ disabled: isLast(ci) }" @click="selected(crumb)">
                {{ crumb }}
            </button>
          </li>
      </ol>
    </nav> -->


  <!-- <nav class="bg-grey-light rounded-md w-full">
      <ol class="flex breadcrumb">
          <li
            v-for="(crumb, ci) in crumbs" :key="ci"
            class=" align">
            <button :class="isLast(ci) ? { disabled: true } : 'text-blue-600 hover:text-blue-700'" @click="selected(crumb)">
                {{ crumb }}
                <span v-if="!isLast(ci)" class="text-gray-500 mx-2">></span>
            </button>
          </li>
      </ol>
  </nav> -->


<template>
    <nav>
        <ol class="breadcrumb">
            <div v-for="(crumb, ci) in crumbs" :key="ci" class="crumb-item">
                <li>
                    <button class="btn btn-link hover:text-blue-300" :class="{ disabled: isLast(ci) }" @click="selected(crumb)">
                        {{ crumb }}
                    </button>
                </li>
                <li>
                    <button v-if="!isLast(ci)" disabled="isLast(ci)" class="separator" >
                        {{ "&#187;" }}
                    </button>
                </li>
            </div>
        </ol>
    </nav>
</template>

<style scoped>
.breadcrumb {
    background-color: white;
    border: 1px solid rgba(0,0,0,0.125);
    border-radius: 0.37rem;
    width: auto;
}
.separator {
    font-size: 22px;
    color: #6c757d;
}
.crumb-item {
    display: flex;
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
      selected(crumb) {
          this.$emit('selected', crumb);
      }
  }
}
</script>
