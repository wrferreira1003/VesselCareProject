import { Locale } from '@/config/i18n.config'
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionaries-server-only'

type ParamsProps = {
  params: { lang: Locale }
}
export default function Home({ params }: ParamsProps) {
  const dict = getDictionaryServerOnly(params.lang)

  return (
    <div>
      <h1>{dict.site.name}</h1>
      <p>{dict.site.description}</p>
    </div>
  )
}
