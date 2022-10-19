import React from "react"
import { connect } from "frontity"
import dayjs from "dayjs"
import {
  Heading,
  Text,
  Flex,
  HStack
} from '@chakra-ui/react';

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]
  const Html2React = libraries.html2react.Component

  const formattedDate = dayjs(post.date).format("MMMM DD, YYYY")

  return (
    <Flex 
      direction="column"
      width="100%" 
      height="100%"
      padding={{base: 5, lg: 20}}
      bg="brand.700"
    >
    <Heading size="2xl" mt={10} mb={5} color="brand.100">
      <Html2React html={post.title.rendered} />
    </Heading>
      <HStack mb={2}>
        <Text size="lg" fontWeight="600" color="blackAlpha.800">
          Posted: 
        </Text>
        <Text size="lg" color="blackAlpha.800">
          {formattedDate}
        </Text>
      </HStack>
      <HStack mb={5}>
        <Text size="lg" fontWeight="600" color="blackAlpha.800">
          Author:
        </Text>
        <Text size="lg" color="blackAlpha.800">
          {author.name}
        </Text>
      </HStack>
      <Flex direction="column">
        {state.source.attachment[post.featured_media] &&
          <Image src={state.source.attachment[post.featured_media].source_url} />
        }
        <Text fontWeight={500} mb={8} fontSize="lg" color="blackAlpha.800">
          <Html2React html={post.content.rendered} />
        </Text>
      </Flex>
    </Flex>
  )
}

export default connect(Post)
