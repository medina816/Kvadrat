import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import cardData from '../../shared/Card/card';
import PropertyCard from '../../shared/Card/PropertyCard';

const AllProperties = () => {
  const [filters, setFilters] = useState({
    location: '',
    types: [],
    priceRange: '',
    areaRange: [1500, 3000],
    amenities: [],
  });

  const propertyTypes = ['Квартира', 'Офис', 'Дом', 'Виллы'];
  const amenitiesList = ['Сад', 'Камин', 'Спортзал', 'Бассейн', 'Лифт', 'Детская площадка', 'Гараж', 'Клубный дом', 'Стоянка', 'Прачечная'];

  const handleCheckboxChange = (key, value) => {
    setFilters((prev) => {
      const updated = prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value];
      return { ...prev, [key]: updated };
    });
  };

  const clearFilterItem = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item !== value)
    }));
  };

  const filteredData = cardData.filter((item) => {
    return filters.types.length === 0 || filters.types.includes('Квартира');
  });

  return (
    <div className=" bg-black text-white min-h-screen py-8 px-4 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full  lg:w-[420px] bg-[#121212] p-6  rounded-md text-white space-y-6 h-fit mt-[103px] ">
          <h2 className="text-xl font-semibold tracking-wider uppercase border-b-2 border-[#444] w-max pb-4">
            НАЙТИ СВОЮ НЕДВИЖИМОСТЬ
          </h2>

          <div>
            <label className="block text-xl font-semibold mb-3">Местоположение</label>
            <select
              className="w-[350px] h-[48px] rounded-md px-5  bg-[#F3F3F3] text-[#33335099] border border-[#F3F3F3] focus:outline-none  text-lg font-medium  mb-[18px]"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            >
              <option>Выберите местоположение</option>
            </select>
          </div>

          <div>
            <p className="max-w-[350px] text-xl font-semibold mb-7 border-t-2 border-[#444] pt-5">Тип недвижимости</p>
            <div className="space-y-3 mt-[-10px]">
              {propertyTypes.map((type) => (
                <label key={type} className="flex items-center space-x-3 cursor-pointer text-lg font-medium">
                  <input
                    type="checkbox"
                    checked={filters.types.includes(type)}
                    onChange={() => handleCheckboxChange('types', type)}
                    className="peer hidden"
                  />
                  <div className="w-5 h-5 rounded border-2 border-white bg-black peer-checked:bg-[#DC2215] peer-checked:border-[#DC2215] flex items-center justify-center transition-all">
                    <svg
                      className="w-4 h-4 text-black  peer-checked:opacity-100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className='max-w-[350px] border-t-2 border-[#444]'>
            <label className="text-lg font-semibold block mt-6 mb-3 ">Цена</label>
            <select
              className="w-[214] h-[40px] rounded px-3 bg-[#303030] text-white border border-[#303030] "
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
            >
              <option value="">от Мин. – до Макс</option>
              <option value="$50k-$125k">$50k-$125k</option>
            </select>
          </div>

          <div className='max-w-[350px] border-t-2 border-[#444]'>
            <p className="text-xl font-semibold mt-5 ">Площадь земельного участка</p>
            <div className="px-1 py-4">
              <Slider
                range
                min={500}
                max={5000}
                step={100}
                value={filters.areaRange}
                onChange={(value) => setFilters({ ...filters, areaRange: value })}
                trackStyle={[{ backgroundColor: '#DC2215' }]}
                handleStyle={[
                  { borderColor: 'white', backgroundColor: '#DC2215' },
                  { borderColor: 'white', backgroundColor: '#DC2215' }
                ]}
                railStyle={{ backgroundColor: 'white' }}
              />
              <div className="text-xl mt-6 ">
                 <span className="font-semibold">{filters.areaRange[0]}  -	 </span>  <span className="font-semibold  ">{filters.areaRange[1]} </span>
              </div>
            </div>
          </div>
										<div className="max-w-[352px] border-t-2 border-[#444]">
  <p className="max-w-[350px] text-xl font-semibold mb-7 border-t-2 border-[#444] pt-5">Удобства</p>
  <div className="grid grid-cols-2 gap-2 text-sm mt-[-10px]">
    {amenitiesList.map((amenity) => (
      <label
        key={amenity}
        className="flex items-center space-x-3 cursor-pointer text-lg font-medium whitespace-nowrap"
      >
        <input
          type="checkbox"
          checked={filters.amenities.includes(amenity)}
          onChange={() => handleCheckboxChange('amenities', amenity)}
          className="peer hidden"
        />
        <div className="w-5 h-5 rounded border-2 border-white bg-black peer-checked:bg-[#DC2215] peer-checked:border-[#DC2215] flex items-center justify-center transition-all">
          <svg
            className="w-4 h-4 text-black peer-checked:opacity-100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span className="text-white">{amenity}</span>
      </label>
    ))}
  </div>
</div>
        </aside>
        <main className="flex-1 space-y-6 mt-[105px]">
          <div className="flex justify-between items-center"> 
											<div className='w-[246px]'> 
            <p className=' text-2xl font-medium'>Показаны 1-12 из 240 результатов</p> </div>
            <div className="flex items-center space-x-2   mr-[30px]">
              <span className='text-2xl font-medium'>Сортировать:</span>
														<select
  className="bg-[#DC2215] rounded-[39px] h-[45px] w-[221px] text-white px-2  text-lg font-medium focus:outline-none">
  <option value="default">по умолчанию</option>
  <option value="priceLowHigh">Сначала дешевые</option>
  <option value="priceHighLow">Сначала дорогие</option>
</select>
            </div>
          </div>

          {(filters.types.length > 0 ||
            filters.amenities.length > 0 ||
            filters.location ||
            filters.priceRange) && (
            <>
              <h3 className="text-base font-semibold mb-2">Активные фильтры</h3>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {filters.types.map((type) => (
                  <span
                    key={type}
                    className="bg-[#C8180C] text-white px-4 py-1 rounded-full text-sm cursor-pointer"
                    onClick={() => clearFilterItem('types', type)}
                  >
                    {type} ✕
                  </span>
                ))}
                {filters.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="bg-[#C8180C] text-white px-4 py-1 rounded-full text-sm cursor-pointer"
                    onClick={() => clearFilterItem('amenities', amenity)}
                  >
                    {amenity} ✕
                  </span>
                ))}
                {filters.location && (
                  <span
                    className="bg-[#C8180C] text-white px-4 py-1 rounded-full text-sm cursor-pointer"
                    onClick={() => setFilters({ ...filters, location: '' })}
                  >
                    {filters.location} ✕
                  </span>
                )}
                {filters.priceRange && (
                  <span
                    className="bg-[#C8180C] text-white px-4 py-1 rounded-full text-sm cursor-pointer"
                    onClick={() => setFilters({ ...filters, priceRange: '' })}
                  >
                    {filters.priceRange} ✕
                  </span>
                )}
                <div className="flex-grow" />
                <button
                  className="underline text-sm mr-[31px]"
                  onClick={() =>
                    setFilters({
                      location: '',
                      types: [],
                      priceRange: '',
                      areaRange: [1500, 3000],
                      amenities: []
                    })
                  }
                >
                  очистить всё
                </button>
              </div>
            </>
          )}

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {filteredData.map((item) => (
              <div key={item.id} className="max-w-[412px] w-full">
                <PropertyCard item={item} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllProperties;
