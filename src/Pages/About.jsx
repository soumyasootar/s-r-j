import * as React from "react";
import {
  Container,
  Heading,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Spacer,
} from "@chakra-ui/react";
import deskimage from "../Images/FrontDesk.jpg";

const About = () => {
  return (
    <Box height={"100%"}>
      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        p={"10"}
        py={"40"}
        color={"white"}
      >
        <Image
          objectFit={"cover"}
          src={
            "https://cdn1.goibibo.com/voy_ing/t_g/f4d9227a204511eca7e40a58a9feac02.jpg"
          }
          w={{ base: "100%", md: "full", lg: "500px" }}
          borderRadius={"2xl"}
          shadow={"2xl"}
        ></Image>

        <Stack p={10}>
          <Heading
            align={"start"}
            fontFamily={""}
            fontWeight={"700"}
            fontSize={{ base: "7xl", md: "7xl", lg: "5xl" }}
            color={"#411B05"}
            textShadow={"unset"}
          >
            A Modern Premise in the Heritage town of Jajpur
          </Heading>
          <Text
            align={"start"}
            fontFamily={""}
            fontWeight={"600"}
            fontSize={{ base: "4xl", md: "4xl", lg: "xl" }}
            color={"white"}
            top={""}
          >
            From the very beginning, Sarita Resort was established with a vision
            to promote Jajpur tourism. The town of Jajpur that is known as
            Biraja Khetra from time immemorial has a trail of almost 3000 years
            of history. Presently, the region flourishes as a major commercial
            center under steel giants like TATA, Jindal, MESCO, IDCOL etc. It is
            one of the most developed districts of Odisha that also preserves
            the authentic pre-colonial culture of India in its roots. In midst
            of all these, we are here to strike a beautiful balance between the
            two worlds and provide all our guests a beautiful experience of our
            heritage town, Jajpur.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
