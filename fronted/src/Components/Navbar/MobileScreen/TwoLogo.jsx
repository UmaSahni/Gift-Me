import React from 'react'

const TwoLogo = () => {
  return (
    <div>
        <Box display={{base:"none",md:"block"}}   flex={1} p="4" >
            <Flex justifyContent={"space-around"} >
          <Box>
            <Image width={8} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt88337dc20d1d8278/5e178293942caf0fc36b77ab/Header-Icon-PWA-profile.svg" />
            <Text>Sign In</Text>
          </Box>

          <Box>
            <Image width={6} src="https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt7888ec93d3d5c1ec/5e17829300c38f0f022d3646/Header-Icon-PWA-bag.svg?height=25&width=44" />
            <Text>0 Cart</Text>
          </Box>
          </Flex>
        </Box>
    </div>
  )
}

export default TwoLogo