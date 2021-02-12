<template>
    <TopBar/>
    <main>
        <div class="menu-bar">
            <p class="font-semibold place-self-center">Categories</p>
            <ul class="flex flex-row sm:flex-col">
                <li class="rounded-sm hover:bg-gray-500 py-2 px-3" v-for="item in categories">
                    <a href="">{{ item }}</a>
                </li>
            </ul>
        </div>
        <section>
            <router-view></router-view>
        </section>
    </main>
    <Footer/>
</template>
<script setup>
import { useHead } from '@vueuse/head'

const categories = [
    "React", "Vue", "Vanilla JS"
]

useHead({
    // Can be static or computed
    title: "Now you are watching my thoughts",
    meta: [
        {
            name: `description`,
            content: "Now you can see watch every thing what I posting about tech and web development, here are listed all post what a published.",
        },
    ],
    script: [
        {
            async: true,
            src: 'https://platform.twitter.com/widgets.js',
            charset: 'utf-8'
        }
    ]
})

</script>
<style lang="postcss">

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');

/* https://github.com/antfu/prism-theme-vars */
@import 'prism-theme-vars/base.css';

:root {
  --prism-font-family: 'Input Mono', monospace;
}

html:not(.dark) {
    --prism-font-size: .9rem;
    --prism-line-height: 1.3em;
    --prism-foreground: #393a34;
    --prism-background: #fbfbfb;
    --prism-comment: #b8c4b8;
    --prism-string: #c67b5d;
    --prism-literal: #3a9c9b;
    --prism-keyword: #248459;
    --prism-function: #849145;
    --prism-deleted: #a14f55;
    --prism-class: #2b91af;
    --prism-builtin: #a52727;
    --prism-property: #ad502b;
    --prism-namespace: #c96880;
    --prism-punctuation: #8e8f8b;
    --prism-decorator: #bd8f8f;
    --prism-json-property: #698c96;
}

main {
    @apply flex sm:flex-row flex-col justify-start h-5/6; font-family: 'Inter', sans-serif;
}
main > .menu-bar {
    @apply sticky left-0 top-0  px-4 py-2 bg-black bg-opacity-90 shadow-2xl text-white rounded-sm flex flex-row sm:flex-col justify-between
}
main > section {
    @apply w-full
}
main > section > .markdown-body {
    @apply max-w-screen-lg mx-auto px-10
}

main > section > .markdown-body > h1, h2, h3 {
    font-family: 'Lato', 'Inter', sans-serif;
}

main > section > .markdown-body > blockquote {
    @apply bg-gray-300 p-4 border-green-700 border-l-8 my-4 flex-shrink italic
}

main > section > .markdown-body > p {
    @apply mb-4
}

main > section > .markdown-body a {
    @apply border-gray-800 border-b hover:bg-gray-400 hover:bg-opacity-40
}

main > section > .markdown-body > pre {
    @apply my-6
}
main > section > .markdown-body > ul {
    @apply list-inside list-disc
}
main > section > .markdown-body > ol {
    @apply list-inside list-decimal
}
:is(h1, h1, h3, p) code {
    color: var(--prism-builtin);
    font-style: italic;
    @apply bg-gray-300 p-1 rounded-md font-medium
}
main > section > .markdown-body > h1 {
    @apply font-extrabold text-4xl mb-6 mt-2
}
main > section > .markdown-body > h2 {
    @apply font-extrabold text-2xl mb-5 mt-2
}
main > section > .markdown-body > h3 {
    @apply font-bold text-2xl mb-5 mt-2
}
</style>
