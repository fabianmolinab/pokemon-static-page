import { render } from '@testing-library/react'
import { GridPokemon } from '../../../components/molecules'
import { SmallPokemon } from '../../../interfaces'

describe('Test for <GridPokemon/>', () => {
  test('render component', () => {
    const pokemons: SmallPokemon[] = [
      {
        name: 'Fabian',
        url: 'htpp',
        id: 1,
        img: 'img',
      },
    ]

    const view = render(<GridPokemon pokemons={pokemons} />)
    console.log(view)
  })
})
