import React from 'react';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/SignUp' element={<SignUp />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
