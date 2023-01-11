import React, { useState } from 'react'

function HookCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    
    const increamentby5 = ()=>{
        setCount(prevCount => prevCount + 5)
    }
    //OR
    //  const increamentby5 = ()=>{
    //      for(let i=0;i<5;i++){
    //          setCount(prevCount => prevCount + 1)
    //      }   
    //  }
    
    
    // const [count, setCount] = useState(0)
    // const increamentby5 = ()=>{
    //     setCount(count+5)
    // }
    

  return (
    <>
        <div>Count {count}</div>
        <div>

            <button className='btn btn-primary' onClick={()=> setCount(initialCount)}>Reset</button>
            <button className='btn btn-primary' onClick={()=> setCount(prevCount => prevCount + 1)}>Increament by 1</button>
            <button className='btn btn-primary' onClick={()=> setCount(prevCount => prevCount - 1)}>Decreament by 1</button>
            <button className='btn btn-primary' onClick={increamentby5}>Increament by 5</button>


            {/* <button className='btn btn-primary' onClick={()=> setCount(0)}>Reset</button>
            <button className='btn btn-primary' onClick={()=> setCount(count+1)}>Increament by 1</button>
            <button className='btn btn-primary' onClick={()=> setCount(count-1)}>Decreament by 1</button>
            <button className='btn btn-primary' onClick={increamentby5}>Increament by 5</button> */}
        </div>
    </>
  )
}

export default HookCounter
