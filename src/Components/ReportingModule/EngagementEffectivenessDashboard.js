import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, PointElement);

const EngagementEffectivenessDashboard = () => {
    const data = {
        labels: ['Successful Responses', 'No Responses'],
        datasets: [
            {
                label: 'Engagement Effectiveness',
                data: [70, 30],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f7f7f7',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
        },
        heading: {
            fontSize: '32px',
            fontWeight: '600',
            color: '#333',
            marginBottom: '20px',
        },
        chartContainer: {
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            padding: '30px',
            width: '80%',
            maxWidth: '700px',
            marginTop: '20px',
        },
        description: {
            fontSize: '18px',
            color: '#555',
            textAlign: 'center',
            marginBottom: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Engagement Effectiveness Dashboard</h2>
            <p style={styles.description}>This pie chart represents the engagement effectiveness based on successful responses versus no responses.</p>
            <div style={styles.chartContainer}>
                <Pie data={data} options={options} />
            </div>
        </div>
    );
};

export default EngagementEffectivenessDashboard;
