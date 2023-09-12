import { HStack, Icon, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { GiMountains } from "react-icons/gi";
import ColorSwitch from "./ColorSwitch";
import {Link as ChakraLink, LinkProps} from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Icon as={GiMountains} w={20} h={20} />
      <ReactRouterLink to="/" className="bigger-link">Home</ReactRouterLink>
      <ReactRouterLink to="/Explore" className="bigger-link">Explore Activities</ReactRouterLink>
      <ColorSwitch></ColorSwitch>
    </HStack>
  );
};

export default NavBar;
