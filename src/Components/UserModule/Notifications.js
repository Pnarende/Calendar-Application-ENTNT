import React from 'react';

const Notifications = () => {
    const notifications = [
        { type: 'Overdue', company: 'Company A', dueDate: '2025-01-01' },
        { type: 'Today', company: 'Company B', dueDate: '2025-01-02' }
    ];

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            backgroundColor: '#f4f6f9',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '80%',
            margin: '20px auto',
        },
        heading: {
            textAlign: 'center',
            color: '#333',
            fontSize: '28px',
            marginBottom: '20px',
        },
        notificationList: {
            listStyleType: 'none',
            padding: '0',
            margin: '0',
        },
        notificationItem: {
            backgroundColor: '#fff',
            padding: '15px',
            marginBottom: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        overdue: {
            backgroundColor: '#f44336', 
            color: 'white',
        },
        today: {
            backgroundColor: '#4CAF50', 
            color: 'white',
        },
        notificationText: {
            fontSize: '16px',
            fontWeight: 'bold',
        },
        dueDate: {
            fontSize: '14px',
            color: 'black',
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Notifications</h2>
            <ul style={styles.notificationList}>
                {notifications.map((notification, index) => (
                    <li 
                        key={index} 
                        style={{
                            ...styles.notificationItem, 
                            ...(notification.type === 'Overdue' ? styles.overdue : styles.today)
                        }}
                    >
                        <div style={styles.notificationText}>
                            {notification.type} - {notification.company}
                        </div>
                        <div style={styles.dueDate}>
                            Due Date: {notification.dueDate}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
