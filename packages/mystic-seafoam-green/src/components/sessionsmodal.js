import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Image,
    Button,
    Flex,
    Center
  } from '@chakra-ui/react'

function SessionsModal({ image }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <Flex height="100%" width="100%" role="group" justifyContent="center" alignItems="center" _hover={{ background: "blackAlpha.600" }}>
            <Button onClick={onOpen} mb={20} variant="outline" border="3px solid" size="lg" color="white" display="none" _groupHover={{ display: "flex" }} _hover={{background: "white", color: "black"}}>
                View Full Image
            </Button>
        </Flex>
  
            <Modal isOpen={isOpen} onClose={onClose} size="full">
            <ModalOverlay />
            <ModalContent bg="blackAlpha.700">
                <ModalCloseButton color="white" />
                <ModalBody>
                    <Center>
                        <Image src={image} />
                    </Center>
                </ModalBody>
            </ModalContent>
            </Modal>
        </>
    )
  }

  export default SessionsModal;
  