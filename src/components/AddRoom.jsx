import React from 'react';
import TextField from '@mui/material/TextField';


const AddRoom = () => {
  return (
    <div>
        <div>AddRoom</div>
        <form action="">
        <TextField 
        id="standard-basic" 
        label="Room Name" 
        variant="standard" />

        <TextField 
        id="standard-basic" 
        label="Room Description" 
        variant="standard" />
        
        <TextField 
        id="standard-basic" 
        label="Photo URL" 
        variant="standard" />
        </form>
     

    </div>
    
  )
}

export default AddRoom