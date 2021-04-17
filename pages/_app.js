import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
