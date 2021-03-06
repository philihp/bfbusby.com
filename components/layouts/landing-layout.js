import React from 'react'
import { Flex } from '@chakra-ui/react'
import Header from '../sections/header'

const LandingLayout = ({ children, ...props }) => (
  <Flex
    direction="column"
    align="center"
    maxW={{ xl: '1200px' }}
    m="0 auto"
    {...props}
  >
    <Header />
    {children}
  </Flex>
)

export default LandingLayout
