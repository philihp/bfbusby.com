import React from 'react'
import Link from 'next/link'
import { Text, Box, Flex, Button } from '@chakra-ui/react'
import Logo from '../ui/logo'
import MenuIcon from '../ui/menu-icon'
import MenuItem from '../ui/menu-item'
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
        <Logo color={['white', 'white', 'primary.500', 'primary.500']} />
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
          <MenuItem href="/biography">Biography</MenuItem>
          <MenuItem href="/gallery">Gallery</MenuItem>
          <MenuItem href="/experience">Experience</MenuItem>

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
              <Link href="/contact">Contact</Link>
            </Button>
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header
