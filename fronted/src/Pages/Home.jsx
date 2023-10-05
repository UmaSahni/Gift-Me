import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Navbar from "../Components/Navbar/Navbar";
const Home = () => {
  return (
    <Box>
      {/* Green Box  */}
      <Box bg="green.700" w="100%" p={2} color="white">
        <Heading as="h3" size="md" fontFamily={"unset"} > New! 1-800-Flowers Disney Collection </Heading>
      </Box>

     {/* Submenu like box  */}
     <Box>
      <Navbar/>
     </Box>
    </Box>
  );
};

export default Home;
