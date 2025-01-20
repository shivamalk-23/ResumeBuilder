/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Page, Text, View, Document, StyleSheet,Link,Line,Svg } from '@react-pdf/renderer';


// Create styles
const styles = StyleSheet.create({
    page: {
      
      fontSize:'12px'
  
    },
   
    intro: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      margin:'15px'
      
  
    },
    intro2:{
      position:'relative',
   
     
    },
    about:{
      margin:'0 15px',
      position:'relative'
    },
    title:{
      textAlign:'center',
      fontSize:'16px'
    }
    
  });

// Create Document Component

const MyDocument = ({saved}) =>{

    return(
<Document>
<Page size="A4" orientation="portrait" style={styles.page}>
        <View style={styles.intro}>
          <View  >
            <Text>name:{saved.names}</Text>
            <Text>Location:{saved.location}</Text>
          </View>
          <View>
              <View style={styles.intro2}>
                
                 <Text>Ph.no:{saved.contacts}</Text>
                 <Link>Email:{saved.email}</Link>
                

                </View>
                <Link src={saved.linkedin} >LinkedinId:{saved.linkedin}</Link>
                
          </View>    
        </View>
           <Svg height="5" width="600">
           <Line
          x1="20"
          y1="0"
          x2="580"
          y2="0"
          strokeWidth={2}
          stroke="rgb(255,0,0)"
        />
           </Svg>
           <Text style={styles.title}>Profile Summary</Text>
           <View style={styles.about}>
           <Text>{saved.aboutu}</Text>
           </View>
           
     
      </Page>
      </Document>)
   }


export default MyDocument