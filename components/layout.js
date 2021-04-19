import React from 'react'
import { Flex, Spacer, Heading, Box, Button } from '@chakra-ui/react'

// future phil: use the mempool color scheme! she wants dark

const Layout = ({ children }) => (
  <>
    <Flex p="20">
      <Box>
        <Heading size="lg">Bonnie F. Busby</Heading>
      </Box>
      <Spacer />
      <Box>asdf</Box>
    </Flex>
    <Box>
      {children}
      <Button>Chakra</Button>
    </Box>
  </>
)

export default Layout
