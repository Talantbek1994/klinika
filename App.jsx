import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Foto from './Foto';
import Info from './Info';
import Director from './Director';
import Service from './Service';
import Duxtirlar from './Duxtirlar';
import Klinikarasmi from './Klinikarasmi';
import Smile from './Smile';
import BoshqarmaPage from './Pages/BoshqarmaPage.jsx';
import Klinika from './components/Klinika.jsx';
import ManzilPage from './Pages/ManzilPage.jsx';
import KaryeraPage from './Pages/KaryeraPage.jsx';
import Gastrinolog from './xizmatlar/Gastrinolog.jsx';
import Kardiolog from './xizmatlar/Kardiolog.jsx';
import Nevropotolog from './xizmatlar/Nevropotolog.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boshqarma" element={<BoshqarmaPage />} />
        <Route path="/klinika" element={<Klinika/>} />
        <Route path="/klinika/gastrio" element={<Gastrinolog />} />
        <Route path="/klinika/kardio" element={<Kardiolog />} />
        <Route path="/klinika/nevro" element={<Nevropotolog />} />
        <Route path="/manzil" element={<ManzilPage />} />
        <Route path="/karyera" element={<KaryeraPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

const Home = () => (
  <div>
    <Foto />
    <Info />
    <Director />
    <Service />
    <Duxtirlar />
    <Klinikarasmi />
    <Smile />
  </div>
);

const NotFoundPage = () => (
  <div>
    <h1>404 - Sahifa topilmadi</h1>
    <p>Kechirasiz, qidirayotgan sahifangiz topilmadi.</p>
  </div>
);

export default App;
