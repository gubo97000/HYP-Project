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
        <div class="panel-heading collapsed" id="headingOne" ref="panelHeading">
            <i class="material-icons">
                keyboard_arrow_right
            </i>
            <span>{{ title }}</span>
        </div>

      </button>
    </nav>

    <!-- The items wrapped by the components, that are viewed only when the accordion is open. -->
    <!-- (See also "template" below) -->
    <div class="collapse navbar-collapse" :id="'dropdownToggler' + index">
        <slot></slot>
    </div>
  </div>
</template>

<style scoped>
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
    border-color: rgba(0,0,0,0);
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
  background: #26466F;
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
	-webkit-transform: rotate(90deg);
	-moz-transform: rotate(90deg);
	transform: rotate(90deg);
} 
</style>

<script>
export default {
    name: "Dropdown",

    //The template contains the elements wrapped, that are shown when the accordion is opened.
    template: `<div><slot/><div>`,

    props: {
        // textual label (e.g. Winter events)
        title: {
            type: String,
            required: true,
        },
        // index used for element's id, if there are more Dropdowns in a page
        index: {
            type: String,
            default: '',
        },
    },

    methods: {
        // Open/close on click
        toggleDropdown() {
            if(this.$refs.panelHeading.classList.contains('active'))
                // Close accordion
                this.$refs.panelHeading.classList.remove('active');
            else {
                // Open accordion

                // Step 1: emit to parent the opening of this dropdown (to close the other dropdowns)
                this.$parent.$emit('closeAllDropdowns', this.index);
                this.$refs.panelHeading.classList.add('active');
                // Step 2 in parent page (e.g. Events/index)
            }
        },
    },

    mounted() {
        // Step 3/3: Close this dropdown if opened (triggered when another dropdown has been opened)
        this.$parent.$on('closeDropdown', () => {
            if(this.$refs.panelHeading.classList.contains('active')) {
                this.$refs.toggler.click();
                this.$refs.panelHeading.classList.remove('active');
            }
        })
    }
}
</script>
