<template>
  <div class="posts-container">
        <div class="top">
            <p class="main-text -title">Latest Updates</p>
        </div>
        <ul class="post-list">
            <li class="post-item" v-for="post in posts">
                <router-link :to="post.url">
                    <article>
                        <p class="main-text -subtitle">{{ post.name }}</p> 
                        <div class="main-text flex justify-between">
                            <p class="">
                                Ver mas.
                            </p>
                            <div class="flex justify-items-end ml-10 place-items-center">
                                <span class="bg-red-600 text-white text-sm font-medium p-1 rounded-sm mx-1.5" v-for="tag in post.tags">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </article>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
const modules = import.meta.glob('/src/pages/blog/**/*.(vue|md)')

const posts = Object.entries(modules).map(([path, module]) => {
    console.log({ path });
    const cleanPath = path.replace(/.*blog\//, "").replace(/.(md|vue)/, "").replace(/^\.\//, "")

    const tags = (cleanPath.match(/.+?\//g) || []).map(tag => tag.replace(/^\//, "").replace(/\/$/, ""))

    const url = '/blog/' + cleanPath

    const [firstLetter, ...continueLetters] = cleanPath.replace(/-/g, " ").replace(/.+\//, "").split("")

    const name = [firstLetter.toUpperCase(), ...continueLetters].join("")
    
    return name !== "Index" ? { name, url, tags } : undefined
}).filter(item => item)

export default {
    setup() {
        return { posts }
    }
}

</script>

<style lang="postcss" scoped>
.posts-container {
    @apply  flex flex-col items-center mx-auto w-4/5
}
.posts-container > .top {
    @apply flex flex-row items-center space-x-8
}
.posts-container > .top > .button {
    @apply bg-black text-white font-semibold rounded-lg p-2 hover:bg-green-900 border-4 hover:border-white
}
.posts-container > .post-list {
    @apply p-3 max-w-screen-sm w-4/5
}
.posts-container > .post-list > .post-item {
    @apply p-3 max-w-screen-md
}
.posts-container > .post-list > .post-item > a > article {
    @apply cursor-pointer border-t border-gray-400 p-4 hover:bg-white hover:shadow-lg hover:border-transparent
}
</style>