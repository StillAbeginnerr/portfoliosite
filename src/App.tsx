import React from 'react';
import { Box, Button, ChakraProvider, Text} from '@chakra-ui/react'
import zomato from './zomato.png'
import ytd from './YTdownloader.png'
import flyravel from './flyravel.png'
import weatherweb from './weatherweb.png'
import "./Heading.css"
function App() {
  return (
   <>
   <ChakraProvider>
    <Box w='100%' h='3000px' bgGradient='linear(to-l, #000000, #000000)'>
    <Text className='Heading' bgGradient='linear(to-r, red.500, yellow.500)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold' as='h1' position='absolute' left='34.5%' top='3%' size='md'
  >Welcome Here, 👋 <br></br> Shivam Agarwal's Portfolio ⬇<br></br>(Under Progress)</Text>
<div>
<Box className='Best-projects' w='820px' h='400px' bgGradient='linear(to-l, red.300, purple.800)'>
  <img className='image-1' src={zomato} alt=''></img>
  <Button position='relative' left='88%' top='10%'><a href='https://zomatoclone-blush.vercel.app/'>Click Here</a></Button>
<Box className='description' w='360px' h='100px' >
<Text fontSize='2xl' color='White' fontWeight='extrabold' position='absolute' left='6%' top='10%' >
  A frontend Zomato Homepage Clone - React JS
</Text>
<Text position='relative' bottom='-60px' left='50px'>
<i className="fi fi-br-star description-3"></i>
<i className="fi fi-br-star description-4"></i>
<i className="fi fi-br-star description-5"></i>
</Text>
</Box>
</Box>
</div>
<div>
<Box className='Best-projects' w='620px' h='150px' bgGradient='linear(to-l, red.300, purple.800)' position='absolute' top='40.1%'>
<Text color='white' fontSize='2xl'  position='relative' left='08%' top='12%' >I made this website in July 2022 <br></br> to learn Fetch API</Text>
</Box>
</div>
<div className='part-1-2'>
<Box className='Best-projects' w='520px' h='140px' bgGradient='linear(to-l, #FFFFFF, #808080)' position='absolute' left='62%'>
<Text  fontSize='2xl'  position='relative' left='06%' top='05%' >I made this website in March 2022 <br></br> for the clone IT in the girlscript <br></br>summer of code</Text>
</Box>
</div>

<div>
<Box className='Best-projects-2' w='790px' h='400px' bgGradient='linear(to-l, #FFFFFF, #808080)'  position='absolute' top='40%' left='47%'>
  <img className='image-2' src={weatherweb} alt=''></img>
<Box className='description' w='360px' h='100px' >
<Button position='relative' left='178%' top='10%'><a href='https://weather-web-omega.vercel.app/'>Click Here</a></Button>
<Text fontSize='2xl' fontWeight='extrabold' color='White' position='absolute' left='6%' top='15%' >
  A fullstack weather forecasting webapp - Basic JS
</Text>
<Text position='relative' bottom='-30px' left='50px'>
  
<i className="fi fi-br-star description-3"></i>
<i className="fi fi-br-star description-4"></i>
<i className="fi fi-br-star description-5"></i>
</Text>
</Box>
</Box>
</div>


<div className='part-2'>
<Box className='Best-projects' w='575px' h='300px' bgGradient='linear(to-l, red.300, purple.800)'>
  <img className='image-1' src={flyravel} alt=''></img>
<Box className='description' w='360px' h='100px' >
<Button position='relative' left='120%'><a href='https://flyravel.vercel.app/'>Click Here</a></Button>
<Text fontSize='2xl' color='White' fontWeight='extrabold' position='absolute' left='6%' top='10%' >
  A frontend Travel Page "UnderProgress" - Basic JS
</Text>

<Text position='relative' bottom='-30px' left='50px'>
<i className="fi fi-br-star description-3"></i>
<i className="fi fi-br-star description-4"></i>
<i className="fi fi-br-star description-5"></i>
</Text>
</Box>
</Box>
</div>

<div className='part-2-2' >
<Box className='Best-projects-2' w='790px' h='400px' bgGradient='linear(to-l, #FFFFFF, #808080)'  position='absolute' top='40%' left='55%'>
  <img className='image-2' src={ytd} alt=''></img>
<Box className='description' w='360px' h='100px' >
<Button position='relative' left='178%' top='10%'><a href='https://youtube-video-downloaderdddddd.vercel.app/'>Click Here</a></Button>
<Text fontSize='2xl' fontWeight='extrabold' color='White' position='absolute' left='6%' top='15%' >
  A fullstack Youtube Video Downloader - NexT JS
</Text>
<Text position='relative' bottom='-30px' left='50px'>
  
<i className="fi fi-br-star description-3"></i>
<i className="fi fi-br-star description-4"></i>
<i className="fi fi-br-star description-5"></i>
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
