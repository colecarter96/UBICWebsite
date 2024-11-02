import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Your basic test component
import EventsPage from './components/EventsPage';

function App() {
    return (
        
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
        </Routes>
        
    );
}

export default App;
