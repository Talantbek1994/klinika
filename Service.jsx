import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Service.css';
import bed from './assets/bed.png';
import uzi from './assets/uzi.png';
import labor from './assets/labor.png';
import stom from './assets/stom.png';
import dermo from './assets/dermo.png';
import fizio from './assets/fizio.png';


const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Ma'lumot olish uchun so'rov
        axios.get('https://example.com/api/services') // Bu yerda haqiqiy API URL-ni qo'yasiz
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error('Xatolik yuz berdi:', error);
                // Xatolik yuz bersa, o'zingizni placeholder ma'lumotlaringiz bilan davom ettirishingiz mumkin
                setServices([
                    { description: 'Описание поликлиники' },
                    { description: 'Описание инструментальной диагностики' },
                    { description: 'Описание лабораторной диагностики' },
                    { description: 'Описание стоматологии' },
                    { description: 'Описание дерматокосметологии' },
                    { description: 'Описание физиотерапии' }
                ]);
            });
    }, []);

    // Xizmatlar ro'yxatini tayyorlash
    const serviceData = [
        { icon: bed, title: 'Поликлиника', description: services[0]?.description },
        { icon: uzi, title: 'Инструментальная диагностика (радиология, УЗИ)', description: services[1]?.description },
        { icon: labor, title: 'Лабораторная диагностика', description: services[2]?.description },
        { icon: stom, title: 'Стоматология', description: services[3]?.description },
        { icon: dermo, title: 'Дерматокосметология', description: services[4]?.description },
        { icon: fizio, title: 'Физиотерапия', description: services[5]?.description },
        
    ];

    return (
        <div className='bolim_3'>
            <div className='baba'>
                <p>НАШИ УСЛУГИ</p>
                <p>МЫ ПРЕДОСТАВЛЯЕМ</p>
            </div>
            <div className="xizmatlar">
                <div className="container">
                    {serviceData.slice(0, 3).map((service, index) => (
                        <div className="card" key={index}>
                            <img src={service.icon} alt="Icon" style={{width:'150px', padding:'20px 30px'}} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a className="learn-more" href="#">Узнать больше...</a>
                            
                        </div>
                    ))}
                </div>
                <div className="container">
                    {serviceData.slice(3).map((service, index) => (
                        <div className="card" key={index}>
                            <img src={service.icon} alt="Icon" style={{width:'150px', padding:'20px 30px'}} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a className="learn-more" href="#">Узнать больше...</a>
                            
                        </div>
                    ))}
                </div>
                <div className="container">
                    {serviceData.slice(3).map((service, index) => (
                        <div className="card" key={index}>
                            <img src={service.icon} alt="Icon" style={{width:'150px', padding:'20px 30px'}} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a className="learn-more" href="#">Узнать больше...</a>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
