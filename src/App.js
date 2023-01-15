import React, { useReducer } from 'react';
import './App.css';
import HookCounterThree from './Components/HookCounterThree';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import UseEffectOne from './Components/UseEffectOne';
import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';
import IntervalGookCounter from './Components/IntervalGookCounter';
import DataFetching from './Components/DataFetching';
import ComponentC from './Components/ComponentC';
import Counter from './Components/Counter';
import CounterTwo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';
import ComponentAA from './Components/ComponentAA';
import ComponentBB from './Components/ComponentBB';
import ComponentCC from './Components/ComponentCC';

export const UserContext = React.createContext()
export const CompanyContext = React.createContext()

//using the useReducer hooks with the useContext Hook to share the state in nested components
export const CountContext = React.createContext()

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <h1>Counter : {count}</h1>
        <ComponentAA/>
        <ComponentBB/>
        <ComponentCC/>
      </CountContext.Provider>


            
      {/* <CounterThree/> */}
      {/* <CounterTwo/> */}
      {/* <Counter/> */}


      {/* <UserContext.Provider value='Abdullah'>
      <CompanyContext.Provider value='PosterMyWall'>
      <ComponentC/>
      </CompanyContext.Provider>
      </UserContext.Provider> */}


      {/* <DataFetching/> */}


      {/* <IntervalGookCounter/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <UseEffectOne/> */}


      {/* <HookCounterThree/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}


</div>

);
}
export default App;