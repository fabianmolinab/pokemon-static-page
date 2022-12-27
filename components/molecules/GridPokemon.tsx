import { Grid } from '@nextui-org/react'
import { SmallPokemon } from '../../interfaces'
import { PokemonCard } from '../atoms'

interface Props {
  pokemons: SmallPokemon[]
}

export const GridPokemon: React.FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map(({ id, name, img }) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
          <PokemonCard id={id} name={name} img={img} />
        </Grid>
      ))}
      <li>Pokemons</li>
    </Grid.Container>
  )
}
