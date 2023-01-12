import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button className='btn btn-primary' onClick={()=>setDisplay(!display)}>Toggle display</button>
        {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer
