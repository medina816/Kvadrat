import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (href) => {
    window.location.href = href;
    setMenuOpen(false); 
  };

  const handleCloseModal = () => {
    setMenuOpen(false); 
  };

  return (
    <div className="header">
      <div className="hed-kv"> 
        <Link to="/"> 
        <h2>KVADRAT.KG</h2> 
        </Link>
      </div>

      <div className="hed-words">
        <h3 onClick={() => handleMenuItemClick('#Главная')}>Главная</h3>
        <h3 onClick={() => handleMenuItemClick('#Купить недвижимость')}>Купить недвижимость</h3>
        <h3 onClick={() => handleMenuItemClick('#Услуги')}>Услуги</h3>
        <h3 onClick={() => handleMenuItemClick('#О компании')}>О компании</h3>
        <h3 onClick={() => handleMenuItemClick('#FAQ')}>FAQ</h3>
      </div>

      <div className="burger" onClick={handleBurgerClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {menuOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="menu-modal" onClick={(e) => e.stopPropagation()}>
            <div className="menu-item" onClick={() => handleMenuItemClick('#Главная')}>Главная</div>
            <div className="menu-item" onClick={() => handleMenuItemClick('#Купить недвижимость')}>Купить недвижимость</div>
            <div className="menu-item" onClick={() => handleMenuItemClick('#Услуги')}>Услуги</div>
            <div className="menu-item" onClick={() => handleMenuItemClick('#О компании')}>О компании</div>
            <div className="menu-item" onClick={() => handleMenuItemClick('#FAQ')}>FAQ</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
