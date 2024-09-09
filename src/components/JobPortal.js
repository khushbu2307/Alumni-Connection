import React, { useState } from 'react';
import './JobPortal.css'; // Import the CSS file for styling

// Static initial job data
const initialJobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120,000',
    description: 'Looking for an experienced Software Engineer to join our team.',
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovate Inc.',
    location: 'New York, NY',
    salary: '$140,000',
    description: 'Seeking a skilled Product Manager to lead product development.',
  },
  // Additional jobs can be added here
];

const JobPortal = () => {
  // State to manage jobs, search, and form inputs
  const [jobs, setJobs] = useState(initialJobs);
  const [search, setSearch] = useState('');
  const [newJob, setNewJob] = useState({ title: '', company: '', location: '', salary: '', description: '' });
  const [showForm, setShowForm] = useState(false);

  // Handle search input change
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handle adding a new job to the list
  const handleAddJob = () => {
    if (newJob.title && newJob.company && newJob.location && newJob.salary && newJob.description) {
      setJobs([...jobs, { ...newJob, id: jobs.length + 1 }]);
      setNewJob({ title: '', company: '', location: '', salary: '', description: '' });
      setShowForm(false);
    }
  };

  // Filter jobs based on the search input
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="job-portal">
      <div className="header">
        <button className="add-job-button" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'Add Job'}
        </button>
        <input
          type="text"
          placeholder="Search Jobs"
          value={search}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      
      {/* Form for adding new job listings */}
      {showForm && (
        <div className="job-form">
          <input
            type="text"
            placeholder="Company Name"
            value={newJob.company}
            onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Designation"
            value={newJob.title}
            onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Location"
            value={newJob.location}
            onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Salary"
            value={newJob.salary}
            onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
            className="form-input"
          />
          <textarea
            placeholder="Job Description"
            value={newJob.description}
            onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
            className="form-textarea"
          />
          <button className="submit-job-button" onClick={handleAddJob}>Submit Job</button>
        </div>
      )}
      
      {/* List of jobs */}
      <div className="job-list">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-box">
            <h3 className="job-title">{job.title}</h3>
            <p className="job-company">{job.company}</p>
            <p className="job-location">{job.location}</p>
            <p className="job-salary">{job.salary}</p>
            <p className="job-description">{job.description}</p>
            <div className="job-buttons">
              <button className="apply-button">Apply</button>
              <button className="view-details-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPortal;
