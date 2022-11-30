import { GetStaticProps, NextPage } from 'next'
import { Container, Switch, useTheme } from '@nextui-org/react'
import useDarkMode from 'use-dark-mode'
import { MainLayout } from '../components/layouts'
import { pokeApi } from '../api'
import { PokemonListResponse } from '../interfaces/'

const HomePage: NextPage = (props) => {
  const darkMode = useDarkMode(false)
  const { isDark } = useTheme()
  console.log(props)
  return (
    <MainLayout title="Listado de Pokemons">
      <Container md>
        <Switch checked={isDark} onChange={() => darkMode.toggle()} />
      </Container>
      <ul>
        <li>Pokemons</li>
        <li>Pokemons</li>
        <li>Pokemons</li>
        <li>Pokemons</li>
      </ul>
    </MainLayout>
  )
}

/* NOTE:
 * GetStaticProps:
 *Solo ejecutar esta funcion cuando se conocen los datos que la pagina necesita y no cambian en tiempo real, solo que ejecuta del lado del servidor.
 *Cuando se crea la pagina ya viene con todos los datos precargados por lo tanto no necesita hacer peticiones, por que ya vienen del lado del servidor.
 */

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  console.log(ctx)
  return {
    props: {
      pokemons: data,
    },
  }
}

export default HomePage
