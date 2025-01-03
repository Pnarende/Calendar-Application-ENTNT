import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement);

const OverdueCommunicationTrends = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Overdue Communications',
                data: [5, 8, 10, 15, 12, 18, 20],
                fill: false,
                borderColor: 'rgba(255, 99, 132, 0.6)',
                tension: 0.4,
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
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Number of Overdue Communications',
                },
                beginAtZero: true,
            },
        },
    };

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f4f4f4',
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
            textAlign: 'center',
        },
        chartContainer: {
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            padding: '30px',
            width: '80%',
            maxWidth: '800px',
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
            <h2 style={styles.heading}>Overdue Communication Trends</h2>
            <p style={styles.description}>
                This line chart shows the trends of overdue communications over the past seven months.
            </p>
            <div style={styles.chartContainer}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default OverdueCommunicationTrends;
