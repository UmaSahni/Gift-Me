import React from 'react'
import { Box, Center, Image, Wrap, WrapItem } from '@chakra-ui/react'
const BrandLogo = () => {
  return (
    <Box >
   <Center  boxShadow='xs' >
    <Wrap  spacing='30px'  >
  <WrapItem boxShadow='xs'  _hover={{ borderBottom:"2px", cursor:"pointer" }} >
    <Center w='180px' h='80px' >
      <Image width={"11"} height={"8"} src='https://images.contentstack.io/v3/assets/blt95e0138311135214/blt13b0f02cd71877df/5f08974a8b0e59084c9f7570/hd-logo-v3.svg' />
    </Center>
  </WrapItem>
  <WrapItem boxShadow='xs' _hover={{ borderBottom:"2px", cursor:"pointer" }}  >
    <Center w='180px' h='80px' >
     <Image width={"11"} height={"8"} src='https://images.contentstack.io/v3/assets/blt95e0138311135214/bltac334446d6f9e89c/5f96fc4f2425cd7a8af6845e/pmall_svg-logo-v2.svg?height=32&width=78' />
    </Center>
  </WrapItem>
  <WrapItem boxShadow='xs' _hover={{ borderBottom:"2px", cursor:"pointer" }}  >
    <Center w='180px' h='80px' >
     <Image width={"11"} height={"8"} src='https://images.contentstack.io/v3/assets/blt95e0138311135214/bltf0b1021465476e4f/5f08974b0d1d2008538ce15a/SharisLogo_r.svg?height=32&width=78' />
    </Center>
  </WrapItem>
  <WrapItem boxShadow='xs' _hover={{ borderBottom:"2px", cursor:"pointer" }}  >
    <Center w='180px' h='80px' >
      <Image width={"11"} height={"8"} src='https://images.contentstack.io/v3/assets/bltc699f5c4977942f7/blt329c48c98c46443f/64111cfcaa6c3f7f594be64c/1800Baskets_Logo_compact.svg?height=32&width=78' />
    </Center>
  </WrapItem>
  <WrapItem boxShadow='xs' _hover={{ borderBottom:"2px", cursor:"pointer" }}  >
    <Center w='180px' h='80px' >
      <Image width={"11"} height={"8"} src='https://images.contentstack.io/v3/assets/blt95e0138311135214/blt71adcb0696952e83/5f08974baa5d1801639286b4/sch-logo-v2.svg?height=32&width=78' />
    </Center>
  </WrapItem>
  <WrapItem boxShadow='xs' _hover={{ borderBottom:"2px", cursor:"pointer" }}  >
    <Center w='180px' h='80px' >
     <Image width={"11"} height={"8"} src='https://images.contentstack.io/v3/assets/blt95e0138311135214/bltef2e14ec247ab827/5f08974a2cd8e87f92bdd257/fb-logo-v2.svg?height=32&width=78' />
    </Center>
  </WrapItem>
  <WrapItem boxShadow='xs' _hover={{ borderBottom:"2px", cursor:"pointer" }}  >
    <Center w='180px' h='80px' >
     <Image width={"11"} height={"8"} src='https://images.contentstack.io/v3/assets/blt95e0138311135214/blte1e2eb25cfd09fb6/5f08974a91afb901b86d5251/cco-logo-v2.svg?height=32&width=78' />
    </Center>
  </WrapItem>
  
</Wrap>
</Center>
</Box>
  )
}

export default BrandLogo