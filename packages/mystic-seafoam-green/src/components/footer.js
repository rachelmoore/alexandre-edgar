import React from "react";
import {
  Text,
  Flex,
  Icon
} from '@chakra-ui/react';
import { FiMail } from "react-icons/fi";
import { FaInstagram } from 'react-icons/fa';
import Link from "@frontity/components/link";

function Footer() {
    return (
        <Flex direction="row" bg="brand.100" padding={5} justify="space-between">
            <Flex>
                <Text size="lg" color="brand.700">Alexandre Edgar © 2022</Text>
            </Flex>
            <Flex direction="row">
              <a href="mailto:alexandrewedgar@gmail.com"><Icon as={FiMail} color="white" boxSize={7} mr={3}></Icon></a>
              <Link link="https://instagram.com/alexandrewedgar"><Icon as={FaInstagram} color="white" boxSize={7}></Icon></Link>
            </Flex>
      </Flex>
    )
  }

  export default Footer;
