import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Head } from 'next/document'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}