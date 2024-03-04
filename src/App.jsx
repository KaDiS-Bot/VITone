// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signin from './assets/components/Signup';
import Login from './assets/components/Login';
import HomePage from './assets/components/Home';
import News from './assets/components/News';
import Events from './assets/components/Events';
import Complaints from './assets/components/Complaints';
import Placements from './assets/components/Placements';
import Forums from './assets/components/Forums';
import Marketplace from './assets/components/Marketplace';
import Achievements from './assets/components/Achievements';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path='/home' element={<HomePage />} />
        <Route path ="/news" element={<News />}/>
        <Route path ="/events" element={<Events />}/>
        <Route path ="/complaints" element={<Complaints />}/>
        <Route path ="/placements" element={<Placements />}/>
        <Route path ="/forums" element={<Forums />}/>
        <Route path ="/marketplace" element={<Marketplace />}/>
        <Route path ="/achievements" element={<Achievements/>}/>
      </Routes>
    </Router>
  );
};

export default App;
