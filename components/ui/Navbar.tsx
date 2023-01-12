import React from 'react'
import Image from 'next/image'

import { Container, Text, Switch, Spacer, useTheme } from '@nextui-org/react'
import { Logo } from '../atoms'

import useDarkMode from 'use-dark-mode'

export const Navbar: React.FC = () => {
  const darkMode = useDarkMode(false)

  const { isDark } = useTheme()

  return (
    <Container
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Icon App"
        width={70}
        height={70}
      />
      <Logo />

      <Spacer css={{ flex: 1 }} />
      <Text>Favoritos</Text>
      <Spacer css={{ flex: 1 }} />

      <Switch checked={isDark} onChange={() => darkMode.toggle()} />
    </Container>
  )
}
