import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spacer,
} from "@chakra-ui/react";
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
  // const [images, setimages] = useState([]);
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();
  const [img5, setImg5] = useState();
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [author, setauthor] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleimagesUpload1 = async (img1) => {
    // setPicLoading(true);
    if (img1 === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }
    // console.log(img1);
    if (
      img1.type === "image/jpeg" ||
      img1.type === "image/png" ||
      img1.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", img1);
      data.append("upload_preset", "srjresort");
      data.append("cloud_name", "dfxoyzxlf");
      fetch("https://api.cloudinary.com/v1_1/dfxoyzxlf/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImg1(data.url.toString());
          console.log(data.url.toString());
          // setPicLoading(false);
          toast({
            title: "Picture Uploaded",
            description: "Uploaded Pic 1",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom",
          });
        })
        .catch((err) => {
          console.log(err);
          // setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // setPicLoading(false);
      return;
    }
  };
  const handleimagesUpload2 = async (img2) => {
    // setPicLoading(true);
    if (img2 === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }
    // console.log(img2);
    if (
      img2.type === "image/jpeg" ||
      img2.type === "image/png" ||
      img2.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", img2);
      data.append("upload_preset", "srjresort");
      data.append("cloud_name", "dfxoyzxlf");
      fetch("https://api.cloudinary.com/v1_1/dfxoyzxlf/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImg2(data.url.toString());
          console.log(data.url.toString());
          // setPicLoading(false);
          toast({
            title: "Picture Uploaded",
            description: "Uploaded Uploaded Pic 2",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom",
          });
        })
        .catch((err) => {
          console.log(err);
          // setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // setPicLoading(false);
      return;
    }
  };
  const handleimagesUpload3 = async (img3) => {
    // setPicLoading(true);
    if (img3 === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }
    // console.log(img3);
    if (
      img3.type === "image/jpeg" ||
      img3.type === "image/png" ||
      img3.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", img3);
      data.append("upload_preset", "srjresort");
      data.append("cloud_name", "dfxoyzxlf");
      fetch("https://api.cloudinary.com/v1_1/dfxoyzxlf/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImg3(data.url.toString());
          console.log(data.url.toString());
          // setPicLoading(false);
          toast({
            title: "Picture Uploaded",
            description: "Uploaded Uploaded Pic 3",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom",
          });
        })
        .catch((err) => {
          console.log(err);
          // setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // setPicLoading(false);
      return;
    }
  };
  const handleimagesUpload4 = async (img4) => {
    // setPicLoading(true);
    if (img4 === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }
    // console.log(img4);
    if (
      img4.type === "image/jpeg" ||
      img4.type === "image/png" ||
      img4.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", img4);
      data.append("upload_preset", "srjresort");
      data.append("cloud_name", "dfxoyzxlf");
      fetch("https://api.cloudinary.com/v1_1/dfxoyzxlf/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImg4(data.url.toString());
          console.log(data.url.toString());
          // setPicLoading(false);
          toast({
            title: "Picture Uploaded",
            description: "Uploaded Uploaded Pic 4",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom",
          });
        })
        .catch((err) => {
          console.log(err);
          // setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // setPicLoading(false);
      return;
    }
  };
  const handleimagesUpload5 = async (img5) => {
    // setPicLoading(true);
    if (img5 === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }
    // console.log(img5);
    if (
      img5.type === "image/jpeg" ||
      img5.type === "image/png" ||
      img5.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", img5);
      data.append("upload_preset", "srjresort");
      data.append("cloud_name", "dfxoyzxlf");
      fetch("https://api.cloudinary.com/v1_1/dfxoyzxlf/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImg5(data.url.toString());
          console.log(data.url.toString());
          // setPicLoading(false);
          toast({
            title: "Picture Uploaded",
            description: "Uploaded Uploaded Pic 5",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "bottom",
          });
        })
        .catch((err) => {
          console.log(err);
          // setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
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
      
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      let images = [img1, img2, img3, img4, img5];
      console.log("images: ", images);
      // console.log("images: ", images);
      const { data } = await axios.post(
        "https://srj-back-end.vercel.app/blog/posts",
        { images, title, content, author },
        config
      );
      console.log(data, "hidata");
      toast({
        title: "Your blog uploaded succesfully",
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
          <ModalHeader>Create your Blog</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormControl id="images">
                <FormLabel>Upload images</FormLabel>
                <Input
                  type="file"
                  accept="images/*"
                  onChange={(e) => handleimagesUpload1(e.target.files[0])}
                />
                <Input
                  type="file"
                  accept="images/*"
                  onChange={(e) => handleimagesUpload2(e.target.files[0])}
                />
                <Input
                  type="file"
                  accept="images/*"
                  onChange={(e) => handleimagesUpload3(e.target.files[0])}
                />
                <Input
                  type="file"
                  accept="images/*"
                  onChange={(e) => handleimagesUpload4(e.target.files[0])}
                />
                <Input
                  type="file"
                  accept="images/*"
                  onChange={(e) => handleimagesUpload5(e.target.files[0])}
                />
              </FormControl>

              <FormControl id="title" mt={4}>
                <FormLabel>Blog Title</FormLabel>
                <Input type="text" value={title} onChange={handletitleChange} />
              </FormControl>

              <FormControl id="content" mt={4}>
                <FormLabel>Content</FormLabel>
                <div style={{ width: "400px" }}>
                  <ReactQuill value={content} onChange={handlecontentChange} />
                </div>
              </FormControl>

              <FormControl id="author" my={4}>
                <FormLabel>Author</FormLabel>
                <Input
                  type="text"
                  value={author}
                  onChange={handleAuthorChange}
                />
              </FormControl>
              <Spacer />
              <Button type="submit" mr={5} colorScheme="blue">
                Submit
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                Cancel
              </Button>
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormComponent;
