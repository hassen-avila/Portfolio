import './App.css';
import About from './frontend/about/about';
import Home from './frontend/home/home';
import Pages from './frontend/pages/pages';
import { Route, Routes } from 'react-router-dom';
import Contact from './frontend/contact/contact';

function App() {
  return (
    <>  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about-me' element={<About/>}/>
      <Route path='/pages' element={<Pages/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
