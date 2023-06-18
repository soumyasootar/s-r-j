import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const RoomComponent = () => {
  return (
    <>
      <Stack
        direction={{md:"column",lg:"row"}}
        w={"100%"}
        position={"relative"}
        my={"10"}
        borderRadius={"2xl"}
      >
        <Image
          src="https://cdn1.goibibo.com/voy_ing/t_fs/db28d390be0f11ebad1b0242ac110005.jfif"
          borderRadius={"2xl"}
          w={{md:"",lg:"60vw"}}
        />
        <VStack
          top={"20%"}
          left={"40%"}
          bg={"white"}
          p={"8"}
          w={{md:"",lg:"30%"}}
          alignItems={"start"}
          borderRadius={"2xl"}
          // pos={"absolute"}
        >
          <Heading color={"#1C100A"}>STANDARD SINGLE ROOM</Heading>
          <Text>
            If you are making a budgeted business trip to Jajpur Town or Jajpur
            Road, then we highly recommend single rooms. Get your personal
            wardrobe, hot kettle, TV and our room service for 24X7.
          </Text>
          {/* <Text fontSize={"3xl"} color={"#90461B"} >Starts from ₹599</Text> */}
          <Spacer />
          <Link to={`/rooms/1234`}>
          <Button colorScheme="orange" alignSelf={"flex-end"}>
            Book Now @ ₹599 /-
          </Button>
          </Link>
        </VStack>
      </Stack>
    </>
  );
};

const Rooms = () => {
  return (
    <Container
      maxW="full"
      // height={"100vh"}
      style={{
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 8px )",
        WebkitBackdropFilter: "blur( 8px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
      p={50}
    >
      <Heading size={"4xl"}>Explore Rooms</Heading>
      <br />
      <RoomComponent />
      <RoomComponent />
      <RoomComponent />
      <RoomComponent />
    </Container>
  );
};

export default Rooms;
