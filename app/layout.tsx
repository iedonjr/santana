import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Santana e Silva Advogados - Direito Previdenciário",
  description:
    "Escritório especializado em Direito Previdenciário. Aposentadorias, Auxílio Doença, Pensão por Morte, LOAS e mais. Consulta gratuita.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5FD5SRP2');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Event snippet for Lead-Whats conversion page */}
        <script
          dangerouslySetInnerHTML={{
            __html: `gtag('event', 'conversion', {
            'send_to': 'AW-17355075473/xtWnCMSbi_IaEJHfxdNA',
            'value': 1.0,
            'currency': 'BRL'
          });`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5FD5SRP2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
