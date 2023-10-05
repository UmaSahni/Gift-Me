import { Box, Button, Flex, Image, Input, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const SearchBox = () => {
  return (
    <div>
      <Flex boxShadow='xs' cursor={"pointer"}  >
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flex={1} p="4" >
         <Image width={28} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltce6d6c480577e10e/5d4866eff9ece57fa9a82245/flowers.png?quality=60&auto=webp&optimize={medium}" />
        </Box>
        
        <Box flex={2} p="4" >
             <form style={{ display: 'flex', alignItems: 'center' }}>
            <Input  flex="1" mr="2" placeholder="Search..." />
            <Button color={"white"} bgColor={"purple.600"} _hover={{bgColor:"purple.600"}} type="submit">Search</Button>
          </form>
        </Box>

        <Box   flex={1} p="4" >
            <Flex justifyContent={"space-around"} >
          <Box>
            <Image width={8} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88337dc20d1d8278/5e178293942caf0fc36b77ab/Header-Icon-PWA-profile.svg" />
            <Text>Sign In</Text>
          </Box>

          <Box>
            <Image width={10} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/bltd7f3af8e242d37c1/5e1782936430b50f03d6ccc3/Header-Icon-PWA-truck.svg?height=25&width=44" />
            <Text>My Orders</Text>
          </Box>

          <Box>
            <Image width={6} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7888ec93d3d5c1ec/5e17829300c38f0f022d3646/Header-Icon-PWA-bag.svg?height=25&width=44" />
            <Text>0 Cart</Text>
          </Box>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default SearchBox;
