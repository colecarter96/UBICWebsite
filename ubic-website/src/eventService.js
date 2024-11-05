import { db } from './firebaseConfig'; // Import the Firestore instance
import { collection, addDoc, getDocs } from "firebase/firestore";

// Reference to the events collection
const eventsCollection = collection(db, "events");

// Function to add an event
export const addEvent = async (eventData) => {
    try {
        const docRef = await addDoc(eventsCollection, eventData);
        console.log("Event added with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding event: ", e);
    }
};

// Function to get all events
export const getEvents = async () => {
    const eventSnapshot = await getDocs(eventsCollection);
    const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return eventList;
};
