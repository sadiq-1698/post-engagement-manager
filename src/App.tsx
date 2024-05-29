import React from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';

function App() {
  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
