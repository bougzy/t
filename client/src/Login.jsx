// src/Login.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            const response = await fetch('http://localhost:5001/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',  
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                navigate('/dashboard');  
            } else {
                const data = await response.json();
                setError(data.error || 'Login failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className='border border rounded mx-auto mb-5 shadow-lg mt-5 p-4 m-1 text-white' style={{ backgroundColor: 'purple' }}>
            <h1>Login</h1>
            {error && <p className="text-danger">{error}</p>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button className="mt-2 fw-bold w-50" type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
                </Button>
            </Form>
            <div className="mt-2">
                <h6>Don't have an account?</h6>
                <p className="fw-bold">Please <a className="text-white bg-primary" href="/register">Register</a></p>
                <p className="fw-bold">Forgot Password?<a className="text-white m-1 bg-primary" href="/resetpassword">Click Here</a></p>
            </div>
        </Container>
    );
};

export default Login;
