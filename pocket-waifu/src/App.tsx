import React from 'react';
import './App.css';
import NaviBar from './NaviBar';
import Scroll from './Scroll';
import Browse from './pages/Browse';
import Search from './pages/Search';
import Home from './pages/Home';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div id ='app-wrapper'>      
      <NaviBar /> 
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/browse' element= {<Browse />} />
        <Route path='/search' element= {<Search /> } />
      </Routes>           
    </div>
  );
}

export default App;
