import Script from 'next/script'

const PLAUSIBLE_HOST = 'square.lndevui.com'
const PLAUSIBLE_SRC = 'https://plausible.io/js/pa-cYm3KI-hE31MOttip3r_q.js'

export function PlausibleAnalytics() {
  return (
    <Script id="plausible-analytics" strategy="afterInteractive">
      {`
        if (location.hostname !== ${JSON.stringify(PLAUSIBLE_HOST)}) return;
        window.plausible = window.plausible || function () { (plausible.q = plausible.q || []).push(arguments) };
        plausible.init = plausible.init || function (i) { plausible.o = i || {} };
        var s = document.createElement('script');
        s.async = true;
        s.src = ${JSON.stringify(PLAUSIBLE_SRC)};
        s.onload = function () { plausible.init(); };
        document.head.appendChild(s);
      `}
    </Script>
  )
}
