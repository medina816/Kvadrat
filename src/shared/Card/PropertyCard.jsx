import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../app/services/productsApi';

function PropertyCard({ bigImage }) {
  const { data, isLoading, error } = useGetProductsQuery();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка загрузки</div>;

  const property = data[0]; // пока просто берем первый объект из массива

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="bg-white rounded-[4px] shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col justify-between pb-2 w-full h-full">
      <div className="relative">
        <img
          src={property.images[currentIndex]}
          alt={property.title}
          className={`w-full object-cover ${bigImage ? 'lg:h-[275px] sm:h-[180px]' : 'lg:h-[207px] sm:h-[101px]'}`}
        />
        <button onClick={prevImage} className="absolute top-1/2 left-1 sm:left-2 -translate-y-1/2 text-white">
          <IoIosArrowBack className="size-4 sm:size-6 ml-0.5 sm:ml-1" />
        </button>
        <button onClick={nextImage} className="absolute top-1/2 right-1 sm:right-2 -translate-y-1/2 text-white">
          <IoIosArrowForward className="size-4 sm:size-6 mr-0.5 sm:mr-1" />
        </button>
        <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 flex gap-0.5 sm:gap-1">
          {property.images.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full ${i === currentIndex ? 'bg-red-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      <div className="px-2 sm:px-4 mt-2 sm:mt-4 space-y-1 lg:space-y-4">
        <h3 className={`text-center font-medium text-[#0A0200] leading-tight ${bigImage ? 'text-2xl mt-[-310px] font-semibold tracking-wide' : 'text-[10px] sm:text-[24px] lg:text-lg lg:font-semibold'}`}>
          <span className="block leading-tight">{property.title}</span>
        </h3>

        <div className="flex justify-center mt-1 sm:mt-4">
          <p className={`text-[#0A0200] font-normal ${bigImage ? 'text-[21px] mr-[96px] mt-1 ' : 'text-[8px] mr-[39px] sm:text-[10px] lg:text-base lg:mr-[70px]'}`}>
            Площадь: {property.area}
          </p>
        </div>

        <div className={`flex items-center justify-between px-2 sm:px-4 lg:px-4 lg:justify-between lg:mr-[5px] ${bigImage ? 'mt-4' : 'lg:mt-2'}`}>
          <p className={`font-semibold text-[#0A0200] ${bigImage ? 'text-[28px] font-normal ml-1 mt-7' : 'text-[8px] mt-1 sm:text-[10px] lg:text-lg'}`}>
            Цена
          </p>
          <span className={`font-semibold text-[#0A0200] ${bigImage ? 'text-[26px] font-normal mt-7' : 'text-[8px] mt-1 sm:text-[10px] lg:text-lg'}`}>
            {property.price}
          </span>
        </div>

        <Link to={`/cardDetails/${property.id}`}>
          <button className={`bg-[#DC2215] text-white rounded-full transition hover:bg-red-700
            ${bigImage
              ? 'w-[346px] text-[23px] font-medium h-[66px] ml-4 mt-5  mb-2'
              : ' text-[9px] h-[22px] mt-2 mb-1 ml-[4px] w-[125px] lg:mb-4 sm:text-sm sm:h-[40px] lg:w-[257px] lg:text-xl lg:h-[50px]  lg:mt-[14px] lg:ml-[8px]'
            }`}>
            Подробнее
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;