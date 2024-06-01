import './App.css';
import React from 'react';
import Header from './components/header';
import Drawer from './components/drawer';

function App() {
  return (
    <div className='min-h-screen bg-base-200'>
      <Header />
      <Drawer />
    </div>
  );
}

export default App;
