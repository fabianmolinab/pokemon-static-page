import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { useRouter } from 'next/router'
import { pokeLimit } from '../../api'

import { MainLayout } from '../../components/layouts'

interface Props {
  id: string
  name: string
}
const PokemonPage: NextPage<Props> = ({ id, name }) => {
  const router = useRouter()
  console.log(router.query)

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
  const res = await pokeLimit()
  console.log(res)

  type PokeType = {
    name?: string
    id: string
  }

  const paths = res.map((data: PokeType) => ({
    params: { id: data.id },
  }))

  return {
    paths,

    // {fallback: false} si ingresa a otras rutas no definidas dara un 404
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { id: 1, name: 'Bulbasaur' },
  }
}
export default PokemonPage
