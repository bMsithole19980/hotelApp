
import React from 'react';
import './App.css';
import { BrowserRouter  , Routes ,Route  } from 'react-router-dom';
import Header from './components.js/header';
import Login from './components.js/login';
import RoomReserv from './components.js/roomReserv';
import Register from './components.js/register';
import ForgortPassword from './components.js/forgortPassword';
import Reserve from './components.js/reserve';
import SuccessReserved from './components.js/successReserved';
import ReservationDetails from './components.js/ReservationDetails'
import Facilities from './components.js/facilities';
function App() {
  return (
    
  
      <BrowserRouter>
          
          <Routes>
            
            
            <Route path='/' element={<Login />} />
            <Route path='/header' element={<Header/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgortPassword' element={<ForgortPassword />} />
            <Route path='/roomReserv' element={<RoomReserv/>}/>
            <Route path='/successReserved' element={<SuccessReserved/>}></Route>
            <Route path='/reserve' element={<Reserve/>} /> 
            <Route path='/reserveDetails' element={<ReservationDetails/>} /> 
            <Route path='/facilities' element={<Facilities/>} /> 

          </Routes>
        </BrowserRouter>

   
      
        
  
       
  );
}

export default App;
