import { Typography, Box, Button, TextField } from '@mui/material'
// eslint-disable-next-line no-unused-vars
import React, { useContext, useRef, useState } from 'react'
import { data } from './Context'


// eslint-disable-next-line react/prop-types
const Academics = ({ HandlePage }) => {
  const { form, HandleAdd, HandleDelete,HandleSave,HandleDeletecomplex } = useContext(data)
  const [edit, setedit] = useState({
    skill: false,
    study: false

  })
  const skillref = useRef(null)
  const studyref = useRef({
    name: null,
    degree: null,
    from: null,
    to: null

  })

  function HandleSkill() {
    if (skillref.current.value === '') {
      alert('Please enter a valid input');
      return;
    }
    HandleAdd('skill', skillref.current.value);
    skillref.current.value = '';
    setedit((prev) => ({
      ...prev,
      skill: false, 
    }));
  }

  function HandleDisplay(field) {
    setedit((prev) => {
      return ({
        ...prev,
        [field]: !(prev[field])
      })
    })
    console.log(edit.skill)
  }

  function HandleStudy() {
    if (studyref.current.name.value === '' || studyref.current.degree.value === '' || studyref.current.from.value === '' || studyref.current.to.value === '') {
      alert('Please enter a valid input');
      return;
    }
    HandleAdd('study', {
      name: studyref.current.name.value,
      degree: studyref.current.degree.value ,
      from: studyref.current.from.value,
      to: studyref.current.to.value
  
    });
    studyref.current.name.value = null
    studyref.current.degree.value =null
    studyref.current.from.value=null
    studyref.current.to.value=null
    setedit((prev) => ({
      ...prev,
      study: !prev.study, 
    }));
  }





  return (
    <Box sx={{ height: '95vh', width: { xs: '100%', md: '50vh' } }}>
      <Typography variant='h5' textAlign={'center'}>Academics</Typography>

      {!edit.skill && <Button onClick={() => HandleDisplay('skill')} >Add+</Button>}
      {edit.skill && <>     <TextField inputRef={skillref} label='skill' />
        <Button onClick={() => { HandleSkill() }}>Add</Button>

        <Button onClick={() => { HandleDisplay('skill') }} >Cancel</Button></>}

      {form.skill.length ===0 && <p>Lets See Your Skill</p>}
      {form.skill.map((each,) => <div key={each}> <p >{each}</p>
        <button onClick={() => HandleDelete('skill', each)}>x</button></div>)}
      
  
      
    { edit.study  && <Box sx={{ diasplay: 'flex', flexDirection: 'column' }}>
        <TextField variant='outlined' inputRef={(el) => studyref.current.name = el} label='Institution Name' />
        <TextField variant='outlined' inputRef={(el) => studyref.current.degree = el} label='Qualification' />
        <Box sx={{ display: 'flex' }}>
          <TextField variant='outlined' inputRef={(el) => studyref.current.from = el} label='From Date' />
          <TextField variant='outlined' inputRef={(el) => studyref.current.to = el} label='To Date' />
        </Box>-
         <Button onClick={() => { HandleStudy();}}>Add</Button>
         <Button onClick={() => { HandleDisplay('study') }} >Cancel</Button>        
      </Box>
     
    }
      
      { !edit.study && <Button onClick={()=>HandleDisplay('study')}>Add Study</Button>}

      { form.study.length!==0 ?form.study.map((each)=>{return(<div key={each.name}>
        <p>{each.name}</p>
        <p>{each.degree}</p>
        <p>{each.from}</p>
        <p>{each.to}</p>
        <button onClick={()=>HandleDeletecomplex('study',each.name)}>X</button>
      </div>)}) 
        :
        <p>Please enter your academic details</p>
       
    }
      
      
      <Button variant='contained' sx={{alignSelf:'flex-end'}} onClick={()=>{HandlePage('achieve');HandleSave()}}>Save</Button>
    </Box>
  )
}

export default Academics
