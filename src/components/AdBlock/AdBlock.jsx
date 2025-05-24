import React, { useState } from 'react';
import big from '../../assets/images/big.png';
import telegramIcon from '../../assets/svg/telegram.svg';
import whatsappIcon from '../../assets/svg/whats.svg';
import instIcon from '../../assets/svg/inst.svg';
import deleteIcon from '../../assets/svg/delete.svg';
import lineIcon from '../../assets/svg/line.svg';
import changeIcon from '../../assets/svg/change.svg';
import '../Advertis/advertis.scss';

function AdBlock() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    console.log('Удаление сработало');
    setIsVisible(false);
  };

  const handleLine = () => {
    alert('Объявление отмечено как важное');
  };

  const handleChange = () => {
    alert('Редактирование...');
  };

  if (!isVisible) return null;

  return (
    <div className='block1'>
      <img src={big} alt="Изображение недвижимости" />
      <h1>АГЕНТСТВО НЕДВИЖИМОСТИ В БИШКЕКЕ</h1>
      <p>
        lorem ipsum dolor aset logo plrofisran whist the natury jast mkl welll you tell week on the datch
      </p>

      <div className='btns'>
        <button className='btn1'>Получить консультацию от риэлтора</button>
        <div className='btn2'>
          <a href="https://t.me/your_channel" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" className="btn-icon" />
          </a>
          <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className="btn-icon" />
          </a>
          <a href="https://instagram.com/your_profile" target="_blank" rel="noopener noreferrer">
            <img src={instIcon} alt="Instagram" className="btn-icon" />
          </a>
        </div>
      </div>

      <div className='btn3'>
        <button onClick={handleDelete} className="icon-button">
          <img src={deleteIcon} alt="Удалить" />
        </button>
        <button onClick={handleLine} className="icon-button">
          <img src={lineIcon} alt="Отметить как важное" />
        </button>
        <button onClick={handleChange} className="icon-button">
          <img src={changeIcon} alt="Редактировать" />
        </button>
      </div>
    </div>
  );
}

export default AdBlock;
