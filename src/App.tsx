import './App.css';
import React from 'react';
import Header from './components/header';
import Sidebar from './components/drawer/sidebar';
import DrawerToggle from './components/drawer/drawer-toggle';
import DrawerContent from './components/drawer/drawer-content';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CaptureTools from './pages/capture-tools';

function App() {
  return (
    <div className='min-h-screen bg-base-200'>
      <Router>
        <Header />
        <div aria-expanded="true" className="drawer lg:drawer-open">
          <DrawerToggle />
          <Sidebar />
          <div className="drawer-content">
            <div className="pt-24">
              <Routes>
                <Route path="/" element={<Navigate to="/capture-tools/links-library" />} />
                <Route path="capture-tools/:option" element={<CaptureTools />} />
                {/* <Route path=":sidebarOption/*" element={<CaptureTools />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
