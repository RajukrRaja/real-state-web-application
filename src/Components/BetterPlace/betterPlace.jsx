import React from 'react';
import './betterplace.css'

const BetterPlace = () => {
  // Sample data for better places
  const places = [
    {
      id: 1,
      title: "Find, Buy & Own Your Dream Home",
      description: "Explore a variety of homes for sale and find your dream home today.",
      imageUrl: "https://teja12.kuikr.com/is/a/c/430x200/gallery_images/original/cf5dc69172576b9.gif",
      link: "/dream-home"
    },
    {
      id: 2,
      title: "Explore Apartments, Land, and Builders",
      description: "Discover apartments, available land, and reputable builders for your next property investment.",
      imageUrl: "https://teja12.kuikr.com/is/a/c/430x200/gallery_images/original/cf5dc69172576b9.gif",
      link: "/explore-apartments"
    },
    {
      id: 3,
      title: "Top Articles on Home Buying",
      description: "Get informed with our curated selection of articles covering everything you need to know about buying a home.",
      imageUrl: "https://teja12.kuikr.com/is/a/c/430x200/gallery_images/original/cf5dc69172576b9.gif",
      link: "/home-buying-articles"
    },
    {
      id: 4,
      title: "Water Conservation Efforts of Builders",
      description: "Learn how builders are incorporating water conservation measures into their projects.",
      imageUrl: "https://teja12.kuikr.com/is/a/c/430x200/gallery_images/original/cf5dc69172576b9.gif",
      link: "/water-conservation"
    },
    {
      id: 5,
      title: "Impact of Policy on Affordable Housing",
      description: "Understand the impact of various policies on the availability and affordability of housing.",
      imageUrl: "https://teja12.kuikr.com/is/a/c/430x200/gallery_images/original/cf5dc69172576b9.gif",
      link: "/policy-impact"
    }
  ];

  return (
    <div>
      <h2>Find Better Places to Live, Work, and Wonder...</h2>
      <div className="places-container">
        {places.map(place => (
          <div key={place.id} className="place-card">
            <img src={place.imageUrl} alt={place.title} />
            <h3>{place.title}</h3>
            <p>{place.description}</p>
            <a href={place.link}>Explore</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetterPlace;
