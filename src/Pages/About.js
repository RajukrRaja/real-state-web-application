import React from 'react';
import './About.css'; // Import CSS file
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

function About() {
  // Initialize AOS
  AOS.init();

  return (
    <div className="about">
      <div
        className="right"
        data-aos="flip-left" // Apply flip-left animation
        data-aos-offset="0"
        data-aos-duration="1000" // Specify duration
        data-aos-delay="300" // Optional delay
      >
        <h1>About Me</h1>
        <img src={require('../Image/gate photo.jpg')} alt="Team Member" />
      </div>
      <div className="about-content" data-aos="fade-up"> {/* Apply fade-up animation */}
        <h1>About Company</h1>
        <p data-aos="fade-up">
          Welcome to our company! We are dedicated to providing high-quality products/services to our customers.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sed nisl dignissim,
          sit amet vestibulum lorem tincidunt. Integer nec fermentum risus. Praesent at nibh nec purus rutrum
          accumsan. In non lectus ut nunc suscipit dictum. Vestibulum ut justo eget mauris vestibulum porttitor.
          Phasellus eget justo sit amet nulla commodo rutrum nec non velit.
        </p>
        <p data-aos="fade-up">
          Our mission is to exceed customer expectations by delivering innovative solutions and outstanding service.
          We strive to build long-lasting relationships with our clients and partners based on trust and integrity.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sed nisl dignissim.
        </p>
     
      </div>
    </div>
  );
}

export default About;
