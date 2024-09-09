import React, { useState } from 'react';
import './NetworkingHub.css';

// Static initial users data
const initialUsers = [
  {
    id: 1,
    name: 'Alice Johnson',
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
    details: 'Software Engineer at TechCorp',
  },
  {
    id: 2,
    name: 'Bob Smith',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    details: 'Product Manager at Innovate Inc.',
  },
  // Additional users can be added here
];

const NetworkingHub = () => {
  // State to manage users, search input, and the selected user
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  // Handle search input change
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handle user click to select a user
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  // Handle clicking the "Message" button
  const handleMessageClick = () => {
    alert(`Opening chat with ${selectedUser.name}...`);
  };

  // Handle clicking the "Add Friend" button
  const handleFriendClick = () => {
    alert(`${selectedUser.name} added to your friend list!`);
  };

  // Handle clicking the "Call" button
  const handleCallClick = () => {
    alert(`Calling ${selectedUser.name}...`);
  };

  // Filter users based on the search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="networking-hub">
      <div className="header">
        <input
          type="text"
          placeholder="Search Users"
          value={search}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <div className="user-list">
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-box" onClick={() => handleUserClick(user)}>
            <div className="profile-pic-container">
              <img src={user.profilePic} alt={user.name} className="profile-pic" />
            </div>
            <div className="user-details">
              <h3 className="user-name">{user.name}</h3>
              <p className="user-info">{user.details}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedUser && (
        <div className="user-details-panel-small">
          <h3>{selectedUser.name}</h3>
          <p>{selectedUser.details}</p>
          <button onClick={handleMessageClick}>Message</button>
          <button onClick={handleFriendClick}>Add Friend</button>
          <button onClick={handleCallClick}>Call</button>
        </div>
      )}
    </div>
  );
};

export default NetworkingHub;
