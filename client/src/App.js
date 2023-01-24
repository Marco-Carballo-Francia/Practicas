import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Medio } from './container/Practices/PracticesBasic/Medio/Medio';
import { Home } from './container/Container/Home/Home';
import { NavBar } from './container/Container/NavBar/NavBar';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route exact path='/medio' element={<Medio />}/>
          <Route path='/' element={<NavBar />}/>
        </Routes>
    </div>
  );
}

export default App;
