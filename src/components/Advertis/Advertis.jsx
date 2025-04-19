import React, { useState } from 'react';
import './advertis.scss';
import { IoMenu } from "react-icons/io5";
import admin from '../../assets/images/admin.png';
import AdBlock from '../AdBlock/AdBlock';
import Sidebar from '../Sidebar/Sidebar';

function Advertis() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="page-wrapper">
      <div className='advertis'>
        <div className='top-part '>
          <IoMenu className='menu' onClick={toggleSidebar} />
          <div className='admin'>
            <img src={admin} />
            <div className='text'>
              <h2>Асанов Байэл</h2>
              <p>Админ</p>
            </div>
          </div>
        </div>

        <div className="container content-container">
          {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
          <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
            <div className='adds'>
              <h2>Мои обьявления</h2>
              <button>Добавить новое обьявление</button>
            </div>

            <div className='info'>
              {[...Array(5)].map((_, index) => (
                <AdBlock key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertis;
