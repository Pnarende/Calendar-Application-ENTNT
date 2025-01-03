import React, { useState } from "react";

const CompanyManagement = () => {
    const [companies, setCompanies] = useState([]);
    const [newCompany, setNewCompany] = useState({ name: '', location: '', linkedin: '', emails: '', phoneNumbers: '', comments: '', periodicity: '' });
    const [isEditing, setIsEditing] = useState(null);

    const handleAddCompany = () => {
        if (isEditing !== null) {
            const updatedCompanies = [...companies];
            updatedCompanies[isEditing] = newCompany;
            setCompanies(updatedCompanies);
            setIsEditing(null);
        } else {
            setCompanies([...companies, newCompany]);
        }
        setNewCompany({ name: '', location: '', linkedin: '', emails: '', phoneNumbers: '', comments: '', periodicity: '' });
    };

    const handleEditCompany = (index) => {
        setNewCompany(companies[index]);
        setIsEditing(index);
    };

    const handleDeleteCompany = (index) => {
        const updatedCompanies = companies.filter((_, i) => i !== index);
        setCompanies(updatedCompanies);
    };

    const styles = {
        container: {
            fontFamily: "Arial, sans-serif",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#f9f9f9",
            margin: "20px",
            display: "flex",
            flexDirection: "column",
            width: "700px", 
            height:'90%',
        },
        heading: {
            color: "#333",
            textAlign: "center",
        },
        inputContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#ffffff",
            marginBottom: "20px",
        },
        input: {
            display: "block",
            width: "90%",
            margin: "10px 0",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            overflow: "hidden", 
        },
        textarea: {
            display: "block",
            width: "90%",
            margin: "10px 0",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            resize: "none",
            height: "100px", 
        },
        button: {
            width: "90%",
            margin: "10px 0",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
        companyList: {
            marginTop: "20px",
            maxHeight: "200px",
            overflowY: "auto",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#ffffff",
        },
        companyItem: {
            padding: "10px",
            backgroundColor: "#e7f4e4",
            marginBottom: "10px",
            borderRadius: "5px",
        },
        actionButton: {
            margin: "5px",
            padding: "5px 10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
        editButton: {
            backgroundColor: "#2196F3",
            color: "white",
        },
        deleteButton: {
            backgroundColor: "#f44336",
            color: "white",
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Company Management</h2>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Name"
                    value={newCompany.name}
                    onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={newCompany.location}
                    onChange={(e) => setNewCompany({ ...newCompany, location: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="LinkedIn Profile"
                    value={newCompany.linkedin}
                    onChange={(e) => setNewCompany({ ...newCompany, linkedin: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Emails"
                    value={newCompany.emails}
                    onChange={(e) => setNewCompany({ ...newCompany, emails: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Phone Numbers"
                    value={newCompany.phoneNumbers}
                    onChange={(e) => setNewCompany({ ...newCompany, phoneNumbers: e.target.value })}
                    style={styles.input}
                />
                <textarea
                    placeholder="Comments"
                    value={newCompany.comments}
                    onChange={(e) => setNewCompany({ ...newCompany, comments: e.target.value })}
                    style={styles.textarea}
                ></textarea>
                <input
                    type="text"
                    placeholder="Communication Periodicity"
                    value={newCompany.periodicity}
                    onChange={(e) => setNewCompany({ ...newCompany, periodicity: e.target.value })}
                    style={styles.input}
                />
            </div>
            <button onClick={handleAddCompany} style={styles.button}>
                {isEditing !== null ? "Update Company" : "Add Company"}
            </button>

            <h3 style={styles.heading}>Company List</h3>
            <div style={styles.companyList}>
                {companies.map((company, index) => (
                    <div key={index} style={styles.companyItem}>
                        <p><strong>Name:</strong> {company.name}</p>
                        <p><strong>Location:</strong> {company.location}</p>
                        <p><strong>LinkedIn:</strong> {company.linkedin}</p>
                        <p><strong>Emails:</strong> {company.emails}</p>
                        <p><strong>Phone Numbers:</strong> {company.phoneNumbers}</p>
                        <p><strong>Comments:</strong> {company.comments}</p>
                        <p><strong>Periodicity:</strong> {company.periodicity}</p>
                        <button
                            onClick={() => handleEditCompany(index)}
                            style={{ ...styles.actionButton, ...styles.editButton }}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDeleteCompany(index)}
                            style={{ ...styles.actionButton, ...styles.deleteButton }}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyManagement;
