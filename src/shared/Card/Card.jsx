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

      <div className="flex items-center  justify-between gap-6 mb-8 px-4 lg:px-0 flex-wrap lg:flex-nowrap">
      <button className="bg-[#C8180C] lg:ml-1 text-white px-5 h-[35px] lg:h-[46px] rounded-full flex items-center justify-between  font-medium lg:text-lg text-[12px] lg:w-[283px] lg:mr-0 ">
  Категории <FaChevronDown className="ml-7 lg:ml-[25px] " />
</button>


<p className="w-full sm:w-[268px] lg:w-[661px] font-medium  text-[13px] lg:text-xl   lg:leading-7 text-white uppercase mt-0 lg:mt-[-10px] text-left lg:text-left lg:mr-0 mr-[30px]">
  Выбирайте квартиру для жизни или инвестиций. Предложение доступно 
  <span className="bg-[#DC2215]  rounded-[1px] cursor-pointer text-white  sm:px-6 lg:mr-0 mr-[60px] lg:px-9   lg:ml-2 inline-block mt-1 lg:mt-0">
    К ПОКУПКЕ ПРЯМО СЕЙЧАС
  </span>
</p>
  <Link to="/properties">
  <h2 className="text-white font-normal border-b border-white w-fit text-[13px] lg:text-xl cursor-pointer sm:mt-4 mr-1 ">
  Смотреть больше
</h2>
  </Link>
</div>
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-y-12 sm:gap-y-8 ">
          {cardData.slice(0, 8).map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>

        <div className="lg:hidden overflow-x-auto px-4 hide-scrollbar">
  <div className="flex gap-3 w-max  ">
    {Array(4).fill(0).map((_, i) => (
      <div key={i} className="flex flex-col flex-none" style={{ width: '151px' }}>
        <div className="mb-[45px]">
          <PropertyCard item={cardData[i]} small />
        </div>
        <div>
          <PropertyCard item={cardData[i + 4]} small />
        </div>
      </div>
    ))}
  </div>
</div>
<div className="w-full justify-center mt-20 px-4 hidden lg:flex">
  <button className="bg-[#FF3729] w-[250px] h-[57px] text-xl text-white rounded-full hover:bg-red-600 transition">
    Смотреть все
  </button>
</div>

      </div>
    </div>
  );
}

export default Card;
