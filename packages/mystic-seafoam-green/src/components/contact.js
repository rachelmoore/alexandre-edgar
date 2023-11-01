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
        emailjs
        .send("alex_gmail", "contact_form", data, "4p6cOFB1pNIOOZjG6")
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
      <Flex id="introduction" direction="column" justify="center" minWidth="50%" ml="15%" mr="15%" mb={10} mt={10}>
        <Heading size="xl" color="brand.700" fontWeight="500" mt={5} mb={5} width="100%" textAlign="center">Contact Alexandre</Heading>
        <Heading size="sm" color="brand.700" fontWeight="500" mb={5} width="100%" textAlign="center">669-437-0406</Heading>
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
                    base: "2",
                    md: "3",
                }}
                py={{
                    base: "5",
                    md: "6",
                }}>
                    <form onSubmit={handleSubmit(onFormSubmit)}> 
                    <FormControl id="from_name">
                        <FormLabel htmlFor="from_name" color="brand.700" fontSize="sm">Name:</FormLabel>
                        <Input name="from_name" color="brand.700" fontSize="sm" borderWidth="2px" {...register("from_name", { required: "This is required."})} />
                        <ErrorMessage errors={errors} name="from_name" render={({ message }) => <p className="error-message"><BiErrorCircle /> {message} </p>}/>
                    </FormControl>
                    <FormControl id="reply_to" mt={5}>
                        <FormLabel htmlFor="reply_to" color="brand.700" fontSize="sm">Email:</FormLabel>
                        <Input name="reply_to" color="brand.700" fontSize="sm" borderWidth="2px" {...register("reply_to", { required: "This is required."})} />
                        <ErrorMessage errors={errors} name="reply_to" render={({ message }) => <p className="error-message"><BiErrorCircle /> {message} </p>}/>
                    </FormControl>
                    <FormControl id="message" mt={5}>
                        <FormLabel htmlFor="message" color="brand.700" fontSize="sm">Message:</FormLabel>
                        <Textarea name="message" color="brand.700" fontSize="sm" borderWidth="2px" {...register("message")} />
                        <ErrorMessage errors={errors} name="message" render={({ message }) => <p className="error-message"><BiErrorCircle /> {message} </p>}/>
                    </FormControl>
                    <Button 
                        type="submit"
                        size="sm"
                        borderColor="brand.700"
                        borderWidth="2px"
                        background="transparent"
                        mt={8}
                    >
                        <Text color="brand.700">
                            Submit
                        </Text>
                    </Button>
                </form> 
            </Stack>
        </Box>
      </Flex>
    )
  }

  export default Contact;
  