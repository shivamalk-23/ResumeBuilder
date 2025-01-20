// eslint-disable-next-line no-unused-vars
import React, { useContext, useRef, useState } from 'react'
import { Box,TextField,Typography,Button } from '@mui/material'
import { data } from './Context'
// eslint-disable-next-line react/prop-types
const Achievements = ({HandlePage}) => {

  const [edit ,setedit]=useState({
    job:false,
    projects:false,
  })

  const{HandleAdd,form,HandleDeletecomplex}=useContext(data)

  const jobRef=useRef({
    name:null,
    position:null,
    from:null,
    to:null
  })


  const ProjectRef=useRef({
    name:null,
    desc:null,
    from:null,
    to:null
  })

  function HandleDisplay(field){
    setedit((prev)=>{return({
      ...prev,
      [field]:!prev[field]
    })})
    console.log(field,edit[field])

  }


  function HandleJob(){
   if(jobRef.current.name.value==='' || jobRef.current.position.value==='' ) {
    alert('Enter valid input')
    console.log(jobRef.current.name.value,jobRef.current.position.value)
    return
   }

    HandleAdd('works',{
      name:jobRef.current.name.value,
    position:jobRef.current.position.value,
    from:jobRef.current.from.value,
    to:jobRef.current.to.value
    })
    jobRef.current.name.value=''
    jobRef.current.position.value=''
    jobRef.current.from.value=''
    jobRef.current.to.value=''

    HandleDisplay('job')
    
  }

  function HandleProject(){
    if(ProjectRef.current.name.value==='' || ProjectRef.current.from.value==='' ) {
      alert('Enter valid input')
      return
     }

     HandleAdd('project',{
      name:ProjectRef.current.name.value,
    desc:ProjectRef.current.desc.value,
    from:ProjectRef.current.from.value,
    to:ProjectRef.current.to.value
    })
    ProjectRef.current.name.value=''
    ProjectRef.current.desc.value=''
    ProjectRef.current.from.value=''
    ProjectRef.current.to.value=''
    HandleDisplay('projects')
  }

  return (
    <Box>
        <Typography variant='h5' textAlign={'center'}>Achievements</Typography>
        

        
    { edit.job  &&    <> 
    <TextField variant='outlined' label='Company Name' inputRef={(el) => jobRef.current.name = el} />
        <TextField variant='outlined'  label='Position' inputRef={(el)=>jobRef.current.position =el} />
        <TextField variant='outlined' label='From' inputRef={(el)=>jobRef.current.from =el} />
        <TextField variant='outlined' label='To' inputRef={(el)=>jobRef.current.to =el} />
        <Button variant='contained' onClick={()=>HandleJob()} >Add</Button>
        <Button variant='outlined' onClick={()=>HandleDisplay('job')}>Cancel</Button>
        </>}
      {!edit.job && <Button variant='contained' onClick={()=>HandleDisplay('job')}>Add Job</Button>}


        { form.works.length ===0  ?<p>Please Enter Your Previous Job description</p>:  form.works.map((each)=>(
          <div key={each.name}>
            <p>{each.name}</p> 
            <p>{each.desc}</p> 
            <p>{each.from}</p> 
            <p>{each.to}</p> 
            <button onClick={}>delete</button>

          </div>
        ))}

     {  edit.projects  ?  <>        
        <TextField variant='outlined' label='Project or Achivement Name' inputRef={(el)=>ProjectRef.current.name =el} />
        <TextField variant='outlined'  label='description' inputRef={(el)=>ProjectRef.current.desc =el} />
        <TextField variant='outlined' label='From' inputRef={(el)=>ProjectRef.current.from =el} />
        <TextField variant='outlined' label='To' inputRef={(el)=>ProjectRef.current.to =el} />
        <Button variant='contained' onClick={()=>HandleProject()} >Add</Button>
        <Button variant='outlined' onClick={()=>HandleDisplay('projects')}>Cancel</Button>
        </>
        
        : <Button variant='contained' onClick={()=>HandleDisplay('projects')}>Add Achievements </Button>}
     

      {
        form.project.length===0? <p>Add Achievements</p> :form.project.map((each)=>(
          <div key={each.name}>
            <p>{each.name}</p> 
            <p>{each.desc}</p> 
            <p>{each.from}</p> 
            <p>{each.to}</p> 

          </div>))
        
        
        
      
      }
       <Button variant='contained' sx={{alignSelf:'flex-end'}} onClick={()=>{HandlePage('down')}}>Save</Button>
    </Box>
  )
}

export default Achievements
