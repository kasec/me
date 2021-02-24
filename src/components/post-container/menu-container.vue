<template>
<div class="menu-bar">
    <div class="categories-menu">
        <p class="title">Categories</p>
        <ul class="button-stack">
            <button class="btn" v-for="category in categories" @click="() => props.setPostByCategory(category)">
                {{ capitalCase(category) }}
            </button>
        </ul>
    </div>
    <div class="tags-menu">
        <p class="title">Tags</p>
        <ul class="button-stack">
            <button class="btn" v-for="tag in tags" @click="() => props.setPostByTag(tag)">
                # {{ capitalCase(tag) }}
            </button>
        </ul>
    </div>
</div>
</template>
<script setup>
import { defineProps } from "vue";
import { capitalCase } from '../../utils/capital-case'

const props = defineProps({
    categories: Array,
    tags: Array,
    setPostByCategory: Function,
    setPostByTag: Function
})

const tags = props.tags || []
const categories = props.categories || []

</script>
<style lang="postcss" scoped>
div.menu-bar {
    @apply sticky left-0 top-0  px-4 py-2 bg-black bg-opacity-90 shadow-2xl text-white rounded-sm flex flex-row sm:flex-col justify-between text-sm sm:text-base
}
/* if you dont specify its parent elements I'm supposing that class has been used by more than one element. */
.title { 
    @apply font-semibold place-self-center
}
.button-stack {
    @apply flex flex-row sm:flex-col mt-1
}
button.btn {
    @apply focus:outline-none text-left focus:ring-2 focus:ring-purple-600 focus:border-transparent rounded-sm hover:bg-gray-500 py-1 px-2
}

</style>