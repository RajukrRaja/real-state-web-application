import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS
import './chhose.css'; // Import your component's CSS file

const Choose = () => {
  const containerRef = useRef(null); // Create a ref for the container element

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []); // Ensure it only runs once

  return (
    <div ref={containerRef} className="choose-container" >
      <h2 className="choose-heading">Benefits of CommQuest</h2>
      <div className="benefits-list">
        <div className="benefit-item" data-aos="fade-up">
          <FontAwesomeIcon icon={faCheckCircle} className="benefit-icon" />
          <div>
            <h3>Over 12 Lac properties</h3>
            <p>Explore a vast database of over 12 lac properties, with 100,000+ properties added every day, ensuring you find your ideal space.</p>
          </div>
        </div>
        <div className="benefit-item" data-aos="fade-up">
          <FontAwesomeIcon icon={faCheckCircle} className="benefit-icon" />
          <div>
            <h3>Verification by CommQuest team</h3>
            <p>Rest assured with our thorough verification process, where photos/videos and other details are meticulously authenticated on location by our dedicated team.</p>
          </div>
        </div>
        <div className="benefit-item" data-aos="fade-up">
          <FontAwesomeIcon icon={faCheckCircle} className="benefit-icon" />
          <div>
            <h3>Large user base</h3>
            <p>Join a thriving community with a large user base, fostering high user engagement and interaction to facilitate seamless property transactions.</p>
          </div>
        </div>
        {/* Three additional benefit items */}
        <div className="benefit-item" data-aos="fade-up">
          <FontAwesomeIcon icon={faCheckCircle} className="benefit-icon" />
          <div>
            <h3>Flexible payment options</h3>
            <p>Experience convenience with a range of flexible payment options, allowing you to choose the method that suits you best for hassle-free transactions.</p>
          </div>
        </div>
        <div className="benefit-item" data-aos="fade-up">
          <FontAwesomeIcon icon={faCheckCircle} className="benefit-icon" />
          <div>
            <h3>24/7 customer support</h3>
            <p>Receive round-the-clock support from our dedicated customer service team, ensuring that your queries and concerns are promptly addressed at any hour.</p>
          </div>
        </div>
        <div className="benefit-item" data-aos="fade-up">
          <FontAwesomeIcon icon={faCheckCircle} className="benefit-icon" />
          <div>
            <h3>Easy search and filter</h3>
            <p>Effortlessly navigate through our platform with easy-to-use search and filter functionalities, enabling you to quickly find properties that match your criteria.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
