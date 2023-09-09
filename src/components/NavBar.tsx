import { HStack, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { GiMountains } from "react-icons/gi";
import ColorSwitch from "./ColorSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Icon as={GiMountains} w={20} h={20} />
      <ColorSwitch></ColorSwitch>
    </HStack>
  );
};

export default NavBar;
