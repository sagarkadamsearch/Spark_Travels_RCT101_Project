import { Flex, Spacer,Box,Heading,Button,ButtonGroup,Text,Switch,FormLabel,Tabs,Tab,TabList, styled } from '@chakra-ui/react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { Link,NavLink} from 'react-router-dom'
import NavLinksNavbar from "./NavLinksNavbar";
import { HamburgerIconNavbar } from './HamburgerIconNavbar';
import LoginSignup from "./LoginSignup"

export default function Navbar(){

  const {DarkMode,modeChange} = useContext(ThemeContext);


  const style1 = {
    bg:DarkMode?"black":"gold",
    minWidth:'max-content',
    alignItems:'center',
    justifyContent:'space-between',
    border:'1px solid black',
    borderRadius:'7px',
    color:DarkMode?"white":"black",
  }


  const style2 = {
    gap:{base:"5px",sm:"120px","2xl":"120"},
    minWidth:'max-content',
    alignItems:'center',
    justifyContent:'space-between',
    // border:'1px solid black',
    borderRadius:'1px'
  }

 return <Flex sx={style1}>
 <Box p='2'>
   <Heading size='md'>Spark Travel</Heading>
 </Box>
  
  {/* <HamburgerIconNavbar/> */}
  <Box me="0px">
    <Flex sx={style2}>
     <NavLinksNavbar/>
    </Flex>
  </Box>
    
 <Flex alignItems='center' gap="5px">
  <Text>Dark-Mode</Text>
  <Switch id='email-alerts' onChange={modeChange} marginTop="2px"/>
 </Flex>
   
 <LoginSignup direction="row" aItem=" "/>
</Flex> 
}