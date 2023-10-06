import { Box, IconButton, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import BrandLogo from './BrandLogo';
import MegaMenu from './MegaMenu';
import { HamburgerIcon } from '@chakra-ui/icons';
import SearchBox from './SearchBox';
import HamburgerMenu from './HamburgerMenu'; // Import the HamburgerMenu component

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <IconButton
        display={{ base: 'block', md: 'none' }}
        icon={<HamburgerIcon />}
        onClick={onOpen} // Open the drawer when the hamburger icon is clicked
        variant="outline"
      />
      <Box display={{ base: 'none', md: 'block' }}>
        <BrandLogo />
      </Box>
      <SearchBox />
      {/* <MegaMenu /> */}
      <HamburgerMenu isOpen={isOpen} onClose={onClose} /> {/* Render the HamburgerMenu component */}
    </Box>
  );
};

export default Navbar;
