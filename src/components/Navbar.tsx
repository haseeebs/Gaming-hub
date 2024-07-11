import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/Gemini_Generated_Image.png'

const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize={'100px'}/>
        <Text>Gaming console</Text>
    </HStack>
  )
}

export default Navbar