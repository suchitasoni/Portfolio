import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Grids from './Component/Grids';
import {UserContext, UserProvider} from './Context';
import ExpandedBox from './Component/ExpandedBox';
import { useContext, useEffect } from 'react';
import ExpandedExperience from './Component/ExpandedExperience';

function App() {
  const {mode} = useContext(UserContext);

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
