import React from 'react';
import './Sidebar.scss';
import { IoHomeOutline } from "react-icons/io5";
import arrowIcon from '../../assets/svg/arrow.svg';
import flatIcon from '../../assets/svg/flat.svg';
import personIcon from '../../assets/svg/person.svg';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <h3>KVADRAT.KG</h3>
        <ul>
          <li>
            <div className="first">
              <IoHomeOutline />
              <h3>Главная</h3>
            </div>
            <img src={arrowIcon} alt="arrow" />
          </li>
          <li>
            <div className='second'>
            <img src={flatIcon}/>
            <h3>
            Обьекты недвижимости    
            </h3>
            </div> 
            <Link to="/manageProperties" > 
            <img src={arrowIcon}/> 
            </Link>
            </li>
            {/* ---- */}
          <li>
            <div className="third">
              <img src={personIcon} alt="person" />
              <h3>Профиль</h3>
            </div>
            <img src={arrowIcon} alt="arrow" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
