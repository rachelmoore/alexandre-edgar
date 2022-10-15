import React, {useState, useEffect} from "react";
import { connect, Global, css, styled, Head } from "frontity";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Text,
  Flex,
  Image,
  Icon,
  Link as ChakraLink,
  useDisclosure
} from '@chakra-ui/react';
import { FiMenu, FiMail } from "react-icons/fi";
import { FaInstagram } from 'react-icons/fa';
import Link from "@frontity/components/link";

function Navigation() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <>
        <Flex direction="row">
            <Link link="https://instagram.com"><Icon as={FiMail} color="white" boxSize={7} mr={3}></Icon></Link>
            <Link link="https://instagram.com"><Icon as={FaInstagram} color="white" boxSize={7}></Icon></Link>
        </Flex>
        {/* <Button ref={btnRef} ml={3} mr={3} bg="brand.200" onClick={onOpen}>
        <Icon as={FiMenu} color="white" boxSize={7} />
        </Button> */}
        {/* <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg='brand.100' color="brand.400">
            <DrawerCloseButton />
            <DrawerHeader><Link link="/"><Heading size="lg">Home</Heading></Link></DrawerHeader>
  
            <DrawerBody style={{overflowY: "scroll"}}>
                <Flex direction="column">
                    <Link link="/about-us"><Text fontSize="xl" mb={2}>About Psychosynthesis</Text></Link>
                    <Link link="/about-us"><Text fontSize="xl" mb={2}>About Eluna</Text></Link>
                    <Link link="/category/horses"><Text fontSize="xl" mb={2}>Testimonials</Text></Link>
                    <Link link="/category/horses"><Text fontSize="xl" mb={2}>Services</Text></Link>
                    <Link link="/category/horses"><Text fontSize="xl" mb={2}>Packages</Text></Link>
                    <Link link="/category/coding"><Text fontSize="xl" mb={5}>Contact</Text></Link>
                </Flex>
            </DrawerBody>
  
            <DrawerFooter>
                <Flex direction="row">
                    <Link link="https://instagram.com"><Icon as={FiMail} color="white" boxSize={7} mr={3}></Icon></Link>
                    <Link link="https://instagram.com"><Icon as={FaInstagram} color="white" boxSize={7}></Icon></Link>
                </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer> */}
      </>
    )
  }

  export default Navigation;
