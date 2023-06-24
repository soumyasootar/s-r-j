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
  const [image, setImage] = useState();
  const [heading, setHeading] = useState("");
  const [paragraphs, setParagraphs] = useState("");
  const [authorName, setAuthorName] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleImageUpload = (pics) => {
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-On");
      data.append("cloud_name", "dfgqwy9io");
      fetch("https://api.cloudinary.com/v1_1/dfgqwy9io/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
  };

  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };

  const handleParagraphsChange = (value) => {
    setParagraphs(value);
  };

  const handleAuthorChange = (event) => {
    setAuthorName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!heading || !paragraphs) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/blog/posts",
        {
          image,
          heading,
          paragraphs,
          authorName,
        },
        config
      );

      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error) {
      toast({
        title: "Error Occurred!",
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
              <FormControl id="image">
                <FormLabel>Upload Image</FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e.target.files[0])}
                />
              </FormControl>

              <FormControl id="heading" mt={4}>
                <FormLabel>Blog Heading</FormLabel>
                <Input
                  type="text"
                  value={heading}
                  onChange={handleHeadingChange}
                />
              </FormControl>

              <FormControl id="paragraphs" mt={4}>
                <FormLabel>Paragraphs</FormLabel>
                <ReactQuill
                  value={paragraphs}
                  onChange={handleParagraphsChange}
                />
              </FormControl>

              <FormControl id="author" mt={4}>
                <FormLabel>Author</FormLabel>
                <Input
                  type="text"
                  value={authorName}
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
