import React from "react";
import { connect } from "frontity";
import {
  Text,
  Flex,
  Icon
} from '@chakra-ui/react';
import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram } from 'react-icons/fa';
import Link from "@frontity/components/link";

function Horse({ state }) {
    const data = state.source.get(state.router.link);
    console.log('horse data', data);
    return (
        <Flex direction="row" bg="blackAlpha.800" padding={5} justify="space-between">
            <Text>horses</Text>
      </Flex>
    )
  }

  export default connect(Horse);
