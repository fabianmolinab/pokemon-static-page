import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { MainLayout } from '../../components/layouts'
import { Pokemon } from '../../interfaces'

interface Props {
  pokemon: Pokemon
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const { name, id } = pokemon
  return (
    <MainLayout>
      <h1>
        {id}- {name}
      </h1>
    </MainLayout>
  )
}

// NOTE: getStaticPaths se usa cuando una pagina tiene rutas dinamicas, necesita definir una lista de rutas que se generan estaticamente  en getStaticProps.
// Solo se usa junto con getStaticProps, nunca con server side rendering u otra forma de reenderizado

export const getStaticPaths: GetStaticPaths = async () => {
  // Crea el Array {id} de 150 pokemons
  const pokemons150 = [...Array(150)].map((value, index) => `${index + 1}`)

  return {
    paths: pokemons150.map((id) => ({
      params: { id },
    })),
    // {fallback: false} si ingresa a otras rutas no definidas en {params} dara un 404
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  //Llamada a la API con el ID dinamico
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data: Pokemon = await res.json()

  return {
    props: {
      pokemon: data,
    },
  }
}

export default PokemonPage
