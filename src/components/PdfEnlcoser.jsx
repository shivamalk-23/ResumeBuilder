// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import MyDocument from './Pdf'
import { data } from './Context'
import { Box } from '@mui/material'

const PdfEnlcoser = () => {
    const { saved } = useContext(data)
    return (

        <Box>
            <PDFViewer>

                <MyDocument saved={saved} />

            </PDFViewer>
        </Box>
    )
}

export default PdfEnlcoser
