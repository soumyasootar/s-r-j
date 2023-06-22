import React, { useState } from "react";
import deskimage from "../Images/FrontDesk.jpg";
import amenities from "../Images/amenities.png";
import bestpricerupees from "../Images/bestpricerupees.png";
import familyicon from "../Images/family_friendly_icon_150151.svg";
import restaurant from "../Images/restaurant.png";
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
  Heading,
} from "@chakra-ui/react";

import { AddIcon, MinusIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { BiHotel } from "react-icons/bi";
// import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { FiDollarSign, FiUsers, FiWifi } from "react-icons/fi";
import { FaUtensils } from "react-icons/fa";
import FamilyIcon from "../Images/FamilyIcon";

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
    <Box
      height={"100%"}
      bgImage={deskimage}
      style={{
        background: `url(${deskimage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Box
        color={"white"}
        // height={{ base: "100vh", md: "100vh" }}
        // w={"98.9vw"}
        p={"50"}
      >
        <Box
          position={"relative"}
          style={{
            textShadow:
              "0px 0px 0 black, 1px 1px 0 black, 1px 1px 0 black, 1px 1px 0 black",
          }}
        >
          <Heading
            align={"start"}
            fontFamily={"'Kaushan Script', cursive"}
            fontWeight={"700"}
            fontSize={{ base: "9xl", md: "9xl", lg: "8xl" }}
            top={""}
          >
            {" "}
            We Welcome You All To <br />{" "}
            <span style={{ color: "#F96E1E", textShadow: "unset" }}>
              Sarita Resorts.
            </span>
          </Heading>
          <Text
            alignSelf={"flex-start"}
            fontFamily={"'Diphylleia', serif"}
            fontWeight={"600"}
            fontSize={{ base: "7xl", md: "7xl", lg: "5xl" }}
            top={""}
          >
            {" "}
            Hotel That Accommodates Everyone in Jajpur-Keonjhar Road
          </Text>
          {/* <br/> */}
          <hr style={{ border: "2px solid #F9B872" }} />
          <Text
            fontWeight={"500"}
            fontFamily={"'Kaisei HarunoUmi', serif"}
            fontSize={{ base: "5xl", md: "5xl", lg: "2xl" }}
            w={{ base: "80%", md: "80%", lg: "52%" }}
          >
            {" "}
            Just 1.2 Kilometers from Jajpur Road Railway station, we provide
            perfect rooms for your budget friendly business trip or luxurious
            family vacation.{" "}
          </Text>
        </Box>
        {/* ----------Book Rooms Box ------------------ */}
        <>
          <Stack
            direction={{ base: "column", md: "column", lg: "row" }}
            borderRadius={"2xl"}
            bg={"transparent"}
            w={{ base: "100%", md: "100%", lg: "fit-content" }}
            p={2}
            mt={5}
            border={"2px solid white"}
            fontSize={{ base: "4xl", md: "4xl", lg: "25px" }}
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
            <VStack borderRadius={"2xl"} p={"5"}>
              <Text fontFamily={"'Shippori Antique B1', sans-serif"} >
                Check In
              </Text>
              <Input
                // fontSize={{ base: "5xl", md: "5xl",lg:"" }}

                // size={{ base: "lg", md: "lg", lg: "" }}
                size={{ base: "lg", md: "lg", lg: "md" }}
                type="date"
                placeholder="Check-in Date"
                bg={useColorModeValue("white", "black")}
              />
            </VStack>
            <VStack borderRadius={"2xl"} p={"5"} bg={"#F96E1E"}>
              <Text fontFamily={"'Shippori Antique B1', sans-serif"}>
                Check Out
              </Text>
              <Input
                size={{ base: "lg", md: "lg", lg: "md" }}
                type="date"
                placeholder="Check-Out Date"
                bg={useColorModeValue("white", "black")}
              />
            </VStack>
            <VStack borderRadius={"2xl"} p={"4"}>
              <Text fontFamily={"'Shippori Antique B1', sans-serif"}>
                Persons
              </Text>
              <HStack>
                <IconButton
                  icon={<AddIcon color={"white"} />}
                  aria-label="Increase number of persons"
                  onClick={handleIncrement}
                  bg={"#F96E1E"}
                  disabled={numberOfPersons >= 4}
                />
                <Box fontFamily={"'Shippori Antique B1', sans-serif"} mx={2}>
                  {numberOfPersons}
                </Box>
                <IconButton
                  icon={<MinusIcon color={"white"} />}
                  aria-label="Decrease number of persons"
                  onClick={handleDecrement}
                  bg={"#F96E1E"}
                  disabled={numberOfPersons <= 1}
                />
              </HStack>
            </VStack>
            <Center>
              <Button
                bg="#B43B3A"
                color={"white"}
                borderRadius={"xl"}
                p={"10"}
                fontSize={"2xl"}
                // fontFamily={"'Shippori Antique B1', sans-serif"}
                fontFamily={"'Kaushan Script', cursive"}
                w={{ base: "100%", md: "100%", lg: "" }}
              >
                Search &nbsp; <br />
                <BiHotel />
              </Button>
            </Center>
          </Stack>
        </>
        {/* ----------Icon Facility ------------------ */}
        <Stack fontSize={{ base: "30px", md: "30px", lg: "xs" }} direction={{ base: "column", md: "column", lg: "row" }} bg="white" color="black" p={10} borderRadius={"2xl"} mt={"5"}>
          <Flex
            bg={"#A7CAB1"}
            borderRadius={"2xl"}
            p={5}
            align="center"
            flexDirection="column"
            mb={4}
          >
            {/* <Icon as={FiDollarSign} boxSize={6} color="teal.500" mb={2} /> */}
            <Image
              src={bestpricerupees}
              mb={8}
              w={{ base: "140px", md: "150px", lg: "100px" }}
            />
            <Text fontFamily={"'Salsa', cursive"} color={"white"}  fontSize={{ base: "45px", md: "45px", lg: "20px" }}>
              {" "}
              Best Value for Money
            </Text>
            <Text fontFamily={"'Kaisei HarunoUmi', serif"}>
              Get the highest standard of facilities at the lowest prices in the
              entire Jajpur Town.
            </Text>
          </Flex>

          <Flex
            // bg={"#F96E1E"}
            borderRadius={"2xl"}
            p={5}
            align="center"
            flexDirection="column"
            mb={4}
            bg={"#D5A18E"}
          >
            {/* <Image src={familyicon} mb={8} w={{ base: "140px", md: "150px",lg:"100px" }}/> */}
            <Icon
              as={FamilyIcon}
              boxSize={"100px"}
              fill={"black"}
              mb={8}
              w={{ base: "140px", md: "150px", lg: "100px" }}
            />
            <Text fontFamily={"'Salsa', cursive"} color={"white"} fontSize={{ base: "45px", md: "45px", lg: "20px" }}>
              {" "}
              Suitable for All
            </Text>

            <Text fontFamily={"'Kaisei HarunoUmi', serif"}>
              We are a couple-friendly resort in Vyasanagar, Jajpur Road and are
              open for birthday parties, friendly get-togethers, family
              functions, corporate events, etc.
            </Text>
          </Flex>

          <Flex
            bg={"#88B7B5"}
            borderRadius={"2xl"}
            p={5}
            align="center"
            flexDirection="column"
            mb={4}
          >
            {/* <Icon as={FiWifi} boxSize={6} color="teal.500" mb={2} /> */}
            <Image
              src={amenities}
              mb={8}
              w={{ base: "140px", md: "150px", lg: "100px" }}
            />
            <Text fontFamily={"'Salsa', cursive"} color={"white"} fontSize={{ base: "45px", md: "45px", lg: "20px" }}>
              {" "}
              Useful Amenities
            </Text>

            <Text fontFamily={"'Kaisei HarunoUmi', serif"}>
              Get free Wi-Fi connection, information help desk about Jajpur
              Tourism, Corporate Cab facilities, Railway Station and Airport
              drop and pickup, etc.
            </Text>
          </Flex>

          <Flex
            bg={"#B9314F"}
            borderRadius={"2xl"}
            p={5}
            align="center"
            flexDirection="column"
            mb={4}
          >
            {/* <Icon as={FaUtensils} boxSize={6} color="teal.500" mb={2} /> */}
            <Image
              src={restaurant}
              m={4}
              mb={8}
              w={{ base: "140px", md: "150px", lg: "100px" }}
            />
            <Text fontFamily={"'Salsa', cursive"} color={"white"} fontSize={{ base: "45px", md: "45px", lg: "20px" }}>
              {" "}
              Restaurant Service{" "}
            </Text>

            <Text fontFamily={"'Kaisei HarunoUmi', serif"}>
              From fancy Italian Pasta to Odisha's very own Rice-Dalma, relish
              all types of cuisines at our restaurant.
            </Text>
          </Flex>
        </Stack>{" "}
      </Box>
    </Box>
  );
};

export default Home;
