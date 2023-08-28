import {  Button,Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Input, Flex,} from '@chakra-ui/react';
import {HamburgerIcon } from '@chakra-ui/icons'

import {useState} from "react"
import NavLinksNavbar from './NavLinksNavbar';
import LoginSignup from './LoginSignup';

export const HamburgerIconNavbar = () => {

  const [isOpen,setIsOpen] = useState(false)

   const onOpen = ()=>{
     setIsOpen(true);
   }

  const onClose = ()=>{
     setIsOpen(false);
   }
  
  return(
    <>
      <HamburgerIcon colorScheme='teal' onClick={onOpen} _hover={{"cursor":"pointer"}}/>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
          size="xs"
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />
          <DrawerHeader>Choose where to go</DrawerHeader>

          <DrawerBody>
            <Flex direction="column" gap="20px">
              <NavLinksNavbar/>
            </Flex>
            <br />
            <LoginSignup direction="column" aItem="left" w="80px"/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}