import React from 'react'
import Head from 'next/head'

interface Props {
  children: React.ReactNode
  title: string
}

export const MainLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </div>
  )
}
