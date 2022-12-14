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
                <Heading size="2xl" mt={10} mb={10} color="blackAlpha.800">Book a Session</Heading>
                <Text fontWeight={500} mb={8} fontSize="xl" color="blackAlpha.800">
                    I offer 15 minute introduction calls to see if we are a good match to work together.
                </Text>

                <Text fontWeight={500} mb={8} fontSize="xl" color="blackAlpha.800">
                    While we become familiar with one another's communication and energy we can discuss 
                    your current situation in life, present struggles, and hopes for what you will achieve in the process of breaking through percieved limitations and problems. 
                </Text>

                <Text fontWeight={500} mb={8} fontSize="xl" color="blackAlpha.800">
                    We can also explore your vision for how your life and being will be afterward.
                </Text>

                <Text fontWeight={500} mb={8} fontSize="xl" color="blackAlpha.800">
                    My goal in working with individuals is to empower them to be their own source of truth and strength. 
                    My greatest accomplishment in working with someone is for them not to need the guidance of another anymore.
                </Text>

                <Text fontWeight={500} mb={8} fontSize="xl" color="blackAlpha.800">
                    Sessions following the introductory call are 45 minutes at $75 per session. 
                </Text>
            </Flex>

            <Flex id="calendly" direction="column" height="1000px" width={{base: "100%", lg: "50%"}} padding={{base: 5, lg: 20}}>
                <InlineWidget id="calendly-widget" url="https://calendly.com/alexandreedgar/30min"/>
            </Flex>
        </Flex>
    )
  }

  export default Sessions;
  