import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bg={"dark"} width={"100%"}>
        <Center >
            <Text>{new Date().toLocaleDateString()}</Text>
        </Center>
    </Box>
  )
}

export default Footer