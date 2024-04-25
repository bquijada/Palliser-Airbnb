import { HStack, Icon, Link, VStack, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { GiMountains } from "react-icons/gi";
import ColorSwitch from "./ColorSwitch";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { FaBed } from "react-icons/fa6";
const airbnb_link = "https://www.airbnb.com/rooms/885439177493281528"

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Icon as={GiMountains} w={20} h={20} />
      <ReactRouterLink to="/" className="bigger-link">Home</ReactRouterLink>
      <ReactRouterLink to="/About" className="bigger-link">About Us</ReactRouterLink>
      <Menu>
        <MenuButton as={Link} className="bigger-link">
          Explore Activities
        </MenuButton>
        <MenuList>          
          <MenuItem onClick={() => navigate("/Summer")}>Summer</MenuItem>
          <MenuItem onClick={() => navigate("/Winter")}>Winter</MenuItem>
        </MenuList>
      </Menu>
      <VStack><Link href={airbnb_link} target="_blank" rel="noopener noreferrer">
      <Button colorScheme='teal' size='sm'>
      <Icon as={FaBed} w={5} h={5} marginRight={2}/>Book Your Stay</Button></Link>
      <ColorSwitch></ColorSwitch></VStack>
    </HStack>
  );
};

export default NavBar;
