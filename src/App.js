import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Grids from './Component/Grids';
import {UserContext, UserProvider} from './Context';
import ExpandedBox from './Component/ExpandedBox';
import { useContext, useEffect } from 'react';

function App() {
  const {mode} = useContext(UserContext);

  useEffect(()=>{
    let root = document.getElementById('root');
    if (mode) {
      root.style.setProperty('--text-color', "#000000ff");
    }
    else{
      root.style.setProperty('--text-color', "#fff");
    }
  },[])
  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Grids />} />
          <Route path='/education' element={<ExpandedBox />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
