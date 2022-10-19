import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import {
  Heading,
  Flex
} from '@chakra-ui/react';

const List = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <Flex direction="column" padding={{base: 5, lg: 20}}>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        return (
          <Link key={item.id} link={post.link}>
            <Heading size="2xl" mt={10} mb={10} color="blackAlpha.800">
              {post.title.rendered}
            </Heading>
          </Link>
        )
      })}
    </Flex>
  )
}

export default connect(List)
