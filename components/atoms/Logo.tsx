import React from 'react'
import Image from 'next/image'
import NextLink from 'next/link'
import { Link, Text } from '@nextui-org/react'

export const Logo: React.FC = () => {
  return (
    <NextLink href="/" passHref={true}>
      <Link>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="Icon App"
          width={70}
          height={70}
        />

        <Text h2>P</Text>
        <Text h3>okémon</Text>
      </Link>
    </NextLink>
  )
}
