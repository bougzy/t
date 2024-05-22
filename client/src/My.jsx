// src/My.js
import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const My = () => {
    const [depositAmount, setDepositAmount] = useState(0);
    const [profitBalance, setProfitBalance] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://t-apiz.vercel.app/api/deposit', {
                    credentials: 'include'
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setDepositAmount(data.amount ?? 0);
                setProfitBalance(data.profitBalance ?? 0);
            } catch (error) {
                console.error('Failed to fetch data:', error);
                setError('Failed to fetch data. Please ensure you are authenticated.');
            }
        };

        fetchData();
    }, []);

    const handleDeposit = async () => {
        if (!isNaN(inputValue) && parseFloat(inputValue) > 0) {
            try {
                const response = await fetch('https://t-apiz.vercel.app/api/deposit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify({ amount: parseFloat(inputValue) })
                });

                if (!response.ok) {
                    throw new Error('Failed to deposit');
                }

                const newAmount = depositAmount + parseFloat(inputValue);
                setDepositAmount(newAmount);
                setInputValue('');
            } catch (error) {
                console.error('Failed to deposit:', error);
                setError('Failed to deposit. Please try again.');
            }
        } else {
            console.error('Invalid deposit amount');
            setError('Invalid deposit amount');
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setError('');
    };

    return (
        <Container>
            <Card className="border-0 p-5 mt-4">
                <Card.Body>
                    <h1>Deposit Dashboard</h1>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <Form>
                        <Form.Group controlId="depositAmount">
                            <Form.Label>Enter deposit amount:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter amount"
                                value={inputValue}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button className="mt-2" variant="warning" onClick={handleDeposit}>
                            Deposit
                        </Button>
                    </Form>
                    <hr />
                    <h2>Total Deposit Amount:</h2>
                    <h3>${depositAmount.toFixed(2)}</h3>
                    <hr />
                    <h2>Profit Balance:</h2>
                    <h3>${profitBalance.toFixed(2)}</h3>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default My;
