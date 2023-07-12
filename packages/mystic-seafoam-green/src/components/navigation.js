import React from "react";
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
import { FiMenu, FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram } from 'react-icons/fa';
import Link from "@frontity/components/link";

function Navigation() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
        <Flex direction="row" bg="brand.100" padding={5} justify="space-between">

            <Flex>
                <Link link="/">
                    <Heading size="lg" color="brand.700">Alexandre Edgar</Heading>
                </Link>
            </Flex>

            <Flex direction="row">
                <Flex direction="row" color="brand.700" display={{ base: 'none', sm: 'flex' }}>
                    <Link link="/"><Text fontSize="xl" pl={3}>Home</Text></Link>
                    <Link link="/about-alexandre"><Text fontSize="xl" pl={3}>About</Text></Link>
                    <Link link="/blog"><Text fontSize="xl" pl={3}>Blog</Text></Link>
                </Flex>

                <Button ref={btnRef} display={{ base: 'flex', sm: 'none' }} ml={3} mr={3} bg="brand.200" onClick={onOpen}>
                    <Icon as={FiMenu} color="white" boxSize={7} />
                </Button>

                <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                >
                <DrawerOverlay />
                <DrawerContent bg='brand.100' color="brand.400">
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Link link="/">
                            <Heading size="lg"></Heading>
                        </Link>
                    </DrawerHeader>

                    <DrawerBody style={{overflowY: "scroll"}}>
                        <Flex direction="column">
                            <Link link="/"><Text fontSize="xl" mb={2}>Home</Text></Link>
                            <Link link="/about-alexandre"><Text fontSize="xl" mb={2}>About Alexandre</Text></Link>
                            <Link link="/blog"><Text fontSize="xl" mb={2}>Blog</Text></Link>
                        </Flex>
                    </DrawerBody>

                    <DrawerFooter>
                        <Flex direction="row">
                            <a href="mailto:alexandrewedgar@gmail.com"><Icon as={FiMail} color="white" boxSize={7} mr={3}></Icon></a>
                            <Link link="https://instagram.com/alexandrewedgar"><Icon as={FaInstagram} color="white" boxSize={7} mr={3}></Icon></Link>
                            <a href="tel:669-437-0406"><Icon as={FiPhone} color="white" boxSize={7} mr={3}></Icon></a>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
                </Drawer>
            </Flex>
      </Flex>
    )
  }

  export default Navigation;
  