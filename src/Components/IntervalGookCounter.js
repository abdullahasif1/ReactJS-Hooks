import React, { useEffect, useState } from 'react'

function IntervalGookCounter() {
    const [count, setCount] = useState(0)

    // const tick=()=>{
    //     setCount(count+1)
    // }

    // useEffect(() => {
    //     const Interval = setInterval(tick, 1000)
    //     return ()=>{
    //         clearInterval(Interval)
    //     }
    // }, [count])

    
    //ALWAYS REMEMBER TO ADD DEPENDENCIES(PROPS OR STATES)

    
    //     OR  THIS (we didnt add the dependency by changing count to prevCount in tick function)
    const tick=()=>{
        setCount(prevCount=> prevCount +1)
    }

    useEffect(() => {
        const Interval = setInterval(tick, 1000)
        return ()=>{
            clearInterval(Interval)
        }
    }, [])
    
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalGookCounter
