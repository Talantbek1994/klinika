import React from 'react';
import './Duxtirlar.css';
import im1 from './assets/im1.png'
import im2 from './assets/im2.png'
import im3 from './assets/im3.png'
import Slider from 'react-slick';
import { Container } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Duxtirlar = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '0',
    };

    const doctors = [
        { name: 'Palonchiyev Palon Pistonovich', specialty: 'терапевт', image: im1 },
        { name: 'Palonchiyev Palon Pistonovich', specialty: 'кардиолог', image: im2 },
        { name: 'Palonchiyev Palon Pistonovich', specialty: 'Terapevt', image: im3 }
        // ... другие врачи
    ];

    return (
        <Container className='duxtirlar'>
            <p style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}>НАШИ ВРАЧИ</p>
            <h1 style={{ textAlign: 'center', color: '#2650bb', fontWeight: 'normal', fontSize: '35px' }} >ВЫСОКОКЛАССНЫЕ СПЕЦИАЛИСТЫ</h1>
            <Slider {...settings}>
                {doctors.map((doctor, index) => (
                    <div key={index} className="doctor" style={{ position: 'relative' }}>
                        <div className="doctor-info">
                            <h2>{doctor.name}</h2>
                            <p>Специализация: {doctor.specialty}</p>
                        </div>
                        <div className="doctor-image">
                           <a href=""> <img src={doctor.image} alt={doctor.name} /></a>
                           <div className="overlay"></div>
                        </div>
                    </div>
                ))}
            </Slider>
        </Container>
    );
}

export default Duxtirlar;

