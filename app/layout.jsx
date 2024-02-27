import './src/container/css/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NutriVida',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <link rel="icon" type="image/svg+xml" href="./logo.png" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
