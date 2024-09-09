import React, { useState } from 'react';
import { FaHome, FaUserGraduate, FaDonate, FaNetworkWired, FaBriefcase, FaUsers, FaStar, FaCalendarAlt, FaCommentDots, FaUserCircle } from 'react-icons/fa'; // Import icons
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [showProfile, setShowProfile] = useState(false);
    const [profilePic, setProfilePic] = useState(null); // State to store the profile picture
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate('/signup');
    };

    const handleProfilePicChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result); // Set the selected image as the profile picture
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteProfilePic = () => {
        setProfilePic(null); // Reset the profile picture to the default icon
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                Alumni Portal
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/">
                        <FaHome />
                        <span className="icon-name">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/donation-portal">
                        <FaDonate />
                        <span className="icon-name">Donation Portal</span>
                    </Link>
                </li>
                <li>
                    <Link to="/networking-hub">
                        <FaNetworkWired />
                        <span className="icon-name">Networking Hub</span>
                    </Link>
                </li>
                <li>
                    <Link to="/job-portal">
                        <FaBriefcase />
                        <span className="icon-name">Job Portal</span>
                    </Link>
                </li>
                <li>
                    <Link to="/alumni-directory">
                        <FaUsers />
                        <span className="icon-name">Alumni Directory</span>
                    </Link>
                </li>
                <li>
                    <Link to="/success-stories">
                        <FaStar />
                        <span className="icon-name">Success Stories</span>
                    </Link>
                </li>
                <li>
                    <Link to="/events-reunions">
                        <FaCalendarAlt />
                        <span className="icon-name">Events & Reunions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/feedback-surveys">
                        <FaCommentDots />
                        <span className="icon-name">Feedback & Surveys</span>
                    </Link>
                </li>
            </ul>
            <div className="navbar-auth">
                <div className="profile-pic" onClick={() => setShowProfile(!showProfile)}>
                    {profilePic ? (
                        <img src={profilePic} alt="Profile" className="profile-pic-img" />
                    ) : (
                        <FaUserCircle />
                    )}
                </div>
                {showProfile && (
                    <div className="profile-sidebar">
                        <p className="username">John Doe</p> {/* Replace with actual username */}
                        <label htmlFor="profile-pic-upload" className="upload-button">
                            Set Profile Picture
                        </label>
                        <input
                            type="file"
                            id="profile-pic-upload"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleProfilePicChange}
                        />
                        {profilePic && (
                            <button className="delete-button" onClick={handleDeleteProfilePic}>
                                Delete Profile Picture
                            </button>
                        )}
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
