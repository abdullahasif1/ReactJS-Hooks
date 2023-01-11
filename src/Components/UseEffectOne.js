import React, { useEffect, useState } from 'react'

function UseEffectOne() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    console.log('updating')
    document.title = `Clicked ${count} times`
  },[count])
  
  return (
    <div>
      <input type='text' value ={name} onChange={e => setName(e.target.value)}/>
      <button className='btn btn-primary' onClick={()=> setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default UseEffectOne
