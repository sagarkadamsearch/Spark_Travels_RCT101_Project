import { Flex, Spacer,Box,Heading,Button,ButtonGroup } from '@chakra-ui/react'

export default function Navbar(){


 return <Flex minWidth='max-content' alignItems='center' justifyContent='space-between' border='1px solid black' borderRadius='7px'>
 <Box p='2'>
   <Heading size='md'>Spark Travel</Heading>
 </Box>

 <ButtonGroup gap='2'>
   <Button colorScheme='teal'>Sign Up</Button>
   <Button colorScheme='teal'>Log in</Button>
 </ButtonGroup>
</Flex> 
}