import { NextPage } from 'next'
import { Container, Switch, useTheme } from '@nextui-org/react'
import { MainLayout } from '../components/layouts/MainLayout'
import useDarkMode from 'use-dark-mode'

const HomePage: NextPage = () => {
  const darkMode = useDarkMode(false)
  const { isDark } = useTheme()
  return (
    <MainLayout title="Listado de Pokemons">
      <Container md>
        <Switch checked={isDark} onChange={() => darkMode.toggle()} />
      </Container>
    </MainLayout>
  )
}

export default HomePage
