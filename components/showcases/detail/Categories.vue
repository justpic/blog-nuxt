<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Props {
  categories: string[]
}

defineProps<Props>()

const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()
</script>
<template>
  <div class="mt-4 flex items-center space-x-2">
    <Icon icon="material-symbols:folder-open-outline" />
    <NuxtLink
      v-for="category in categories"
      :key="category"
      class="badge badge-outline hover:text-primary"
      :to="{
        path: localePath('showcases'),
        query: {
          locales: route.query.locales,
          categories: category,
        }
      }"
    >
      {{ t(`labels.showcaseCategories.${category}`) }}
    </NuxtLink>
  </div>
</template>
