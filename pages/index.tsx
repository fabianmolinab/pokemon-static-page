import { GetStaticProps, NextPage } from 'next'
import { Container, Switch, useTheme } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode'

import { MainLayout } from '../components/layouts'
import { pokeLimit } from '../api'
import { SmallPokemon } from '../interfaces'

import { GridPokemon } from '../components/molecules'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  const darkMode = useDarkMode(false)

  const { isDark } = useTheme()

  return (
    <MainLayout title="Listado de Pokemons">
      <Container md>
        <Switch checked={isDark} onChange={() => darkMode.toggle()} />
      </Container>

      <GridPokemon pokemons={pokemons} />
    </MainLayout>
  )
}

/* NOTE:
 * GetStaticProps:
 *Solo ejecutar esta funcion cuando se conocen los datos que la pagina necesita y no cambian en tiempo real, solo que ejecuta del lado del servidor.
 *Cuando se crea la pagina ya viene con todos los datos precargados por lo tanto no necesita hacer peticiones, por que ya vienen del lado del servidor.
 */

export const getStaticProps: GetStaticProps = async () => {
  // Llamada HTTP
  const data = await pokeLimit()

  type PokeType = {
    name: string
    url: string
  }

  //Se agrega los otros campos de los pokemons
  const pokemons: SmallPokemon[] = data.map((poke: PokeType, i: number) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }))

  return {
    props: { pokemons },
  }
}

export default HomePage
