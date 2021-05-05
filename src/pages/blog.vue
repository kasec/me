<template>
    <main>
        <head-bar></head-bar>
        <router-view></router-view>
    </main>
</template>
<script setup>
import { useHead } from '@vueuse/head'

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
    --prism-font-size: .8rem;
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
    @apply w-full  h-5/6 overflow-auto text-sm sm:text-base;
}
main > .markdown-body {
    @apply max-w-screen-lg mx-auto
}
main > .markdown-body > :not(pre) {
    @apply px-8
}

main > .markdown-body > h1, h2, h3 {
    font-family: 'Lato', 'Inter', sans-serif;
}

main > .markdown-body blockquote {
    @apply bg-gray-300 p-4 border-green-700 border-l-8 my-4 flex-shrink italic
}

main > .markdown-body > p {
    @apply mb-4
}

main > .markdown-body a {
    @apply border-gray-800 border-b hover:bg-gray-400 hover:bg-opacity-40
}

main > .markdown-body > pre {
    @apply my-6 w-full
}
main > .markdown-body details {
    @apply px-0 sm:px-8
}
main > .markdown-body details > summary {
    @apply cursor-pointer my-1 py-1 outline-none
}
em {
    position: relative;
    z-index: 0;
    @apply font-medium;
    display: inline-block;
}
em::after {
    content: "";
    position: absolute;
    left: 0;
    top: 12px;
    width: 100%;
    height: 20%;
    z-index: -1;
    @apply bg-gray-400;
}

strong {
    position: relative;
    z-index: 0;
    display: inline-block;
}
strong::after {
    content: "";
    position: absolute;
    left: 0;
    top: 13px;
    width: 100%;
    height: 15%;
    z-index: -1;
    @apply bg-green-600;
}

main > .markdown-body details > div {
    @apply border-t-2 border-gray-600 rounded bg-gray-300 bg-opacity-50 py-4 px-2 sm:px-5 shadow
}

main > .markdown-body ul {
    @apply list-inside list-disc
}
main > .markdown-body ol {
    @apply list-inside list-decimal
}

main > .markdown-body li {
    @apply my-2
}

main > .markdown-body li > *:first-child {
    @apply inline-block
}

:is(h1, h2, h3, h4, p, li, summary) > code {
    color: var(--prism-keyword);
    @apply my-1 px-1 border border-gray-600 rounded-sm
}
pre > code {
    @apply bg-transparent
}
main > .markdown-body h1 {
    @apply font-semibold text-2xl sm:text-4xl mb-6 mt-8
}
main > .markdown-body h2 {
    @apply font-semibold text-lg sm:text-2xl mb-5 mt-5
}
main > .markdown-body h3 {
    @apply font-semibold  text-lg sm:text-2xl mb-5 mt-10
}
main > .markdown-body h4 {
    @apply font-medium  text-lg sm:text-xl mb-5 mt-10
}
</style>
