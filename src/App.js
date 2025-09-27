import './App.css';
import Grids from './Component/Grids';
import {UserProvider} from './Context';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Grids />
      </div>
    </UserProvider>
  );
}

export default App;
