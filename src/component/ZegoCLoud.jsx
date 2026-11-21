import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useState,useCallback } from 'react'
const ZegoCLoud = () => {
    const [value,setValue]=useState('');
    const navigate=useNavigate();
    
    const joinRoom=useCallback(
        ()=>{
         navigate(`/room/${value}`);
        },[navigate,value]
    )


  return (
<>

<input type="text"  placeholder='Enter Room ID' onChange={(e)=>setValue(e.target.value)} />
<button onClick={joinRoom}>Join</button>
</>
  )
}

export default ZegoCLoud
