import React, { useState } from "react";
import deskimage from "../Images/FrontDesk.jpg";
import amenities from "../Images/amenities.png";
import bestpricerupees from "../Images/bestpricerupees.png";
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
  useToast,
} from "@chakra-ui/react";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { BiHotel } from "react-icons/bi";
import FamilyIcon from "../Images/FamilyIcon";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [numberOfPersons, setNumberOfPersons] = useState(1);
  // const [persons, setPersons] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const toast = useToast()
  const Navigate = useNavigate()

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
    if (!startDate || !endDate) {
      toast({
        title: "Incomplete Booking",
        description: "Please select both Check-in and Check-out dates.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (startDate > endDate) {
      toast({
        title: "Invalid Dates",
        description: "Check-out date must be after Check-in date. Please Change !",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    Navigate("/rooms")

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

            Welcome To <br />
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
            <span style={{ color: "#F96E1E", textShadow:"0.3px 0.3px 0.3px grey"}}>
              Just 1.2 Kilometers
            </span> from Jajpur Road Railway station, we provide
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
            fontFamily={"'Noticia Text', serif"}
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
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setStartDate(new Date(e.target.value))}
                size={{ base: "lg", md: "lg", lg: "md" }}
                type="date"
                placeholder="Check-in Date"
                // bg={useColorModeValue("white", "black")}
                bg={"white"}
              />
            </VStack>
            <VStack borderRadius={"2xl"} p={"5"} >
              <Text fontFamily={"'Shippori Antique B1', sans-serif"}>
                Check Out
              </Text>
              <Input
                size={{ base: "lg", md: "lg", lg: "md" }}
                type="date"
                placeholder="Check-Out Date"
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setEndDate(new Date(e.target.value))}
                // bg={useColorModeValue("white", "black")}
                bg={"white"}
              />
            </VStack>
            <VStack borderRadius={"2xl"} p={"4"}>
              <Text fontFamily={"'Shippori Antique B1', sans-serif"}>
                Persons
              </Text>
              <HStack>
                <IconButton
                  icon={<MinusIcon color={"white"} />}
                  aria-label="Decrease number of persons"
                  onClick={handleDecrement}
                  bg={"#F96E1E"}
                  disabled={numberOfPersons <= 1}
                />
                <Box fontFamily={"'Shippori Antique B1', sans-serif"} mx={2}>
                  {numberOfPersons}
                </Box>
                <IconButton
                  icon={<AddIcon color={"white"} />}
                  aria-label="Increase number of persons"
                  onClick={handleIncrement}
                  bg={"#F96E1E"}
                  disabled={numberOfPersons >= 4}
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
                onClick={handleFindRooms}
              >
                Search Rooms &nbsp; <br />
                <BiHotel />
              </Button>
            </Center>
          </Stack>
        </>
        {/* ----------Icon Facility ------------------ */}
        <Stack fontSize={{ base: "30px", md: "30px", lg: "xs" }} direction={{ base: "column", md: "column", lg: "row" }} bg="white" color="black" p={10} borderRadius={"2xl"} mt={"5"}>
          <Flex
            bg={"#88B7B5"}
            borderRadius={"2xl"}
            p={5}
            align="center"
            flexDirection="column"
            mb={4}
            pr={10}
          >
            {/* <Icon as={FiDollarSign} boxSize={6} color="teal.500" mb={2} /> */}
            <Image
              src={bestpricerupees}
              mb={8}
              w={{ base: "140px", md: "150px", lg: "100px" }}
            />
            <Text fontFamily={"'Salsa', cursive"} color={"white"} fontSize={{ base: "45px", md: "45px", lg: "20px" }}>
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
            bg={"#7899D4"}
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
            bg={"#7899D4"}
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
