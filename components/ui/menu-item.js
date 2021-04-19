import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Text } from '@chakra-ui/react'

const MenuItem = ({ isLast, children, href }) => (
  <>
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Text>
  </>
)

MenuItem.propTypes = {
  isLast: PropTypes.bool,
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOf(PropTypes.node, PropTypes.arrayOf(PropTypes.node))
    .isRequired,
}

MenuItem.defaultProps = {
  isLast: false,
}

export default MenuItem
