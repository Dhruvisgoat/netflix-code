import React from 'react';
import './Banner.scss';
import bannerImage from '../../assets/banner.jpg'

function Banner() {
  const bannerTitle = 'Black Panther'; // Replace with your banner title
  const bannerDescription = '•Action •2022'; // Replace with your banner description

  return (
    <div className="banner"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}>
      <div className="banner__contents">
        <h1 className="banner__title">{bannerTitle}</h1>
        <p className="banner__description">{bannerDescription}</p>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
