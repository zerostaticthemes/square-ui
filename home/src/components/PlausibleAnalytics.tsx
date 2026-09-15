import { headers } from 'next/headers'

const PLAUSIBLE_HOSTS = new Set(['square.lndevui.com'])
const PLAUSIBLE_SRC = 'https://plausible.io/js/pa-cYm3KI-hE31MOttip3r_q.js'

export async function PlausibleAnalytics() {
  const headerStore = await headers()
  const host = (headerStore.get('x-forwarded-host') ?? headerStore.get('host') ?? '')
    .split(',')[0]
    .trim()
    .split(':')[0]

  if (!PLAUSIBLE_HOSTS.has(host)) {
    return null
  }

  return (
    <>
      {/* Privacy-friendly analytics by Plausible */}
      <script async src={PLAUSIBLE_SRC} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
  plausible.init()`,
        }}
      />
    </>
  )
}
