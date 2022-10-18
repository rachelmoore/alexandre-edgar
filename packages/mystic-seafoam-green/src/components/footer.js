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
                <Link link="https://instagram.com"><Icon as={FiMail} color="brand.700" boxSize={7} mr={3} pt={1}></Icon></Link>
                <Link link="https://instagram.com"><Icon as={FaInstagram} color="brand.700" boxSize={7} pt={1}></Icon></Link>
            </Flex>
      </Flex>
    )
  }

  export default Footer;
