import React, { useState } from 'react';
import './AlumniDirectory.css'; // Import the CSS file for styling

// Static initial alumni data
const alumniData = [
  {
    id: 1,
    name: 'John Doe',
    date: '2024-08-10',
    journey: 'Completed MBA from Harvard. Now working at Google as a Senior Engineer.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    date: '2024-07-22',
    journey: 'Started a successful startup in the fintech sector. Recently featured in Forbes.',
  },
  // Additional alumni entries can be added here
];

const AlumniDirectory = () => {
  // State to manage the search input
  const [search, setSearch] = useState('');

  // Filter the alumni list based on the search input
  const filteredAlumni = alumniData.filter((alumni) =>
    alumni.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="alumni-directory">
      <h1>Alumni Directory</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Alumni by Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="alumni-list">
        {filteredAlumni.map((alumni) => (
          <div key={alumni.id} className="alumni-box">
            <h3 className="alumni-name">{alumni.name}</h3>
            <p className="alumni-date">{alumni.date}</p>
            <p className="alumni-journey">{alumni.journey}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniDirectory;
