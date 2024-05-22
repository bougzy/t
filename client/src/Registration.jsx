// src/Registration.jsx
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            const response = await fetch('https://t-apiz.vercel.app/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                navigate('/login');
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Registration failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className='border border rounded mx-auto mb-5 shadow-lg mt-5 p-4 m-1 text-white' style={{ backgroundColor: 'purple' }}>
            <h1>Registration</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
                </Form.Group>
                <Button className='mt-2 fw-bold w-50' type="submit" disabled={loading}>{loading ? 'Loading...' : 'Register'}</Button>
            </Form>
            <div className="mt-1">
                <h6>Already have an account?</h6>
                <p className="fw-bold">Please <a className="text-white bg-primary" href="/login">Login</a></p>
            </div>
        </Container>
    );
};

export default Registration;
