import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../utils/theme'

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
)

export default MyApp
