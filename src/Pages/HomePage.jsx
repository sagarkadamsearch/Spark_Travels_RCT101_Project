import { Divider,Input,Image, Flex, Spacer,Box,Heading,Button,ButtonGroup,Text,Switch,FormLabel,Tabs,Tab,TabList, styled, Center } from '@chakra-ui/react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'


export default function HomePage(){

   const {DarkMode,modeChange} = useContext(ThemeContext);

   return <>
     <Box bgColor={DarkMode?"black":"white"}>
     <Box
      backgroundImage="url('https://wallpaperaccess.com/full/1431632.jpg')"
      bgSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      w="100%"
      h="500px"
       >      
   </Box>
           <Box>
                <Heading as="h1" color={DarkMode?"white":"black"} size="lg" style={{padding: "2%"}}>Best <span  style={{color: "#86B817",fontSize:"30px"}}>Services</span></Heading>
                <Heading as="h1" color={DarkMode?"white":"black"} size="md">Our team of travel experts is dedicated to ensuring that you have the vacation of life
                    time. 
                 </Heading>
                    <Heading as="h1"color={DarkMode?"white":"black"} size="md">Choose us for your next  adventure and see why we are the best in the business.</Heading>
                
                 <Center marginTop="30px">
                  <Flex gap="20px" color={DarkMode?"white":"black"}>
                     <Box bgColor={DarkMode?"gray":"white"} boxShadow='lg' width="250px" h="250px"  border="1px solid black" borderRadius="20px">
                        <Image w="80px" margin="auto" src='https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2/128/airplane-circle-blue-512.png'/>
                        <Heading marginTop="10px" marginBottom="10px" size="md">International Tour</Heading>
                        <Text textAlign="center">Explore the world like never before with our international tours. Discover new cultures. meet new
                        people. and create memories that will last a lifetime.</Text>
                     </Box>

                     <Box  bgColor={DarkMode?"gray":"white"}boxShadow='lg' width="250px" h="250px"  border="1px solid black" borderRadius="20px">
                        <Image w="80px" margin="auto" src='https://www.jing.fm/clipimg/full/90-902778_fitbit-community-council-members-are-a-select-group.png'/>
                        <Heading marginTop="10px" marginBottom="10px" size="md">Travel Community</Heading>
                        <Text textAlign="center">join our travel community and connect with liked-minded travelers from from around the world.
                        Share tips. stories and advice on your next adventure.</Text>
                     </Box>

                     <Box bgColor={DarkMode?"gray":"white"} boxShadow='lg' width="250px" h="250px"  border="1px solid black" borderRadius="20px">
                        <Image w="80px" margin="auto" src='https://cdn0.iconfinder.com/data/icons/mobile-device/512/math-function-percent-blue-round-2-512.png'/>
                        <Heading marginTop="10px" marginBottom="10px" size="md">Great Offers</Heading>
                        <Text textAlign="center">don't miss out on our exclusive discounts and deals on flights hotels . and vacation packages
                        Save big and travel more with our special offers</Text>
                     </Box>
                  </Flex>
                  </Center>     
            </Box> 

     <Box>
      <Heading as="h3" size="lg" color={DarkMode?"white":"black"} marginTop="40px">Great locations across the world</Heading>
      <Heading as="h4" size="md" color={DarkMode?"white":"black"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam possimus assumenda pariatur animi
                    officia ab porro.
      </Heading>
      <Heading as="h4" size="md" color={DarkMode?"white":"black"}>quas reiciendis necessitatibus praesentium numquam itaque.
      </Heading>
      <Image src="https://freepngimg.com/thumb/border/81937-blue-world-globe-map-free-hq-image.png"></Image>
     </Box>

      <Box bgColor="#82074A" color={DarkMode?"white":"black"} >
          <Flex  h="100px" justifyContent="center" >
             <Box marginTop="20px">
                 <Heading as="h4" fontSize="20px">Subscribe for get updates of new Packages</Heading>
                 <Flex gap="10px" marginTop="10px">
                 <Input bgColor="yellow.100" borderRadius="10px" placeholder='Write your email id here'></Input>
                 <Button bgColor="lightblue" borderRadius="10px" >Subscribe</Button>
                 </Flex>
             </Box>
          </Flex>
          <Divider orientation='horizontal' />
          <Flex  justifyContent="center" gap="10px" marginTop="10px" paddingBottom="10px">
            <Image width="50px" src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"/>
            <Image width="30px" src="https://pngimg.com/uploads/instagram/instagram_PNG10.png"/>
            <Image width="35px" src="https://pluspng.com/img-png/twitter-logo-png-logo-twitter-in-png-2500.png"/>
          </Flex>
      </Box>

   </Box>
   </>
}