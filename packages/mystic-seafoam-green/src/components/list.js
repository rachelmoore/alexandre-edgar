import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import {
  Heading,
  Flex,
  Text
} from '@chakra-ui/react';

const List = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const Html2React = libraries.html2react.Component;

  return (
    <Flex direction="column" align="center" bg="brand.700" padding={{base: 5, lg: 20}}>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        return (
          <Flex direction="column">
            <Link key={item.id} link={post.link}>
              <Heading size="2xl" mt={10} mb={5} color="brand.100">
                {post.title.rendered}
              </Heading>
            </Link>
            <Flex direction="column">
              {state.source.attachment[post.featured_media] &&
                <Image src={state.source.attachment[post.featured_media].source_url} />
              }
              <Text fontWeight={500} mb={8} fontSize="lg" color="blackAlpha.800">
                <Html2React html={post.excerpt.rendered} />
              </Text>
              <Link key={item.id} link={post.link}>
                Read More
              </Link>
          </Flex>
        </Flex>
        )
      })}
      <Flex direction="row">
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous)
            }}
          >
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next)
            }}
          >
            Next &#187;
          </button>
        )}
      </Flex>
    </Flex>
  )
}

export default connect(List)
