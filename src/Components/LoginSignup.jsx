import { Flex, Spacer,Box,Heading,Button,ButtonGroup,Text,Switch,FormLabel,Tabs,Tab,TabList, styled } from '@chakra-ui/react'
import { Link,NavLink} from 'react-router-dom'


export default function LoginSignup({w,direction,aItem}){

    return (
        <Flex direction={direction} gap="10px" alignItems={aItem} marginEnd="6px">
        <Link to="/signUp"><Button w={w} h="35px" colorScheme='teal'>Sign Up</Button></Link>
        <Link to="/login"><Button w={w} h="35px"colorScheme='teal'>Log in</Button></Link>
        </Flex>
    )
}