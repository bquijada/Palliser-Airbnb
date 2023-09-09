import { HStack, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {GiMountains} from 'react-icons/gi'

const NavBar = () => {
  return (
    <HStack>
        <Icon as={GiMountains} w={20} h={20}/>
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar