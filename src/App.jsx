// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react'

import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Academics from './components/Academics'
import Achievements from './components/Achievements'
import Context from './components/Context'
import { Box, } from '@mui/material'
import PdfEnlcoser from './components/PdfEnlcoser'
import DownloadPage from './components/DownloadPage'



const App = () => {

  const [page, setpage] = useState('achieve')

  function HandlePage(value) {
    setpage(value)
  }


  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <Context>
        <Box className='poem' sx={{ backgroundColor: '#e6ffe6', boxShadow: ' rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset', borderRadius: '15px', mx: 5, overflowY: 'auto', mt: 3, width: '100%', height: '94vh' }}>

          <Navbar HandlePage={HandlePage} page={page} />

          {page === 'intro' && <Intro HandlePage={HandlePage} />}
          {page === 'acad' && <Academics HandlePage={HandlePage} />}
          {page === 'achieve' && <Achievements HandlePage={HandlePage} />}
          {page === 'down' && <DownloadPage />}



        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' }, width: '100%', }}>
          <PdfEnlcoser />
        </Box>
      </Context>
    </Box>
  )
}

export default App
