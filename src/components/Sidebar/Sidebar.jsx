import React from 'react';
import './Sidebar.scss';
import { IoMdClose } from "react-icons/io";
import homeIcon from '../../assets/svg/home.svg'
import arrowIcon from '../../assets/svg/arrow.svg'
import flatIcon from '../../assets/svg/flat.svg'
import personIcon from '../../assets/svg/person.svg'
import { IoHomeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <h3>KVADRAT.KG</h3>
        <ul>
          <li>
            <div className='first'>
            <IoHomeOutline /> 

            <h3>
            Главная
            </h3>
            </div>
            <img src={arrowIcon}/>
            </li>
            {/* ----- */}
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
            <div className='third'>
            <img src={personIcon}/>
            <h3>
            Профиль
            </h3>
            </div>
            <img src={arrowIcon}/>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
