import React from 'react';

const ActivityLog = () => {
    const activities = [
        { date: '2025-01-01', user: 'Admin', action: 'Added new company - Company A' },
        { date: '2025-01-02', user: 'User1', action: 'Performed LinkedIn Post for Company B' },
    ];

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f8f8f8',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '30px',
        },
        heading: {
            fontSize: '32px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '30px',
            textAlign: 'center',
        },
        logContainer: {
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            width: '80%',
            maxWidth: '800px',
            marginTop: '20px',
            listStyleType: 'none', 
        },
        logItem: {
            fontSize: '16px',
            color: '#555',
            marginBottom: '15px',
            borderBottom: '1px solid #eee', 
            paddingBottom: '10px',
        },
        logDate: {
            fontWeight: 'bold',
            color: '#333',
        },
        logUser: {
            color: '#4CAF50', 
        },
        logAction: {
            color: '#777',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Activity Log</h2>
            <div style={styles.logContainer}>
                {activities.map((activity, index) => (
                    <div key={index} style={styles.logItem}>
                        <span style={styles.logDate}>{activity.date}</span> - 
                        <span style={styles.logUser}> {activity.user}</span>: 
                        <span style={styles.logAction}> {activity.action}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityLog;
