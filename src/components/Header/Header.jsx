import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import headerwat from '../../assets/svg/headerwat.svg';
import headerin from '../../assets/svg/headerin.svg';
import headert from '../../assets/svg/headert.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="header-bg">
      <div className='header'>

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
        <div
        className="modal-overlay"
        style={{
              justifyContent: 'center',  
              height: '380px', 
              top: '76px',
              width: '219px',
              display: 'flex',
              position: 'absolute',
              borderRadius: '0 0 0 18px',
              right: 0,
              backgroundColor: '#A40A00',
              zIndex: 1000000,
          }}
          onClick={closeMenu}
        >
          <div
            className="menu-modal"
            style={{ marginTop: '30px' }}
            onClick={(e) => e.stopPropagation()}
            >
            <div>
              <div className="mt-[20px] border-b border-white text-white hover:bg-black w-full " onClick={() => handleMenuItemClick('/')}>Главная</div>
              <div className="mt-[20px] border-b border-white text-white hover:bg-black w-full " onClick={() => handleMenuItemClick('/properties')}>Купить недвижимость</div>
              <div className="mt-[20px] border-b border-white text-white hover:bg-black w-full " onClick={() => handleMenuItemClick('/advertis')}>Услуги</div>
              <div className="mt-[20px] border-b border-white text-white hover:bg-black w-full " onClick={() => handleMenuItemClick('/about')}>О компании</div>
              <div className="mt-[20px] border-b border-white text-white hover:bg-black w-full " onClick={() => handleMenuItemClick('/faq')}>FAQ</div>
            </div>

            <div
              className="Header-iconsimg"
              style={{
                width: '102px',
                height: '30px',
                display: 'flex',
                top: '308px',
                left: '162px',
                gap: '4px',
                textAlign: 'center',
                alignItems: 'center',
              }}
              >
              <img className='mt-[20px]' src={headerwat} alt="whatsapp" />
              <img className='mt-[20px]' src={headerin} alt="instagram" />
              <img className='mt-[20px]' src={headert} alt="telegram" />
            </div>

            <div
              className="Header-btn"
              style={{
                width: '160px',
                height: '39px',
                top: '357px',
                marginTop: '30px',
                left: '167px',
                borderRadius: '48px',
                backgroundColor: '#262626',
                textAlign: 'center',
              }}
              >
              <button
                style={{
                  fontWeight: '500',
                  width: '73px',
                  height: '15px',
                  weight: '500',
                  fontSize: '12px',
                  background: 'none',
                  cursor: 'pointer',
                  padding: '10px',
                  marginRight: '10px',
                }}
              >
                СВЯЗАТЬСЯ
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Header;
