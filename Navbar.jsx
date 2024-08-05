import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/a.png';
import './Navbar.css';
import Klinika from './components/Klinika.jsx';

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ru');

  const handleMouseEnter = useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleLanguageChange = useCallback((event) => {
    setSelectedLanguage(event.target.value);
  }, []);

  const menuItems = [
    { key: 'boshqarma', label: 'Boshqaruv', path: '/boshqarma' },
    { key: 'klinika', label: 'Klinika xizmatlari', path: '/klinika' },
    { key: 'career', label: 'Karyera', path: '/karyera' },
    { key: 'address', label: 'Manzil', path: '/manzil' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img className='logorasm' src={logo} alt="AKFA Medline" />
        </Link>
      </div>
      <ul className="navbar-menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            style={{ color: 'blue', position: 'relative' }}
            onMouseEnter={item.key === 'klinika' ? handleMouseEnter : undefined}
            onMouseLeave={item.key === 'klinika' ? handleMouseLeave : undefined}
          >
            <Link to={item.path}>{item.label}</Link>
            {openModal && item.key === 'klinika' && (
              <div className="modal-overlay show">
                <div className="modal-content">
                  <Klinika onClose={handleMouseLeave} />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="navbar-extra">
        <a href='https://t.me/yourtelegramusername' className="contact-button"><strong>+998990000000</strong></a>
        <div className="language-selector">
          <select value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="ru">UZ</option>
            <option value="uz">RU</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
