<!-- Component for breadcrumbs. It receives as input an array of items. Each item has a name and an href path -->
<template>
    <nav>
        <!-- Breadcrumb as a list of items (links) in hierarchical order  -->
        <ol class="breadcrumb">
            <div v-for="(crumb, ci) in crumbs" :key="ci" class="crumb-item">
                <!-- Crumb item (actual link) -->
                <li>
                    <nuxt-link :class="{ 'disabled-link': isLast(ci) }" :to="crumb.path">
                        <div class="btn btn-link hover:text-blue-300" :class="{ disabled: isLast(ci) }">
                            {{ crumb.name }}
                        </div>
                    </nuxt-link>
                </li>
                <!-- Separator between items (except for last item) -->
                <li>
                    <div v-if="!isLast(ci)" disabled="isLast(ci)" class="separator">
                        {{ "&#187;" }}
                    </div>
                </li>
            </div>
        </ol>
    </nav>
</template>

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
        // True if lowest item in the hierarchy of crumbs (i.e. the currently visited page)
        isLast(index) {
            return index === this.crumbs.length - 1;
        },
    }
}
</script>

<style scoped>
/* Desktop/Landscape mode */
@media screen and (min-width: 600px) {
    .breadcrumb {
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.37rem;
        width: auto;
    }
}

/* Portrait mode */
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
