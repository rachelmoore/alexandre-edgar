import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import {
  Button,
  Heading,
  Text,
  Flex
} from '@chakra-ui/react';
import Contact from "./contact";
import Loading from "./loading";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const acf = post.acf;
  const galleryInfo = post.acf.gallery_information;
  const author = state.source.author[post.author]
  const Html2React = libraries.html2react.Component

  if (data.isFetching) {
    return <Loading />
  }

  if (!data.isFetching && !galleryInfo) {
    return (
      <Flex direction="column" bg="brand.200">
        <Flex 
          direction="column"
          width="100%" 
          height="100%"
          minHeight="85vh"
          pl={{base: 5, lg: 20}}
          pr={{base: 5, lg: 20}}
          mt={5}
          mb={5}
        >
          <Heading size="2xl" mt={10} mb={10} pl="10px" color="blackAlpha.800">
            <Html2React html={post.title.rendered} />
          </Heading>
          {/* <p>
            <strong>Posted: </strong>
            {post.date}
          </p>
          <p>
            <strong>Author: </strong>
            {author.name}
          </p> */}
          <Text fontWeight={500} mb={8} fontSize="xl" color="blackAlpha.800" className="page-text">
            <Html2React html={post.content.rendered} />
          </Text>
        </Flex>
        <Flex direction="column" align="center" bg="black">
          <Contact />
        </Flex>
      </Flex>
    )
  }

  if (!data.isFetching && galleryInfo) {
    return (
          <Flex minHeight="85vh" pt={1} pb={1} bg="black" directon="column" alignItems="center" justifyContent="center">

            <Flex direction={{base: "column", sm: "row"}} >

              <Flex 
                height='85vh'
                width={{base: "100vw", sm: "50vw"}}   
                backgroundImage={galleryInfo[0].cover_image}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                // mr={{base: 0, sm: 1}}
                // mb={{base: 1, sm: 0}}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Link link={galleryInfo[0].link}>
                  <Button variant="brand.700" size="lg"> 
                      View {galleryInfo[0].name} Gallery
                  </Button>
                </Link>
              </Flex>

              <Flex 
                height='85vh'   
                width={{base: "100vw", sm: "50vw"}}   
                backgroundImage={galleryInfo[1].cover_image}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Link link={galleryInfo[1].link}>
                  <Button variant="brand.700" size="lg">
                      View {galleryInfo[1].name} Gallery
                  </Button>
                </Link>
              </Flex>
              
            </Flex>

          </Flex>
        )
        }
}

export default connect(Post)
