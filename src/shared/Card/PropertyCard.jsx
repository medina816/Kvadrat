import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function PropertyCard({ item }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length);
  };

  return (
    <div className="
      bg-white rounded-[4px] shadow-md hover:shadow-xl 
      transition duration-300 overflow-hidden flex flex-col
      pb-2 lg:pb-6 lg:w-[310px]
      sm:w-[151px] sm:h-[227px] lg:h-[464px] 
    ">
      <div className="relative">
        <img
          src={item.images[currentIndex]}
          alt={item.title}
          className="w-full lg:h-[207px] sm:h-[101px] object-cover"
        />

        <button
          onClick={prevImage}
          className="absolute top-1/2 left-1 sm:left-2 -translate-y-1/2 text-white"
        >
          <IoIosArrowBack className="size-4 sm:size-6 ml-0.5 sm:ml-1" />
        </button>

        <button
          onClick={nextImage}
          className="absolute top-1/2 right-1 sm:right-2 -translate-y-1/2 text-white"
        >
          <IoIosArrowForward className="size-4 sm:size-6 mr-0.5 sm:mr-1" />
        </button>

        <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 flex gap-0.5 sm:gap-1">
          {item.images.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full ${
                i === currentIndex ? 'bg-red-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-2 sm:px-4 mt-2 sm:mt-4 space-y-1 lg:space-y-4">
      <h3 className="text-center font-medium text-[#0A0200] leading-tight text-[10px] sm:text-[24px] lg:text-lg">
  <span className="block leading-tight">3 - комнатная квартира на</span>
  <span className="block leading-tight">улице Киевская 30</span>
</h3>
        <div className="flex justify-center mt-1 sm:mt-4">
          <p className="text-[8px] mr-[39px]  sm:text-[10px] lg:text-base font-normal text-[#0A0200] lg:mr-[70px]">
            Площадь: {item.area}
          </p>
        </div>

        <div className="flex items-center justify-between px-2 sm:px-4 lg:px-4 lg:justify-between lg:mr-[5px] lg:mt-2">
  <p className="text-[8px] mt-2 sm:text-[10px] lg:text-lg font-semibold text-[#0A0200]"> 
    Цена
  </p>
  <span className="text-[8px] mt-2 sm:text-[10px] lg:text-lg font-semibold text-[#0A0200]">
    {item.price}
  </span>
</div>


        <div>
          <button className="
            w-full bg-[#DC2215] mt-1 mb-1 text-white rounded-full  
            text-[8px] lg:w-[261px] sm:w-[127px] sm:text-sm lg:text-lg 
            h-[22px] sm:h-[40px] lg:h-[50px] 
            hover:bg-red-700 transition lg:mt-[12px] lg:ml-[5px] 
          ">
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
