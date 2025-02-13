// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import { data } from './Context'
import { Box, Button, TextField, } from '@mui/material'

// eslint-disable-next-line react/prop-types
const Intro = ({HandlePage}) => {
    const{form,ShortFields,HandleSave}=useContext(data)

 

  return (
   <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',}}>
    
    <TextField variant='outlined' value={form.names} label='Name' onChange={(e)=>ShortFields('names',e.target.value)} sx={{m:1.5,minWidth:'70%'}}/>
    <TextField variant='outlined' value={form.email} label='Email' onChange={(e)=>ShortFields('email',e.target.value)} sx={{m:1.5,minWidth:'70%'}}/>
    <TextField variant='outlined' value={form.location} label='Location' onChange={(e)=>ShortFields('location',e.target.value)} sx={{m:1.5,minWidth:'70%'}}/>
    <TextField variant='outlined' value={form.linkedin} label='LinkedInId' onChange={(e)=>ShortFields('linkedin',e.target.value)} sx={{m:1.5,minWidth:'70%'}}/>
    <TextField variant='outlined' value={form.contacts} label='Contact No.' onChange={(e)=>ShortFields('contacts',e.target.value)} sx={{m:1.5,minWidth:'70%'}}/>
    <TextField variant='outlined' value={form.aboutu} label='About You' onChange={(e)=>ShortFields('aboutu',e.target.value)} sx={{m:1.5,minWidth:'70%'}}/>
    <Button variant='contained' sx={{alignSelf:'flex-end',justifySelf:'flex-end',mr:3,backgroundColor:'#262626' }} onClick={()=>{HandlePage('acad');HandleSave()}}>Save</Button>
   </Box>
  )
}

export default Intro
