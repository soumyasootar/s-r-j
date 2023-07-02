import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Select,
  Text,
  VStack,
  Table,
  Tbody,
  Tr,
  Td,
  Heading,
} from "@chakra-ui/react";

import { Gallery } from "react-grid-gallery";

import { BsWifi } from "react-icons/bs";
import { FaWater } from "react-icons/fa";
import { MdRoomService } from "react-icons/md";
import { AiFillCreditCard } from "react-icons/ai";
import { BiShower } from "react-icons/bi";
import FormComponent from "./FormComponent";
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

const images = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    //  isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
  },
];

const IndividualRoom = () => {
  let { id } = useParams();
  const [room, setRoom] = useState(roomsArray[id - 1]);
  console.log("room: ", room);
  return (
    <Box p={10}>
      <Flex gap="5px">
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
      <Heading>{room.name}</Heading>
      <HStack>

      <Amenities />
      <CheckinCheckout />
      </HStack>
    </Box>
  );
};

export default IndividualRoom;

const ImageComponent = () => {
  return (
    <Flex>
      <Image
        src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg"
        h={"340px"}
        mr={4}
      />

      <Box>
        <Image
          src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg"
          h={"108px"}
          mb={2}
        />
        <Image
          src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg"
          h={"108px"}
          mb={2}
        />
        <Image
          src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg"
          h={"108px"}
        />
      </Box>
    </Flex>
  );
};
const PayBillButton = () => {
  return (
    <>
     
    </>
  );
};
// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
const CheckinCheckout = () => {
  return (
    <>
      <Box
        m={"auto"}
        w={"30%"}
        bg={"white"}
        borderRadius={"15px"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
        <Flex bg={"white"} w={"100%"} justifyContent={"space-between"}>
          <VStack
            bg={"white"}
            h={"100px"}
            borderRadius={"5px"}
            pl={"5px"}
            pr={"5px"}
            justifyContent={"space-around"}
          >
            <Flex>
              <span style={{ paddingRight: "12px" }}>Check In</span>
              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              />
            </Flex>

            <Flex>
              <span style={{ paddingRight: "12px" }}>Check Out</span>
              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              />
            </Flex>
          </VStack>
          <VStack>
            <Flex alignItems={"center"}>
              <span style={{ paddingRight: "12px" }}>Person</span>
              <Select placeholder="Select option">
                <option value="option1">1</option>
                <option value="option2">2</option>
                <option value="option3">3</option>
                <option value="option3">4</option>
                <option value="option3">5</option>
              </Select>
            </Flex>
        <Button >
        Pay Bill
      </Button>
          </VStack>
          
        </Flex>
      </Box>
      <PayBillButton />
    </>
  );
};

const Amenities = () => {
  return (
    <>
      <Table variant="unstyled" w={"40%"}>
        <Tbody>
          <Tr>
            <Td>
              <Flex alignItems={"center"}>
                <Icon boxSize={"20px"} as={BsWifi} mr={"5px"} color="black" />
                <Text as={"span"} color="black">
                  Free Wi-Fi
                </Text>
              </Flex>
            </Td>
            <Td>
              <Flex alignItems={"center"}>
                <Icon boxSize={"20px"} as={FaWater} mr={"5px"} color="black" />
                <Text as={"span"} color="black">
                  Hot water
                </Text>
              </Flex>
            </Td>
            <Td>
              <Flex alignItems={"center"}>
                <Icon
                  boxSize={"20px"}
                  as={MdRoomService}
                  mr={"5px"}
                  color="black"
                />
                <Text as={"span"} color="black">
                  24/7 Reception
                </Text>
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Flex alignItems={"center"}>
                <Icon
                  boxSize={"20px"}
                  as={AiFillCreditCard}
                  mr={"5px"}
                  color="black"
                />
                <Text as={"span"} color="black">
                  Card Payment Accepted
                </Text>
              </Flex>
            </Td>
            <Td>
              <Flex alignItems={"center"}>
                <Icon boxSize={"20px"} as={BiShower} mr={"5px"} color="black" />
                <Text as={"span"} color="black">
                  Shower
                </Text>
              </Flex>
            </Td>
            <Td>{/* Add another icon here */}</Td>
          </Tr>
          <Tr>{/* Add icons for the third row here */}</Tr>
        </Tbody>
      </Table>
    </>
  );
};
