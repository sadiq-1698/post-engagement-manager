import './App.css';
import React from 'react';
import Header from 'components/header';
import Sidebar from 'components/drawer/sidebar';
import CaptureToolsPage from 'pages/capture-tools';
import PostEngagement from 'components/post-engagement';
import DrawerToggle from 'components/drawer/drawer-toggle';
import PostEngagementEdit from 'components/post-engagement/edit';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='min-h-screen bg-base-200'>
      <Router>
        <Header />
        <div aria-expanded="false" className="drawer lg:drawer-open">
          <DrawerToggle />
          <Sidebar />
          <div className="drawer-content">
            <div className="pt-24">
              <Routes>
                {/* CAPTURE TOOLS ROUTE DEFINITIONS */}
                <Route path="/" element={<Navigate to="/capture-tools" />} />
                <Route path="/capture-tools/" element={<Navigate to="/capture-tools/post-engagement" />} />

                <Route path="capture-tools/*" Component={CaptureToolsPage}>
                  <Route path="post-engagement" Component={PostEngagement} />
                  <Route path="post-engagement/:postEngagementId/edit" Component={PostEngagementEdit} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
