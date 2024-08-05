import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './Info.css';
import bed from './assets/bed.png';
import fizio from './assets/fizio.png';
import stom from './assets/stom.png';
import uzi from './assets/uzi.png';
import labor from './assets/labor.png';
import dermo from './assets/dermo.png';
import pol from './assets/pol.png'


const Info = () => {
  const navigate = useNavigate();

  const services = [
    { img: bed, text: 'Поликлиника', id: 'polyclinic' },
    { img: fizio, text: 'Физиотерапия', id: 'physiotherapy' },
    { img: stom, text: 'Стоматология', id: 'dentistry' },
    { img: uzi, text: 'Инструментальная диагностика (радиология, УЗИ)', id: 'diagnostics' },
    { img: labor, text: 'Лабораторная диагностика', id: 'laboratory' },
    { img: dermo, text: 'Дерматокосметология', id: 'dermocosmetology' }
  ];

  const handleServiceClick = (serviceId) => {
    navigate(`/info/service/${serviceId}`);
  };

  const handleOurServicesClick = () => {
    navigate('/info/our-services');
  };

  return (
    <div className='info'>
      <div className='services'>
        <p className='services-title'>BIZ TAQDIM ETAMIZ</p>
        <p className='services-description'>
          
        Biz oddiy tibbiy ko‘riklardan tortib murakkab operatsiyalargacha bo‘lgan yuqori darajadagi yordam ko‘rsatilayotganidan faxrlanamiz.
        </p>
        <button className='our' onClick={handleOurServicesClick}>
          Our services
        </button>
      </div>
      <div className='sqr'>
        {services.map((service, index) => (
          <div
            className='service-item'
            key={index}
            onClick={() => handleServiceClick(service.id)}
          >
            <img src={service.img} alt='Service Icon' className='service-icon' />
            <strong><p className='service-text'>{service.text}</p></strong>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default Info;
