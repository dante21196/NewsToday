import React from 'react'
import loading from "./Search.gif"

 const Spinner = ()=>{
  
    return (
      <div className='container text-center my-2'>
        <img src={loading} alt="..."/>
      </div>
    )
  }


export default Spinner;