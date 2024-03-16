import React from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from "react-icons/md";
import {
  BsPerson
} from "react-icons/bs";
import Map from "../components/Map";
const Contact = () => {
  return (
    <>
      <Container
        bg="#F96E1E"
        maxW="full"
        mt={0}
        mb={5}
        centerContent
        overflow="hidden"
      >
        <Flex>
          <Box
            w={"100%"}
            bg="#B43B3A"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 10, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.200">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="start">
                        <Button
                          pl="0"
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          justifyContent="start"
                          leftIcon={<MdPhone color="black" size="20px" />}
                        >
                          <Link href="tel:+919437072657">+91-9437072657</Link>
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdEmail color="black" size="20px" />}
                        >
                          <Link href={"mailto:asuas.sutar@gmail.com"}>
                            saritaresort@gmail.com
                          </Link>
                        </Button>
                        <Button
                          pl="0"
                          height="60px"
                          width="300px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={
                            <MdLocationOn color="black" size="20px" />
                          }

                          
                          justifyContent={"start"}
                        >
                          <Link
                            target="_blank"
                            href={
                              "https://www.google.com/maps/place/HOTEL+SARITA/@20.953156,86.131603,17z/data=!4m9!3m8!1s0x3a195180de5804d9:0xfd5b18ea43fa123!5m2!4m1!1i2!8m2!3d20.9531563!4d86.1316025!16s%2Fg%2F1q64hqtdq?hl=en&entry=ttu"
                            }
                            style={{
                            whiteSpace: "initial",
                            wordWrap: "break-word",
                          }}
                          >
                            Chorda Bye Pass, Jajpur Road,Highway 215, Jajpur,
                            Odisha 755019
                          </Link>
                        </Button>
                      </VStack>
                    </Box>
                    {/* <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="center"
                    >
                      <IconButton
                        aria-label="facebook"
                        color={"white"}
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="whatsapp"
                        color={"whatsapp.400"}
                        variant="ghost"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsWhatsapp size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        color={"purple.400"}
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsFillTelephoneFill size="28px" />}
                      />
                    </HStack> */}
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#B43B3A"
                            color="white"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      <Map />
    </>
  );
};

export default Contact;
