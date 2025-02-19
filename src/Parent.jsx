import React, { useEffect, useState } from 'react'
import Child from './Child'

function Parent() {
    let [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    };
  
   useEffect(()=>{
      console.log("Parent rendered")
    })
 
  return (
    <div>
        <h1>Parent Component</h1>
        <h1>button click {count} time</h1>
        <button onClick={increment}>increment</button>
        <Child/>
    </div>
  )
}

export default Parent