import "./normalize.css"
import "./global.css"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Footer from "./components/footer"
import { baseUrl } from "./sitemap"
import { Blurry } from "./components/Blurry"

import { Karla } from "next/font/google"
import { StyledComponentsRegistry } from "./registry"

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "auto",
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Next.js Portfolio Starter",
    template: "%s | Next.js Portfolio Starter",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "My Portfolio",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "My Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={karla.className}>
      <body>
        <Blurry shown color="ukraine" />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        {/* <header>{header}</header>
        <main>{children}</main> */}
        {/* <Navbar /> */}
        {/* <Footer /> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
