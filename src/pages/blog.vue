<template>
    <TopBar/>
    <section class="flex sm:flex-row flex-col sm:justify-center">
        <div class="sticky left-0 top-0  px-4 py-2 bg-black shadow-2xl text-white rounded-sm flex flex-row sm:flex-col justify-between">
            <p class="font-semibold inline-block place-self-center">Categories</p>
            <ul class="flex flex-row sm:flex-col">
                <li class="rounded-sm hover:bg-gray-500 py-2 px-3" v-for="item in categories">
                    <a href="">{{ item }}</a>
                </li>
            </ul>
        </div>
        <div class="posts-container">
            <div class="segment-posts">
                <div class="top">
                    <p class="main-text -title">Latest Updates</p>
                </div>
                <ul class="post-list">
                    <li class="post-item" v-for="item in [1, 2, 3, 4, 5]">
                        <a>
                            <article>
                                <p class="main-text -subtitle">How to Create a link.</p> 
                                <p class="main-text">I'm a <span class="-strong">Web Developer</span>  and blogger from <span class="-strong">Durango, Mexico.</span></p> 
                            </article>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <Footer/>
</template>
<script>
import Footer from 'components/Footer.vue'
import TopBar from 'components/TopBar.vue'

export default {
    components: { Footer, TopBar },
    data() {
        return {
            categories: [
                "React", "Vue", "Vanilla JS"
            ]
        }
    }
}
</script>
<style lang="postcss" scoped>
section {
    @apply overflow-auto
}
section > .posts-container > .segment-posts {
    @apply  flex flex-col items-center min-w-full
}
section > .posts-container > .segment-posts > .top {
    @apply flex flex-row items-center space-x-8
}
section > .posts-container > .segment-posts > .top > .button {
    @apply bg-black text-white font-semibold rounded-lg p-2 hover:bg-green-900 border-4 hover:border-white
}
section > .posts-container > .segment-posts > .post-list > .post-item {
    @apply p-3
}
section > .posts-container > .segment-posts > .post-list > .post-item > a > article {
    @apply cursor-pointer border-t border-gray-400 p-4 hover:bg-white hover:shadow-lg hover:border-transparent
}
</style>