import { Link,NavLink} from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export default function NavLinksNavbar(){

const {DarkMode,modeChange} = useContext(ThemeContext);

  let links = [
       {to:"/",text:"Home"},
       {to:"/about",text:"About"},
       {to:"/holiday",text:"Holiday"},
       {to:"/testimonal",text:"Testimonal"},
  ]

  const activeStyle = {
      color:DarkMode?"yellow":"red",
      textDecoration:DarkMode?"underline solid yellow":"underline solid red",
      textUnderlineOffset:"12px",
  }

  const defaultStyle = {
    color:DarkMode?"white":"black",
}

   return <>
      {links.length>0 && links.map((link)=> <NavLink key={link.to} to={link.to} style={({isActive})=> isActive?activeStyle:defaultStyle} >{link.text}</NavLink> )}
   </> 
}