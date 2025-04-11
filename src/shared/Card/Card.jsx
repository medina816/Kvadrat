import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import cardData from './card';
import PropertyCard from './PropertyCard';
import '../../app/index.css';

function Card() {
  return (
    <div className="w-full bg-black py-6 flex justify-center">
      <div className="w-full bg-black max-w-[1293px]">
        <div className="flex items-center justify-between gap-6 mb-8 px-4 lg:px-0 flex-wrap lg:flex-nowrap">
          <button className="w-[283px] bg-[#C8180C] text-white px-6 h-[46px] rounded-full flex items-center justify-between text-base">
            Категории <FaChevronDown className="ml-3" />
          </button>

          <p className="w-full font-semibold text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-7 text-white uppercase tracking-wider mt-0 lg:mt-[-10px] lg:w-[661px] text-center lg:text-left">
            Выбирайте квартиру для жизни или инвестиций. Предложение доступно
            <span className="bg-[#DC2215] cursor-pointer text-white px-4 sm:px-6 lg:px-9 ml-2 inline-block mt-1 lg:mt-0">
              К ПОКУПКЕ ПРЯМО СЕЙЧАС
            </span>
          </p>

          <Link to="/properties">
            <h2 className="text-white underline text-xl cursor-pointer tracking-wide sm:mt-4">
              Смотреть больше
            </h2>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-12 px-4 lg:px-0">
          {cardData.slice(0, 8).map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
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
