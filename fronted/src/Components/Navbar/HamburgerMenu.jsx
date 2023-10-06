import React from 'react';
import { Box, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const HamburgerMenu = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box p="4">
              <Box mb="2" onClick={onClose}>Menu Item 1</Box>
              <Box mb="2" onClick={onClose}>Menu Item 2</Box>
              <Box onClick={onClose}>Menu Item 3</Box>
              {/* Add more menu items as needed */}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default HamburgerMenu;
