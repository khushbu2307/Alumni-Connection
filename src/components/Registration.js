import React, { useState } from 'react';
import './Registration.css';

function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        graduationYear: '',
        profession: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add logic to send formData to the backend
    };

    return (
        <div className="registration">
            <h2>Alumni Registration</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input type="text" name="graduationYear" placeholder="Graduation Year" value={formData.graduationYear} onChange={handleChange} />
                <input type="text" name="profession" placeholder="Profession" value={formData.profession} onChange={handleChange} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Registration;
