<template>
    <details>
        <summary>{{ props.title }}</summary>
        {{
            props.content
        }}
    </details>
</template>
<script setup>
import { defineProps } from "vue";

const props = defineProps({
    title: String,
    content: String
})
</script>