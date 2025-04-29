import React, { useState } from 'react';
import './advertis.scss';
import { IoMenu } from "react-icons/io5";
import admin from '../../assets/images/admin.png';
import AdBlock from '../AdBlock/AdBlock';
import Sidebar from '../Sidebar/Sidebar';
import ModalPage from '../ModalPage/ModalPage';

function Advertis() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="advertis">
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <ModalPage onClose={toggleModal} />
          </div>
        </div>
      )}

      <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
        <div className="top-part">
          <IoMenu className="menu" onClick={toggleSidebar} />
          <div className="admin">
            <img src={admin} alt="admin" />
            <div className="text">
              <h2>Асанов Байэл</h2>
              <p>Админ</p>
            </div>
          </div>
        </div>

        <div className="container content-container">
          <div className="adds">
            <h2>Мои объявления</h2>
            <button onClick={toggleModal}>Добавить новое объявление</button>
          </div>

          <div className="info">
            {[...Array(5)].map((_, index) => (
              <AdBlock key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertis;
