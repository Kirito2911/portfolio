import React from 'react';
import { Blocks } from './components/Blocks';
import { Header } from './components/Header';
import { Home } from './components/Home';

import './styles/Global.css';
function App() {
  return (
      <div className="container">
        <Header/>
        <Blocks/>
        
      </div>
        
  );
}

export default App;
