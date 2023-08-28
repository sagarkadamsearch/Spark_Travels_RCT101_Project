import { Flex } from "@chakra-ui/react";
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'


export default function Login(){

const {DarkMode,modeChange} = useContext(ThemeContext);


  return (
     
    <div style={{backgroundColor:DarkMode?"black":"white", width:"100%",height:"500px",margin:"none",padding:"none",marginTop:"4px"}}>
    <div style={{width:"400px",margin:"auto",marginTop:"20px"}} >     
        <form style={{paddingTop:"20px"}}>
        <Flex alignItems="center"  direction="column" gap="20px">    
        <input  style={{border:"1px solid black",borderRadius:"5px",height:"40px",width:"80%"}} type="text" name="userName" placeholder="Enter username"/>
        <input style={{border:"1px solid black",borderRadius:"5px",height:"40px",width:"80%"}} type="text" placeholder="Enter Passowrd" />
        <button style={{border:"1px solid black", width:"100px",backgroundColor:"lightskyblue",height:"40px", borderRadius:"10px"}} type="submit">Submit</button>
        </Flex>
     </form>   
     </div>
   </div>
  )   

}