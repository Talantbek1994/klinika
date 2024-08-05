import React, { useState, useEffect } from 'react';
import './Foto.css';
import f from './assets/f.png';
import y from './assets/y.png';
import i from './assets/i.png';
import t from './assets/t.png';
import bog from './assets/bog.jpg';
import gulzor from './assets/gulzor.jpg';
import tabiat from './assets/tabiat.jpg';

const backgrounds = [bog, gulzor, tabiat];

const Foto = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [zoom, setZoom] = useState(false);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setZoom(true);
      setTimeout(() => {
        setZoom(false);
        setCurrentBackground((prevBackground) => (prevBackground + 1) % backgrounds.length);
      }, 4000); // 4 sekund yaqinlashtirish vaqti
    }, 8000); // Har 8 sekundda fonni almashtirish

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`foto ${zoom ? 'zoom' : ''}`} 
      style={{ backgroundImage: `url(${backgrounds[currentBackground]})` }}
    >
      <div className="soc">
        <div 
          className="social-icon" 
          onMouseOver={() => handleIconHover('Facebook')} 
          onMouseOut={handleIconLeave}
        >
          <a href=""><img src={f} alt="Facebook" /></a>
          {hoveredIcon === 'Facebook' && <div className="social-tooltip">Facebook</div>}
        </div>
        <div 
          className="social-icon" 
          style={{ marginTop: '50px' }}
          onMouseOver={() => handleIconHover('YouTube')} 
          onMouseOut={handleIconLeave}
        >
          <a href=""><img src={y} alt="YouTube" /></a>
          {hoveredIcon === 'YouTube' && <div className="social-tooltip">YouTube</div>}
        </div>
        <div 
          className="social-icon" 
          style={{ marginTop: '50px' }}
          onMouseOver={() => handleIconHover('Instagram')} 
          onMouseOut={handleIconLeave}
        >
          <a href=""><img src={i} alt="Instagram" /></a>
          {hoveredIcon === 'Instagram' && <div className="social-tooltip">Instagram</div>}
        </div>
        <div 
          className="social-icon" 
          style={{ marginTop: '50px' }}
          onMouseOver={() => handleIconHover('Telegram')} 
          onMouseOut={handleIconLeave}
        >
          <a href=""><img src={t} alt="Telegram" /></a>
          {hoveredIcon === 'Telegram' && <div className="social-tooltip">Telegram</div>}
        </div>
      </div>
    </div>
  );
};

export default Foto;
