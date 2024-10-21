import React, { useRef, useEffect, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './Trendprop.css';

const TrendProp = () => {
  smoothscroll.polyfill();

  const scrollRef = useRef(null);
  const [properties, setProperties] = useState([
    { id: 1, imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D', title: 'Property 1', price: '$500,000' },
    { id: 2, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0b5Q6BZ1zWqkLF11adLejl7CWyK2T_WyXU8UXSbmOQ&s', title: 'Property 2', price: '$600,000' },
    { id: 3, imageUrl: 'https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg', title: 'Property 3', price: '$700,000' },
    { id: 3, imageUrl: 'https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg', title: 'Property 3', price: '$700,000' },
    { id: 3, imageUrl: 'https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg', title: 'Property 3', price: '$700,000' },
    { id: 3, imageUrl: 'https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg', title: 'Property 3', price: '$700,000' },
    { id: 3, imageUrl: 'https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg', title: 'Property 3', price: '$700,000' },
  ]);
  const [scrolling, setScrolling] = useState(false);

  // useEffect to auto-scroll
  useEffect(() => {
    const intervalId = setInterval(scrollRight, 1000); // Auto-scroll every 1 second
    return () => clearInterval(intervalId);
  }, []);

  // useEffect to duplicate properties for infinite scrolling
  useEffect(() => {
    if (scrollRef.current && scrolling) {
      const container = scrollRef.current;
      const containerWidth = container.offsetWidth;
      const scrollWidth = container.scrollWidth;
      const scrollLeft = container.scrollLeft;

      // Check if scroll reached the end
      if (containerWidth + scrollLeft >= scrollWidth) {
        // Duplicate properties to the beginning of the list
        setProperties((prevProperties) => [...prevProperties, ...properties]);
        // Scroll back to the beginning
        container.scrollLeft = 0;
      }
    }
  }, [scrolling, properties]);

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      smoothScroll(scrollRef.current, 400, 500); // Adjust scroll increment and duration as needed
    }
  };

  // Function for smooth scrolling
  const smoothScroll = (element, distance, duration) => {
    const start = element.scrollLeft;
    const startTime = performance.now();

    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      element.scrollLeft = easeInOutQuad(elapsedTime / duration) * distance + start;
      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="container">
      <h2 className="heading">Trending Property</h2>
      
      <div className="scrollContainer" ref={scrollRef}>
        {properties.map((property, index) => (
          <div key={property.id + index} className="card" style={{ width: '60%' }}>
            <img src={property.imageUrl} alt={property.title} className="image" />
            <div className="propertyDetails">
              <h3 className="title">{property.title}</h3>
              <p className="price">{property.price}</p>
              <button className="exploreButton">Explore Property</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendProp;
