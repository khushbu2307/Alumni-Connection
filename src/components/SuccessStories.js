import React, { useState, useEffect } from 'react';
import './SuccessStories.css'; // Import the CSS file for styling

// Placeholder data (can be fetched from a database later)
const initialStories = [
  // You can add initial static stories here if needed
];

const SuccessStories = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [journey, setJourney] = useState('');
  const [stories, setStories] = useState(initialStories);

  useEffect(() => {
    // Future implementation to fetch stories from SQL database
    // fetch('/api/stories')
    //     .then(response => response.json())
    //     .then(data => setStories(data))
    //     .catch(error => console.error('Error fetching stories:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && journey) {
      const newStory = { name, date, journey };

      // For now, add to local state
      setStories([...stories, newStory]);

      // Future implementation to send story to SQL database
      // fetch('/api/stories', {
      //     method: 'POST',
      //     headers: {
      //         'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(newStory)
      // })
      // .then(response => response.json())
      // .then(data => {
      //     setStories([...stories, data]);
      // })
      // .catch(error => console.error('Error adding story:', error));

      // Clear input fields
      setName('');
      setDate('');
      setJourney('');
    }
  };

  return (
    <div className="success-stories">
      <h1>Success Stories</h1>
      <form onSubmit={handleSubmit} className="story-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-input"
        />
        <textarea
          placeholder="Your Journey of Life"
          value={journey}
          onChange={(e) => setJourney(e.target.value)}
          className="form-textarea"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div className="story-list">
        {stories.map((story, index) => (
          <div key={index} className="story-box">
            <h3 className="story-name">{story.name}</h3>
            <p className="story-date">{story.date}</p>
            <p className="story-journey">{story.journey}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
