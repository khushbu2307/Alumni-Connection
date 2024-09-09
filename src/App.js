import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Registration from './components/Registration';
import DonationPortal from './components/DonationPortal';
import NetworkingHub from './components/NetworkingHub';
import JobPortal from './components/JobPortal';
import AlumniDirectory from './components/AlumniDirectory';
import SuccessStories from './components/SuccessStories';
import EventsReunions from './components/EventsReunions';
import FeedbackSurveys from './components/FeedbackSurveys';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
        setShowLogin(false);
    };

    const handleSignup = () => {
        setIsAuthenticated(true);
        setShowSignup(false);
    };

    const handleShowLogin = () => {
        setShowLogin(true);
        setShowSignup(false);
    };

    const handleShowSignup = () => {
        setShowSignup(true);
        setShowLogin(false);
    };

    return (
        <Router>
            {/* Conditionally render Navbar */}
            {!showLogin && !showSignup && <Navbar />}
            <Routes>
                <Route
                    path="/"
                    element={
                        showLogin ? (
                            <Login onLoginSubmit={handleLogin} />
                        ) : showSignup ? (
                            <Signup onSignupSubmit={handleSignup} />
                        ) : (
                            <Home onShowLogin={handleShowLogin} onShowSignup={handleShowSignup} />
                        )
                    }
                />
                <Route path="/registration" element={<Registration />} />
                <Route path="/donation-portal" element={<DonationPortal />} />
                <Route path="/networking-hub" element={<NetworkingHub />} />
                <Route path="/job-portal" element={<JobPortal />} />
                <Route path="/alumni-directory" element={<AlumniDirectory />} />
                <Route path="/success-stories" element={<SuccessStories />} />
                <Route path="/events-reunions" element={<EventsReunions />} />
                <Route path="/feedback-surveys" element={<FeedbackSurveys />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
