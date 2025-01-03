import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, BarElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, BarElement, Title, Tooltip, Legend, PointElement);

const CommunicationFrequencyReport = () => {
    const data = {
        labels: ['LinkedIn Post', 'Email', 'Call', 'Visit', 'Other'],
        datasets: [
            {
                label: 'Frequency',
                data: [20, 15, 10, 5, 2],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
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
            title: {
                display: true,
                text: 'Communication Frequency Report',
                font: {
                    size: 20,
                    family: 'Arial, sans-serif',
                },
                color: '#333',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Communication Channels',
                    font: {
                        size: 14,
                    },
                    color: '#333',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Frequency',
                    font: {
                        size: 14,
                    },
                    color: '#333',
                },
                beginAtZero: true,
            },
        },
    };

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f4f4f9',
            minHeight: '100vh',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        heading: {
            fontSize: '36px',
            color: '#333',
            marginBottom: '20px',
        },
        chartContainer: {
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            width: '80%',
            maxWidth: '800px',
        },
        description: {
            fontSize: '18px',
            color: '#555',
            marginBottom: '20px',
            textAlign: 'center',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Communication Frequency Report</h2>
            <p style={styles.description}>This chart shows the frequency of different communication methods used for outreach.</p>
            <div style={styles.chartContainer}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default CommunicationFrequencyReport;
