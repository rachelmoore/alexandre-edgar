import React from "react";
import {
  Button,
  Heading,
  Text,
  Flex
} from '@chakra-ui/react';

function About() {
    return (
      <Flex id="introduction" direction="column" justify="center" ml="15%" mr="15%">
        <Heading size="xl" color="blackAlpha.800" fontWeight="500" mt={20} mb={10}>Experience your Soul’s emerging presence.</Heading>
        <Text color="blackAlpha.800" fontWeight={500} mb="20px" fontSize="xl" pt={3} pb={3}>
            Hello, and thank you for the courage you are showing by opening yourself to healing work. 
            It takes true courage to heal, and you have chosen to take the first step by reaching out for help. 
            I work with people who recognize themselves as co creators and co authors of their life and who are 
            working to understand themselves more deeply. These people desire to create and live a new narrative 
            that is not defined by the past. I want to help others know themselves as creative, resourceful, and whole; 
            the obstacles blocking this recognition are what I help others to clear away and release.
        </Text>
        <Text color="blackAlpha.800" fontWeight={500} mb={20} fontSize="xl" pt={3} pb={3}>
            Uniting the evolution of spirit with the healing of the mental, emotional, and physical selves is how I define true 
            holistic healing - body, mind and spirit. In my own life, I have experienced that releasing the invisible shackles of 
            the past has enabled me to be in a state of equanimity which allows me to approach life with an open heart, curiosity, 
            and excitement, even in the face of adversity. Being educated in psychology, guided meditation, somatic therapy, 
            shadow integration, and psychosynthesis supports me in the work I do with clients and how I hold space. 
        </Text>
      </Flex>
    )
  }

  export default About;
  