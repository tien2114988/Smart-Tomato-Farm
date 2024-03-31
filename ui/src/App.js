import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Manage from './features/Manage/Manage';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      {/* <Menu/> */}
      
      <Routes>
        <Route path='/*' element={<Manage/>}/>
        <Route path='/manage/*' element={<Manage/>}/>
      </Routes>
      
      {/* <Footer/> */}
    </div>
  );
}

export default App;
