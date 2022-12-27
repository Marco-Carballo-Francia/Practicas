import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Medio } from './container/Practices/PracticesBasic/Medio/Medio';
import { Home } from './container/Container/Home/Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route exact path='/Medio' element={<Medio />}/>
        </Routes>
    </div>
  );
}

export default App;
