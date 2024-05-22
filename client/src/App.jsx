// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import My from './My';
import Registration from './Registration';
import Login from './Login';
import Logout from './Logout';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Home from './Home';
import ResetPassword from './ResetPassword';
import AppNavbar from './AppNavbar';
import TidioChatWidget from './TidioChatWidget';

const App = () => {
    return (
        <>
        <AppNavbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/my" element={<My />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
            </Routes>
            <TidioChatWidget />
            <Footer />
        </>
    );
};

export default App;
