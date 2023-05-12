import { Image, Flex, Heading } from "@chakra-ui/react";
import React from "react"

const Loading = () => {
    return (
        <Flex 
        direction="column"
        width="100%" 
        height="100%"
        padding={{base: 5, lg: 20}}
        bg="brand.200"
        justifyContent="center"
        alignItems="center"
      >
        <Heading size="xl">Loading...</Heading>
    </Flex>
    )
}

export default Loading