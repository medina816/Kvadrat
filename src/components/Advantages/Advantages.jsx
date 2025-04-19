import React from 'react';
import advantages1 from '../../assets/advantages1.svg';
import advantages2 from '../../assets/advantages2.svg';
import advantages3 from '../../assets/advantages3.svg';

function Advantages() {
  return (
    <div className='w-full bg-black py-12 px-4 flex justify-center'>
      <div className='max-w-[1301px] w-full text-white h-auto lg:h-[751px]'>

        <h2 className='text-[14px] lg:text-[24px] lg:my-[-10px] lg:font-medium font-normal text-left w-[330px] lg:w-[806px] sm:ml-0 lg:ml-[470px] lg:uppercase tracking-wide'>
          3 АРГУМЕНТА ПОЧЕМУ ВАМ СТОИТ ДОВЕРИТЬ РЕШЕНИЕ ВАШЕГО КВАРТИРНОГО ВОПРОСА
          <span className='bg-red-600 rounded-[1px] ml-1 px-3 lg:ml-[8px] lg:px-6'>
            ИМЕННО НАМ
          </span>
        </h2>

        <div className='mt-6 lg:mt-0 overflow-x-auto lg:overflow-visible -mb-[1px] scrollbar-hide'>
          <div className='flex lg:grid lg:grid-cols-3 lg:gap-6 gap-5 justify-items-center w-max lg:w-full'>

            <div className='relative rounded-[4px] overflow-hidden 
                flex-shrink-0 w-[265px] h-[333px] 
                lg:w-[420px] lg:h-[531px] top-0 lg:top-[-60px]'>
              <img
                src={advantages1}
                alt='опыт'
                className='absolute inset-0 w-full h-full object-cover pointer-events-none'
              />
              <div className='absolute inset-0 bg-opacity-40 flex flex-col 
                  justify-start lg:justify-end p-4 lg:p-6'>
                <h3 className='text-[16px] text-[#FFFFFF] lg:text-2xl mt-2 mb-1 lg:mt-0 lg:mb-4 font-semibold'>
                  15 лет опыта
                </h3>
                <p className='text-[15px] lg:w-[280px] w-[231px] lg:text-lg font-medium mb-2 lg:mb-5'>
                  Наша цель  —  решить любую вашу задачу по недвижимости, какой бы
                  сложной она не была. В максимально сжатые сроки.
                </p>
              </div>
            </div>

            <div className='relative rounded-[4px] overflow-hidden 
                flex-shrink-0 w-[265px] h-[333px] 
                lg:w-[420px] lg:h-[531px] top-0 lg:top-[60px] 
                bg-[#A50B01] flex flex-col'>
              <div className="w-full h-[180px] lg:h-[293px] overflow-hidden">
                <img
                  src={advantages2}
                  alt='отношение к клиентам'
                  className='w-full h-full object-cover pointer-events-none'
                />
              </div>
              <div className='flex-1 p-3 lg:p-6 text-white flex flex-col justify-end'>
                <h3 className='text-[14px] lg:text-2xl font-semibold mb-2 lg:mb-3'>
                  По-человечески-внимательно относимся к клиентам
                </h3>
                <p className='text-[12px] lg:w-[340px] w-[205px] lg:text-xl font-medium mb-4 lg:mb-3'>
                  Команда специалистов по недвижимости, брокеров, юристов ТОП-уровня проведет вас за руку по сделке.
                </p>
              </div>
            </div>

            <div className='relative rounded-[4px] overflow-hidden 
                flex-shrink-0 w-[265px] h-[333px] 
                lg:w-[420px] lg:h-[531px] lg:top-[176px]'>
              <img
                src={advantages3}
                alt='честность и открытость'
                className='absolute inset-0 w-full h-full object-cover pointer-events-none'
              />
              <div className='absolute inset-0 bg-opacity-40 flex flex-col justify-end p-4 lg:p-6'>
                <h3 className='text-[14px] lg:text-2xl font-semibold mb-2 lg:mb-4'>
                  Честны и открыты в работе
                </h3>
                <p className='text-[12px] lg:w-[350px] lg:text-xl font-medium mb-2 lg:mb-4'>
                  Гарантируем юридическую чистоту сделок, состоим в Гильдии риэлторов Бишкека.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
