import React from "react"
import { 
  connect, 
  Global, 
  css, 
  Head, 
  styled, 
} from "frontity";
import {
  extendTheme,
  Flex,
  Heading,
  Box
} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Post from "./post"
import Page from "./page"
import Navigation from "./navigation"
import Footer from "./footer"
import Contact from "./contact"
import Carousel from "./carousel/carousel";
import PhotoGallery from "./photogallery/photogallery";
import Hero from "./hero"
import About from "./about"
import Bio from "./bio"
import Sessions from "./sessions"
import HeroFooter from "./herofooter"
import Loading from "./loading";

const Root = ({ state }) => {
    const data = state.source.get(state.router.link);
    const isBlog = state.router.link.startsWith("/blog");

    const theme = extendTheme({
      colors: {
        brand: {
          100: "RGBA(0, 0, 0, 0.80)",
          200: "RGBA(255, 255, 255, 0.06)",
          300: "#657C83",
          400: "#CEDDF4",
          500: "#CCC9C1",
          600: "#CFAD8E",
          700: "#FFFAF0",
          800: "#F8E8D4"
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
          .page-text p {
            margin-top: 1em;
          }
          .blogPost p img {
            margin-bottom: 1em;
          }
          .calendly-inline-widget  {
            height: 1000px !important;
          }
        `}
        />

        <Navigation />
        <Box width="100%" height="5px" />
        {state.router.link === "/" &&
          <>
  
            {/* <Carousel /> */}
            <PhotoGallery />

            {/* <Flex direction="row" align="center" bg="brand.700">
              <Sessions />
            </Flex> */}
            <Flex direction="column" align="center" bg="brand.100">
              <Contact />
            </Flex>
          </>
        }
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>

        {/* <HeroFooter />
        <Box width="100%" height="2px" bg="brand.700" /> */}
        <Footer />
      </ChakraProvider>
    )
  }
  
  export default connect(Root)
