import React from 'react';
import './Sidebar.scss';
import { IoHomeOutline } from "react-icons/io5";
import arrowIcon from '../../assets/svg/arrow.svg';
import flatIcon from '../../assets/svg/flat.svg';
import personIcon from '../../assets/svg/person.svg';

const Sidebar = ({ isOpen, setActivePage }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <h3>KVADRAT.KG</h3>
        <ul>
          <li onClick={() => setActivePage('home')}>
            <div className="first">
              <IoHomeOutline />
              <h3>Главная</h3>
            </div>
            <img src={arrowIcon} alt="arrow" />
          </li>
          <li onClick={() => setActivePage('manage')}>
            <div className="second">
              <img src={flatIcon} alt="flat" />
              <h3>Обьекты недвижимости</h3>
            </div>
            <img src={arrowIcon} alt="arrow" />
          </li>
          <li onClick={() => setActivePage('profile')}>
            <div className="third">
              <img src={personIcon} alt="person" />
              <h3>Мои объявления</h3>
            </div>
            <img src={arrowIcon} alt="arrow" />
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Sidebar;
