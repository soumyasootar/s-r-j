import {
  Box,
  Heading,
 
  Text,
} from "@chakra-ui/react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import "./individualBlog.css";
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet"></link>

const IndividualBlog = () => {
  let { id } = useParams();

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
            <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/blog-examples-1.webp" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
          </div>
        </Carousel>
        <Heading fontFamily={ "Comfortaa, cursive"} my="30"> <span style={{ color: "red" }}  >M</span>odern Premise in the Heritage town of Jajpur</Heading>
        <Text>
          From the very beginning, Sarita Resort was established with a vision
          to promote Jajpur tourism. The town of Jajpur that is known as Biraja
          Khetra from time immemorial has a trail of almost 3000 years of
          history. Presently, the region flourishes as a major commercial center
          under steel giants like TATA, Jindal, MESCO, IDCOL etc. It is one of
          the most developed districts of Odisha that also preserves the
          authentic pre-colonial culture of India in its roots. In midst of all
          these, we are here to strike a beautiful balance between the two
          worlds and provide all our guests a beautiful experience of our
          heritage town, Jajpur.
        </Text>
      </Box>
    </Box>
  );
};

export default IndividualBlog;
