import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentDD() {
    const countContext = useContext(CountContext)
    //const [ countDispatch , dispatch ] = countContext
  return (
    <div>
        <h1>ComponentDD</h1>
        
        <button className='btn btn-primary mx-2' onClick={()=> countContext.countDispatch('increament')}>Increament</button>
        <button className='btn btn-primary mx-2' onClick={()=> countContext.countDispatch('decreament')}>Decreament</button>
        <button className='btn btn-primary mx-2' onClick={()=> countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentDD
