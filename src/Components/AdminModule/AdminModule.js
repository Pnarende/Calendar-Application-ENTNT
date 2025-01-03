import React from 'react';
import CompanyManagement from './CompanyManagement';
import CommunicationManagement from './CommunicationManagement';

const AdminModule = () => {
    return (
        <div>
            <h1>Admin Module</h1>
            <CompanyManagement />
            <CommunicationManagement />
        </div>
    );
};

export default AdminModule;
