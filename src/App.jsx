// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react'

import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Academics from './components/Academics'
import Achievements from './components/Achievements'
import Context from './components/Context'
import { Box,} from '@mui/material'
import PdfEnlcoser from './components/PdfEnlcoser'
import DownloadPage from './components/DownloadPage'



const App = () => {

  const [page, setpage] = useState('achieve')

  function HandlePage(value) {
    setpage(value)
  }


  return (
    <Box sx={{ display: 'flex',flexDirection:{xs:'column',md:'row'} }}>
    <Context>
      <Box >
       
          <Navbar HandlePage={HandlePage} />

          {page === 'intro' && <Intro  HandlePage={HandlePage}/>}
          {page === 'acad' && <Academics HandlePage={HandlePage} />}
          {page === 'achieve' && <Achievements HandlePage={HandlePage} />}
          {page=== 'down' && <DownloadPage/>}
      

 
      </Box>

      <PdfEnlcoser/>
    </Context>
    </Box>
  )
}

export default App
