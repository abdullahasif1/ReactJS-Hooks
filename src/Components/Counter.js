import React, { useReducer } from 'react'

    const initialState = 0;
    const reducer = (state, action) =>{
        switch (action) {
            case 'increament':
                return state + 1;
            case 'decreament':
                return state - 1;
            case 'reset':
                return initialState;
            default:
                return state;
        }
    }

function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button className='btn btn-primary mx-2' onClick={()=> dispatch('increament')}>Increament</button>
        <button className='btn btn-primary mx-2' onClick={()=> dispatch('decreament')}>Decreament</button>
        <button className='btn btn-primary mx-2' onClick={()=> dispatch('reset')}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
