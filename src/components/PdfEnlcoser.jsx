// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import MyDocument from './Pdf'
import { data } from './Context'
import { Box } from '@mui/material'

const PdfEnlcoser = () => {
    const { saved } = useContext(data)
    return (

        <Box sx={{height:'100%',width:'100%',my:2}}>
            <PDFViewer style={{ height:'95%',width:'98%',}}>

                <MyDocument saved={saved} />

            </PDFViewer>
        </Box>
    )
}

export default PdfEnlcoser
