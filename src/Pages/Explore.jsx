import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Card, Image, CardBody, CardFooter } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FormComponent from "../components/FormComponent";
import axios from "axios";
// import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import parse from "html-react-parser";

const Explore = () => {
  const [allblogs, setAllblogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://srj-back-end.vercel.app/blog/posts")
      .then((response) => {
        setAllblogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // const deleteBlog = (id) => {
  //   axios
  //     .delete(`https://srj-back-end.vercel.app/blog/posts/${id}`)
  //     .then((response) => {
  //       console.log("Blog deleted successfully");
  //       // Update the state or refetch data to reflect the changes
  //       fetchData();
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting blog:", error);
  //     });
  // };

  // const handleEditBlog = (id, updatedData) => {
  //   console.log(id, "blog id");
  //   axios
  //     .put(`https://srj-back-end.vercel.app/blog/posts/${id}`, updatedData)
  //     .then((response) => {
  //       console.log("Blog updated successfully");
  //       fetchData();
  //     })
  //     .catch((error) => {
  //       console.error("Error updating blog:", error);
  //     });
  // };

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

  // console.log(allblogs, "data getting from server");

  return (
    <Box p={"15px"} w={"100%"} mb={{ md: "1500px", lg: "0px" }}>
      <Text
        textAlign={"center"}
        fontSize={"50px"}
        fontFamily={"'Shippori Antique B1', sans-serif"}
      >
        Blogs
      </Text>
      <Box w={"94%"} textAlign={"end"}>
        <FormComponent />
      </Box>
      <SimpleGrid
        my={"10"}
        px={"50px"}
        columns={{ md: "2", lg: "4" }}
        spacing={4}
      >
        {" "}
        {!allblogs.length ? (
          <Center w={"80vw"}>
            <Heading color={"#F96E1E"} fontFamily={"'Kaushan Script', cursive"}>
              LOADING... &nbsp;
            </Heading>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color=""
              size="lg"
            />
          </Center>
        ) : (
          allblogs.map((blog) => (
            <Box key={blog._id}>
              <Card maxW="95%" bg={"white"}>
                <Link to={`/explore/blog/${blog._id}`} key={blog._id}>
                  <CardBody p="0" position={"relative"}>
                    <Image
                      src={blog.images[0]}
                      alt="Green double couch with wooden legs"
                      borderRadius="5px 5px 0px 0px"
                      mb={2}
                    />
                  </CardBody>
                  <CardFooter pl="2" display={"flex"} flexDirection={"column"}>
                    <Link to={`/explore/blog/${blog._id}`} key={blog._id}>
                      <Heading
                        size="md"
                        fontFamily={"'Shippori Antique B1', sans-serif"}
                        color={"rgb(0, 116, 117)"}
                        mb="2"
                        fontSize={"20px"}
                      >
                        {blog.title}
                      </Heading>
                    </Link>
                    <Text
                      fontFamily={"Inter, sans-serif;"}
                      color={"rgb(43, 43, 48)"}
                      fontSize={"14px"}
                    >
                      {blog.content && blog.content.length > 100
                        ? parse(blog.content.slice(0, 100) + "...")
                        : parse(blog.content)}
                      <Text as="span" color="blue.500">
                        <span style={{ textDecoration: "underline" }}>
                          Read more
                        </span>
                      </Text>
                    </Text>
                    <Box mt={5}>
                      <Text
                        fontFamily={"'Shippori Antique B1', sans-serif"}
                        fontSize={"12px"}
                        color={"#526D82"}
                      >
                        Author : {blog.author}
                      </Text>
                      <Text
                        fontFamily={"'Shippori Antique B1', sans-serif"}
                        fontSize={"12px"}
                        color={"#526D82"}
                      >
                        CreatedAt : {formatCreatedAt(blog.createdAt)}
                      </Text>
                    </Box>
                  </CardFooter>
                </Link>
              </Card>
            </Box>
          ))
        )}
        {}
      </SimpleGrid>
    </Box>
  );
};

export default Explore;
