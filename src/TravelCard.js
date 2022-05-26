import React from 'react';
import path from './img/Fill-219.png';

export default function TravelCard(props) {
  return (
    <div className="card-container">
      <div className="card-img">
        <img 
          src={props.imageUrl}
          alt="location-img"
        />
      </div>
      <div className="card-info">
        <div className='location-info'>
          <img
            src={path}
            alt="loc-icon"
            className='loc-icon'
          />
          <h4>{props.location}</h4>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <span className='date'>
          {props.startDate} - {props.endDate}
        </span>
        <p className='description'>{props.description}</p>
      </div>
    </div>
  )
}