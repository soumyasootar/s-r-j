import {
  Box,
  Flex,
  Heading,
 
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import "./individualBlog.css";
import axios from "axios";
import parse from "html-react-parser";
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet"></link>

const IndividualBlog = () => {
  let { id } = useParams();
  let [state, setState] = useState({
    images : [],
    title : "", 
    content : "",
    author : "",
    createdAt : ""
  })
  useEffect(()=>{
    fetchSingleBlog()
  },[])
  const fetchSingleBlog = ()=>{
    axios
    .get(`http://localhost:3001/blog/posts/${id}`)
    .then((response) => {
      setState(response.data)
      console.log(response.data, "responceData");;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  }
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
    <Box h={{sm: "100vh", md: "100vh", lg: "auto" }}>
      <Box
        bg={"white"}
        borderRadius={"xl"}
        p={"20px"}
        margin={"auto"}
        my="100px"
        width={["90%", "80%"]} // Adjust the width for mobile and desktop views
             >
        <Carousel  showThumbs={false} showStatus={false} autoPlay={true} interval={2000}  infiniteLoop={true}>
          <div>
            <img src={state.images[0]} alt="img"/>
          </div>
          <div>
            <img src={state.images[1]} alt="img"/>
          </div>
          <div>
            <img src={state.images[2]} alt="img"/>
          </div>
          <div>
            <img src={state.images[3]} alt="img"/>
          </div>
          <div>
            <img src={state.images[4]} alt="img"/>
          </div>
        </Carousel>
        <Heading fontFamily={ "Comfortaa, cursive"} my="30"> {state.title} </Heading>
        <Text>
        {
          parse(state.content)
        }
        </Text>
      <Flex mt={5} justifyContent={"space-between"}>
        <Box>
          <Text>Author : {state.author}</Text>
        </Box>
        <Box>
          <Text>CreatedAt : {formatCreatedAt(state.createdAt)}</Text>
        </Box>
      </Flex>
      </Box>
    </Box>
  );
};

export default IndividualBlog;
