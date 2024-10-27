
import React from 'react'
import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Image,
  Text,
  Button,
  Center

} from '@chakra-ui/react';
import logo from "../Images/logo.png";
// Here we have used react-icons package for the icons

import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
const Footer = () => {
  return (
    <Box p={{ base: 5, md: 8 }} maxW="10xl" marginInline="auto" bg={"#F2EFEA"}>
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
        px={"7"}
      >
        <Box maxW="300px">
          <Link href="https://saritaresorthotels.vercel.app/" isExternal>
            <Image w="150px" src={logo} alt="logo" />
          </Link>
          <Text mt={2} color="gray.500" fontSize="md">
            Chorda By-Pass, Jajpur Road, Highway 215, Jajpur, Odisha 755019
          </Text>
        </Box>
        <HStack
          spacing={4}
          d={{ base: 'none', sm: 'flex' }}
          justifyContent={{ sm: 'space-between', md: 'normal' }}
        >
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              About
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <Link>Team</Link>
              <Link>Rooms</Link>
              <Link>Location</Link>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Community
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <Link>Follow on Twitter</Link>
              <Link>Follow on Instagram</Link>
              <Link>Contact on Email</Link>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Button leftIcon={<BsWhatsapp />} as={Link} href="#" rounded="md"
              onClick={() => window.open("https://wa.me/919437072657", "_blank")}
              colorScheme="whatsapp">
              Whatsapp
            </Button>
            <Button
              leftIcon={<BsFillTelephoneFill />}
              as={Link}
              href="#"
              rounded="md"
              color="white"
              bg="purple.500"
              _hover={{ bg: 'purple.600' }}
              onClick={() => window.open("tel:+919437072657", "_blank")}
            >
              Call us : +919437072657
            </Button>
          </VStack>
        </HStack>
      </Stack>
      <Center w={"100%"} >
        <Text fontSize="md" mb={"-5"}>
          Made with ❤️
        </Text>
      </Center>
    </Box>
  );
};

export default Footer