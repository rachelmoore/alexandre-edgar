import React from "react"
import { connect } from "frontity"
import dayjs from "dayjs"
import {
  Heading,
  Text,
  Flex
} from '@chakra-ui/react';

const Post = ({ state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]

  const formattedDate = dayjs(post.date).format("DD MMMM YYYY")

  return (
    <Flex 
      direction="column"
      width="100%" 
      height="100%"
      padding={{base: 5, lg: 20}}
    >
    <Heading size="2xl" mt={10} mb={10} color="blackAlpha.800">
      {post.title.rendered}
    </Heading>
      <Heading size="lg" mt={10} mb={10} color="blackAlpha.800">
        Posted: {formattedDate}
      </Heading>
      <Heading size="lg" mt={10} mb={10} color="blackAlpha.800">
        Author: {author.name}
      </Heading>
      <Text fontWeight={500} mb={8} fontSize="lg" color="blackAlpha.800">
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </Text>
    </Flex>
  )
}

export default connect(Post)
