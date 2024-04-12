import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"

interface GameCardProps {
  game: Game
}

const GameCard = ({game}: GameCardProps) => {
  return (
    <Card  borderRadius={15} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard