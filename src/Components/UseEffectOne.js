import React, { useEffect, useState } from 'react'

function UseEffectOne() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Clicked ${count} times`
  })
  
  return (
    <div>
      <button className='btn btn-primary' onClick={()=> setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default UseEffectOne
