import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Manage from './features/Manage/Manage';
import {Route, Routes} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Manage/>}/>
        <Route path='/manage' element={<Manage/>}/>
      </Routes>
    </div>
  );
}

export default App;
