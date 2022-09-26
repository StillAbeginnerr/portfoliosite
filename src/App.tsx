import React from 'react';
import { Box, Button, ChakraProvider, Text} from '@chakra-ui/react'
import zomato from './zomato.png'
import ytd from './YTdownloader.png'
import flyravel from './flyravel.png'
import weatherweb from './weatherweb.png'
import "./Heading.css"
import './gradient.css'
import './hover.css'
function App() {
  return (
   <>
   <ChakraProvider>
    <Box w='100%' h='3000px' bgGradient='linear(to-l, #000000, #000000)'>
    <Text className='Heading header-grad'
  bgClip='text'
  fontSize='4xl'
  fontWeight='extrabold' position='absolute' left='05.5%' top='0.5%' size='md'
  ><h1>Shivam Agarwal's Portfolio</h1>(Under Progress)<br></br><br></br><br></br><br></br> </Text>
<div>
  
  <Text className='Heading header-grad'
  bgClip='text'
  fontSize='4xl'
  fontWeight='extrabold' position='absolute' left='05.5%' top='10%' size='md'>
  <h2>Frontend + Backend Web dev Projects & Competitive Programming</h2>
  </Text>
<Box className='Best-projects gradient-3' w='820px' h='400px' >
  <img className='image-1' src={zomato} alt=''></img>
</Box>
</div>
<div>
<Box className='Best-projects gradient-1 ' w='620px' h='150px' position='absolute' top='38.1%'>
<Text color='Black' fontSize='2xl'  position='relative' left='08%' top='12%' >I made this website in July 2022 <br></br> to learn Fetch API</Text>

</Box>
<Box className='Best-projects gradient-3' w='620px' h='230px'  position='absolute'top='30.1%' left='5%'>
  
<Text className=''color='black' fontSize='2xl' fontWeight='extrabold' position='absolute' left='2.5%' top='10%' >
  A fullstack weather forecasting webapp - Basic JS
</Text>
<Button className='hovers' position='relative' left='82%' top='66%'><a href='https://weather-web-omega.vercel.app/'>Click Here</a></Button>
</Box>
</div>
<div className='part-1-2'>
<Box className='Best-projects gradient-3' w='520px' h='140px'  position='absolute' left='62%'>
<Text  fontSize='2xl' color='black' position='relative' left='06%' top='05%' > Zomato Frontend Clone </Text>
</Box>
<Box className='Best-projects gradient-1' w='520px' h='240px'  position='absolute'top='20.3%' left='62%'>
<Button className='hovers' position='absolute' left='78%' top='10%'><a href='https://zomatoclone-blush.vercel.app/'>Click Here</a></Button>
<Box className='description' w='360px' h='100px' >
<Text  fontSize='2xl'  fontWeight='extrabold' position='absolute' left='6%' top='-230%' >
I made the website in march 2022 <br></br> for the clone IT repo in the girlscript <br></br>summer of code
</Text>
</Box>
</Box>
</div>
<div>
<Box className='Best-projects-2 gradient-2' w='790px' h='400px'>
  <img className='image-2' src={weatherweb} alt=''></img>
  
<Box className='description' w='360px' h='100px' >


</Box>
</Box>
</div>


<div className='part-2'>
<Box className='Best-projects gradient-2' w='575px' h='300px'>
  <img className='image-1' src={flyravel} alt=''></img>
<Box className='description' w='360px' h='100px' >
</Box>
<Box className='Best-projects gradient-1' w='790px' h='130px'  position='absolute'top='0.3%' left='106%'>
<Button className='hovers' position='relative' left='84%' top='52%'><a href='https://youtube-video-downloaderdddddd.vercel.app/'>Click Here</a></Button>
<Text fontSize='2xl' fontWeight='extrabold' position='absolute' left='6%' top='15%' >
  A fullstack Youtube Video Downloader - NexT JS
</Text>
</Box>
</Box>
</div>

<div className='part-2-2' >
<Box className='Best-projects-2 gradient-3' w='790px' h='400px'  position='absolute' top='40%' left='55%'>
  <img className='image-2' src={ytd} alt=''></img>
<Box className='description' w='360px' h='100px' >


</Box>
<Box className='Best-projects gradient-1' w='580px' h='130px'  position='absolute'top='41.8%' left='-76.7%'>
<Button className='hovers' position='relative' top='60%' left='80%'><a href='https://flyravel.vercel.app/'>Click Here</a></Button>
<Text fontSize='2xl' fontWeight='extrabold' position='absolute' left='6%' top='10%' >
  A frontend Travel Page "UnderProgress" - Basic JS
</Text>
</Box>
</Box>



</div>











    </Box>
  
      </ChakraProvider>
   </>

   
  );
}

export default App;
