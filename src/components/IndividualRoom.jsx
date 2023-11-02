import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Select,
  Text,
  VStack,
  Heading,
  Stack,
  Spacer,
  useColorMode,
  Input,
  Toast,
  useToast,
} from "@chakra-ui/react";
import {
  BsFillKeyFill,
  BsWifi,
  BsFan,
  BsFillLampFill,
  BsFillCreditCardFill,
  BsReception3,
  BsQrCodeScan,
} from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import { GrCafeteria } from "react-icons/gr";
import { IoMdCafe, IoMdBed } from "react-icons/io";
import {
  MdShower,
  MdRestoreFromTrash,
  MdOutlineLocalParking,
  MdOutlineBathtub,
  MdOtherHouses,
  MdLocalLaundryService,
} from "react-icons/md";
import { GiAtSea } from "react-icons/gi";
import { FaGlassWhiskey } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { ArrowForwardIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { useState } from "react";

const roomsArray = [
  {
    id: 1,
    price: 599,
    images: [
      "https://cdn1.goibibo.com/voy_ing/t_fs/02de7bec1ea011ecba1d0a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/e8f9f564204611ec80820a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/043d1f2a1ea011ec8fb20a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/db28d390be0f11ebad1b0242ac110005.jfif",
      "https://cdn1.goibibo.com/voy_ing/t_fs/eae685fe204611eca6ae0a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/ea141c36204611ecac720a58a9feac02.jpg",
    ],
    name: "Standard Single Room",
    description:
      "If you are making a budgeted business trip to Jajpur Town or Jajpur Road, then we highly recommend single rooms. Get your personal wardrobe, hot kettle, TV and our room service for 24X7.",
  },
  {
    id: 2,
    price: 699,
    images: [
      "https://cdn1.goibibo.com/voy_ing/t_fs/e8f9f564204611ec80820a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/043d1f2a1ea011ec8fb20a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/db28d390be0f11ebad1b0242ac110005.jfif",
      "https://cdn1.goibibo.com/voy_ing/t_fs/02de7bec1ea011ecba1d0a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/eae685fe204611eca6ae0a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/ea141c36204611ecac720a58a9feac02.jpg",
    ],
    name: "Economical Double Room",
    description:
      "While on your way to the main destination, you need a break and want to spend the night at any low-price hotel nearby. Our economical double rooms are couple-friendly and will provide all the facilities you require for the night at Jajpur.",
  },
  {
    id: 3,
    price: 799,
    images: [
      "https://cdn1.goibibo.com/voy_ing/t_fs/e8f9f564204611ec80820a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/043d1f2a1ea011ec8fb20a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/db28d390be0f11ebad1b0242ac110005.jfif",
      "https://cdn1.goibibo.com/voy_ing/t_fs/02de7bec1ea011ecba1d0a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/eae685fe204611eca6ae0a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/ea141c36204611ecac720a58a9feac02.jpg",
    ],
    name: "Luxury Room",
    description:
      "If you are on a holiday and want to see the various heritage sites of Jajpur then we recommend you our Luxury rooms. Enjoy the food and get cab service to Biraja Shakti Peeth Temple, Lalitgiri Buddhist Complex, Ratnagiri Monastery, Langudi Hills, Kusuma Pond, etc.",
  },
  {
    id: 4,
    price: 899,
    images: [
      "https://cdn1.goibibo.com/voy_ing/t_fs/bb63790e204611eca6050a58a9feac02.jpg",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201704231808567326-242972-62888cb61e9d11eca4f70a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/597459ac1e9d11eca5b40a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/bc7af268204611eca7e40a58a9feac02.jpg",
    ],
    name: "Executive Suite",
    description:
      "Book the luxury of a 3-Star hotel room at a suitable price for the top executives or foreign guests of your company visiting Jajpur. We can also provide private taxi service for airport pick up and drop off and to commute between your offices to our facility.",
  },
];

const IndividualRoom = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  let { id } = useParams();
  const [room, setRoom] = useState(roomsArray[id - 1]);
  const [persons, setPersons] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const toast = useToast();

  const handleWhatsAppBooking = () => {
    const formattedStartDate = startDate
      ? startDate.toLocaleDateString("en-GB")
      : "";
    const formattedEndDate = endDate ? endDate.toLocaleDateString("en-GB") : "";

    if (!startDate || !endDate) {
      toast({
        title: "Incomplete Booking",
        description: "Please select both start and end dates.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (startDate > endDate) {
      toast({
        title: "Invalid Dates",
        description:
          "Please select a date after the start date for the end date.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    sendWhatsAppMessage(persons, formattedStartDate, formattedEndDate);
  };

  const sendWhatsAppMessage = (persons, startDate, endDate) => {
    console.log("endDate: ", endDate);
    console.log("startDate: ", startDate);
    const phoneNumber = "918339900225";
    const baseUrl = `https://wa.me/${phoneNumber}`;
    const message = `Hello, I would like to book a hotel for ${persons} person(s) from ${startDate} to ${endDate}.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `${baseUrl}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };
  return (
    <Box p={5}>
      {/* images start  */}
      <Flex gap="5px" justifyContent={"center"}>
        <Box>
          <Image
            src={room.images[0]}
            alt="error"
            w="900px"
            h="520px"
            borderRadius="10px 0px 0px 10px"
          />
        </Box>
        <Box>
          <Image
            src={room.images[1]}
            mb="5px"
            borderRadius="0px 10px 0px 0px"
            w="300px"
            h="170px"
          />
          <Image src={room.images[2]} mb="5px" w="300px" h="170px" />
          <Image
            src={room.images[3]}
            w="300px"
            h="170px"
            borderRadius="0px 0px 10px 0px"
          />
        </Box>
      </Flex>
      {/* images end */}

      <Flex gap="30px" mx={{ base: "3", md: "3", lg: "36" }} mt={"20"} mb={40}>
        {/* name and description  */}
        <Box w="55%" mb="20">
          <Heading color="#f15824" mt="10px">
            {room.name}
          </Heading>
          <Text mt="5px">{room.description}</Text>
        </Box>
        {/* ammentites */}
        <Box>
          <Heading mt="10px" fontSize="3xl" mb="20px">
            Amenities
          </Heading>
          <Flex gap="50px">
            <Box>
              <HStack mb="8px">
                <BsFillKeyFill />
                <Text fontSize="1xl">Lockers</Text>
              </HStack>
              <HStack mb="8px">
                <BsWifi />
                <Text fontSize="1xl">Free Wi-Fi</Text>
              </HStack>
              <HStack mb="8px">
                <BsFan />
                <Text fontSize="1xl">Air-Conditioning</Text>
              </HStack>
              <HStack mb="8px">
                <GrCafeteria />
                <Text fontSize="1xl">Cafe</Text>
              </HStack>
              <HStack mb="8px">
                <IoMdCafe />
                <Text fontSize="1xl">Breakfast (Extra)</Text>
              </HStack>
              <HStack mb="8px">
                <IoMdBed />
                <Text fontSize="1xl">Linen Included</Text>
              </HStack>
              <HStack mb="8px">
                <MdOutlineLocalParking />
                <Text fontSize="1xl">Parking</Text>
              </HStack>
            </Box>
            <Box>
              <HStack mb="8px">
                <MdOutlineBathtub />
                <Text fontSize="1xl">Hot Water</Text>
              </HStack>
              <HStack mb="8px">
                <BsFillCreditCardFill />
                <Text fontSize="1xl">Card Payment Accepted</Text>
              </HStack>
              <HStack mb="8px">
                <BsReception3 />
                <Text fontSize="1xl">24/7 Reception</Text>
              </HStack>
              <HStack mb="8px">
                <MdOtherHouses />
                <Text fontSize="1xl">In-house Activities</Text>
              </HStack>
              <HStack mb="8px">
                <GiAtSea />
                <Text fontSize="1xl">Sea-View</Text>
              </HStack>
              <HStack mb="8px">
                <BsQrCodeScan />
                <Text fontSize="1xl">UPI PAyment Accepted</Text>
              </HStack>
            </Box>
            <Box>
              <HStack mb="8px">
                <MdLocalLaundryService />
                <Text fontSize="1xl">Laundry Services (Extra)</Text>
              </HStack>
              <HStack mb="8px">
                <FaGlassWhiskey />
                <Text fontSize="1xl">Water Dispenser</Text>
              </HStack>
              <HStack mb="8px">
                <BiArea />
                <Text fontSize="1xl">Common Hangout Area</Text>
              </HStack>
              <HStack mb="8px">
                <BsFillLampFill />
                <Text fontSize="1xl">Bedside Lamp</Text>
              </HStack>
              <HStack mb="8px">
                <MdRestoreFromTrash />
                <Text fontSize="1xl">Storage Facilities</Text>
              </HStack>
              <HStack mb="8px">
                <MdShower />
                <Text fontSize="1xl">Shower</Text>
              </HStack>
            </Box>
          </Flex>
        </Box>
        {/* ammentites */}
      </Flex>

      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        mx={{ base: "3", md: "3", lg: "36" }}
        p={"10"}
        style={{
          background: "#f5742a",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 12.5px )",
          WebkitBackdropFilter: "blur( 12.5px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
        marginBottom={"300px"}
        fontFamily={"'Noticia Text', serif"}
      >
        <Text
          as={"h3"}
          fontSize={{ base: "30px", md: "50px" }}
          fontStyle={"italic"}
          fontWeight="700"
          color={"white"}
          mb={10}
        >
          Book Your Stay
        </Text>
        <Spacer />
        <VStack
          p={5}
          style={{
            background: "rgba( 255, 255, 255, 0.25 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 12.5px )",
            WebkitBackdropFilter: "blur( 12.5px )",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
          }}
        >
          <Select
            placeholder="Persons"
            w={"full"}
            bg="white"
            onChange={(e) => setPersons(e.target.value)}
            textAlign={"center"}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          <HStack w={"full"} borderRadius="4" p="1" px="8">
            <Text>Check-In</Text>
            <Spacer />
            &nsbp;
            <Spacer />
            <Text>Check-Out</Text>
          </HStack>
          <HStack
            w={"full"}
            borderRadius="10"
            bg="white"
            boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          >
            <Input
              type="date"
              border="none"
              placeholder="Start Date"
              color={"black"}
              bg={"white"}
              
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setStartDate(new Date(e.target.value))}
            />
            <ArrowForwardIcon color={"black"} />
            <Input
              type="date"
              border="none"
              placeholder="End Date"
              color={"black"}
              textAlign={"end"}
              bg={"white"}

              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setEndDate(new Date(e.target.value))}
            />
          </HStack>
          <Button
            colorScheme="whatsapp"
            w={"full"}
            mt={{ base: "5", md: "0" }}
            onClick={handleWhatsAppBooking}
          >
            Book With WhatsApp &nbsp; <BsWhatsapp />
          </Button>
          <Button
            colorScheme="blue"
            w={"full"}
            mt={{ base: "3", md: "0" }}
            onClick={() => window.open("tel:+1234567890", "_blank")}
          >
            Call to Book
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default IndividualRoom;
