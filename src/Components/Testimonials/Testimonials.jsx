import React from 'react';
import './Testimonials.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonials = () => {
  // Initialize AOS
  AOS.init();

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading" data-aos="fade-up">TESTIMONIALS</h2>
      <p className="testimonials-subheading" data-aos="fade-up">
        What our customers are saying about CommQuest
        <br />
        Hear from our satisfied buyers, tenants, owners, and dealers
      </p>

      <div className="testimonial" data-aos="fade-left">
        <div className="testimonial-info">
          <div className="testimonial-details">
            <img src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg" alt="" />
            <p className="testimonial-name">Srikanth Malleboina</p>
            <p className="testimonial-role">Owner, Hyderabad</p>
          </div>
        </div>
        <p className="testimonial-text">
          You get an exclusive RM from CommQuest team who tracks your property closely
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, repellendus rerum. Itaque voluptatibus sit repudiandae. Non blanditiis recusandae ut repellat quod? Impedit, magnam vitae consequatur aliquam facilis sit iste officiis.</p>
        </p>
      </div>

      <div className="testimonial" data-aos="fade-right">
        <div className="testimonial-info">
          <div className="testimonial-details">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm4wdpF6jr9Duf54PiuFstL5fWwww8BKdwjJf1WofHp3GF0O_TWBbqeEJlK_r79PFqfww&usqp=CAU" alt="" />
            <p className="testimonial-name">Prateek Sengar</p>
            <p className="testimonial-role">Owner, Delhi</p>
          </div>
        </div>
        <p className="testimonial-text">
          CommQuest has a better response rate compared to any of their competitors.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquid placeat animi nostrum tenetur saepe adipisci ad iste minus eligendi cumque atque, obcaecati harum perferendis quam iusto beatae id sequi!</p>
      </div>

      <div className="testimonial" data-aos="fade-left">
        <div className="testimonial-info">
          <div className="testimonial-details">
            <img src="https://img.freepik.com/free-photo/happy-successful-business-leader_74855-2306.jpg" alt="" />
            <p className="testimonial-name">SOBHA Developers</p>
            <p className="testimonial-role">
              Platform to meet customers' needs and increase revenues with lowest cost
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, harum nihil illum dolor facere officiis
               itaque rerum natus corrupti necessitatibus eum, similique reprehenderit minus quam, est mollitia et! Molestiae, impedit.
            </p>
          </div>
        </div>
      </div>

      <p className="view-all-testimonials" data-aos="fade-up">View all testimonials →</p>
    </div>
  );
};

export default Testimonials;
