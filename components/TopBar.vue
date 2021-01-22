<template>
    <nav>
        <a class="home-button" href="/">
            <img class="logo-image" src="/assets/images/logo/logo.svg" alt="home">
        </a>
        <div class="button-stack">
            <a class="link-button" href="projects.html">Projects</a> 
            <a class="link-button" href="blog.html">Blog</a>
            <a class="link-button">News</a>
            <a class="link-button " href="about-me.html">About Me</a>
        </div>
    </nav>
</template>
<script>
export default {
    setup(props) {
        console.log({ props });   
    }
}
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
</style>