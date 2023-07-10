import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter  , Routes ,Route  } from 'react-router-dom';
import Home from './components.js/home';
import Header from './components.js/header';
//import Login from './components.js/login';
//import Register from './components.js/Register';


function App() {
  return (
    
      <div className="App ">
      
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Header' element={<Header />} />


          </Routes>
        </BrowserRouter>
    </div>
   
  );
}

export default App;
