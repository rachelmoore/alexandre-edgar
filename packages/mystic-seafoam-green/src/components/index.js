import React from "react"
import { connect, Global, css, styled, Head } from "frontity";
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
          <Head>
            <title>Alexandre Edgar</title>
            <meta
              name="description"
              content="You Are That"
            />
        </Head>
        <Global
          styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: "system-ui, Verdana, Arial, sans-serif";
          }
          li {
            line-height: 1.85em;
          }
          iframe {
            width: 100% !important;
          }
          figure {
            margin-top: 10px;
            margin-bottom: 10px;
            @media (max-width: 600px) {
              max-width: 90vw;
              margin-top: 40px;
              margin-bottom: 40px;
            }
          }
          li {
            margin-bottom: 10px;
            line-height: 1.55em;
            font-size: 17px;
          }
        `}
        />

        {state.router.link === "/" &&
          <Flex direction="column">
            <Heading>Hello Alexandre</Heading>
            <p>Current URL: {state.router.link}</p>
          </Flex>
        }

        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>
      </ChakraProvider>
    )
  }
  
  export default connect(Root)
