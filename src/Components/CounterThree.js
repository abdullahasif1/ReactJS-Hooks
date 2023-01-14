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

function CounterThree() {

    //We can use Multiple useReducers at one time which will
    // work independently
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div>
      <div>
        <h1>Counter 1 :  {count}</h1>
        <button className='btn btn-primary mx-2' onClick={()=> dispatch('increament')}>Increament</button>
        <button className='btn btn-primary mx-2' onClick={()=> dispatch('decreament')}>Decreament</button>
        <button className='btn btn-primary mx-2' onClick={()=> dispatch('reset')}>Reset</button>
      </div>
      <div className='my-3'>
        <h1>Counter 2 :  {countTwo}</h1>
        <button className='btn btn-primary mx-2' onClick={()=> dispatchTwo('increament')}>Increament</button>
        <button className='btn btn-primary mx-2' onClick={()=> dispatchTwo('decreament')}>Decreament</button>
        <button className='btn btn-primary mx-2' onClick={()=> dispatchTwo('reset')}>Reset</button>
      </div>
    </div>
  )
}

export default CounterThree