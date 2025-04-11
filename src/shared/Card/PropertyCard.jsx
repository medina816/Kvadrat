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
    <div className="bg-white rounded-[4px] shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col pb-6">
      <div className="relative">
        <img src={item.images[currentIndex]} alt={item.title} className="w-full h-[207px] object-cover" />
        
        <button onClick={prevImage} className="absolute top-1/2 left-2 -translate-y-1/2 text-white">
          <IoIosArrowBack className="size-6 ml-1" />
        </button>

        <button onClick={nextImage} className="absolute top-1/2 right-2 -translate-y-1/2 text-white">
          <IoIosArrowForward className="size-6 mr-1" />
        </button>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {item.images.map((_, i) => (
            <div key={i} className={`w-2.5 h-2.5 rounded-full ${i === currentIndex ? 'bg-red-600' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>

      <div className="px-4 mt-4 space-y-4">
        <h3 className="text-lg font-semibold text-[#0A0200] leading-tight">
          <span className="block">3 - комнатная квартира на</span>
          <span className="block text-center">улице Киевская 30</span>
        </h3>

        <div className="flex flex-col sm:flex-row justify-between mt-3 ml-2 sm:ml-4">
          <p className="text-sm sm:text-base font-normal text-[#0A0200] text-left sm:text-start">
            Площадь: {item.area}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-5 gap-2 sm:gap-0">
          <p className="text-base sm:text-lg font-semibold text-[#0A0200]">Цена</p>
          <div className="flex items-center">
            <span className="text-base sm:text-lg font-semibold text-[#0A0200]">{item.price}</span>
          </div>
        </div>

        <button className="w-full bg-[#DC2215] text-white text-lg rounded-full h-[50px] hover:bg-red-700 transition">
          Подробнее
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;
