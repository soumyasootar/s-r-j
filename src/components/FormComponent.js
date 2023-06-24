import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
const FormComponent = () => {
  const toast = useToast();
  const [images, setimages] = useState();
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [author, setauthor] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleimagesUpload = (pics) => {
    if (pics === undefined) {
      toast({
        title: "Please Select an images!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(pics);
    if (pics.type === "images/jpeg" || pics.type === "images/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-On");
      data.append("cloud_name", "dfgqwy9io");
      fetch("https://api.cloudinary.com/v1_1/dfgqwy9io/images/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setimages(data.url.toString());
          console.log(data.url.toString());
          // setPicLoading(false);
        })
        .catch((err) => {
          console.log(err);
          // setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an images!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // setPicLoading(false);
      return;
    }
  };

  const handletitleChange = (event) => {
    settitle(event.target.value);
  };

  const handlecontentChange = (value) => {
    setcontent(value);
  };
  const handleAuthorChange = (event) => {
    setauthor(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(author);
    if (!title || !content) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // setPicLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      
      const { data } = await axios.post(
        "http://localhost:3001/blog/posts",
        { images, title, content, author },
        config
      );
      // console.log(data, "hidata");
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
     
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
     
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        _hover={{
          background: "#FF2171",
          color: "#FFE4A7",
        }}
        // FF0060
        bg={"#FF2171"}
        color={"#FFE4A7"}
        fontFamily={"'Shippori Antique B1', sans-serif"}
      >
        Create a Blog{" "}
        <span
          style={{ fontSize: "30px", paddingLeft: "5px", fontWeight: "bolder" }}
        >
          +
        </span>
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormControl id="images">
                <FormLabel>Upload images</FormLabel>
                <Input
                  type="file"
                  accept="images/*"
                  onChange={(e) => handleimagesUpload(e.target.files[0])}
                />
              </FormControl>

              <FormControl id="title" mt={4}>
                <FormLabel>Blog title</FormLabel>
                <Input
                  type="text"
                  value={title}
                  onChange={handletitleChange}
                />
              </FormControl>

              <FormControl id="content" mt={4}>
                <FormLabel>content</FormLabel>
                <ReactQuill
                  value={content}
                  onChange={handlecontentChange}
                />
              </FormControl>

              <FormControl id="author" mt={4}>
                <FormLabel>Author</FormLabel>
                <Input
                  type="text"
                  value={author}
                  onChange={handleAuthorChange}
                />
              </FormControl>
              <Button type="submit" mt={4} colorScheme="blue">
                Submit
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormComponent;