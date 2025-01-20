// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import { data } from './Context'
import { Box, Button, TextField, Typography } from '@mui/material'

// eslint-disable-next-line react/prop-types
const Intro = ({HandlePage}) => {
    const{form,ShortFields,HandleSave}=useContext(data)

 

  return (
   <Box sx={{display:'flex',flexDirection:'column'}}>
    <Typography variant='h5' textAlign={'center'} >Intro</Typography>
    <TextField variant='outlined' value={form.names} label='Name' onChange={(e)=>ShortFields('names',e.target.value)} />
    <TextField variant='outlined' value={form.email} label='Email' onChange={(e)=>ShortFields('email',e.target.value)} />
    <TextField variant='outlined' value={form.location} label='Location' onChange={(e)=>ShortFields('location',e.target.value)} />
    <TextField variant='outlined' value={form.linkedin} label='LinkedInId' onChange={(e)=>ShortFields('linkedin',e.target.value)} />
    <TextField variant='outlined' value={form.contacts} label='Contact No.' onChange={(e)=>ShortFields('contacts',e.target.value)} />
    <TextField variant='outlined' value={form.aboutu} label='About You' onChange={(e)=>ShortFields('aboutu',e.target.value)} />
    <Button variant='contained' sx={{alignSelf:'flex-end'}} onClick={()=>{HandlePage('acad');HandleSave()}}>Save</Button>
   </Box>
  )
}

export default Intro
