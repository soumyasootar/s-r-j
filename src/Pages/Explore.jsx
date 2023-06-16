import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <Box height={"100vh"} >
{/* Grid of Blogs  */}

<Link to="/explore/1234">
<Button>OPEN BLOG</Button>
</Link>
    </Box>
  )
}

export default Explore