import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-logo">Alumni Association</h2>
          <p>
            Connecting alumni and students to foster a strong, engaged community.
            Stay in touch, share your journey, and support the future of our institution.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Alumni Stories</a></li>
            <li><a href="#">Job Portal</a></li>
            <li><a href="#">Donate</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li><i className="fas fa-phone"></i> +9123 456 78900</li>
            <li><i className="fas fa-envelope"></i> alumniassociation@college.edu</li>
            <li><i className="fas fa-map-marker-alt"></i> Charusat University ,Changa-102030</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Alumni Association. All Rights Reserved.</p>
        <div className="socials">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
