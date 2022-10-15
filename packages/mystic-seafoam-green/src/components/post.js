import {
    Heading,
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Button
  } from "@chakra-ui/react";
  import React, { useState } from "react"
  import { connect, styled, Head } from "frontity"
  import Link from "@frontity/components/link"
  import dayjs from "dayjs"
  
  const Post = ({ actions, state, libraries }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author]
    const formattedDate = dayjs(post.date).format("DD MMMM YYYY")
  
    // if (data.isFetching) {
    //   return <Loading />
    // }
  
    if (!data.isFetching) {
      return (
      <Flex direction="column" align="center" mb={10}>
        <Head>
          <title>{post.title.rendered}</title>
          <meta name="description" content={post.excerpt.rendered} />
        </Head>
          <PostContainer>
            <Link link={post.link} style={{textDecoration: "none"}}>
              <PostTitle>
                <Heading size="lg" pb={5} pt={5}>
                  <Html2React html={post.title.rendered} />
                </Heading>
              </PostTitle>
              <br />
            </Link>
            <PostContent>
                <Stat>
                  <StatLabel>Author: {author.name}</StatLabel>
                  <StatHelpText>Posted: {formattedDate}</StatHelpText>
                </Stat>
                <Html2React html={post.content.rendered} />
            </PostContent>
          </PostContainer>
      </Flex>
    )
  }
  }
  
  export default connect(Post);
  
  const PostContainer = styled.div`
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 100px 100px 50px 50px;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 100px 100px 50px 50px;
    h2 {
      font-size: 36px;
      margin: 0px;
    }
    @media (max-width: 800px) {
      width: 780px;
    }
    @media (max-width: 600px) {
      width: 350px;
    }
  `
  
  const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 100px 100px 50px 50px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    h2 {
      font-size: 36px;
      margin: 0.5em 0;
    }
  `
  
  const PostTitle = styled.div`
      /* -webkit-animation: colorchange 20s infinite alternate;
      -moz-animation: colorchange 20s infinite alternate;
      animation: colorchange 20s infinite alternate;
      text-align: center;
  
      border-radius: 100px 100px 0px 0px;
      background-color: #000000;
  
      @keyframes colorchange {
      0% {
        color: #3AAEC2;
      }
      
      10% {
        color: #FD05E9;
      }
      
      25% {
        color: yellow;
      }
      
      50% {
        color: #EE0300;
      }
      
      
      75% {
        color: yellow;
      }
  
      100% {
        color: #FD05E9;
      }
  } */
  `