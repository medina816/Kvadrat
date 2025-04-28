import React from 'react';
import cardData from '../../shared/Card/card'; 
import { FaTrash } from 'react-icons/fa'; 
import { RiEditFill } from "react-icons/ri";


function ManageProperties() {
  return (
    <div className=" w-[967px] mt-[88px] m-auto bg-black text-white ">
      <div className="grid grid-cols-5 w-[950px]  gap-[118px] px-[11px]	 py-[14px] bg-[#222224] rounded-[4px] text-xl font-medium ">
        <div>Фотографии</div>
        <div className='ml-4'>Заголовок</div>
        <div className=' ml-4'>Площадь</div>
        <div className='ml-[80px]'>Цена</div>
        <div>Действие</div>
      </div>

      <div className="flex justify-end mt-[56px]">
        <button className="bg-[#DC2215] px-[54px] py-[14px] m-auto rounded-[45px] text-white font-medium text-xl ml-[1154px] "> 
          Добавить
        </button>
      </div>

      {cardData.map((property) => (
        <div
          key={property.id}
          className="grid grid-cols-5 gap-4  w-[967px] items-center px-4 py-4 border-b border-[#FFFFFF99]"
        >
          <div className="h-[76px] w-[165px] ml-[-15px]  overflow-hidden">
            <img
              src={property.images[0]}
              alt="flat"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="">
            <p className='text-[18px] font-medium w-[209px] h-[44px] ml-4 '>{property.title}</p>
          </div>
												<div className='w-[208px] h-[18px] m-auto ml-[45px] text-slate-200'>  
            <p className="text-[16px] font-normal">Площадь: {property.area}</p>
												</div>

          <div className="text-xl ml-[143px] font-semibold text-[#FFFFFF]">12млн.$</div>

          <div className="flex gap-3  ml-[108px] text-lg">
            <button className="text-red-500 text-xl hover:text-red-700">
              <FaTrash />
            </button>
            <button className="text-white ml-2 text-2xl hover:text-gray-400">
              <RiEditFill />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ManageProperties;
