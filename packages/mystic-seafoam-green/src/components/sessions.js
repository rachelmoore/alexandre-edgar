import React from "react";
import {
  Button,
  Heading,
  Text,
  Flex
} from '@chakra-ui/react';
import { InlineWidget } from "react-calendly";

function Sessions() {
    return (
        <Flex 
            direction={{
                base: "column",
                lg: "row",
            }} 
            width="100%" 
            height="100%"
        >
            <Flex direction="column" width={{base: "100%", lg: "50%"}} padding={{base: 5, lg: 20}}>
                <Heading size="2xl" mt={10} mb={10} color="blackAlpha.800">Book a Photoshoot</Heading>
                <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                    Portrait sessions are available for individuals, couples, and families. The shoot lasts for up to two hours and costs $180.
                </Text>

                <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                    20 edited photos will be given to you within one week. You can also have all of the unedited photos if you would like them.
                </Text>

                <Text fontWeight={500} mb={5} fontSize="lg" color="blackAlpha.800">
                Alexandre will email you upon booking to determine where to meet for the shoot. If you are undecided but have a vision for what you hope the photos to capture he can help to select a location.
                </Text>
            </Flex>

            <Flex id="calendly" direction="column" width={{base: "100%", lg: "50%"}}>
                <InlineWidget id="calendly-widget" url="https://calendly.com/alexandreedgar/portrait-session"/>
            </Flex>
        </Flex>
    )
  }

  export default Sessions;
  