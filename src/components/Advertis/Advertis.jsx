import React, { useState } from 'react';
import './advertis.scss';
import { IoMenu } from 'react-icons/io5';
import admin from '../../assets/images/admin.png';
import Sidebar from '../Sidebar/Sidebar';
import ModalPage from '../modalPage/ModalPage';
import ManageProperties from '../../pages/ManageProperties/ManageProperties';
import ManeAdminMetric from '../ManeAdmin/ManeAdmin';
import BannerList from '../BannerList/BannerList.jsx'; 

function Advertis() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const renderContent = () => {
    switch (activePage) {
      case 'profile':
        return (
          <div className="profile-section">
            <div className="adds">
              <h2>Мои объявления</h2>
              <button onClick={toggleModal}>Добавить новое объявление</button>
            </div>

            <div className="info">
              <BannerList />
            </div>
          </div>
        );
      case 'manage':
        return <ManageProperties />;
      default:
        return <ManeAdminMetric />;
    }
  };

  return (
    <div className="advertis">
      <Sidebar
        isOpen={isSidebarOpen}
        setActivePage={setActivePage}
        activePage={activePage}
      />

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
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Advertis;
