<template>
    <TopBar/>
    <section>
        <div class="posts-container">
            <div class="top">
                <p class="main-text -title">Latest Updates</p>
                <a class="button" href="blog.html">See all</a>
            </div>
            <ul class="post-list">
                <li class="post-item" v-for="post in posts">
                    <article>
                        <a :href="post.url">
                                <p class="main-text -subtitle">{{ post.name }}</p> 
                                <p class="main-text">{{ post.description }}</p> 
                        </a>
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

const modules = import.meta.glob('../content/**/*.md')

const posts = Object.entries(modules).map(([path, module]) => {
    console.log({ path });
    const [firstLetter, ...allLetters ] = path.replace(/.*content\//, "").replace(/.md/, "").split("")
    
    const url = '/blog/' + [firstLetter, ...allLetters].join("") + '.html'
    
    const name = [firstLetter.toUpperCase(), ...allLetters].join("")
    
    return { name, url, description: "Bienvenido a este blog" }
})

const categories = [
    "React", "Vue", "Vanilla JS"
]

export default {
    components: { Footer, TopBar },
    setup() {
        return {
            posts
        }
    }
}
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