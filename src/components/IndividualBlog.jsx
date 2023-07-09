import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import "./individualBlog.css";
import axios from "axios";
import parse from "html-react-parser";
<link
  href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
  rel="stylesheet"
></link>;

const IndividualBlog = () => {
  let { id } = useParams();
  let [state, setState] = useState({
    images: [],
    title: "",
    content: "",
    author: "",
    createdAt: "",
  });
  useEffect(() => {
    fetchSingleBlog();
  }, []);
  const fetchSingleBlog = () => {
    axios
      .get(`https://srj-back-end.vercel.app/blog/posts/${id}`)
      .then((response) => {
        setState(response.data);
        console.log(response.data, "responceData");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const formatCreatedAt = (createdAt) => {
    const date = new Date(createdAt);
    const formattedDate = date.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedDate.replace(",", "  ");
  };

  console.log(id, "individualID");
  console.log(id);
  return (
    <Box >
      <Box
        bg={"white"}
        borderRadius={"xl"}
        p={"10"}
        margin={"auto"}
        bgImage={"https://static.vecteezy.com/system/resources/thumbnails/002/957/705/small/light-orange-background-with-circles-vector.jpg"}
        my="100px"
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        width={["90%", "80%"]} // Adjust the width for mobile and desktop views
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
        >
          {state.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt="img" />
            </div>
          ))}
        </Carousel>
        <Heading fontFamily={"Comfortaa, cursive"} my="30">
          <span className="first-letter">{state.title.charAt(0)}</span>
          {state.title.slice(1)}
        </Heading>
        <Text fontFamily={"'Salsa', cursive"}>{parse(state.content)}</Text>
        <Flex mt={5} justifyContent={"space-between"} >
          <Box>
            <Text fontSize={"12px"} fontFamily={"sans-serif"}  color={"#526D82"}>Author : {state.author}</Text>
          </Box>
          <Box>
            <Text fontSize={"12px"} color={"#526D82"} fontFamily={"sans-serif"}>CreatedAt : {formatCreatedAt(state.createdAt)}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default IndividualBlog;
