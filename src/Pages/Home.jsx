import React, { useState } from "react";
import deskimage from "../Images/FrontDesk.jpg";
import {
  Box,
  VStack,
  Image,
  Text,
  Flex,
  IconButton,
  Input,
  Button,
  HStack,
  Icon,
  useColorModeValue,
  Stack,
  Center,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { BiHotel } from "react-icons/bi";
// import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FiDollarSign, FiUsers, FiWifi } from "react-icons/fi";
import { FaUtensils } from "react-icons/fa";

const Home = () => {
  const [numberOfPersons, setNumberOfPersons] = useState(1);

  const handleIncrement = () => {
    if (numberOfPersons < 4) {
      setNumberOfPersons(numberOfPersons + 1);
    }
  };

  const handleDecrement = () => {
    if (numberOfPersons > 1) {
      setNumberOfPersons(numberOfPersons - 1);
    }
  };

  const handleFindRooms = () => {
    // Logic for finding rooms
  };
  return (
    <div>
      <Box
        bgPosition={"center"}
        color={"white"}
        bgImage={deskimage}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        bgAttachment={"fixed"}
        height={"100%"}
        w={"98.9vw"}
        p={"50"}
      >
        <Box
          position={"relative"}
          style={{
            textShadow:
              "0px 0px 0 black, 1px 1px 0 black, 1px 1px 0 black, 1px 1px 0 black",
          }}
        >
          <Text
            alignSelf={"flex-start"}
            fontFamily={"sans-serifw"}
            fontWeight={"700"}
            fontSize={"42px"}
            top={""}
          >
            {" "}
            Hotel That Accommodates Everyone in Jajpur-Keonjhar Road
          </Text>
          {/* <br/> */}
          <hr />
          <Text
            fontWeight={"900"}
            fontFamily={"lato"}
            fontSize={"2xl"}
            w={"52%"}
          >
            {" "}
            Just 1.2 Kilometers from Jajpur Road Railway station, we provide
            perfect rooms for your budget friendly business trip or luxurious
            family vacation.{" "}
          </Text>
        </Box>
        {/* ----------Book Rooms Box ------------------ */}
        <Center>

        <Stack
          direction={{ base: "column", md: "column", lg: "row" }}
          borderRadius={"2xl"}
          bg={"transparent"}
          w={"fit-content"}
          p={"2"}
          mt={5}
          border={"2px solid white"}
          color={useColorModeValue("black", "white")}
          style={{
            background: "rgba( 255, 255, 255, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 12.5px )",
            WebkitBackdropFilter: "blur( 12.5px )",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
        >
          <VStack borderRadius={"2xl"} p={"5"} filter="unblur(0)">
            <Text>Check In</Text>
            <Input
              type="date"
              placeholder="Check-in Date"
              bg={useColorModeValue("white", "black")}
            />
          </VStack>
          <VStack borderRadius={"2xl"} p={"5"} bg={"#F96E1E"}>
            <Text>Check Out</Text>
            <Input
              type="date"
              placeholder="Check-Out Date"
              bg={useColorModeValue("white", "black")}
            />
          </VStack>
          <VStack borderRadius={"2xl"} p={"5"}>
            <Text>Persons</Text>
            <HStack>
              <IconButton
                icon={<AddIcon color={"white"} />}
                aria-label="Increase number of persons"
                onClick={handleIncrement}
                bg={"#F96E1E"}
                disabled={numberOfPersons >= 4}
              />
              <Box mx={2}>{numberOfPersons}</Box>
              <IconButton
                icon={<MinusIcon color={"white"} />}
                aria-label="Decrease number of persons"
                onClick={handleDecrement}
                bg={"#F96E1E"}
                disabled={numberOfPersons <= 1}
              />
            </HStack>
          </VStack>
          <Button
            bg="#B43B3A"
            color={"white"}
            borderRadius={"xl"}
            p={"55px 10px"}
          >
            {" "}
            Search Rooms &nbsp; <br />
            <BiHotel />
          </Button>
        </Stack>
        </Center>
        {/* ----------Icon Facility ------------------ */}
        <HStack bg="white" color="black" p={5} borderRadius={"2xl"} mt={"5"}>
          <Flex align="center" flexDirection="column" mb={4}>
            <Icon as={FiDollarSign} boxSize={6} color="teal.500" mb={2} />
            <Text>
              Best Value for Money - Get the highest standard of facilities at
              the lowest prices in the entire Jajpur Town.
            </Text>
          </Flex>

          <Flex align="center" flexDirection="column" mb={4}>
            <Icon as={FiUsers} boxSize={6} color="teal.500" mb={2} />
            <Text>
              Suitable for All - We are a couple-friendly resort in Vyasanagar,
              Jajpur Road and are open for birthday parties, friendly
              get-togethers, family functions, corporate events, etc.
            </Text>
          </Flex>

          <Flex align="center" flexDirection="column" mb={4}>
            <Icon as={FiWifi} boxSize={6} color="teal.500" mb={2} />
            <Text>
              Useful Amenities - Get free Wi-Fi connection, information help
              desk about Jajpur Tourism, Corporate Cab facilities, Railway
              Station and Airport drop and pickup, etc.
            </Text>
          </Flex>

          <Flex align="center" flexDirection="column" mb={4}>
            <Icon as={FaUtensils} boxSize={6} color="teal.500" mb={2} />
            <Text>
              Restaurant Service - From fancy Italian Pasta to Odisha's very own
              Rice-Dalma, relish all types of cuisines at our restaurant.
            </Text>
          </Flex>
        </HStack>{" "}
      </Box>
    </div>
  );
};

export default Home;
