import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Klinikarasmi.css';

const Klinikarasmi = () => {
  const [workingHours, setWorkingHours] = useState({
    weekdays: '8:00 - 17:00',
    saturday: '9:00 - 14:00',
    sunday: 'Выходной',
    onCall: '17:00 - 20:00',
    labRadiologyCallCenter: '24/7'
  });

  useEffect(() => {
    axios.get('http://localhost:5000/working-hours')
      .then(response => {
        setWorkingHours(response.data);
      })
      .catch(error => console.error('Error fetching working hours:', error));
  }, []);

  return (
    <div className='klinikarasmi'>
      <img src="" alt="" />
      <div className="grafik">
        <p style={{ margin: '50px 50px' }}>РАБОЧЕЕ ВРЕМЯ</p>
        <h2 style={{ marginLeft: '50px' }}>Akfa Medline University Hospital</h2>
        <p style={{ marginLeft: '50px' }}>Многопрофильная Университетская клиника</p>
        <div className='working-hours'>
          <span>Понедельник - Пятница:</span>
          <span>{workingHours.weekdays}</span>
        </div>
        <div className='chiziq'></div>
        <div className='working-hours'>
          <span>Суббота:</span>
          <span>{workingHours.saturday}</span>
        </div>
        <div className='chiziq'></div>
        <div className='working-hours'>
          <span>Воскресенье:</span>
          <span>{workingHours.sunday}</span>
        </div>
        <div className='chiziq'></div>
        <div className='working-hours'>
          <span>дежурные: УЗИ, Терапевт, хирург, ЛОР</span>
          <span>{workingHours.onCall}</span>
        </div>
        <div className='chiziq'></div>
        <div className='working-hours'>
          <span>лаборатория, радиология, колл центр</span>
          <span>{workingHours.labRadiologyCallCenter}</span>
        </div>
        <div className='chiziq'></div>
        <button className='svyazatsya'>Связаться с нами</button>
      </div>
    </div>
  );
}

export default Klinikarasmi;
