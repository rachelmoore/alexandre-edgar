import React from "react";
import {
  Text,
  Flex,
  Icon
} from '@chakra-ui/react';
import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram } from 'react-icons/fa';
import Link from "@frontity/components/link";

function Footer() {
    return (
        <Flex direction="row" bg="blackAlpha.800" padding={5} justify="space-between">
            <Flex>
                <Text size="lg" color="brand.700">Alexandre Edgar © 2024</Text>
            </Flex>
            <Flex direction="row">
              <a href="mailto:poopiterjerkson@gmail.com"><Icon as={FiMail} color="white" boxSize={7} mr={3}></Icon></a>
              <Link link="https://instagram.com/boilingfrogentertainment"><Icon as={FaInstagram} color="white" boxSize={7} mr={3}></Icon></Link>
              <a href="tel:867-5309"><Icon as={FiPhone} color="white" boxSize={7} mr={3}></Icon></a>
            </Flex>
      </Flex>
    )
  }

  export default Footer;
