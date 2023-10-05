import { Box, Divider } from '@chakra-ui/react'
import React from 'react'
import BrandLogo from './BrandLogo'
import SearchBox from './SearchBox'
import MegaMenu from './MegaMenu'

const Navbar = () => {
  return (
    <Box>
        <BrandLogo/>
        <SearchBox/>
        <MegaMenu/>
    </Box>
  )
}

export default Navbar