import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Manage from './features/Manage/Manage';
import {Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import deviceApi from './api/deviceApi';
import SettingModal from './features/Manage/components/SettingModal/SettingModal';




function App() {
  useEffect(()=>{
    const fetchDevices = async () =>{
      const deviceList = await deviceApi.getAll();
      console.log(deviceList);
    }
    fetchDevices();
  },[]);


  return (
    <div className='App'>
      {/* <Menu/> */}

      <SettingModal display='block' />
      
      {/* <Routes>
        <Route path='/*' element={<Manage/>}/>
        <Route path='/manage/*' element={<Manage/>}/>
      </Routes> */}
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
