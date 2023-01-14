import React from 'react';
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

export const UserContext = React.createContext()
export const CompanyContext = React.createContext()



function App() {
  return (
    <div className="App">

      <Counter/>


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
