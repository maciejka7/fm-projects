<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { } 
import type { ProjectsLink, SkillLevel } from './types';
import MobileProjectsNav from './mobile-projects-nav.vue';

const { query } = defineProps()


const isOpen = ref(false)
// const isNavVisible = computed(() => (!('nav' in query && query.nav === 'false')))


</script>

<template>
  <nav v-show="isNavVisible"
    class="text-rosePine-text bg-rosePine-surface p-4 relative flex flex-row justify-between z-10">

    <a href="/">
      <Icon name="material-symbols-light:home-outline-rounded" size="2em" />
    </a>

    <div class="visible lg:hidden">

      <Icon name="material-symbols-light:menu" size="2em" class="visible lg:hidden" @click="isOpen = !isOpen"
        v-if="!isOpen" />
      <Icon name="material-symbols-light:close" size="2em" class="visible lg:hidden" @click="isOpen = !isOpen" v-else />
    </div>

    <MobileProjectsNav @changeOpen="isOpen = false" :isOpen="isOpen" />
  </nav>
  <ul>

  </ul>
</template>
