import { Grid, GridItem, Show } from '@chakra-ui/react';
import React from 'react'
import NavBar from './NavBar';
import { Carousel } from './Carousel';
import img1 from '../assets/Palliser_Lobby.webp'
import img2 from '../assets/palliser-winter.jpeg'
import img3 from '../assets/hi.png'
import img4 from '../assets/cropped_ww.png'
import img5 from '../assets/entrance.jpeg'

const slides = [
  {
      "src": img1,
      "alt": "Image 1 for carousel",
      "id": 0
  },
  {
      "src": img2,
      "alt": "Image 2 for carousel",
      "id": 1
  },
  {"src": img3,
  "alt": "Image 3 for carousel",
  "id": 2
},
{"src": img4,
"alt": "Image 4 for carousel",
"id": 3
}
]

const Home = () => {
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
            <h1 className='heading'>Welcome To Our Kicking Horse Bnb</h1>
            <Carousel data={slides}></Carousel>
          </GridItem>
        </Grid>
      );
}

export default Home