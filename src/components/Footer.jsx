
import React from 'react'
import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
  IconButton,
  LinkProps
  
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub } from 'react-icons/fa';
import { BsDiscord } from 'react-icons/bs';
const Footer = () => {
  return (
    <Box p={{ base: 5, md: 8 }} bg={"white"} maxW="10xl" marginInline="auto">
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <Box maxW="300px">
          <Link href="https://templateskart.com" isExternal>
            <Image w="100px" src="/assets/images/layouts/hero_image.png" alt="TemplatesKart" />
          </Link>
          <Text mt={2} color="gray.500" fontSize="md">
            Build fully functional accessible web applications faster than ever
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
              <Link>Contrinute</Link>
              <Link>Media assets</Link>
              <Link>Changelog</Link>
              <Link>Releases</Link>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Community
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <Link>Chat on Discord</Link>
              <Link>Follow on Twitter</Link>
              <Link>Follow on Github</Link>
              <Link>Github discussions</Link>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Project
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <Link>TemplatesKart</Link>
              <Link>Documentation</Link>
              <Link>Github organization</Link>
              <Link>npm organization</Link>
            </VStack>
          </VStack>
        </HStack>
      </Stack>

      <Divider my={4} />

      <Stack direction={{ base: 'column', md: 'row' }} spacing={3} justifyContent="space-between">
        <Text fontSize="md">
          Built by{' '}
          <Link
            href="https://github.com/MA-Ahmad"
            textDecoration="underline"
            _hover={{ textDecoration: 'underline' }}
            isExternal
          >
            Muhammad Ahmad
          </Link>
        </Text>
        <Stack spacing={2} direction={{ base: 'column', md: 'row' }}>
          <Button leftIcon={<FaGithub />} as={Link} href="#" rounded="md" colorScheme="gray">
            Github Discussions
          </Button>
          <Button
            leftIcon={<BsDiscord />}
            as={Link}
            href="#"
            rounded="md"
            color="white"
            bg="purple.500"
            _hover={{ bg: 'purple.600' }}
          >
            Discord community
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

// const Link = ({ children, ...props }: LinkProps) => {
//   return (
//     <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
//       {children}
//     </Link>
//   )
// }

export default Footer