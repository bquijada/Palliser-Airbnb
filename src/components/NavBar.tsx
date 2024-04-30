import {
  HStack,
  Icon,
  Link,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { GiMountains } from "react-icons/gi";
import { FiSun, FiCloudSnow } from "react-icons/fi";
import ColorSwitch from "./ColorSwitch";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import { FaBed } from "react-icons/fa6";
import { useEffect, useState } from "react";

const airbnb_link = "https://www.airbnb.com/rooms/885439177493281528";
interface NavBarProps {
  resetSelectedTag?: () => void;
}
const NavBar = ({ resetSelectedTag }: NavBarProps) => {
  const navigate = useNavigate();
  const handleExploreClick = (season: string) => {
    if (resetSelectedTag) {
      resetSelectedTag();
    }
  };
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link href="/">
        <Icon as={GiMountains} w={20} h={20} />
      </Link>
      <ReactRouterLink to="/About" className="bigger-link">
        About Us
      </ReactRouterLink>
      <Menu>
        <HStack>
          <MenuButton as={Link} className="bigger-link">
            Explore Activities{" "}
          </MenuButton>          
          {window.location.pathname.includes("summer") ? <FiSun /> : null}
          {window.location.pathname.includes("winter") ? <FiCloudSnow /> : null}
        </HStack>
        <MenuList>
          <MenuItem
            onClick={() => {
              navigate("/Explore/summer");
              handleExploreClick("summer");
            }}
          >
            Summer
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/Explore/winter");
              handleExploreClick("winter");
            }}
          >
            Winter
          </MenuItem>
        </MenuList>
      </Menu>
      <VStack>
        <Link href={airbnb_link} target="_blank" rel="noopener noreferrer">
          <Button colorScheme="teal" size="sm">
            <Icon as={FaBed} w={5} h={5} marginRight={2} />
            Book Your Stay
          </Button>
        </Link>
        <ColorSwitch></ColorSwitch>
      </VStack>
    </HStack>
  );
};

export default NavBar;
