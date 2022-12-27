import { Card, Text, Row } from '@nextui-org/react'

interface Props {
  id: number
  img: string
  name: string
}

export const PokemonCard: React.FC<Props> = ({ id, img, name }) => {
  return (
    <Card isHoverable isPressable>
      <Card.Body css={{ p: 1 }}>
        <Card.Image src={img} width="100%" height={140} />
      </Card.Body>
      <Card.Footer>
        <Row justify="space-between">
          <Text transform="capitalize">{name}</Text>
          <Text>{id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  )
}
