<!-- Component that acts like an accordion.
The way it opens/closes is similar to header and footer components in portrait mode. -->
<template>
  <div class="dropdown-wrapper">
    <nav class="navbar navbar-light px-3 header">

      <!-- The clickable part that opens/closes the accordion -->
      <button
        ref="toggler"
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#dropdownToggler' + index"
        :aria-controls="'dropdownToggler' + index"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleDropdown()"
      >
        <!-- The label of the dropdown: an arrow that rotates on toggle, plus a name (e.g. "Winter events") -->
        <div id="headingOne" ref="panelHeading" class="panel-heading collapsed">
            <i class="arrow right"></i>
            <span>{{ title }}</span>
        </div>

      </button>
    </nav>

    <!-- The items wrapped by the components, that are viewed only when the accordion is open. -->
    <!-- (See also "template" below) -->
    <div :id="'dropdownToggler' + index" ref="wrappee" class="navbar-collapse" :class="!toggled ? 'collapse' : ''">
        <slot></slot>
    </div>
  </div>
</template>

<script>
let defaultDropdownCollapsed = false;

export default {
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true,
    },
    index: {
      type: String,
      default: '',
    },
    toggled: {
      type: Boolean,
      default: false,
    }
  },
  mounted() {
    // Default toggle
    if(this.toggled === true) {
      this.$refs.toggler.click()
      this.$refs.panelHeading.classList.add('active')
    }

    // Step 3/3: Close this dropdown if opened
    this.$parent.$on('closeDropdown', () => {
      if (this.$refs.panelHeading.classList.contains('active')) {
        this.$refs.toggler.click()
        this.$refs.panelHeading.classList.remove('active')
      }
    })
  },
  methods: {
    toggleDropdown() {
      // Set cooldown to button, to ensure correct rotation of the dropdown arrow.
      this.$refs.toggler.disabled = true
      const self = this;
      setTimeout(function() {
        self.$refs.toggler.disabled = false
      }, 500);

      // Toggle active class
      if (this.$refs.panelHeading.classList.contains('active')) {
        this.$refs.panelHeading.classList.remove('active')
        
        // Only the first time closing a default toggled dropdown
        // The class must be initially removed if the dropdown is default toggled
        if(this.toggled && !defaultDropdownCollapsed) {
          defaultDropdownCollapsed = true
          this.$refs.wrappee.classList.add('collapse')
        }
      } else {  
        // Close all other dropdowns - Step 1: emit to parent the opening of this dropdown
        this.$parent.$emit('closeAllDropdowns', this.index)
        this.$refs.panelHeading.classList.add('active')
      }
    },
  },
  template: `<div><slot/><div>`,
}
</script>

<style scoped>
.arrow {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;

  height: 12px;
  width: 12px;
  margin-right: 5px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.dropdown-wrapper {
  margin-bottom: 30px;
}
.navbar {
  display: block;
}
.navbar-toggler {
  /* border-color: white; */
  display: flex;
  width: 100%;
  border-color: rgba(0, 0, 0, 0);
}
.navbar-toggler:focus {
  outline: none;
  box-shadow: none;
}
.navbar span {
  font-variant: small-caps;
  font-family: Arial;
  font-weight: bold;
  font-size: 22px;
  line-height: 2;
  color: white;
  align-items: flex-start;
  padding-left: 15px;
}
.header {
  background: #26466f;
  border-radius: 10px;
}

.panel-heading {
  justify-content: center;
  display: flex;
}
.panel-heading i {
  transition: all 0.5s;
  color: white;
  font-size: 36px;
  align-self: center;
}
/* Rotate dropdown arrow when opened/closed (to point downwards or to the right accordingly) */
.panel-heading.active i {
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	transform: rotate(45deg);

  margin-bottom: 5px;
} 
</style>