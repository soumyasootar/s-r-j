import {
  Button,
  Container,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const roomsArray = [
  {
    id: 1,
    price: 1200,
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
    price: 1500,
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
    price: 1500,
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
    price: 1800,
    images: [
      "https://cdn1.goibibo.com/voy_ing/t_fs/bb63790e204611eca6050a58a9feac02.jpg",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201704231808567326-242972-62888cb61e9d11eca4f70a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/597459ac1e9d11eca5b40a58a9feac02.jpg",
      "https://cdn1.goibibo.com/voy_ing/t_fs/bc7af268204611eca7e40a58a9feac02.jpg",
    ],
    name: "Super Deluxe A/C",
    description:
      "Book the luxury of a 3-Star hotel room at a suitable price for the top executives or foreign guests of your company visiting Jajpur. We can also provide private taxi service for airport pick up and drop off and to commute between your offices to our facility.",
  },
];

const RoomComponent = ({ id, images, name, description, price }) => {
  return (
    <>
      <Stack
        direction={{ md: "column", lg: "row" }}
        w={"-moz-fit-content"}
        position={"relative"}
        my={"10"}
        borderRadius={"2xl"}
        // bg={"rebeccapurple"}
      >
        <Image
          src={images[0]}
          borderRadius={"2xl"}
          objectFit={"cover"}
          w={{ md: "", lg: "70vw" }}
          h={{ md: "", lg: "40vw" }}
        />
        <VStack
          top={"20%"}
          left={"40%"}
          // bg={"white"}
          bg={"#DBB68F"}
          p={"8"}
          w={{ md: "", lg: "30%" }}
          alignItems={"start"}
          borderRadius={"2xl"}
          color={"#07111D"}
        >
          <Heading
            color={"#1C100A"}
            fontSize={"5xl"}
            fontFamily={"'Great Vibes', cursive"}
          >
            {name}
          </Heading>
          <Text fontFamily={"'Poppins', sans-serif"} fontWeight={"300"}>
            {description}
          </Text>
          {/* <Text fontSize={"3xl"} color={"#90461B"} >Starts from ₹599</Text> */}
          <Spacer />
          <Link to={`/rooms/${id}`}>
            <Button
              colorScheme="orange"
              fontFamily={"'Diphylleia', serif"}
              alignSelf={"flex-end"}
            >
              Book Now @ ₹{price} /-
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
      p={10}
      mb={10}
      // style={{
      //   background: "E6EFE9",
      //   boxShadow: "0 8px 16px 0 rgba( 31, 38, 135, 0.37 )",
      //   backdropFilter: "blur( 8px )",
      //   WebkitBackdropFilter: "blur( 8px )",
      //   borderRadius: "10px",
      //   border: "1px solid rgba( 255, 255, 255, 0.18 )",
      // }}
      bg={"#E6EFE9"}
      // p={50}
    >
      <Heading
        fontSize={"7xl"}
        fontWeight={"medium"}
        color={"blackAlpha.800"}
        style={{
          textShadow:
            "0px 0px 0 #FA7E37, 1px 1px 0 #FA7E37, 1px 1px 0 #FA7E37, 1px 1px 0 #FA7E37",
        }}
        fontFamily={"'Carter One', cursive;"}
      >
        Explore Rooms
      </Heading>
      <br />
      {roomsArray.map((room) => (
        <RoomComponent key={room.id}
          id={room.id}
          name={room.name}
          description={room.description}
          images={room.images}
          price={room.price}
        />
      ))}
    </Container>
  );
};

export default Rooms;
