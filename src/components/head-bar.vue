
<template>
  <div v-if="show" class="mx-auto bg-yellow-300 bg-opacity-80 p-3 min-w-full">
      <router-link class=" border-b border-black hover:bg-yellow-900 hover:text-white p-1" :to="`/${category}`">Go back to {{ category.toUpperCase() }} </router-link>
      <div class="mt-3 border border-black">
        <div class=" border-gray-500 border-l-8 pl-2">
          <p class=" text-sm">
            {{ metadata.title }}
          </p>
          <p class="text-xs">
            {{ metadata.description }}
          </p>
          <p class="text-xs">
            {{ metadata.date }}
          </p>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, onMounted } from "vue";
import { useRoute } from "vue-router";

interface IPostMetadata {
  title: string,
  description: string,
  date: string
}

import postManifest from './../content.json'

const route = useRoute();

const name = route.path.replace(/.*\//, '')

console.log({ name });

const [ category ] = (route.path.match(/.+?\//g) || []).map(tag => tag.replace(/^\//, "").replace(/\/$/, ""))

const metadata: IPostMetadata = postManifest?.[category]?.[name] || {}

const show = ref<boolean>(false);

const tryToUnhideHeadBar = () => {
  console.log({ path: route.path });

  if (route.path.endsWith("/blog")) show.value = false;
  else show.value = true;
};

watch(route, tryToUnhideHeadBar);

onMounted(tryToUnhideHeadBar);
</script>

<style scoped>
.counter {
  border: 2px dashed #3eaf7c;
  padding: 5px 10px 10px 10px;
}
</style>