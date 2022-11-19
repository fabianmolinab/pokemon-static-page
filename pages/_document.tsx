import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode'
import { darkTheme, lightTheme } from '../themes/themeDefault'

export default function App({ Component, pageProps }: AppProps) {
  const darkMode = useDarkMode(false)
  return (
    <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
