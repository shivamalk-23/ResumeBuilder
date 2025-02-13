import {  Box, Button, TextField } from '@mui/material'
// eslint-disable-next-line no-unused-vars
import React, { useContext, useRef, useState } from 'react'
import { data } from './Context'
import trash from '../assets/trash.svg'


// eslint-disable-next-line react/prop-types
const Academics = ({ HandlePage }) => {
  const { form, HandleAdd, HandleDelete, HandleSave, HandleDeletecomplex } = useContext(data)
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
      degree: studyref.current.degree.value,
      from: studyref.current.from.value,
      to: studyref.current.to.value

    });
    studyref.current.name.value = null
    studyref.current.degree.value = null
    studyref.current.from.value = null
    studyref.current.to.value = null
    setedit((prev) => ({
      ...prev,
      study: !prev.study,
    }));
  }





  return (
    <Box >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto' }}>
       


        {/*    skills     */}
        <h2 style={{margin:'0.4rem 0rem',}}>SKILLS</h2>
        <Box sx={{ backgroundColor: 'white', boxShadow: ' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', display: 'flex', flexDirection: 'column', width: '80%', minHeight: '20vh', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', padding: '1rem', borderRadius: '15px' }}>
           


        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justidyContent: 'center', borderRadius: '15px' }}>
            
            {form.skill.length === 0 && <h3>Lets See Your Skill</h3>}
            <Box sx={{}}>
              <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
              {form.skill.map((each,) => {
                return (
                  <Box key={each} sx={{mx:0.3, p:0.6,display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: ' #f2f2f2', px: '0.5rem',borderRadius: '20px' }}>
                    <p >{each}</p>
                    <button  style={{ backgroundColor: 'transparent', border: 'none', margin: 0 ,}}  onClick={() => HandleDelete('skill', each)}><img style={{marginTop:'3px',marginLeft:'8px'}} src={trash} /></button>
                  </Box>)
              })}
              </Box>
            </Box>
          </Box>
          {edit.skill && <>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <TextField inputRef={skillref} label='skill' />
              <Box>
                <Button onClick={() => { HandleSkill() }}>Add</Button>
                <Button onClick={() => { HandleDisplay('skill') }} >Cancel</Button>
              </Box>
            </Box>
          </>
          }

      
          {!edit.skill && <Button onClick={() => HandleDisplay('skill')} >Add+</Button>}
        </Box>


        {/* acad */}
        <h2 style={{margin:'0.4rem 0rem'}}>EDUCATION</h2>
        <Box className="poem" sx={{ minHeight: '20vh', boxShadow: ' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', pt: '5rem', my: 2, overflowY: 'auto', borderRadius: '15px', backgroundColor: 'white', display: 'flex', flexDirection: 'column', width: '80%', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1rem' }}>

          {form.study.length !== 0 ? form.study.map((each) => {
            return (<Box key={each.name} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: ' #f2f2f2', px: '0.5rem', py: 1, mx: 4, borderRadius: '20px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', rowGap: '1rem', columnGap: '5rem' }}>
                <p >Institution:  {each.name}</p>
                <p>Degree: {each.degree}</p>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
                <p>From:  {each.from}</p>
                <p>To: {each.to}</p>
              </Box>
              <Button sx={{ alignSelf: 'self-end', mt: 3 }} onClick={() => HandleDeletecomplex('study', each.name)}><img src={trash} /></Button>
            </Box>)
          })
            :
            <h3>Please Enter Your Academic Details</h3>

          }




          {edit.study && <Box sx={{ display: 'flex', flexDirection: 'column', pt: '1rem', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '20rem', gap: 1 }}>
              <TextField variant='outlined' inputRef={(el) => studyref.current.name = el} label='Institution Name' />
              <TextField variant='outlined' inputRef={(el) => studyref.current.degree = el} label='Qualification' />
              <TextField variant='outlined' inputRef={(el) => studyref.current.from = el} label='From Date' />
              <TextField variant='outlined' inputRef={(el) => studyref.current.to = el} label='To Date' />
            </Box>
            <Box sx={{ display: 'flex', justidyContent: 'center', alignItems: 'center' }}>
              <Button onClick={() => { HandleStudy(); }}>Add</Button>
              <Button onClick={() => { HandleDisplay('study') }} >Cancel</Button>
            </Box>
          </Box>

          }

          {!edit.study && <Button onClick={() => HandleDisplay('study')}>Add Study</Button>}



        </Box>
      </Box>
      <Button variant='contained' sx={{ left: '89%', backgroundColor: '#262626' }} onClick={() => { HandlePage('achieve'); HandleSave() }}>Save</Button>
    </Box>
  )
}

export default Academics
