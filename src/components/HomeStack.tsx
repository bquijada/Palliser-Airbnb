import { HStack, VStack, Text } from "@chakra-ui/react";
import { Carousel } from "./Carousel";
import img1 from "../assets/Palliser_Lobby.webp";
import img2 from "../assets/palliser-winter.jpeg";
import img3 from "../assets/hi.png";
import img4 from "../assets/cropped_ww.png";
import img5 from "../assets/entrance.jpeg";

const slides = [
    {
      src: img1,
      alt: "Image 1 for carousel",
      id: 0,
    },
    {
      src: img2,
      alt: "Image 2 for carousel",
      id: 1,
    },
    { src: img3, alt: "Image 3 for carousel", id: 2 },
    { src: img4, alt: "Image 4 for carousel", id: 3 },
  ];

interface HomeStackProps {
    isMobile: boolean | undefined;
  }
    
const HomeStack = ({isMobile} : HomeStackProps) => {
    const StackComponent = isMobile ? VStack : HStack;
    return (
      <StackComponent spacing={4}>
        <Carousel data={slides} />
        <Text w="400px" fontWeight="medium" fontSize="xl">
          Welcome to our Airbnb website! Use the links above to learn about us or explore the
          different activities around Golden.
        </Text>
      </StackComponent>
    );
  };

export default HomeStack