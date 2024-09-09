import React, { useRef } from 'react';
import './Home.css';
import image1 from '../components/image1.jpg';
import alumniCircle from '../components/alumni-circle.png'; // Import the alumni image
import laptop from '../components/laptop.png';

const boxData = [
    { id: 1, title: "Development", description: "Creating user-friendly, customized websites with WordPress.", link: "Learn More" },
    { id: 2, title: "Migration", description: "Smooth migration services for WordPress sites.", link: "Learn More" },
    { id: 3, title: "Server Migration", description: "Efficient server migration services.", link: "Learn More" },
    { id: 4, title: "SEO Optimization", description: "Improve website visibility and search rankings.", link: "Learn More" },
    { id: 5, title: "E-commerce", description: "Developing scalable e-commerce solutions.", link: "Learn More" },
    { id: 6, title: "Support", description: "Providing ongoing support and maintenance.", link: "Learn More" },
    { id: 7, title: "Cloud Solutions", description: "Transition to cloud platforms with ease.", link: "Learn More" },
    { id: 8, title: "Cyber Security", description: "Security solutions for websites and servers.", link: "Learn More" }
];

function Home() {
    const boxContainerRef = useRef(null);

    const scrollLeft = () => {
        boxContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        boxContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="home-page">
            <div className="image-container">
                <img src={image1} alt="Background" className="background-image rotate" />
            </div>

            {/* Alumni Circle Section with Text */}
            <div className="alumni-section">
                <div className="alumni-text">
                    <h2>Connect with your alumni like never before</h2>
                </div>
                <div className="alumni-image">
                    <img src={alumniCircle} alt="Alumni Circle" />
                </div>
            </div>

            {/* Box section with navigation */}
            <div className="slider-container">
                <div className="box-container" ref={boxContainerRef}>
                    {boxData.map((box) => (
                        <div key={box.id} className="custom-box">
                            <h3 className="box-title">{box.title}</h3>
                            <p className="box-description">{box.description}</p>
                            <a href="#" className="box-link">
                                {box.link} <span>→</span>
                            </a>
                        </div>
                    ))}
                </div>
                {/* Slider Controls */}
                <div className="slider-controls">
                    <button className="prev-button" onClick={scrollLeft}>◀</button>
                    <button className="next-button" onClick={scrollRight}>▶</button>
                </div>
            </div>
            <div class="section-container">
    <div class="section-left">
        <div class="number-heading">
            <h1>1</h1>
        </div>
        <div class="content">
            <h2>Alumni Software</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lacus at elit suscipit fermentum. Curabitur nec odio sed tortor dapibus convallis. Fusce commodo, orci euismod lobortis.

            </p>
        </div>
       
        <div class="image-section">
            <img src={require('D:/allwebsites/alumni-association/src/components/laptop.png')} alt="Alumni Software" />
        </div>
    </div>
    
    <div class="section-right">
        <ul class="features-list">
            <li>Exclusive Portal</li>
            <li>Database Management</li>
            <li>Website Management</li>
            <li>Member Management</li>
            <li>Engagement</li>
            <li>Alumni Networking</li>
            <li>Fundraising</li>
            <li>Analytics & Reports</li>
        </ul>
    </div>
</div>

</div>

    );
}
    

export default Home;
