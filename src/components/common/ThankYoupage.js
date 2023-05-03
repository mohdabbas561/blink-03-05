import { Heading, Image, Text,Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import gif from "./output-onlinegiftools.gif"



const ThankYouPage = () => {
    const [time,setTime]=useState(7)
    const navigate=useNavigate()

    // useEffect(()=>{
    //     setInterval(()=>setTime(prev=>prev-1),1000)
    //      setTimeout(()=>navigate("/"),7000)
    // },[])
  return (<>
    <Box align="center">
      
        <Image style={{marginTop:"-190px"}}
         width={{ base: '300px', md: '600px', lg: '700px' }}
         src={gif}></Image>
         <Heading style={{marginTop:"-60px" , marginBottom:"60px" , color:"white"}}>Order Completed</Heading>
         
    </Box>
    </>
  )
}

export default ThankYouPage;