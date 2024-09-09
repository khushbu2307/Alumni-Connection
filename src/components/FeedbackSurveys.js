import React, { useState } from 'react';
import './FeedbackSurvey.css'; // Import the CSS file for styling

// Static event data
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

const FeedbackSurvey = () => {
  const [events, setEvents] = useState(initialEvents); // Manage events state
  const [feedback, setFeedback] = useState({}); // Manage feedback for each event
  const [suggestion, setSuggestion] = useState(''); // Manage suggestions

  const handleStarClick = (eventId, rating) => {
    // Update feedback state with the selected rating
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [eventId]: rating,
    }));
  };

  const handleSuggestionChange = (e) => {
    // Update suggestion state with the current input
    setSuggestion(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Feedback:', feedback);
    console.log('Suggestions:', suggestion);
    // Placeholder for future database submission logic
    // This can be replaced with an API call to store feedback in a SQL database
  };

  return (
    <div className="feedback-survey">
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-box">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-location">{event.location}</p>
            <p className="event-description">{event.description}</p>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${feedback[event.id] >= star ? 'selected' : ''}`}
                  onClick={() => handleStarClick(event.id, star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="suggestion-box">
        <textarea
          placeholder="Provide your suggestions..."
          value={suggestion}
          onChange={handleSuggestionChange}
          className="suggestion-textarea"
        />
        <button className="submit-button" onClick={handleSubmit}>
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default FeedbackSurvey;
