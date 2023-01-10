import { render } from '@testing-library/react'
import { SmallPokemon } from '../../interfaces'
import HomePage from '../../pages'

describe('test in HomePage', () => {
  test('render page', () => {
    const pokemons: SmallPokemon[] = [
      {
        name: 'Fabian',
        url: 'htpp',
        id: 1,
        img: 'img',
      },
    ]

    const { getByText } = render(<HomePage pokemons={pokemons} />)
  })
})
