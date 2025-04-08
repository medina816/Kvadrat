import React from 'react'
import './footer.scss'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import footertel from '../../assets/footertel.svg'
import footergmail from '../../assets/footergmail.svg'
import footerg from '../../assets/footerg.svg'

function Footer() {
  return (
    <div className='footer'>
      <div className='foot-kg'>
        <h2>KVADRAT.KG</h2>
        <p>Наши социальные сети</p>
        <img src={instagram} alt="" />
        <img src={whatsapp} alt="" />
        <img src={telegram} alt="" />
      </div>

      <div className='footer-firstblok'>
        <p>Квартиры</p>
        <p>Офис продаж</p>
        <p>Ипотека</p>
        <p>Инвестиции</p>
      </div>

      <div className='footer-second-group'>
        <p>Застройщики</p>
        <p>Акции</p>
        <p>Контакты</p>
        <p>Жилые комплексы</p>
      </div>

      <div className='footer-Contacts'>
        <h2>Контакты</h2>
        <div className="contact-item">
          <img src={footertel} alt="Телефон" />
          <h2>+996 400 567 455</h2>
        </div>

        <div className="contact-item">
          <img src={footergmail} alt="Email" />
          <h2>apartm_@gmail.com</h2>
        </div>

        <div className="contact-item">
          <img src={footerg} alt="Адрес" />
          <h2>г.Бишкек ул.45 Мира</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
