
import {
    Flex
  } from "@chakra-ui/react"
  import React from "react"
  import { styled } from "frontity"
  import awesite6 from '../assets/awesite6.png';
  
  function HeroFooter() {
      return (
        <HeaderFooter>
            <Flex height="75%" direction="column" alignItems="center" justifyContent="center">
            </Flex>
        </HeaderFooter>
      )
  }
  
  export default HeroFooter
  
  const HeaderFooter = styled.header`
    background-color: #e5edee;
    background: url(${awesite6});
    background-position: 25% 75%;
    background-size: 100%; 
    background-repeat: 'no-repeat';
    height: 500px;
    h1 {
        color: #FFC300;
    }
  `