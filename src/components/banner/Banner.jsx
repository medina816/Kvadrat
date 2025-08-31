import React, { useRef, useEffect, useState } from 'react';
import './banner.scss';
import { useGetBannersQuery } from '../../app/services/bannerApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import markIcon from '../../assets/svg/mark.svg';
import telegramIcon from '../../assets/svg/telegram.svg';
import whatsappIcon from '../../assets/svg/whats.svg';
import instIcon from '../../assets/svg/inst.svg';

function Banner() {
  const { data: banners, error, isLoading } = useGetBannersQuery();

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    setNavigationReady(true);
  }, []);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке баннеров.</div>;

  return (
    <div className="banner-swiper-wrapper">
      {navigationReady && (
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="banner-swiper-main"
        >
          {banners?.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="banner">
                <img
                  src={banner.image || ''}
                  alt="Banner"
                  className="banner__img"
                />
                <div className="fixed-wrapper">
                  <div className="banner__content container">
                    <h1>{banner.title}</h1>
                    <ul>
                      {banner.advantages?.length ? (
                        banner.advantages.map((item, i) => (
                          <li key={i}>
                            <img src={markIcon} alt="Иконка преимущества" className="banner-icon" />
                            {item}
                          </li>
                        ))
                      ) : (
                        <li>Преимущества не указаны</li>
                      )}
                    </ul>
                    <div className="btns">
                      <button className="btn1">Получить консультацию от риэлтора</button>
                      <button className="btn2" aria-label="Контакты в мессенджерах">
                        <img src={telegramIcon} alt="Telegram icon" className="btn-icon" />
                        <img src={whatsappIcon} alt="WhatsApp icon" className="btn-icon" />
                        <img src={instIcon} alt="Instagram icon" className="btn-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div ref={prevRef} className="swiper-button-prev">
            <FaArrowLeft />
          </div>
          <div ref={nextRef} className="swiper-button-next">
            <FaArrowRight />
          </div>
        </Swiper>
      )}
    </div>
  );
}

export default Banner;