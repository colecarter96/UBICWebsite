import { Image, ImageKitProvider } from "@imagekit/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

const URL_ENDPOINT = "https://ik.imagekit.io/6nqhog2gg";

function EventsGallery() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchEvents = async () => {
      try {
        const q = query(collection(db, "events"), where("active", "==", true));

        const snapshot = await getDocs(q);

        if (!isMounted) return;

        const results = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setEvents(results);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading)
    return (
      <div className="box-with-border">
        <p>Loading events...</p>
      </div>
    );
  if (!events.length)
    return (
      <div className="box-with-border">
        <p>No events this week. Check again later!</p>
      </div>
    );

  return (
    <ImageKitProvider urlEndpoint={URL_ENDPOINT}>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {events.map((event) => (
          <Image
            key={event.id}
            src={event.imagePath}
            className="merch-img"
            transformation={[{ width: 300, height: 300 }]}
          />
        ))}
      </div>
    </ImageKitProvider>
  );
}

export default EventsGallery;
