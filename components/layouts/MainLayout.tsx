import React from 'react'
import Head from 'next/head'
import { Navbar } from '../ui'

interface Props {
  children: React.ReactNode
  title?: string
}

export const MainLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={`Información del pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>
      <Navbar />
      <main style={{ padding: '0px 20px' }}>{children}</main>
    </div>
  )
}
