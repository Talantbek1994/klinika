import React, { useState, useEffect } from 'react';
import './Director.css';
import men from './assets/Men.mp4'; // Faylni to'g'ri import qilish


const Director = () => {
  const [videoSrc, setVideoSrc] = useState(men);
  const [directorName, setDirectorName] = useState('');
  const [directorTitle, setDirectorTitle] = useState('');
  const [messages, setMessages] = useState([]);
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    fetch('/directorData.json')
      .then(response => response.json())
      .then(data => {
        setVideoSrc(data.videoSrc || men);
        setDirectorName(data.directorName);
        setDirectorTitle(data.directorTitle);
        setMessages(data.messages);
        setStatistics(data.statistics);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='director'>
      <div className="main">
        <div className="dir">
          <video className="video" controls>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        <div className="ector">
          <h2 className="director-name">{directorName}</h2>
          <p className="director-title">{directorTitle}</p>
          {messages.map((message, index) => (
            <p key={index} className="director-message">{message}</p>
          ))}
          <button className='more'>More</button>
        </div>
      </div>
      <div className="common">
        {statistics.map((stat, index) => (
          <div 
            key={index} 
            className='stat-card' 
            style={{backgroundColor: stat.backgroundColor}}
          >
            <h1 style={{color: stat.color}}>{stat.value}</h1>
            <strong>
              <p style={{color: stat.color}}>{stat.label}</p>
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Director;
