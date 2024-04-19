import { HStack, Icon, Image, Link, Text, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { GiMountains } from "react-icons/gi";
import ColorSwitch from "./ColorSwitch";
import {Link as ChakraLink, LinkProps} from '@chakra-ui/react'
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Icon as={GiMountains} w={20} h={20} />
      <ReactRouterLink to="/" className="bigger-link">Home</ReactRouterLink>
      <Menu>
        <MenuButton as={Link} className="bigger-link">
          Explore Activities
        </MenuButton>
        <MenuList>          
          <MenuItem onClick={() => navigate("/Summer")}>Summer</MenuItem>
          <MenuItem onClick={() => navigate("/Winter")}>Winter</MenuItem>
        </MenuList>
      </Menu>
      <ColorSwitch></ColorSwitch>
    </HStack>
  );
};

export default NavBar;
