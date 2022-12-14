import React from "react";
import {
  Heading,
  Text,
  Flex,
  Image
} from '@chakra-ui/react';
import alexandrecat from "../assets/alexandrecat.png"

function Bio() {
    return (
        <Flex 
            direction={{
                base: "column",
                lg: "row",
            }} 
            width="100%" 
            height="100%"
        >
            <Flex direction="column" width={{base: "100%", lg: "50%"}}>
                <Image src={alexandrecat} height={{base: "fit-content", lg: "100%"}} maxHeight={{base: "600px", lg: "100%" }} style={{objectFit: "cover"}} />
            </Flex>

            <Flex direction="column" width={{base: "100%", lg: "50%"}} padding={{base: 5, lg: 20}}>
                <Heading size="2xl" mt={10} mb={10} color="brand.700">About Alexandre</Heading>
                <Text fontWeight={500} mb={8} fontSize="xl" color="brand.700">
                    I grew up in the Burgundy region of France of an American family. 
                </Text>

                <Text fontWeight={500} mb={8} fontSize="xl" color="brand.700">
                    Growing up in a post-enlightenment society made me realize the irony of that term. The set of ideas that were meant to take humanity out of the darkness of dogma have now crystallized into a new form of dogma. 
                    This new dogma is currently a radical humanist postmodernism rooted in dogmatic adhesion to Darwinism, validated by the new church of Science. 
                </Text>

                <Text fontWeight={500} mb={8} fontSize="xl" color="brand.700">
                    Growing up in a society that idolizes rationality above all left a strong lack in my sensibilities for wisdom which emerges out of emotion.
                    As water can never rise above its source, rational intellect too can never rise above its own Source. 
                </Text>

                <Text fontWeight={500} mb={8} fontSize="xl" color="brand.700">
                    While working in the business world in New York, I began to read a panoply of books around Jungian psychology and other esoteric traditions. 
                    I left the business world to study Psychology in the United Kingdom where I also became a born again Christian, adult baptism and all. 
                </Text>

                <Text fontWeight={500} mb={8} fontSize="xl" color="brand.700">
                    This period ended with a profound realization of my true nature which I realized was hinted at in recurring dreams I had since I was 5 years old, notably hinting at its date.
                    After this came several years of solitude and deepening into presence. 
                </Text>
            </Flex>
        </Flex>
    )
  }

  export default Bio;
