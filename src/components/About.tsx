import { Grid, GridItem, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import NavBar from "./NavBar";
import img from "../assets/clem&bren.jpg";

const About = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="main">
        <h1 className="heading">
          About Us: Brenda & Clément
        </h1>
        <HStack>
          <Image
            boxSize="500px"
            objectFit="cover"
            src={img}
            border="5px solid gray"
            rounded="md"
          ></Image>
          <Text marginLeft={2} w="600px"
          fontWeight="medium" fontSize="xl">
            Clem and I initially came to Golden by accident 3 years ago and
            absolutely fell in love with the town and the ski resort. We loved
            it so much we decided to make it our permanent home. Clem is from
            France and I'm from California and we met on a ski season in Niseko,
            Japan in 2019. Situated on the ground floor of the Palliser, our
            cozy Airbnb awaits, offering direct access to the slopes right from
            your porch. Our B unit is a separate lock-off from our main condo,
            ensuring your privacy and comfort. Since acquiring this little piece
            of mountain paradise in May 2023, we've been thrilled to welcome
            guests from all corners of the globe and share the magic of Golden
            with them. Living up on the hill has been a dream come true for us,
            and we're excited to extend that same experience to you. Come and
            experience the beauty of Golden firsthand – we can't wait to host
            you!
          </Text>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default About;
