import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import { LocaleCodeList, DefaultLocale, LocaleCodes } from '~/types/locale'
import dayjs from 'dayjs'

/** Path list which will be added in sitemap*/
const paths: string[] = [
  '/',
  '/blogs',
  '/showcases',
  '/contact',
  '/contact/requests'
]

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  // Fetch all documents
  const sitemap = new SitemapStream({
    hostname: runtimeConfig.NUXT_PUBLIC_BASE_URL,
  })
  LocaleCodeList.map((localeCodeEl: LocaleCodes | '') => {
    // There is no locale code for defaultLocale
    if (localeCodeEl === DefaultLocale) {
      localeCodeEl = ''
    }
    // Write sitemap
    paths.map(pathEl => {
      sitemap.write({
        url: `${localeCodeEl}${pathEl}`,
        // changefreq: 'daily'
      }, error => {
        if (error) {
          console.error(error)
          throw new Error(error?.message)
        }
      })
    })
  })
  // Add documents about blog and showcase
  const docs = await serverQueryContent(event).find()
  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      // changefreq: 'daily'
    }, error => {
      if (error) {
        console.error(error)
        throw new Error(error?.message)
      }
    })
  }

  sitemap.end()
  return streamToPromise(sitemap)
})
