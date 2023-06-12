import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bg={"black"} color={"white"} width={"100%"}>
        <Center h={"100px"} bg={"blackAlpha.200"}>
            <Text>{new Date().toLocaleDateString()}</Text>
        </Center>
    </Box>
  )
}

export default Footer