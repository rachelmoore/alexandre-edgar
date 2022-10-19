import React from "react";
import {
  Button,
  Heading,
  Text,
  Flex
} from '@chakra-ui/react';

function About() {
    return (
      <Flex id="introduction" direction="column" justify="center" padding={{base: 5, lg: 20}}>
        <Heading size="xl" color="blackAlpha.800" fontWeight="500" mb={10} mt={10}>
            That which knows it is experiencing cannot be an element of experience.
            You are That.
        </Heading>
        <Text color="blackAlpha.800" fontWeight={500} mb={8} fontSize="xl">
            If you are faced with suffering, be it anxiety, depression or even self-loathing, are you in a position to sit back and observe it? To scrutinize it wholly, almost embracing it, to not run away from it but face it head-on. I do not mean to tolerate it, quite the opposite. Rather, can you fully observe it as soon as it arises? Can you make a deal with yourself that you do not have to tolerate an ounce of mental suffering? 
        </Text>
        <Text color="blackAlpha.800" fontWeight={500} mb={8} fontSize="xl">
            When you can observe it, observe it from every angle, as if it was the first time this suffering ever came to you. Observe it as if it was a rare species of bird never seen before, and you wanted to put it in a cage to observe and recount  every one of its details to a third party. 
        </Text>
      </Flex>
    )
  }

  export default About;
  