import { Stack,Button } from '@mui/material'
// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Navbar = ({HandlePage}) => {
  return (
  <Stack sx={{display:'flex',flexDirection:'row', justifyContent:'space-around',m:2}}>
    <Button variant='outlined' onClick={(()=>HandlePage('intro'))} >Intro</Button>
    <Button variant='outlined' onClick={(()=>HandlePage('acad'))} >Academics</Button>
    <Button variant='outlined' onClick={(()=>HandlePage('achieve'))} >Achievements</Button>
  </Stack>
  )
}

export default Navbar
