<script setup lang="ts">
import { LocaleCodeList } from '~/types/locale'
import MultiSelect from '~/components/forms/MultiSelect.vue'
import SearchFilter from '~/components/SearchFilter.vue'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()
const appConfig = useAppConfig()

const emit = defineEmits<{
  (e: 'search',): void
}>()

// Collapse checkbox to handle overflow error
const searchFilterRef = ref<InstanceType<typeof SearchFilter> | null>(null)
const search = ref(route.query.search)
const locales = ref<string[]>(((route.query.locales || '') as string).split(',').filter((el) => !!el))
const categories = ref<string[]>(((route.query.categories || '') as string).split(',').filter((el) => !!el))
const tags = ref<string[]>(((route.query.tags || '') as string).split(',').filter((el) => !!el))

const categoryOptions = computed(() => {
  return appConfig.blogCategories.map(category => {
    return {
      label: t(`labels.blogCategories.${category}`),
      value: category,
    }
  }).sort((a, b) => a.label.localeCompare(b.label))
})

const tagOptions = computed(() => {
  let tags: string[] = []
  let key: keyof typeof appConfig.blogTags

  if (!categories.value.length) {
    for (key in appConfig.blogTags) {
      tags = [...tags, ...appConfig.blogTags[key]]
    }
  } else {
    for (key in appConfig.blogTags) {
      if (categories.value.includes(key as string))
        tags = [...tags, ...appConfig.blogTags[key]]
    }
  }

  return tags.map(tag => {
    return {
      label: t(`labels.blogTags.${tag}`),
      value: tag,
    }
  }).sort((a, b) => a.label.localeCompare(b.label))

})

const localeOptions = LocaleCodeList.map(lang => {
  return {
    label: t(`commons.labels.languages.${lang}`),
    value: lang,
  }
})

const handleUpdateCategories = () => {
  tags.value = tags.value.filter(tag => {
    let tagsInFilter: string[] = []
    let key: keyof typeof appConfig.blogTags
    for (key in appConfig.blogTags) {
      if (categories.value.includes(key as string))
        tagsInFilter = [...tagsInFilter, ...appConfig.blogTags[key]]
    }
    return tagsInFilter.includes(tag)
  })
}

const handleSubmit = async () => {
  await router.replace({
    query: {
      locales: locales.value.length === 0 || (locales.value.length === 1 && locales.value[0] === locale.value)
        ? undefined : locales.value.join(','),
      categories: categories.value.length === 0 ? undefined : categories.value.join(','),
      tags: tags.value.length === 0 ? undefined : tags.value.join(','),
      search: search.value || undefined,
    }
  })

  emit('search')
  console.log(searchFilterRef.value)
  searchFilterRef.value?.closeDialog()
}

const handleReset = () => {
  search.value = ''
  locales.value = [locale.value]
  categories.value = []
  tags.value = []
}
</script>

<template>
  <SearchFilter
    ref="searchFilterRef"
    :title="t('commons.labels.search')"
  >
    <form
      class="grow py-2 flex flex-col"
      @submit.prevent="handleSubmit"
      @reset="handleReset"
    >
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-2.5 lg:gap-4">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">{{ t('labels.blogFilter.locales') }}</span>
          </label>
          <MultiSelect
            v-model="locales"
            :options="localeOptions"
            :placeholder="t('labels.blogFilter.locales')"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">{{ t('labels.blogFilter.categories') }}</span>
          </label>
          <MultiSelect
            v-model="categories"
            :options="categoryOptions"
            :placeholder="t('labels.blogFilter.categories')"
            @update:model-value="handleUpdateCategories"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">{{ t('labels.blogFilter.tags') }}</span>
          </label>
          <MultiSelect
            v-model="tags"
            :options="tagOptions"
            :placeholder="t('labels.blogFilter.tags')"
            :no-data-placeholder="t('placeholders.noSelectedCategory')"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">{{ t('commons.labels.search') }}</span>
          </label>
          <input
            v-model="search"
            class="input input-bordered input-sm w-full"
            type="text"
            :placeholder="t('commons.placeholders.search')"
          >
        </div>
      </div>
      <div class="lg:mt-4 mt-auto flex space-x-4">
        <button
          class="btn lg:btn-sm btn-primary rounded-btn"
          type="submit"
        >
          {{ t('commons.btns.search') }}
        </button>
        <button
          class="btn lg:btn-sm btn-error btn-outline rounded-btn"
          type="reset"
        >
          {{ t('commons.btns.reset') }}
        </button>
      </div>
    </form>
  </SearchFilter>
</template>
