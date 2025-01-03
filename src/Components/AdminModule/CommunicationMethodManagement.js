import React, { useState } from 'react';

const CommunicationMethodManagement = () => {
    const [methods, setMethods] = useState([{
        name: 'LinkedIn Post', description: 'A post on LinkedIn.', sequence: 1, mandatory: true
    }]);
    const [newMethod, setNewMethod] = useState({ name: '', description: '', sequence: '', mandatory: false });
    const [isEditing, setIsEditing] = useState(null);

    const handleAddMethod = () => {
        if (isEditing !== null) {
            const updatedMethods = [...methods];
            updatedMethods[isEditing] = newMethod;
            setMethods(updatedMethods);
            setIsEditing(null);
        } else {
            setMethods([...methods, newMethod]);
        }
        setNewMethod({ name: '', description: '', sequence: '', mandatory: false });
    };

    const handleEditMethod = (index) => {
        setNewMethod(methods[index]);
        setIsEditing(index);
    };

    const handleDeleteMethod = (index) => {
        const updatedMethods = methods.filter((_, i) => i !== index);
        setMethods(updatedMethods);
    };

    const styles = {
        container: {
            fontFamily: "Arial, sans-serif",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#f9f9f9",
            display: "flex",
            flexDirection: "column",
            marginBottom: '90px',
            position: 'absolute',  
            top: '230px',
            right: '50px', 
            width: '700px', 
            height: '94%', 
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
            flex: 1,
        },
        input: {
            display: "block",
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
        },
        button: {
            width: "100%",
            margin: "10px 0",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        },
        methodList: {
            marginTop: "20px",
            overflowY: "auto",
            padding: "10px",
            backgroundColor: "#ffffff",
            borderRadius: "5px",
            border: "1px solid #ccc",
            maxHeight: "200px",
        },
        methodItem: {
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
            <h2 style={styles.heading}>Communication Method Management</h2>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Name"
                    value={newMethod.name}
                    onChange={(e) => setNewMethod({ ...newMethod, name: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newMethod.description}
                    onChange={(e) => setNewMethod({ ...newMethod, description: e.target.value })}
                    style={styles.input}
                />
                <input
                    type="number"
                    placeholder="Sequence"
                    value={newMethod.sequence}
                    onChange={(e) => setNewMethod({ ...newMethod, sequence: parseInt(e.target.value) })}
                    style={styles.input}
                />
                <label>
                    Mandatory:
                    <input
                        type="checkbox"
                        checked={newMethod.mandatory}
                        onChange={(e) => setNewMethod({ ...newMethod, mandatory: e.target.checked })}
                    />
                </label>
            </div>
            <button onClick={handleAddMethod} style={styles.button}>
                {isEditing !== null ? "Update Method" : "Add Method"}
            </button>

            <h3 style={styles.heading}>Communication Methods</h3>
            <div style={styles.methodList}>
                {methods.map((method, index) => (
                    <div key={index} style={styles.methodItem}>
                        <p><strong>Name:</strong> {method.name}</p>
                        <p><strong>Description:</strong> {method.description}</p>
                        <p><strong>Sequence:</strong> {method.sequence}</p>
                        <p><strong>Mandatory:</strong> {method.mandatory ? 'Yes' : 'No'}</p>
                        <button
                            onClick={() => handleEditMethod(index)}
                            style={{ ...styles.actionButton, ...styles.editButton }}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDeleteMethod(index)}
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

export default CommunicationMethodManagement;
