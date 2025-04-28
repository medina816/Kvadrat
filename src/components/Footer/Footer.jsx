import React from 'react'
import './footer.scss'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import footertel from '../../assets/footertel.svg'
import footergmail from '../../assets/footergmail.svg'
import footerg from '../../assets/footerg.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div className='foot-kg'>
        <h2>KVADRAT.KG</h2>
        <p>Наши социальные сети</p>
        <div className='footer-img'>
          <div>
            <img src={instagram} alt="" />
          </div>
          <div>
            <img src={whatsapp} alt="" />
          </div>
          <div>
            <img src={telegram} alt="" />
          </div>
        </div>
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
        <Link to='/Add'>
        <p>Добаветь</p>
        </Link>
      </div>

      <div className='footer-Contacts'>
        <h2>Контакты</h2>
        <div className="contact-item">
          <div className='background'>
            <img src={footertel} alt="Телефон" />
          </div>
          <h2>+996 400 567 455</h2>
        </div>

        <div className="contact-item">
          <div className='background'>
            <img src={footergmail} alt="Email" />
          </div>
          <h2>apartm_@gmail.com</h2>
        </div>

        <div className="contact-item">
          <div className='background'>
            <img src={footerg} alt="Адрес" />
          </div>
          <h2>г.Бишкек ул.45 Мира</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
