import React, { useState } from 'react';
import './Header.scss';
import headerwat from '../../assets/svg/headerwat.svg';
import headerin from '../../assets/svg/headerin.svg';
import headert from '../../assets/svg/headert.svg';
import { Link } from 'react-router-dom';

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
    <div className="header-bg w-full bg-red-600">
      <div className="header">
        <div className="hed-kv">
          <Link to='/'>
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
      </div>

      {menuOpen && (
        <div className="modal-overlay"
          style={{
            justifyContent: 'center',
            height: '380px',
            width: '219px',
            display: "flex",
            position: 'absolute',
            borderRadius: '0 0 0 18px',
            right: 0,
            backgroundColor: '#A40A00',
            zIndex: 100,
          }}
          onClick={handleCloseModal}>
          <div className="menu-modal" style={{
            marginTop: '30px',

          }} onClick={(e) => e.stopPropagation()}>
            <div className=''>

              <div className="mt-[20px]  border-b border-white text-#FFFFFF hover:bg-black w-[100%] h-[30px]" onClick={() => handleMenuItemClick('#Главная')}>Главная</div>
              <div className="mt-[20px]  border-b border-white" onClick={() => handleMenuItemClick('#Купить недвижимость')}>Купить недвижимость</div>
              <div className="mt-[20px]  border-b border-white" onClick={() => handleMenuItemClick('#Услуги')}>Услуги</div>
              <div className="mt-[20px]  border-b border-white" onClick={() => handleMenuItemClick('#О компании')}>О компании</div>
              <div className="mt-[20px]  border-b border-white" onClick={() => handleMenuItemClick('#FAQ')}>FAQ</div>
            </div>

            <div className='Header-iconsimg'
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
              <img className='mt-[20px] ' src={headerwat} alt="whatsapp" />
              <img className='mt-[20px]' src={headerin} alt="instagram" />
              <img className='mt-[20px]' src={headert} alt="telegram" />
            </div>

            <div className='Header-btn'
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
                  width: '73px',
                  height: '15px',
                  weight: '500',
                  fontSize: '12px',
                  padding: '10px',
                  marginRight: '10px',
                  
                }}
              >СВЯЗАТЬСЯ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
