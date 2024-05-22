
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        email: '',
        newPassword: ''
    });
    const [loading, setLoading] = useState(false); // Loading state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true
        try {
            // Simulate a delay of 1.5 seconds
            await new Promise(resolve => setTimeout(resolve, 1500));

            const response = await fetch('http://localhost:5001/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Password reset successful');
            } else {
                const data = await response.json();
                alert(data.error || 'Password reset failed');
            }
        } catch (error) {
            console.error('Password reset failed:', error);
            alert('Password reset failed. Please try again later.');
        } finally {
            setLoading(false); // Set loading state back to false
        }
    };

    return (
        <Container className='border border mx-auto mb-5 shadow-lg rounded mt-5 p-4 m-1 text-white' style={{backgroundColor:'purple'}}>
            <h1>Reset Password</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="newPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
                </Form.Group>
                <Button className='mt-2 fw-bold w-50' type="submit" disabled={loading}>{loading ? 'Loading...' : 'Reset'}</Button>
            </Form>
            <div className="mt-1">
                <h6>Already have an account?</h6>
                <p className="fw-bold">Please <a href="/login" className="text-white bg-primary p-1 rounded" style={{textDecoration: "none"}}>Login</a></p>
            </div>
        </Container>
    );
};

export default ResetPassword;

