import React from 'react'
import PropTypes from 'prop-types'
import { Text, Box, Flex, Button } from '@chakra-ui/react'
import { Link } from 'next/link'
import Logo from '../ui/logo'
import MenuIcon from '../ui/menu-icon'
import CloseIcon from '../ui/close-icon'

const Header = (props) => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={['white', 'white', 'primary.500', 'primary.500']}
        />
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <Text mb={{ base: 8, sm: 0 }} mr={{ base: 0, sm: 8 }} display="block">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Text>

          <Text mb={{ base: 8, sm: 0 }} mr={{ base: 0, sm: 8 }} display="block">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Text>
          <Text mb={{ base: 8, sm: 0 }} mr={{ base: 0, sm: 8 }} display="block">
            <Link href="/">
              <a>Home</a>
            </Link>
          </Text>

          <Text mb={{ base: 8, sm: 0 }} mr={{ base: 0, sm: 0 }} display="block">
            <Button
              size="sm"
              rounded="md"
              color={['primary.500', 'primary.500', 'white', 'white']}
              bg={['white', 'white', 'primary.500', 'primary.500']}
              _hover={{
                bg: [
                  'primary.100',
                  'primary.100',
                  'primary.600',
                  'primary.600',
                ],
              }}
            >
              Create Account
            </Button>
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
