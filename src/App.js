import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Your basic test component
import EventsPage from './pages/EventsPage';
import TeamPage from './pages/TeamPage'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BioinformaticsPage from './pages/BioinformaticsPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/bioinformatics" element={<BioinformaticsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </>
    );
}

export default App;

