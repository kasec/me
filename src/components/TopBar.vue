<template>
    <nav>
        <!-- <router-link class="home-button" to="/"> -->
        <a class="home-button" href="/">
            <img class="logo-image" src="/assets/images/logo/logo.svg" alt="home">
        </a>
        <!-- </router-link> -->
        <div class="button-stack">
            <router-link v-for="button in router_buttons" :class="button.class" :to="button.to">{{button.title}}</router-link> 
        </div>
    </nav>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()

let _window;

try {
    _window = window
} catch(err) {
    _window = {}
}

const createRouterButtons = (pathname) => [
    {
        to: '/projects',
        title: 'Projects',
        class: pathname.startsWith('/projects') ? "active-button" : "link-button"
    },
    {
        to: '/blog',
        title: 'Blog',
        class: pathname.startsWith('/blog') ? "active-button" : "link-button"
    },
    {
        to: '/about-me',
        title: 'About Me',
        class: pathname.startsWith('/about-me') ? "active-button" : "link-button"
    },
]
const router_buttons = ref(createRouterButtons(_window?.location?.pathname || ''))

watch(route, () => {
    const newRouteButtons = createRouterButtons(_window?.location?.pathname || '')
    router_buttons.value = newRouteButtons
})

</script>
<style lang="postcss" scoped>
nav {
    @apply flex flex-col sm:flex-row justify-between px-5 bg-green-700 rounded-b-lg
}
nav > .home-button {
    @apply h-16 my-2 flex-shrink-0 rounded-md text-white flex items-center justify-center
}
nav > .home-button > img.logo-image {
    @apply h-16 rounded-full flex-shrink-0 hover:bg-green-800 p-1
}
nav > .button-stack {
    @apply text-white flex text-sm sm:text-base font-semibold justify-evenly items-center
}
nav > .button-stack > .link-button {
    @apply py-3 px-3 flex items-center justify-center hover:bg-black hover:text-white hover:bg-opacity-50
}

nav > .button-stack > .active-button {
    @apply py-3 px-3 flex items-center justify-center hover:bg-black hover:text-white hover:bg-opacity-50 bg-black m-1
}

</style>