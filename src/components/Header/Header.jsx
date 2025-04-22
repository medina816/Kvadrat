import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseModal = () => {
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="header">
      <div className="hed-kv"> 
        <h2>KVADRAT.KG</h2>
      </div>

      <div className="hed-words">
        <Link to="/" className="nav-link" onClick={closeMenu}>Главная</Link>
        <Link to="/properties" className="nav-link" onClick={closeMenu}>Купить недвижимость</Link>
        <Link to="/advertis" className="nav-link" onClick={closeMenu}>Услуги</Link>
        <Link to="/about" className="nav-link" onClick={closeMenu}>О компании</Link>
        <Link to="/faq" className="nav-link" onClick={closeMenu}>FAQ</Link>
      </div>

      <div className="burger" onClick={handleBurgerClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {menuOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="menu-modal" onClick={(e) => e.stopPropagation()}>
            <Link to="/" className="menu-item" onClick={closeMenu}>Главная</Link>
            <Link to="/buy-house" className="menu-item" onClick={closeMenu}>Купить недвижимость</Link>
            <Link to="/service" className="menu-item" onClick={closeMenu}>Услуги</Link>
            <Link to="/about" className="menu-item" onClick={closeMenu}>О компании</Link>
            <Link to="/faq" className="menu-item" onClick={closeMenu}>FAQ</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
