import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Welcome.css';

function Welcome() {
  // Define media queries for different screen sizes
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="welcome-container">
      {isTabletOrMobile ? (
        // Content layout for tablet/mobile screens
        <div className="left-div">
          <h1>Find Faster and </h1>
          <h1>Smarter</h1>
        </div>
      ) : (
        // Content layout for desktop screens
        <>
          <div className="left-div">
            <h1>Find Faster and </h1>
            <h1>Smarter</h1>
          </div>
          <div className="right-div">
            <img src="your-image-url.jpg" alt="Welcome Image" />
          </div>
        </>
      )}
    </div>
  );
}

export default Welcome;
