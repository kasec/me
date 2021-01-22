<template>
    <TopBar/>
    <section>
        <div class="posts-container">
            <div class="top">
                <p class="main-text -title">Latest Updates</p>
                <a class="button" href="blog.html">See all</a>
            </div>
            <ul class="post-list">
                <li class="post-item" v-for="item in [1,2,3,4, 5]">
                    <article>
                        <p class="main-text -subtitle">How to Create a link.</p> 
                        <p class="main-text">I'm a <span class="-strong">Web Developer</span>  and blogger from <span class="-strong">Durango, Mexico.</span></p> 
                    </article>
                </li>
            </ul>
        </div>
    </section>
    <Footer/>
</template>
<script>
import Footer from 'components/Footer.vue'
import TopBar from 'components/TopBar.vue'

export default {
    components: { Footer, TopBar },
}
</script>
<style lang="postcss" scoped>
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