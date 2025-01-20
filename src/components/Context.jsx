/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const data=createContext()



const Context = ({children}) => {
    const [form ,setform ]=useState({
        names:'nsss',
        email:'ss',
        location:'',
        linkedin:'',
        contacts:'',
        aboutu:'',
        count:0,
        skill:[],
        study:[{name:'sss2',degree:'sssss',from:'222',to:'ddas'},{name:'sss',degree:'sssss',from:'222',to:'ddas'}],
        works:[],
        project:[],
      
      
       })
    const [saved ,setsaved ]=useState({
        names:'',
        email:'',
        location:'',
        linkedin:'',
        contacts:'',
        aboutu:'',
        count:0,
        skill:[],
        study:[],
        works:[],
        project:[{title:'',goal:'',descp:''},],
      
      
       })

       function ShortFields(field,value){
        setform(prev=>{
            return({
                ...prev,
                [field]:value
            })
        })

       }

       function HandleSave(){
            setsaved({...form})

       }

       function HandleAdd(field,value){
   
             setform((prev)=>
                ({
                ...prev,
                [field]:[...prev[field],value]

             }))
       }
       
       function HandleDelete(field,value){
        setform((prev)=>{return({
            ...prev,
            [field]:[...(prev[field].filter(each=> each!==value))]
        })})

       }    
       function HandleDeletecomplex(field,value){
        setform((prev)=>{return({
            ...prev,
            [field]:[...prev[field].filter(each=>each.name !== value)]
        })})

       }    
 
       
  return (
    <data.Provider value={{saved,form,ShortFields,HandleSave,HandleAdd,HandleDelete,HandleDeletecomplex}}>
        {children}
    </data.Provider>
  )
}

export default Context
