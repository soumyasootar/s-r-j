import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  Link,
  Spacer,
  Stack,
  VStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../Images/logo.png";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  return (
    <>
      <HStack
        p={[0, 2, 5, 5]}
        bg={useColorModeValue("white", "dark")}
        boxShadow={"xl"}
        position={"sticky"}
        top={"0"}
        zIndex={"overlay"}
      >
        <Image src={logo} w={{  md: "250px", lg: "120px" }}/>
        <Spacer />
        <Stack
          direction="row"
          w={"40%"}
          margin={"auto"}
          alignItems={"center"}
          display={{ base: "none", md: "none", lg: "flex" }}
        >
          <Link href="/">Home</Link>
          <Spacer />
          <Link href="/about">About</Link>
          <Spacer />
          <Link href="/rooms">Room</Link>
          <Spacer />
          <Link href="/explore">Explore Jajpur</Link>
          <Spacer />
          <Link href="/contact">Contact</Link>
          <Spacer />
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "☀️" : "🌙"}
          </Button>
          <Spacer />
        </Stack>
        <>
          <Button size={{ base: "lg", md: "lg", lg: "sm" }}
            bg="#B43B3A"
            color={"whiteAlpha.900"}
            _hover={{color:"black"}}
            onClick={onOpen}
            display={{ base: "flex", md: "flex", lg: "none" }}
          >
            <HamburgerIcon/>
          </Button>
        </>
        {/* <Link href="/explore">
          <Button size={"sm"}
            bg="#B43B3A"
            color={"whiteAlpha.900"}
            _hover={{color:"black"}}
            // onClick={onOpen}
            display={{ base: "flex", md: "flex", lg: "none" }}
          >
            Explore Jajpur 🏙️
          </Button>
        </Link> */}
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              Welcome to Sarita Resorts ✨
            </DrawerHeader>
            <DrawerBody bg={"#F9B872"}>
              <VStack
                margin={"auto"}
                alignItems={"center"}
                color={useColorModeValue("dark", "dark")}
                fontWeight={"500"}
              >
                <Link href="/" width={"100%"}>
                  <Box
                    bg={"orange.600"}
                    borderRadius={"2xl"}
                    w={"100%"}
                    p={"4"}
                    textAlign={"center"}
                  >
                    Home
                  </Box>
                </Link>

                <Link href="/about" width={"100%"}>
                  <Box
                    bg={"orange.600"}
                    borderRadius={"2xl"}
                    w={"100%"}
                    p={"4"}
                    textAlign={"center"}
                  >
                    ABOUT
                  </Box>
                </Link>

                <Link href="/rooms" width={"100%"}>
                  <Box
                    bg={"orange.600"}
                    borderRadius={"2xl"}
                    w={"100%"}
                    p={"4"}
                    textAlign={"center"}
                  >
                    EXPLORE ROOMS
                  </Box>
                </Link>

                <Link href="/explore" width={"100%"}>
                  <Box
                    bg={"orange.600"}
                    borderRadius={"2xl"}
                    w={"100%"}
                    p={"4"}
                    textAlign={"center"}
                  >
                    EXPLORE JAJPUR
                  </Box>
                </Link>

                <Link href="/contact" width={"100%"}>
                  <Box
                    bg={"orange.600"}
                    borderRadius={"2xl"}
                    w={"100%"}
                    p={"4"}
                    textAlign={"center"}
                  >
                    CONTACT US
                  </Box>
                </Link>

                <Box
                  bg={"orange.600"}
                  borderRadius={"2xl"}
                  w={"100%"}
                  p={"4"}
                  textAlign={"center"}
                >
                  <Button onClick={toggleColorMode} bg={"transparent"}>
                    {colorMode === "light" ? "☀️" : "🌙"}
                  </Button>
                </Box>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HStack>
    </>
  );
};

export default Navbar;
