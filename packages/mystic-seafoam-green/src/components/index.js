import React from "react"
import { 
  connect, 
  Global, 
  css, 
  Head
} from "frontity";
import {
  extendTheme,
  Flex,
  Button
} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import Switch from "@frontity/components/switch"
import Link from "@frontity/components/link";
import List from "./list"
import Post from "./post"
import Page from "./page"
import Navigation from "./navigation";
import Footer from "./footer";
import Loading from "./loading";
import Sessions from "./sessions";
import Gallery from "./carousel/gallery";
import rachelmain800 from "../assets/carousel/rachelmain800.jpg";
import windowflowers800 from "../assets/carousel/windowflowers800.jpg";

const Root = ({ state }) => {
    const data = state.source.get(state.router.link);
    const isBlog = state.router.link.startsWith("/blog");

    const theme = extendTheme({
      colors: {
        brand: {
          // 100: "RGBA(0, 0, 0, 0.80)",
          100: "#234762",
          200: "RGBA(255, 255, 255, 0.06)",
          300: "#657C83",
          400: "#CEDDF4",
          500: "#CCC9C1",
          600: "#CFAD8E",
          700: "#FFFAF0",
          800: "#F8E8D4"
        },
      },
      fonts: {
        heading: "Lora",
        body: "Montserrat"
      },
      components: {
        Button: {
          variants: {
            'brand.700': {
              bg: 'brand.700',
              border: '3px solid rgba(0, 0, 0, 0.80)',
              _hover: {
                bg: "brand.300",
                color: "brand.700",
                border: '3px solid brand.700',
              },
            },
          },
          // 6. We can overwrite defaultProps
          // defaultProps: {
          //   size: 'lg', // default is md
          //   variant: 'sm', // default is solid
          //   colorScheme: 'green', // default is gray
          // },
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
            font-family: "Montserrat";
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

        {state.router.link === "/" &&
          <Flex minHeight="85vh" pt={1} pb={1} bg="black" directon="column" alignItems="center" justifyContent="center">

            <Flex direction={{base: "column", sm: "row"}} >

              <Flex 
                height='85vh'
                width={{base: "100vw", sm: "50vw", lg: "800px"}}   
                backgroundImage={rachelmain800}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                mr={{base: 0, sm: 1}}
                mb={{base: 1, sm: 0}}
                direction="column"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Link link="https://alexandreedgar.com/booking/portraits">
                  <Button mb={20} variant="outline" border="3px solid" size="lg" color="white" _hover={{background: "white", color: "black"}}>
                      Book a Photoshoot
                  </Button>
                </Link>
              </Flex>

              <Flex 
                height='85vh'   
                width={{base: "100vw", sm: "50vw", lg: "800px"}}   
                backgroundImage={windowflowers800}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                direction="column"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Link link="https://alexandreedgar.com/galleries">
                  <Button mb={20} variant="outline" border="3px solid" size="lg" color="white" _hover={{background: "white", color: "black"}}>
                      View Galleries
                  </Button>
                </Link>
              </Flex>
              
            </Flex>

          </Flex>
        }
        
          <Switch>
            <Loading when={data.isFetching} />
            <Gallery when={data.isGallery} />
            <Sessions when={data.isBooking} />
            <List when={data.isArchive} />
            <Post when={data.isPost} />
            <Page when={data.isPage} />
          </Switch>

        <Footer />
      </ChakraProvider>
    )
  }
  
  export default connect(Root);
