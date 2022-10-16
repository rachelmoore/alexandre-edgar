import React from "react"
import { connect, Global, css } from "frontity"
import {
  extendTheme,
  Flex,
  Heading
} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"
import Page from "./page"

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)

    const theme = extendTheme({
      colors: {
        brand: {
          100: "#3AAEC2",
          200: "#FD05E9",
          300: "#6A3A80",
          400: "#EE0300"
        },
      },
    });
  
    return (
      <ChakraProvider theme={theme}>
        <Global
            styles={css`
            html {
                font-family: system-ui, Verdana, Arial, sans-serif;
            }
            `}
        />
        <Flex direction="row">
          <Heading>Hello Alexandre</Heading>
          <p>Current URL: {state.router.link}</p>
        </Flex>
        <nav>
          <Link link="/">Home</Link>
          <br />
          <Link link="/page/2">More posts</Link>
          <br />
          <Link link="/about-us">About Us</Link>
        </nav>
        <hr />
        <main>
          <Switch>
            <List when={data.isArchive} />
            <Post when={data.isPost} />
            <Page when={data.isPage} />
          </Switch>
        </main>
      </ChakraProvider>
    )
  }
  
  export default connect(Root)
