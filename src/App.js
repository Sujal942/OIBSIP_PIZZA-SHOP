import React from 'react';

import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/landingPage/Navbar';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Navbar />
      </Router>
    </RecoilRoot>
  );
};

export default App;
