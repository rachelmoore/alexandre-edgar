import React from "react";
import {
  Button,
  Heading,
  Text,
  Flex,
  Image,
  Icon,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { BsTrophy } from "react-icons/bs"
import { RiScales3Fill } from "react-icons/ri"
import { FaYinYang } from "react-icons/fa"
import { WiStars } from "react-icons/wi";
import tcsitebrantbarn from "../assets/tcsitebrantbarn.jpg"
import alexandrecat from "../assets/alexandrecat.png"


function Bio() {
  
    return (
        <>
            <Flex direction="column" width="50%">
                <Image src={alexandrecat} />
            </Flex>

            <Flex direction="column" width="50%" padding={5}>
                <Heading size="2xl" mt={10} mb={10} color="brand.400">Meet Eluña</Heading>
                <Text fontWeight={500} mb="20px" fontSize="xl" pt={3} pb={3} color="brand.400">
                    Eluña Antle is a certified Psychospiritual Life Coach, Intuitive Transpersonal Guide, and is the founder of Emerging Presence. She has a background in Ayurveda, Qigong, and psychology. 
                    Her specialties include helping others to integrate, heal, and release the past, and facilitate the cathartic release of emotions in a safe and accepting space.
                </Text>

                <Text fontWeight={500} mb="20px" fontSize="xl" pt={3} pb={3} color="brand.400">
                    Eluña’s work emphasizes Self-empowerment, practical wisdom, and regenerative change. Regenerative change is naturally healing which results in shifts of perception, ways of relating, 
                    and patterns of thinking. Through various exercises, practices, and techniques, Eluña helps clients to ground these paradigm shifts into the real world allowing them to stand in their power, 
                    reclaim their sovereignty, and emotionally and spiritually level up.
                </Text>

                <Text fontWeight={500} mb="20px" fontSize="xl" pt={3} pb={3} color="brand.400">
                    One of Eluña's life purposes is to help others experience their Soul’s emerging presence. She is awestruck by the depths and heights people are capable of reaching with the help of a guide.  
                    Eluña recognizes each person as a radiant, creative, and dynamic being, each of whom have distinctive wants and needs. This is why she curates a custom coaching experience for each client. 
                    Through a unique admissions process, she evaluates each client in-depth to offer the most aligned experience possible.
                </Text>
            </Flex>
        </>
    )
  }

  export default Bio;