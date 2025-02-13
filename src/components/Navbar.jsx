import { Stack,Button } from '@mui/material'
// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Navbar = ({HandlePage,page}) => {
  return (
  <Stack sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',m:1,p:1,borderRadiusTop:'15px',borderBottom:'solid #262626 2px'}}>
    <Button sx={{backgroundColor:'#262626',opacity:page==='intro'? 1 :0.4 ,color:'white' }} variant='outlined' onClick={(()=>HandlePage('intro'))} >Intro</Button>
    <Button sx={{backgroundColor: '#262626',opacity:page==='acad'? 1 :0.4  ,color:'white'}}  variant='outlined' onClick={(()=>HandlePage('acad'))} >Academics</Button>
    <Button sx={{backgroundColor:'#262626',opacity:page==='achieve'? 1 :0.4 ,color:'white' }}  variant='outlined' onClick={(()=>HandlePage('achieve'))} >Achievements</Button>
  </Stack>
  )
}

export default Navbar
