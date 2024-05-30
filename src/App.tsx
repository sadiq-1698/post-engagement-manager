import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';
import React, { useEffect, useState } from 'react';

function App() {
  const [theme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <div className='min-h-screen bg-base-200'>
        <Header />
        {/* <div className='flex'> */}
        <Sidebar />
        {/* <Content /> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
