import { extendTheme } from '@chakra-ui/react'

const colors = {
  primary: {
    100: '#69DDFF',
    200: '#96CDFF',
    300: '#D8E1FF',
    400: '#DBBADD',
    500: '#BE92A2',
    600: '#203E6A',
    700: '#7C8E88',
    800: '#000000',
    900: '#FFFFFF',
  },
}

const customTheme = extendTheme({ colors })

export default customTheme
