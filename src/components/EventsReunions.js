import React, { useState } from 'react';
import './EventList.css'; // Import the CSS file for styling

// Static event data
const initialEvents = [
  {
    id: 1,
    title: 'Annual Alumni Meet',
    date: '2024-09-10',
    description: 'Join us for our annual alumni meet to connect with old friends and network with fellow alumni.',
    venue: 'College Auditorium',
  },
  {
    id: 2,
    title: 'Career Development Workshop',
    date: '2024-09-15',
    description: 'Attend our workshop to enhance your career skills and get advice from industry experts.',
    venue: 'Main Hall',
  },
  // Additional events can be added here
];

const EventList = () => {
  const [events, setEvents] = useState(initialEvents);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    description: '',
    venue: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvents = [
      ...events,
      {
        id: events.length + 1,
        ...newEvent,
      },
    ];
    setEvents(updatedEvents);
    setShowForm(false);
    setNewEvent({
      title: '',
      date: '',
      description: '',
      venue: ''
    });
  };

  return (
    <div className="event-list">
      <div className="event-controls">
        <button className="add-event-button" onClick={() => setShowForm(!showForm)}>
          Add Event
        </button>
        <button className="search-button">
          Search
        </button>
      </div>

      {showForm && (
        <form className="event-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Event Name"
            value={newEvent.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newEvent.description}
            onChange={handleInputChange}
            required
          ></textarea>
          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={newEvent.venue}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      )}

      {events.map((event) => (
        <div key={event.id} className="event-box">
          <h3 className="event-title">{event.title}</h3>
          <p className="event-date">{event.date}</p>
          <p className="event-description">{event.description}</p>
          <p className="event-venue"><strong>Venue:</strong> {event.venue}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
