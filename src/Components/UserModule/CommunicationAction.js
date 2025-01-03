import React, { useState } from 'react';

const CommunicationAction = () => {
    const [selectedCompany, setSelectedCompany] = useState('');
    const [communicationType, setCommunicationType] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = () => {
        console.log('Communication logged:', {
            company: selectedCompany,
            type: communicationType,
            date,
            notes,
        });

    
        setSelectedCompany('');
        setCommunicationType('');
        setDate('');
        setNotes('');
    };

    const styles = {
        container: {
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            backgroundColor: '#f4f6f9',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '60%',
            margin: '20px auto',
        },
        heading: {
            textAlign: 'center',
            color: '#333',
            fontSize: '28px',
            marginBottom: '20px',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        formGroup: {
            marginBottom: '15px',
        },
        label: {
            fontSize: '16px',
            color: '#333',
            marginBottom: '8px',
            fontWeight: 'bold',
        },
        input: {
            padding: '10px',
            fontSize: '14px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            boxSizing: 'border-box',
        },
        select: {
            padding: '10px',
            fontSize: '14px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            boxSizing: 'border-box',
        },
        textarea: {
            padding: '10px',
            fontSize: '14px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            height: '120px',
            boxSizing: 'border-box',
            resize: 'none',
        },
        button: {
            padding: '12px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            marginTop: '20px',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#45a049',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Communication Action</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Company:</label>
                    <input
                        type="text"
                        value={selectedCompany}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                        placeholder="Select or input company name"
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Type of Communication:</label>
                    <select
                        value={communicationType}
                        onChange={(e) => setCommunicationType(e.target.value)}
                        style={styles.select}
                    >
                        <option value="">Select</option>
                        <option value="LinkedIn Post">LinkedIn Post</option>
                        <option value="Email">Email</option>
                        <option value="Call">Call</option>
                        <option value="Visit">Visit</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Date of Communication:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Notes:</label>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Add any additional comments or details"
                        style={styles.textarea}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}
                >
                    Log Communication
                </button>
            </form>
        </div>
    );
};

export default CommunicationAction;
