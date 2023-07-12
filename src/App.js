import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter  , Routes ,Route  } from 'react-router-dom';
import Header from './components.js/header';
import Login from './components.js/login';
import RoomReserv from './components.js/roomReserv';
import Register from './components.js/register';
import ForgortPassword from './components.js/forgortPassword';

function App() {
  return (
    
    <div>
      <BrowserRouter>
          
          <Routes>
            
            <Route path='/Header' element={<Header/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgortPassword' element={<ForgortPassword />} />
            <Route path='/roomReserv' element={<RoomReserv/>}/>           
          </Routes>
        </BrowserRouter>

    </div>
      
        
  
       
  );
}

export default App;
