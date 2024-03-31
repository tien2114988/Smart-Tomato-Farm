import React from "react";
import './App.css';
import Manage from './features/Manage/Manage';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Menu/>
      
      <Routes>
        <Route path='/' element={<Manage/>}/>
        <Route path='/manage' element={<Manage/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
