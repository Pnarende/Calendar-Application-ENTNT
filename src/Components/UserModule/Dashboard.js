import React from 'react';

const Dashboard = () => {
    const companies = [
        { name: 'Company A', lastCommunications: ["Email", "Call"], nextCommunication: "LinkedIn Post" },
        { name: 'Company B', lastCommunications: ["LinkedIn Post", "Email"], nextCommunication: "Call" }
    ];

    const styles = {
        container: {
            fontFamily: "Arial, sans-serif",
            padding: "20px",
            backgroundColor: "#f4f6f9",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "80%",
            margin: "0 auto",
        },
        heading: {
            textAlign: "center",
            color: "#333",
            fontSize: "28px",
            marginBottom: "20px",
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "#ffffff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
        },
        th: {
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            textAlign: "left",
            fontSize: "16px",
        },
        td: {
            padding: "10px",
            borderBottom: "1px solid #ddd",
            fontSize: "14px",
        },
        tbody: {
            backgroundColor: "#f9f9f9",
        },
        tr: {
            transition: "background-color 0.3s ease",
        },
        trHover: {
            backgroundColor: "#e7f7e4",
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Dashboard</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Company Name</th>
                        <th style={styles.th}>Last Five Communications</th>
                        <th style={styles.th}>Next Scheduled Communication</th>
                    </tr>
                </thead>
                <tbody style={styles.tbody}>
                    {companies.map((company, index) => (
                        <tr
                            key={index}
                            style={styles.tr}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.trHover.backgroundColor}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}
                        >
                            <td style={styles.td}>{company.name}</td>
                            <td style={styles.td}>{company.lastCommunications.join(", ")}</td>
                            <td style={styles.td}>{company.nextCommunication}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
