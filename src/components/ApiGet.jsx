import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const ApiGet = () => {
    var[output,setoutput]=useState([]);
                                                                      // useEffect(()=>{},[]);
  useEffect(()=>{                                                  //useEffect is used to load data when site is opened
    axios.get('https://jsonplaceholder.typicode.com/users')    
    .then((res)=>{
      setoutput(res.data);
    //   console.log(res.data);
      
    })
    .catch((e)=>{
      console.log(e);
    })                                              // axios.get("url",(res)=>{}).then((res)=>{}).catch()
  },[]);
  return (
    <div>
      Hello world 
      
        <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableCell>Name</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Username</TableCell>
          </TableHead>
          <TableBody>
            {output.map((val,i)=>{
                return(
                    <TableRow key={i}>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.phone}</TableCell>
                        <TableCell>{val.username}</TableCell>
                    </TableRow>
                )
            })}
          </TableBody>
          </Table>
          </TableContainer>
           


    </div>
  )
}

export default ApiGet
