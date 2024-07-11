import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import OutboxIcon from '@mui/icons-material/Outbox';


const TextInput = () => {
    const [input,setInput]=useState({sname:"",age:"",place:""});
    const inputHandler=(e)=>{
        console.log(e.target)
        setInput({...input,[e.target.name]:e.target.value})  //...input is spread operator thats used sothat no other values in key value pairs are changed exvcept the current one

        console.log(input)
    }
  return (
    <div>
      <TextField id="outlined-basic" label="Name" variant="outlined" name='sname' onChange={inputHandler} value={input.sname}/><br /><br />
      <TextField id="outlined-basic" label="Age" variant="outlined" name="age" onChange={inputHandler} value={input.age}/><br /><br />
      <TextField id="outlined-basic" label="Place" variant="outlined"  name='place' onChange={inputHandler} value={input.place}/><br /><br />
      <Button variant="contained" endIcon={<OutboxIcon />}>
  Submit
</Button>
    </div>
  )
}

export default TextInput
