<template>
    <TopBar/>
    <section>
        <post-container></post-container>
    </section>
    <Footer/>
</template>
<script setup>
import { useHead } from '@vueuse/head'

    useHead({
        // Can be static or computed
        title: "Welcome to Azael Landing",
        meta: [
            {
                name: `description`,
                content: "Now you can see watch every thing that I post about tech/ web development",
            },
        ],
    })

</script>
<style lang="postcss">
section {
    @apply pt-10 overflow-auto
}
section > .posts-container {
    @apply  flex flex-col items-center min-w-full
}
section > .posts-container > .top {
    @apply flex flex-row items-center space-x-8
}
section > .posts-container > .top > .button {
    @apply bg-black text-white font-semibold rounded-lg p-2 hover:bg-green-900 border-4 hover:border-white
}
section > .posts-container > .post-list > .post-item {
    @apply p-3
}
section > .posts-container > .post-list > .post-item > article {
    @apply cursor-pointer border-t border-gray-400 p-4 hover:bg-white hover:shadow-lg hover:border-transparent
}
</style>