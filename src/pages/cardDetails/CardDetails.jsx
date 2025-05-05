import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../app/services/productsApi';
import './cardDetails.scss';
import { MdEditCalendar } from 'react-icons/md';
import { BiSelection, BiBath, BiSolidCarGarage } from 'react-icons/bi';
import { IoBedOutline } from 'react-icons/io5';
import { RiBuildingLine, RiDashboardLine } from 'react-icons/ri';
import { TbFridge } from 'react-icons/tb';

function CardDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    if (data?.images?.length > 0 && !mainImage) {
      setMainImage(data.images[0]);
    }
  }, [data, mainImage]);

  if (isLoading) return <div>Загрузка...</div>;
  if (error || !data) return <div>Ошибка при загрузке данных</div>;

  const {
    title,
    location,
    status,
    postedAt,
    price,
    pricePerSqft,
    description,
    images = [],
    rooms,
    bath,
    kitchen,
    type,
    yearBuilt,
    area,
    garage,
    amenities = [],
  } = data;

  return (
    <div className='cardDetails'>
      <div className='card-FORSALE'>
        <div className='card-tch'>
          <div className='flex justify-between mb-[30px]'>
            <h2 className='title'>{title}</h2>
            <button className='status-btn'><p>{status}</p></button>
          </div>

          <div className='info-row mb-[30px]'>
            <div className='location'>
              <i className='fas fa-map-marker-alt' /> {location}
            </div>
            <div className='divider' />
            <div className='posted'>
              <i className='far fa-clock' /> {postedAt}
            </div>
          </div>

          <div className='price'>
            ${price.toLocaleString()}
            <span> (${pricePerSqft?.toLocaleString?.()} / sqft)</span>
          </div>
        </div>
      </div>

      <div className='card-img'>
        <div className='main-img'>
          <img src={mainImage} alt='Main property' />
        </div>
        <div className='side-imgs'>
          {images.slice(1).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              onClick={() => setMainImage(img)}
              className={mainImage === img ? 'selected-thumb' : ''}
            />
          ))}
        </div>
      </div>

      <div className='card-ph'>
        <h2>Описание недвижимости</h2>
        <p>{description}</p>
      </div>

      <div className='card-review'>
        <h2>Обзор недвижимости</h2>
        <div className='review-buttons'>
          <ReviewButton icon={<RiBuildingLine />} label='Комнаты' value={rooms} />
          <ReviewButton icon={<BiBath />} label='Ванна' value={bath} />
          <ReviewButton icon={<TbFridge />} label='Кухня' value={kitchen} />
          <ReviewButton icon={<RiDashboardLine />} label='Тип' value={type} />
          <ReviewButton icon={<MdEditCalendar />} label='Год' value={yearBuilt} />
          <ReviewButton icon={<IoBedOutline />} label='Кровати' value={rooms} />
          <ReviewButton icon={<BiSelection />} label='Кв. фут' value={area} />
          <ReviewButton icon={<BiSolidCarGarage />} label='Гараж' value={garage} />
        </div>
      </div>

      <h4 className='header-УДОБСТВА'>УДОБСТВА</h4>
      <div className='card-conveniences'>
        {amenities.length > 0 ? (
          amenities.map((item, idx) => (
            <div key={idx}>
              <div>✔</div>
              <p>{item}</p>
            </div>
          ))
        ) : (
          <p>Нет удобств</p>
        )}
      </div>
    </div>
  );
}

const ReviewButton = ({ icon, label, value }) => (
  <button className='review-button'>
    {icon}
    <div>
      {label}
      <span>{value ?? '—'}</span>
    </div>
  </button>
);

export default CardDetails;
