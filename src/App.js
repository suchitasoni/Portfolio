import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Grids from './Component/Grids';
import {UserContext, UserProvider} from './Context';
import ExpandedBox from './Component/ExpandedBox';
import { useContext, useEffect } from 'react';
import ExpandedExperience from './Component/ExpandedExperience';

function App() {
  const {mode} = useContext(UserContext);

  useEffect(()=>{
    let root = document.getElementById('root');
    if (!mode) {
      root.style.setProperty('--education-background', "#2a2a28");
      root.style.setProperty('--education-tile', "#000000ff");
      root.style.setProperty('--text-color', "#fff");
      root.style.setProperty('--swing-board', "#000000ff")
    }
    else{
      root.style.setProperty('--education-background', "#f0e9a4");
      root.style.setProperty('--education-tile', "#d2dee0");
      root.style.setProperty('--text-color', "#000000ff");
      root.style.setProperty('--swing-board', "#3f200c")
    }
  },[])
  return (
    <UserProvider>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Grids />} />
          <Route path='/education' element={<ExpandedBox />} />
          <Route path='/experience' element={<ExpandedExperience />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
