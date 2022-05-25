<template>
<div class="dropdown-wrapper">
  <nav class="navbar navbar-light px-3 header">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      :data-bs-target="'#dropdownToggler' + index"
      :aria-controls="'dropdownToggler' + index"
      aria-expanded="false"
      aria-label="Toggle navigation"
      @click="toggleDropdown()"
    >
    <div class="panel-heading collapsed" role="tab" id="headingOne" ref="panelHeading">
        <i class="material-icons">
            keyboard_arrow_right
        </i>
        <span>{{ title }}</span>
    </div>
      <!-- <span class="navbar-toggler-icon"></span> -->
    </button>
  </nav>

    <div class="collapse navbar-collapse" :id="'dropdownToggler' + index">
        <slot></slot>
    </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

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
.logo {
  color: white;
  font-size: 32px;
}
.nav-link {
    color: black !important;
    font-size: 22px;
    font-weight: 600;
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
.panel-heading.active i {
	-webkit-transform: rotate(90deg);
	-moz-transform: rotate(90deg);
	transform: rotate(90deg);
} 
</style>

<script>

export default {
    name: "Dropdown",
    template: `<div><slot/><div>`,
    props: {
        title: {
            type: String,
            required: true,
        },
        index: {
            type: String,
            default: '',
        },
    },
    methods: {
        toggleDropdown() {
            console.log("SADSD")
            if(this.$refs.panelHeading.classList.contains('active'))
                this.$refs.panelHeading.classList.remove('active');
            else
                this.$refs.panelHeading.classList.add('active');
        }
    }
}
</script>
