import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import cardData from './card';
import '../../app/index.css';

function Card() {
  return (
    <div className="w-full bg-black py-6 flex justify-center">
      <div className="w-full bg-black max-w-[1293px]">
        <div className="flex items-center justify-between gap-6 mb-8 px-4 lg:px-0 flex-wrap lg:flex-nowrap">
          <button className="w-[283px] bg-[#C8180C] text-white px-6 h-[46px] rounded-full flex items-center justify-between text-base">
            Категории <FaChevronDown className="ml-3" /></button>

          <p className="w-full font-semibold text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-7 text-white uppercase tracking-wider mt-0 lg:mt-[-10px] lg:w-[661px] text-center lg:text-left">
            Выбирайте квартиру для жизни или инвестиций. Предложение доступно
            <span className="bg-[#DC2215] cursor-pointer text-white px-4 sm:px-6 lg:px-9 ml-2 inline-block mt-1 lg:mt-0">
              К ПОКУПКЕ ПРЯМО СЕЙЧАС
            </span>
          </p>

          <h2 className="text-white underline text-xl cursor-pointer tracking-wide sm:mt-4">
            Смотреть больше</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-12 px-4 lg:px-0"> 
          {cardData.slice(0, 8).map((item) => {
            const [currentIndex, setCurrentIndex] = useState(0);

            const nextImage = (imagesLength) => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLength);};

            const prevImage = (imagesLength) => {
              setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesLength) % imagesLength); };

            return (
              <div key={item.id} className="bg-white  rounded-[4px] shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col pb-6" >
                <div className="relative">
                  <img src={item.images[currentIndex]} alt={item.title}
                    className="w-full h-[207px] object-cover"/>
                  <button onClick={() => prevImage(item.images.length)}
                    className="absolute top-1/2 left-2 -translate-y-1/2 text-white">
                    <IoIosArrowBack className="size-6 ml-1" /></button> 

                  <button onClick={() => nextImage(item.images.length)}
                    className="absolute top-1/2 right-2 -translate-y-1/2 text-white">
                    <IoIosArrowForward className="size-6 mr-1" />
                  </button>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {item.images.map((_, i) => (
                      <div key={i} className={`w-2.5 h-2.5 rounded-full ${i === currentIndex ? 'bg-red-600' : 'bg-gray-300'}`} />
                    ))}
                  </div>
                </div>

                <div className="px-4 mt-4 space-y-4 ">
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
                    <p className="text-base sm:text-lg font-semibold text-[#0A0200] ">Цена</p>
                    <div className="flex items-center">
                      <span className="text-base  sm:text-lg font-semibold text-[#0A0200]">{item.price}</span>
                    </div>
                  </div>

                  <button className="w-full bg-[#DC2215] text-white text-lg rounded-full h-[50px] hover:bg-red-700 transition">
                    Подробнее
                  </button>
                </div>
              </div>
            ); 
             })}
        </div>

        <div className="w-full flex justify-center mt-20 px-4">
          <button className="bg-[#FF3729] w-[250px] h-[57px] text-xl text-white rounded-full hover:bg-red-600 transition">
            Смотреть все
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
