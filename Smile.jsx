import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Smile.css';
import phoneIcon from './assets/phone.png';
import emailIcon from './assets/ema.png';
import kul from './assets/kul.png';

const Smile = () => {
  const [content, setContent] = useState({
    phoneNumbers: [+998900036642, +998990030303],
    emails: ['dhcdhb@gmail.com', 'fignya@gmail.com'],
    availability: '24/7',
  });

  useEffect(() => {
    axios.get('http://localhost:5000/content')
      .then(response => {
        setContent(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='smilebolim'>
      <div className="smilemal">
        <p className="title">AKFA MEDLINE</p>
        <p className="availability">{content.availability}</p>
        <p className="description">ВЫСОКОКЛАССНЫЕ СПЕЦИАЛИСТЫ ГОТОВЫ ПОМОЧЬ ВАМ В ЛЮБОЕ ВРЕМЯ.</p>
        <div className="contact-info">
          <div className="phone-column">
            {content.phoneNumbers.map((number, index) => (
              <div className="contact-item" key={index}>
                <img className="icon" src={phoneIcon} alt="Phone Icon" />
                <span className="contact-number">{number}</span>
              </div>
            ))}
          </div>
          <div className="email-column">
            {content.emails.map((email, index) => (
              <div className="contact-item" key={index}>
                <img className="icon" src={emailIcon} alt="Email Icon" />
                <span className="contact-email">{email}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="smileqiz">
        <img className="smile-img" src={kul} alt="Icon" />
      </div>
    </div>
  );
};

export default Smile;

