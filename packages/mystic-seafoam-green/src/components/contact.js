import React from "react";
import {
  Button,
  Heading,
  Text,
  Textarea,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Box,
  Stack
} from '@chakra-ui/react';
import { 
    useForm,
    useFormState
} from "react-hook-form";
import emailjs from "emailjs-com";
import { ErrorMessage } from "@hookform/error-message";

function Contact() {
    const { register, watch, setValue, setError, clearErrors, reset, handleSubmit, control } = useForm();
    const { errors } = useFormState({
        control,
    });

    const onFormSubmit = async (data) => {
        console.log("data", data);
        emailjs
        .send("service_ra0ks18", "template_93fg53o", data, "FpASGc0yvTZFTCFFh")
        .then(
            (result) => {
            console.log(result.text);
            },
            (error) => {
            console.log(error.text);
            }
        );
        reset();
    }

    return (
      <Flex id="introduction" direction="column" justify="center" minWidth="50%" ml="15%" mr="15%">
        <Heading size="xl" color="brand.700" fontWeight="500" mt={20} mb={10} width="100%" textAlign="center">Contact Alexandre</Heading>
        <Box
            bg="bg-surface"
            boxShadow="sm"
            borderRadius="lg"
            flex="1"
            maxWidth="3xl"
        >
            <Stack
                spacing="5"
                px={{
                    base: "4",
                    md: "6",
                }}
                py={{
                    base: "5",
                    md: "6",
                }}>
                    <form onSubmit={handleSubmit(onFormSubmit)}> 
                    <FormControl id="fromName">
                        <FormLabel htmlFor="fromName" color="brand.700" fontSize="lg">Name:</FormLabel>
                        <Input name="fromName" {...register("fromName", { required: "This is required."})} />
                        <ErrorMessage errors={errors} name="fromName" render={({ message }) => <p className="error-message"><BiErrorCircle /> {message} </p>}/>
                    </FormControl>
                    <FormControl id="replyTo" mt={5}>
                        <FormLabel htmlFor="replyTo" color="brand.700" fontSize="lg">Email:</FormLabel>
                        <Input name="replyTo" {...register("replyTo", { required: "This is required."})} />
                        <ErrorMessage errors={errors} name="replyTo" render={({ message }) => <p className="error-message"><BiErrorCircle /> {message} </p>}/>
                    </FormControl>
                    <FormControl id="message" mt={5}>
                        <FormLabel htmlFor="message" color="brand.700" fontSize="lg">Message:</FormLabel>
                        <Textarea name="message" {...register("message")} />
                        <ErrorMessage errors={errors} name="message" render={({ message }) => <p className="error-message"><BiErrorCircle /> {message} </p>}/>
                    </FormControl>
                    <Button 
                        type="submit"
                        size="lg"
                        borderColor="brand.700"
                        borderWidth="1px"
                        background="transparent"
                        mt={10}
                    >
                        <Text color="brand.700">
                            Submit
                        </Text>
                    </Button>
                </form> 
            </Stack>
        </Box>
        {/* <Text color="brand.700" fontWeight={500} mb="20px" fontSize="xl" pt={3} pb={3}>
            Hello, and thank you for the courage you are showing by opening yourself to healing work. 
            It takes true courage to heal, and you have chosen to take the first step by reaching out for help. 
            I work with people who recognize themselves as co creators and co authors of their life and who are 
            working to understand themselves more deeply. These people desire to create and live a new narrative 
            that is not defined by the past. I want to help others know themselves as creative, resourceful, and whole; 
            the obstacles blocking this recognition are what I help others to clear away and release.
        </Text>
        <Text color="brand.700" fontWeight={500} mb={20} fontSize="xl" pt={3} pb={3}>
            Uniting the evolution of spirit with the healing of the mental, emotional, and physical selves is how I define true 
            holistic healing - body, mind and spirit. In my own life, I have experienced that releasing the invisible shackles of 
            the past has enabled me to be in a state of equanimity which allows me to approach life with an open heart, curiosity, 
            and excitement, even in the face of adversity. Being educated in psychology, guided meditation, somatic therapy, 
            shadow integration, and psychosynthesis supports me in the work I do with clients and how I hold space. 
        </Text> */}
      </Flex>
    )
  }

  export default Contact;
  