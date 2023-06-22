import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Select,
  Text,
  VStack,Table, Tbody, Tr, Td
} from "@chakra-ui/react";

import { BsWifi } from "react-icons/bs";
import { FaWater } from "react-icons/fa";
import { MdRoomService } from "react-icons/md";
import { AiFillCreditCard } from "react-icons/ai";
import { BiShower } from "react-icons/bi";
import FormComponent from "./FormComponent";
// MdRoomService
const ImageComponent = () => {
  return (
    <Flex>
      <Image
        src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg"
        h={"340px"}
        mr={4}
      />

      <Box>
        <Image
          src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg"
          h={"108px"}
          mb={2}
        />
        <Image
          src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg"
          h={"108px"}
          mb={2}
        />
        <Image
          src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg"
          h={"108px"}
        />
      </Box>
    </Flex>
  );
};
const PayBillButton = () => {
  return (
    <>
      <Button position={"absolute"} w={"150px"} left="75%" top={"50%"}>
        Pay Bill
      </Button>
    </>
  );
};
// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
const CheckinCheckout = () => {
  return (
    <>
      <Box
        m={"auto"}
        w={"30%"}
        bg={"white"}
        borderRadius={"15px"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
        <Flex bg={"white"} w={"100%"} justifyContent={"space-between"}>
          <VStack
            bg={"white"}
            h={"100px"}
            borderRadius={"5px"}
            pl={"5px"}
            pr={"5px"}
            justifyContent={"space-around"}
          >
            <Flex>
              <span style={{ paddingRight: "12px" }}>Check In</span>
              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              />
            </Flex>

            <Flex>
              <span style={{ paddingRight: "12px" }}>Check Out</span>
              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              />
            </Flex>
          </VStack>
          <Box>
            <Flex alignItems={"center"}>
              <span style={{ paddingRight: "12px" }}>Person</span>
              <Select placeholder="Select option">
                <option value="option1">1</option>
                <option value="option2">2</option>
                <option value="option3">3</option>
                <option value="option3">4</option>
                <option value="option3">5</option>
              </Select>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <PayBillButton />
    </>
  );
};

const Amenities = () => {
  return (
    <>
     
      <Table variant="unstyled" w={"40%"}>
        <Tbody>
          <Tr>
            <Td>
              <Flex alignItems={"center"}>
                <Icon boxSize={"20px"} as={BsWifi} mr={"5px"} color="black" />
                <Text as={"span"} color="black">
                  Free Wi-Fi
                </Text>
              </Flex>
            </Td>
            <Td>
              <Flex alignItems={"center"}>
                <Icon boxSize={"20px"} as={FaWater} mr={"5px"} color="black" />
                <Text as={"span"} color="black">
                  Hot water
                </Text>
              </Flex>
            </Td>
            <Td>
              <Flex alignItems={"center"}>
                <Icon
                  boxSize={"20px"}
                  as={MdRoomService}
                  mr={"5px"}
                  color="black"
                />
                <Text as={"span"} color="black">
                  24/7 Reception
                </Text>
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Flex alignItems={"center"}>
                <Icon
                  boxSize={"20px"}
                  as={AiFillCreditCard}
                  mr={"5px"}
                  color="black"
                />
                <Text as={"span"} color="black">
                  Card Payment Accepted
                </Text>
              </Flex>
            </Td>
            <Td>
              <Flex alignItems={"center"}>
                <Icon boxSize={"20px"} as={BiShower} mr={"5px"} color="black" />
                <Text as={"span"} color="black">
                  Shower
                </Text>
              </Flex>
            </Td>
            <Td>{/* Add another icon here */}</Td>
          </Tr>
          <Tr>{/* Add icons for the third row here */}</Tr>
        </Tbody>
      </Table>
    </>
  );
};

const IndividualRoom = () => {
  return (
    <>
      <Flex>
        <ImageComponent />
        <CheckinCheckout />
      </Flex>
      <Amenities />
      {/* <FormComponent/> */}
    </>
  );
};

export default IndividualRoom;
