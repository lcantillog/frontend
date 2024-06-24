import './App.css';
import Navegation from './components/navegation';
import {Home} from './components/home';
import Register from './components/register';
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navegation/>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>       
    </div>
  );
}

export default App;
