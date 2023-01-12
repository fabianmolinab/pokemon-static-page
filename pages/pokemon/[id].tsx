import { Button, Card, Grid, Text } from '@nextui-org/react'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { SpritePokemon } from '../../components/atoms/SpritePokemon'
import { MainLayout } from '../../components/layouts'
import { Pokemon } from '../../interfaces'

interface Props {
  pokemon: Pokemon
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const { name, sprites } = pokemon
  return (
    <MainLayout>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={
                  sprites.other?.dream_world.front_default || '/no-image.png'
                }
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <Text h1 transform="capitalize">
                {name}
              </Text>
              <Button color="gradient" ghost>
                Guardar en favoritos
              </Button>
            </Card.Header>

            <SpritePokemon name={name} sprites={sprites} />
          </Card>
        </Grid>
      </Grid.Container>
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
