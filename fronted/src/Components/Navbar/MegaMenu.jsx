import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const MegaMenu = () => {
  return (
    <div>
      <Box p={"3"} borderTop={"1px solid"} borderBottom={"1px solid"} >
        <Flex pl={10} pr={10} justifyContent={"space-between"} >
          <Text>DISNEY</Text>
          <Text>BIRTHDAY</Text>
          <Text>SYMPATHY</Text>
          <Text>OCCATION</Text>
          <Text>GIFT BASKKET</Text>
          <Text>GIFTS AND MORE</Text>
          <Text>SALE</Text>
        </Flex>
      </Box>
    </div>
  );
};

export default MegaMenu;
