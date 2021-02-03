<template>
    <top-bar></top-bar>
    <section>
        <Content />
    </section>
    <Footer/>
</template>

<script>

import Content from 'content/bienvenidos.md'
import Footer from 'components/Footer.vue'
import TopBar from 'components/TopBar.vue'

export default {
  components: {
    Content,
    Footer,
    TopBar  
  },
}
</script>
<style lang="postcss">
    section {
        @apply overflow-auto
    }
    section > .markdown-body {
        @apply max-w-md mx-auto my-5
    }
    section > .markdown-body > pre {
        @apply bg-gray-400
    }
    section > .markdown-body > pre > code {
        @apply p-4
    }
    section > .markdown-body > pre > code > span {
        @apply text-sm
    }
    section > .markdown-body > h1 {
        @apply font-medium text-2xl my-1
    }
    section > .markdown-body > h2 {
        @apply font-medium text-lg my-1
    }
    section > .markdown-body > p {
        @apply font-normal text-base my-1
    }
    section > .markdown-body > blockquote {
        @apply bg-gray-300 bg-opacity-50 p-4 border-green-700 border-opacity-80 border-l-8 my-4 flex-shrink italic
    }

</style>