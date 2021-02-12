<template>
    <nav>
        <router-link class="home-button" to="/">
            <img class="logo-image" src="/assets/images/logo/logo.svg" alt="home">
        </router-link>
        <div class="button-stack">
            <router-link class="link-button" to="/projects">Projects</router-link> 
            <router-link class="link-button" to="/blog">Blog</router-link>
            <!-- <router-link class="link-button">News</router-link> -->
            <router-link class="link-button " to="/about-me">About Me</router-link>
        </div>
    </nav>
</template>
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
</style>