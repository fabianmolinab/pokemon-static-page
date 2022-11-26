import { Spacer, Text } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { Logo } from '../atoms'

export const Navbar: React.FC = () => {
  return (
    <div
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
    </div>
  )
}
