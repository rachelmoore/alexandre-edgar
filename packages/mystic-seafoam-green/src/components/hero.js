
import {
    Flex
  } from "@chakra-ui/react"
  import React from "react"
  import { styled } from "frontity"
  import awesite2 from '../assets/awesite2.png';
  
  function Hero() {
      return (
        <Header>
            <Flex height="75%" direction="column" alignItems="center" justifyContent="center">
            </Flex>
        </Header>
      )
  }
  
  export default Hero;
  
  const Header = styled.header`
    background-color: #e5edee;
    background: url(${awesite2});
    /* background-position: 'center';  */
    background-size: 100%; 
    background-repeat: 'no-repeat';
    height: 700px;
    @media (max-width: 768px) {
      height: 400px;
    }
    h1 {
        color: #FFC300;
    }
  `