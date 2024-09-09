import React, { useState } from 'react';
import './DonationPortal.css'; // Import the CSS file for styling

// Static initial event data
const initialEvents = [
  {
    id: 1,
    title: 'Annual Fundraiser Gala',
    date: '2024-09-15',
    location: 'City Hall',
    description: 'Join us for our annual fundraiser gala to support local charities.',
  },
  {
    id: 2,
    title: 'Charity Run 5K',
    date: '2024-10-05',
    location: 'Central Park',
    description: 'Participate in our charity run and help raise funds for education programs.',
  },
  // Additional events can be added here
];

const DonationPortal = () => {
  // State to manage the list of events and selected event
  const [events] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Function to handle when the "Donate" button is clicked
  const handleDonateClick = (event) => {
    setSelectedEvent(event);
  };

  // Function to handle closing the event details view
  const handleCloseDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="donation-portal">
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-box">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-location">{event.location}</p>
            <p className="event-description">{event.description}</p>
            <button className="donate-button" onClick={() => handleDonateClick(event)}>
              Donate
            </button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="event-details">
          <button className="close-button" onClick={handleCloseDetails}>
            X
          </button>
          <h3 className="event-title">{selectedEvent.title}</h3>
          <p className="event-date">{selectedEvent.date}</p>
          <p className="event-location">{selectedEvent.location}</p>
          <p className="event-description">{selectedEvent.description}</p>
          <button className="pay-button">Pay</button>
        </div>
      )}
    </div>
  );
};

export default DonationPortal;
