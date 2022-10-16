
import {
    Flex,
    Box,
    Heading,
    Text
  } from "@chakra-ui/react"
  import React from "react"
  import { connect, styled, Head } from "frontity"
  import Link from "@frontity/components/link"
  import awesite2 from '../assets/awesite2.png';
  
  const Hero = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const page = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component
  
    if (data.isFetching) {
      return (
        <Text>Loading...</Text>
      )
    }
  
    if (!data.isFetching) {
      return (
        <Header isPostType={data.isPostType} isPage={data.isPage}>
            <Flex height="75%" direction="column" alignItems="center" justifyContent="center">
                {/* <Heading size="lg" color="white">Alexandre Edgar</Heading> */}
            </Flex>
        </Header>
      )
    }
  }
  
  export default connect(Hero)
  
  const Header = styled.header`
    background-color: #e5edee;
    background: url(${awesite2});
    /* background-position: 'center';  */
    background-size: 100%; 
    background-repeat: 'no-repeat';
    height: 700px;
    h1 {
        color: #FFC300;
    }
  `