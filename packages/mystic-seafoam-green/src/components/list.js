import { Heading, Text, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import React, { useState, useEffect } from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
// import Loading from "./loading";

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;

//   if (data.isFetching) {
//     return <Loading />
//   }

if (!data.isFetching) {
    return (
      <Flex direction="column" width="100%">
        {data.items.map((item, idx) => {
          const post = state.source[item.type][item.id]
        return (
            <ItemContainer>
              <Link key={item.id} link={post.link} style={{textDecoration: "none"}}>
                  <Heading size="lg" pb={5} pt={5}>{post.title.rendered}</Heading>
                <br />
              </Link>
              <ItemContentContainer>
                {state.source.attachment[post.featured_media] &&
                <Image src={state.source.attachment[post.featured_media].source_url} />
                }
                <Html2React html={post.excerpt.rendered} />
                <Link key={item.id} link={post.link}>
                  Read More
                </Link>
              </ItemContentContainer>
            </ItemContainer>
          )}
        )}
      </Flex>
    )
  }
}

export default connect(List)

const ItemContainer = styled.div`
  background-color: #FFFFFF;
  color: #000000;
`

const ItemContentContainer = styled.div`
  background-color: #FFFFFF;
  color: #000000;
`