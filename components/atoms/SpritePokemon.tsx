import { Card, Container, Image, Text } from '@nextui-org/react'

interface Props {
  name: string
  sprites: {
    front_default: string
    back_default: string
    front_shiny: string
    back_shiny: string
  }
}

export const SpritePokemon: React.FC<Props> = ({ name, sprites }) => {
  const { front_default, back_default, front_shiny, back_shiny } = sprites

  return (
    <Card.Body>
      <Text size={30}>Sprites:</Text>

      <Container direction="row" display="flex" gap={0}>
        <Image src={front_default} alt={name} width={100} height={100} />
        <Image src={back_default} alt={name} width={100} height={100} />
        <Image src={front_shiny} alt={name} width={100} height={100} />
        <Image src={back_shiny} alt={name} width={100} height={100} />
      </Container>
    </Card.Body>
  )
}
