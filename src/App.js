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
import AdminScreen from './components.js/AdminScreen';
import ReservationDetails from './components.js/ReservationDetails';
function App() {
  return (
    
  
      <BrowserRouter>
          
          <Routes >
          
            <Route path='/' element={<Login/>} />
            <Route path='/header' element={<Header/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgortPassword' element={<ForgortPassword />} />
            <Route path='/roomReserv' element={<RoomReserv/>}/>
            <Route path='/successReserved' element={<SuccessReserved/>}></Route>
            <Route path='/reserve' element={<Reserve/>} /> 
            <Route path='/reserveDetails' element={<ReservationDetails/>} />
            <Route path='/adminScreen' element={<AdminScreen/>} />  

          
          </Routes>
        </BrowserRouter>

   
      
        
  
       
  );
}

export default App;
