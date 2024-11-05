import React, { useState } from 'react';
import { addEvent } from './eventService';

const AddEventForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const eventData = { title, date, description };
        await addEvent(eventData);
        // Clear the form or handle it as needed
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Event Title" required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Event Description" required />
            <button type="submit">Add Event</button>
        </form>
    );
};

export default AddEventForm;
 