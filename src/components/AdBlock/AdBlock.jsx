import React from 'react'
import big from '../../assets/images/big.png'
import telegramIcon from '../../assets/svg/telegram.svg';
import whatsappIcon from '../../assets/svg/whats.svg';
import instIcon from '../../assets/svg/inst.svg';
import deleteIcon from '../../assets/svg/delete.svg'
import lineIcon from '../../assets/svg/line.svg'
import changeIcon from '../../assets/svg/change.svg'
import '../Advertis/advertis.scss'

function AdBlock() {
  return (
    <div className='block1'> 
      <img src={big}/>
      <h1>АГЕНТСТВО НЕДВИЖИМОСТИ В БИШКЕКЕ</h1>
      <p>lorem ipsum dolor aset logo plrofisran whist the natury jast mkl welll you tell week on the datch</p>
      <div className='btns'>
        <button className='btn1'>Получить консультацию от риэлтора</button>
        <button className="btn2">
          <img src={telegramIcon} alt="Telegram" className="btn-icon" />
          <img src={whatsappIcon} alt="WhatsApp" className="btn-icon" />
          <img src={instIcon} alt="Instagram" className="btn-icon" />
        </button>
      </div>
      <button className='btn3'>
        <img src={deleteIcon}/>
        <img src={lineIcon}/>
        <img src={changeIcon}/>
      </button>
    </div>
  )
}

export default AdBlock
