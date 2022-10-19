import React from "react"
import { connect } from "frontity"
import {
  Button,
  Heading,
  Text,
  Flex
} from '@chakra-ui/react';

const Post = ({ state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]

  return (
    <Flex 
      direction="column"
      width="100%" 
      height="100%"
      pl={{base: 5, lg: 20}}
      pr={{base: 5, lg: 20}}
      mt={5}
      mb={5}
    >
      <Heading size="2xl" mt={10} mb={10} pl="10px" color="blackAlpha.800">
        {post.title.rendered}
      </Heading>
      {/* <p>
        <strong>Posted: </strong>
        {post.date}
      </p>
      <p>
        <strong>Author: </strong>
        {author.name}
      </p> */}
      <Text fontWeight={500} mb={8} fontSize="xl" color="blackAlpha.800">
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </Text>
    </Flex>
  )
}

export default connect(Post)
