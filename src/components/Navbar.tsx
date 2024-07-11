import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/Gemini_Generated_Image.png'
import ColorModeSwitch from './ColorModeSwitch'

const Navbar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize={'100px'}/>
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar