export const pokeApi = 'https://api.co/api/v2'

export const pokeLimit = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
  const { results } = await res.json()

  return results
}
