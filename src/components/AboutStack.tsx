import React from 'react'
import { HStack, VStack, Text, Image } from "@chakra-ui/react";
import img from "../assets/clem&bren.jpg";

interface AboutStackProps {
    isMobile: boolean | undefined
}

const AboutStack: React.FC<AboutStackProps> = ({ isMobile = false }) => {
    const StackComponent = isMobile ? VStack : HStack;
    return (
      <StackComponent spacing={4}>
          <Image
            boxSize="500px"
            objectFit="cover"
            src={img}
            border="5px solid gray"
            rounded="md"
          ></Image>
          <Text
            textAlign="left"
            marginLeft={3}
            w="500px"
            fontWeight="medium"
            fontSize="xl"
          >
            Clem and I first discovered Golden by accident 3 years ago and
            absolutely fell in love with the town and Kicking Horse Mountain Resort. We loved it
            here so much we decided to make it our permanent home. Clem is from
            France and I'm from California and we met on a ski season in Niseko,
            Japan in 2019. Since acquiring our little piece of mountain
            paradise in May 2023, we've been thrilled to welcome guests from all
            corners of the globe and share the magic of Golden with them.
            Situated on the ground floor of the Palliser, you can ski from the
            slopes right to your porch! Our B unit is a separate lock-off from
            our main condo, ensuring your privacy and comfort. Living up on the
            hill has been a dream come true for us, and we're excited to extend
            that same experience to you. Come and experience the beauty of
            Golden firsthand – we can't wait to host you!
          </Text>
      </StackComponent>
    );
  };

export default AboutStack