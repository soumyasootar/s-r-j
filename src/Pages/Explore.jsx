import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Card, Image, CardBody, CardFooter } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import FormComponent from "../components/FormComponent";
import axios from "axios";

const Explore = () => {
  const [allblogs, setAllblogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, [allblogs]);

  const fetchData = () => {
    axios
      .get("http://localhost:3001/blog/posts")
      .then((response) => {
        setAllblogs(response.data);
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

  console.log(allblogs, "data getting from server");

  return (
    <Box p={"15px"} w={"100%"}>
      <Text textAlign={"center"} fontSize={"50px"}>
        Blogs
      </Text>
      <Box w={"94%"} textAlign={"end"}>
        <FormComponent />
      </Box>
      <SimpleGrid my={"10"} px={"50px"} columns={4} spacing={4}>
        {allblogs.map((blog, id) => (
          <Link to={`/explore/blog/${id}`} key={id}>
            <Card maxW="85%" bg={"white"}>
              <CardBody p="0">
                <Image
                  src={blog.images[0]}
                  alt="Green double couch with wooden legs"
                  borderRadius="5px 5px 0px 0px"
                  mb={2}
                />
              </CardBody>

              <CardFooter pl="2" display={"flex"} flexDirection={"column"}>
                <Heading
                  size="md"
                  fontFamily={"var(--font-family-primary)"}
                  color={"rgb(0, 116, 117)"}
                  mb="2"
                  fontSize={"20px"}
                >
                  {blog.title}
                </Heading>
                <Text fontFamily={"Inter, sans-serif;"} color={"rgb(43, 43, 48)"}>
                  {blog.content && blog.content.length > 100
                    ? blog.content.slice(0, 100) + "..."
                    : blog.content}
                  <Link to={`/explore/blog/${id}`}>
                    <Text as="span" color="blue.500" ml={1}>
                      Read more
                    </Text>
                  </Link>
                </Text>
               
                  <Text>Author : {blog.author}</Text>
                  <Text>CreatedAt : {formatCreatedAt(blog.createdAt)}</Text>
               
              </CardFooter>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Explore;
