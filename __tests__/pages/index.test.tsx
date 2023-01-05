import { render } from '@testing-library/react'
import { SmallPokemon } from '../../interfaces'
import HomePage from '../../pages'

test('render page', () => {
  const pokemon: SmallPokemon[] = [
    {
      name: 'Fabian',
      url: 'htpp',
      id: 1,
      img: 'img',
    },
  ]

  const view = render(<HomePage pokemons={pokemon} />)
  console.log(view)
})
