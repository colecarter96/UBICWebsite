import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Your basic test component
import EventsPage from './pages/EventsPage';
import TeamPage from './pages/TeamPage'

function App() {
    return (
        
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/team" element={<TeamPage />} />
        </Routes>
        
    );
}

export default App;

