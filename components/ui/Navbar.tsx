import React from 'react'
import NextLink from 'next/link'
import { Container, Link, Switch, Spacer, useTheme } from '@nextui-org/react'
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
      <Logo />

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref={true}>
        <Link
          block
          color="secondary"
          css={{ fontSize: '1.25rem', fontWeight: 'bold' }}
        >
          Favorites
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />

      <Switch checked={isDark} onChange={() => darkMode.toggle()} />
    </Container>
  )
}
