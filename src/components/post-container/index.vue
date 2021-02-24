<template>
<main>
    <menu-container
        :setPostByTag="setPostByTag"
        :setPostByCategory="setPostByCategory"
        :categories="categories"
        :tags="tags">
    </menu-container>
    <div class="posts-container">
        <div class="top">
            <p class="main-text -title">Latest Updates</p>
        </div>
        <ul class="post-list">
            <li class="post-item" v-for="post in posts">
                <router-link :to="post.path">
                    <article>
                        <p class="main-text -subtitle">{{ post.title }}</p> 
                        <p class="main-text">
                            {{ post.description }}
                        </p>
                        <div class="flex mt-3 justify-between">
                            <div class="flex justify-start">
                                <span class=" bg-gray-600 text-white text-sm font-medium p-1 rounded-sm mx-1.5">
                                    {{ post.category }}
                                </span>
                                <span class="bg-red-600 text-white text-sm font-medium p-1 rounded-sm mx-1.5" v-for="tag in post.tags">
                                    {{ tag }}
                                </span>
                            </div>
                            <p class="italic bg-gray-400 bg-opacity-50 px-3">
                                -- {{ post.date }}
                            </p>
                        </div>
                    </article>
                </router-link>
            </li>
        </ul>
    </div>
</main>
</template>

<script setup>

import { defineProps, ref, onMounted } from 'vue'
import postManifest from '../../content.json'
import { handleModules } from '../../utils/handle-modules'

const files = import.meta.glob('/src/pages/(blog|thoughts)/**/*.(vue|md)')
const [ modules, tags ] = handleModules(files, postManifest)

const props = defineProps({
    categories: [String, Array],
    format: [String, Array]
})

const getCategories = (categories) => {
    const newCategories = [ categories || "blog" ].flatMap(item => item) 
    return newCategories 
}
const getPostsByCategories = (modules = [], categories = []) => modules.filter(({ category }) => categories.includes(category))

const initialCategories = getCategories(props.categories) || []
const initialPosts = getPostsByCategories(modules, initialCategories) || []

const categories = ref(initialCategories)
const posts = ref(initialPosts)


const setPostByTag = (tag) => {
    posts.value = initialPosts.filter(post => post.tags.includes(tag))
}

const setPostByCategory = (category) => {
    switch(category) {
        case "all": {
            categories.value = initialCategories
            posts.value = initialPosts
            break
        }
        default: {
            categories.value = categories.value.includes('all') ? categories.value : categories.value.concat('all')
            posts.value = (initialPosts || []).filter(post => post.category === category)
            
            break;
        }
    }
}

</script>

<style lang="postcss" scoped>
main {
    @apply flex flex-col sm:flex-row justify-start min-h-full; font-family: 'Inter', sans-serif;
}
main > .posts-container {
    @apply  flex flex-col items-center mx-auto w-full sm:w-4/5 max-w-screen-md
}
main > .posts-container > .top {
    @apply flex flex-row items-center space-x-8 border-b-2 border-gray-400 py-4
}
main > .posts-container > .post-list > .post-item > a > article {
    @apply cursor-pointer border-b border-gray-400 p-4 hover:bg-white hover:shadow-lg hover:border-transparent
}
</style>