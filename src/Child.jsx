import React, { useEffect } from 'react'

function Child(data) {
    
      useEffect(()=>{
         console.log("Child rendered")
       },[])
    
  return (
    <div>
        <h1>Child</h1>
    </div>
  )
}

export default React.memo(Child) ;