import { Inter } from 'next/font/google'

import '@/styles/global.css'
import FooterComponent from "@/components/footer"
import HeaderComponent from "@/components/header"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'P A O . I O',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-quicksand overflow-visible bg-rocky">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body>
        <header>
          <HeaderComponent />
        </header>
        {children}
        <footer>
          <FooterComponent />
        </footer>
      </body>
    </html>
  )
}