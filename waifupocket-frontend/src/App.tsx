import React from 'react';
import './App.css';
import NaviBar from './NaviBar';
import Scroll from './Scroll';
import Browse from './pages/Browse';
import Search from './pages/Search';
import Home from './pages/Home';
import Overview from './pages/Overview';
import { Route, Routes} from 'react-router-dom';
import { Server } from 'http';
import TestServer from './pages/TestServer';
import TestDatabase from './pages/TestDatabase';

function App() {
  return (
    <div id ='app-wrapper'>      
      <NaviBar /> 
      {/*<Scroll>*/}
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/browse' element= {<Browse />} />
        <Route path='/search' element= {<Search /> } />
        <Route path='/overview/:id' element= {<Overview /> }/>
        <Route path='/testServer' element = {<TestServer/>}/>
        <Route path='/testDatabase' element = {<TestDatabase/>}/>
      </Routes>
      {/*</Scroll>*/}           
    </div>
  );
}

export default App;
