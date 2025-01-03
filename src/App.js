import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; 

import CompanyManagement from './Components/AdminModule/CompanyManagement';
import CommunicationMethodManagement from './Components/AdminModule/CommunicationMethodManagement';

import Dashboard from './Components/UserModule/Dashboard';
import CommunicationAction from './Components/UserModule/CommunicationAction';
import Notifications from './Components/UserModule/Notifications';
import CalendarView from './Components/UserModule/CalendarView';

import CommunicationFrequencyReport from './Components/ReportingModule/CommunicationFrequencyReport';
import EngagementEffectivenessDashboard from './Components/ReportingModule/EngagementEffectivenessDashboard';
import OverdueCommunicationTrends from './Components/ReportingModule/OverdueCommunicationTrends';
import ActivityLog from './Components/ReportingModule/ActivityLog';

import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';

const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '20px' }}>
    <h1>404</h1>
    <p>Page Not Found</p>
  </div>
);

const App = () => {
  const [currentModule, setCurrentModule] = useState('AdminModule');

  const renderCurrentModule = () => {
    switch (currentModule) {
      case 'AdminModule':
        return (
          <>
            <h2>Admin Module</h2>
            <CompanyManagement />
            <CommunicationMethodManagement />
          </>
        );
      case 'UserModule':
        return (
          <>
            <h2>User Module</h2>
            <Dashboard />
            <CommunicationAction />
            <Notifications />
            <CalendarView />
          </>
        );
      case 'ReportingModule':
        return (
          <>
            <h2>Reporting Module</h2>
            <CommunicationFrequencyReport />
            <EngagementEffectivenessDashboard />
            <OverdueCommunicationTrends />
            <ActivityLog />
          </>
        );
      default:
        return <NotFound />;
    }
  };

  return (
    <Router>
      <div>
       
        <Header />

      
        <div className="module-switch-buttons" style={{ textAlign: 'center', margin: '20px 0' }}>
          <button
            onClick={() => setCurrentModule('AdminModule')}
            className="admin-button"
          >
            Admin Module
          </button>
          <button
            onClick={() => setCurrentModule('UserModule')}
            className="user-button"
          >
            User Module
          </button>
          <button
            onClick={() => setCurrentModule('ReportingModule')}
            className="reporting-button"
          >
            Reporting Module
          </button>
        </div>

       
        <main style={{ minHeight: '80vh', padding: '20px' }}>
          {renderCurrentModule()}
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
