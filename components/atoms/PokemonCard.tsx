import { Card, Text, Row } from '@nextui-org/react'
import { useRouter } from 'next/router'

interface Props {
  id: number
  img: string
  name: string
}

export const PokemonCard: React.FC<Props> = ({ id, img, name }) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <Card isHoverable isPressable onClick={onClick}>
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
