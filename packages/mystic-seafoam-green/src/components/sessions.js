import React from "react";
import { styled } from "frontity";
import {
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Button
} from '@chakra-ui/react';
import { InlineWidget } from "react-calendly";
import Contact from "./contact";
import SessionsModal from "./sessionsmodal";
import rachelmain600 from "../assets/carousel/rachelmain600.jpg";
import rachelpool800 from "../assets/carousel/rachelpool800.jpg";
import rachelbeach800 from "../assets/carousel/rachelbeach800.jpg";
import rachelbluffs800 from "../assets/carousel/rachelbluffs800.jpg";
import racheljupiterskirt800 from "../assets/carousel/racheljupiterskirt800.jpg";
import racheljupiterskirt1000 from "../assets/carousel/racheljupiterskirt1000.jpg";
import racheljupiterskirt1200 from "../assets/carousel/racheljupiterskirt1200.jpg";

function Sessions() {
    return (
        // <Flex direction="column">
        // <Flex 
        //     direction={{
        //         base: "column",
        //         lg: "row",
        //     }} 
        //     width="100%" 
        //     height="100%"
        // >
        //     <Flex 
        //         direction="column" 
        //         width={{base: "100%", lg: "50%"}} 
        //         padding={{base: 5, lg: 20}} 
        //         borderRight={{base: "0px solid #000000", md: "2px solid #000000"}}
        //     >
        //         <Heading size="2xl" mt={10} mb={10} color="blackAlpha.800">Book a Photoshoot</Heading>
                // <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                //     Portrait sessions are available for individuals, couples, and families. The shoot lasts for one hour and costs $350.
                // </Text>

                // <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                //     20 edited photos will be given to you within one week. You can also have all of the unedited photos if you would like them.
                // </Text>

                // <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                //     Alexandre will email you upon booking to determine where to meet for the shoot. If you are undecided but have a vision for what you hope the photos to capture he can help to select a location.
                // </Text>
        //     </Flex>

        //     <Flex id="calendly" direction="column" width={{base: "100%", lg: "50%"}} padding={{base: 5, lg: 20}} bg="brand.700">
        //         <CalendlyWrapper>
        //             <InlineWidget id="calendly-widget" url="https://calendly.com/alexandreedgar/portrait-session"/>
        //         </CalendlyWrapper>
        //     </Flex>
        // </Flex>
        // <Flex direction="column" align="center" bg="black">
        //   <Contact />
        // </Flex>
        // </Flex>
        <Flex minHeight="85vh" pt={1} pb={1} bg="black" directon="column" alignItems="center" justifyContent="center">
        <Grid
            minHeight='85vh'
            templateRows='repeat(4, 1fr)'
            templateColumns='repeat(8, 1fr)'
            gap={1}
            bg="black"
            maxWidth="1500px"
        >

            <GridItem colSpan={3} rowSpan={2} backgroundImage={rachelmain600} backgroundPosition="center" backgroundRepeat="no-repeat">
                <SessionsModal image={rachelmain600} />
            </GridItem>
            <GridItem colSpan={5} rowSpan={2} backgroundImage={racheljupiterskirt1000} backgroundPosition="center" backgroundRepeat="no-repeat">
                <SessionsModal image={racheljupiterskirt1000} />
            </GridItem>
            <GridItem colSpan={5} rowSpan={1} bg='brand.700'>
                <Flex height="100%" p={8} direction="column" alignItems="center" justifyContent="center">
                    <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                        Portrait sessions are available for individuals, couples, and families. The shoot lasts for one hour and costs $350.
                    </Text>

                    <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                        20 edited photos will be given to you within one week. You can also have all of the unedited photos if you would like them.
                    </Text>

                    <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                        Alexandre will email you upon booking to determine where to meet for the shoot. If you are undecided but have a vision for what you hope the photos to capture he can help to select a location.
                    </Text>
                </Flex>
            </GridItem>
            <GridItem rowSpan={3} colSpan={3} bg='white'>
                <CalendlyWrapper>
                    <InlineWidget id="calendly-widget" url="https://calendly.com/alexandreedgar/portrait-session"/>
                </CalendlyWrapper>
            </GridItem>
            <GridItem colSpan={3} rowSpan={1} backgroundImage={rachelbeach800} backgroundPosition="center" backgroundRepeat="no-repeat">
                <SessionsModal image={rachelbeach800} />
            </GridItem>
            <GridItem colSpan={2} rowSpan={1} backgroundImage={rachelpool800} backgroundPosition="center" backgroundRepeat="no-repeat">
                <SessionsModal image={rachelpool800} />
            </GridItem>
        </Grid>
        </Flex>
    )
  }

  export default Sessions;
  
  const CalendlyWrapper = styled.div`
    height: 85vh;
    overflow: scroll;
  iframe {
    border-radius: 170px;
  }
`
// backgroundImage={rachelmain800}
// backgroundPosition="center"
// backgroundRepeat="no-repeat"