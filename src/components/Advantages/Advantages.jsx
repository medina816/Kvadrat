import React from 'react';
import advantages1 from '../../assets/advantages1.svg';
import advantages2 from '../../assets/advantages2.svg';
import advantages3 from '../../assets/advantages3.svg';

function Advantages() {
  return (
    <div className='w-[1430px] m-auto bg-black py-12 px-4 flex justify-center '>
      <div className='max-w-[1301px] w-full h-auto md:h-[751px] text-white'>
        <h2 className='text-xl sm:text-2xl font-semibold tracking-widest 
                      text-center md:text-left 
                      w-full md:w-[806px] md:ml-[500px]'>
          3 АРГУМЕНТА ПОЧЕМУ ВАМ СТОИТ ДОВЕРИТЬ РЕШЕНИЕ ВАШЕГО КВАРТИРНОГО ВОПРОСА {""}
          <span className='bg-red-600 px-3 sm:px-4 md:px-5 inline-block mt-2'>
             ИМЕННО НАМ
          </span>
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 md:mt-0 justify-items-center'>
          <div className='relative rounded-[4px] overflow-hidden 
                          w-full sm:w-[90%] md:w-[420px] 
                          h-[500px] sm:h-[531px] 
                          top-0 md:top-[-60px]'>
            <img
              src={advantages1}
              alt='опыт'
              className='absolute inset-0 w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-opacity-40 flex flex-col justify-end p-6'>
              <h3 className='text-xl sm:text-2xl mb-4 font-semibold'>15 лет опыта</h3>
              <p className='text-base sm:text-lg mb-4 font-normal'>
                Наша цель — решить любую вашу задачу по недвижимости, какой бы
                сложной она не была. В максимально сжатые сроки.
              </p>
            </div>
          </div>

          <div className='relative rounded-[4px] overflow-hidden 
                          w-full sm:w-[90%] md:w-[420px] 
                          h-[500px] sm:h-[531px] 
                          top-0 md:top-[60px]'>
            <img
              src={advantages2}
              alt='отношение к клиентам'
              className='absolute inset-0 w-full h-full object-cover'
            />
            <div className='absolute inset-0  bg-opacity-70 flex flex-col justify-end p-6'>
              <h3 className='text-xl sm:text-2xl font-semibold mb-3'>
                По-человечески-внимательно относимся к клиентам
              </h3>
              <p className='text-base sm:text-lg font-medium mb-4'>
                Команда специалистов по недвижимости, брокеров, юристов
                ТОП-уровня проведет вас за руку по сделке.
              </p>
            </div>
          </div>

          <div className='relative rounded-[4px] overflow-hidden 
                          w-full sm:w-[90%] md:w-[420px] 
                          h-[500px] sm:h-[531px] 
                          top-0 md:top-[186px]'>
            <img
              src={advantages3}
              alt='честность и открытость'
              className='absolute inset-0 w-full h-full object-cover'
            />
            <div className='absolute inset-0  bg-opacity-40 flex flex-col justify-end p-6'>
              <h3 className='text-xl sm:text-2xl font-semibold mb-4'>
                Честны и открыты в работе
              </h3>
              <p className='text-base sm:text-lg font-medium mb-5'>
                Гарантируем юридическую чистоту сделок, состоим в Гильдии
                риэлторов Бишкека.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
