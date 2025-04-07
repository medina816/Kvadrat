import React from 'react';
import './banner.scss';
import bannerImg from '../../assets/images/bannerImg.png';
import markIcon from '../../assets/svg/mark.svg';
import telegramIcon from '../../assets/svg/telegram.svg';
import whatsappIcon from '../../assets/svg/whats.svg';
import instIcon from '../../assets/svg/inst.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const bannerData = [
  {
    img: bannerImg,
    title: 'Агентство недвижимости в Бишкеке полного цикла',
    advantages: [
      'Юридически чистые объекты',
      'Вся ответственность на нас по договору',
      'Поиск, подбор, продажа — всё под ключ',
    ],
  },
  {
    img: bannerImg,
    title: 'Найдём ваш идеальный дом без стресса',
    advantages: [
      'Большая база недвижимости',
      'Поддержка на каждом этапе',
      'Доступные цены и надёжные сделки',
    ],
  },
  {
    img: bannerImg,
    title: 'Продайте или купите — быстро и безопасно',
    advantages: [
      'Проверенные юристы',
      'Сопровождение сделки под ключ',
      'Консультации бесплатно',
    ],
  },
];

function Banner() {
  return (
    <div className="banner-swiper-wrapper">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        className="banner-swiper-main"
      >
        {bannerData.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="banner">
              <img src={banner.img} alt="Banner" className="banner__img" />
              <h1>{banner.title}</h1>

              <ul>
                {banner.advantages.map((item, i) => (
                  <li key={i}>
                    <img src={markIcon} alt="Icon" className="banner-icon" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="btns">
                <button className="btn1">Получить консультацию от риэлтора</button>
                <button className="btn2">
                  <img src={telegramIcon} alt="Telegram" className="btn-icon" />
                  <img src={whatsappIcon} alt="WhatsApp" className="btn-icon" />
                  <img src={instIcon} alt="Instagram" className="btn-icon" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Стрелки */}
        <div className="swiper-button-prev">
          <FaArrowLeft />
        </div>
        <div className="swiper-button-next">
          <FaArrowRight />
        </div>
      </Swiper>
    </div>
  );
}

export default Banner;
