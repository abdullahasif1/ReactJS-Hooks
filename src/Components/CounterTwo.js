import React, { useReducer } from 'react'

    const initialState = {
        firstCounter: 0
    }
    const reducer = (state, action) =>{
        switch (action.type) {
            case 'increament':
                return { firstCounter: state.firstCounter + action.value };
            case 'decreament':
                return { firstCounter: state.firstCounter - action.value };
            case 'reset':
                return initialState;
            default:
                return state;
        }
    }

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Count is {count.firstCounter}</h1>
      <div>
         <button className='btn btn-primary mx-2' onClick={()=> dispatch({type: 'increament', value: 1})}>Increament</button>
        <button className='btn btn-primary mx-2' onClick={()=> dispatch({type: 'decreament', value: 1})}>Decreament</button>
         <button className='btn btn-primary mx-2' onClick={()=> dispatch({type: 'increament', value: 5})}>Increament by 5</button>
        <button className='btn btn-primary mx-2' onClick={()=> dispatch({type: 'decreament', value: 5})}>Decreamentby 5 </button>
        <button className='btn btn-primary mx-2' onClick={()=> dispatch({type: 'reset'})}>Reset</button>
      </div>
    </div>
  )
}

export default CounterTwo