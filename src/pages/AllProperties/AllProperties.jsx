import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { FiChevronDown } from 'react-icons/fi';
import PropertyCard from '../../shared/Card/PropertyCard';
import { useGetFilteredProductsQuery } from '../../app/services/productsApi';

const AllProperties = () => {
  const [filters, setFilters] = useState({
    location: '',
    types: [],
    priceRange: '',      
    areaRange: [500, 5000], 
    amenities: [],
  });

  const [queryParams, setQueryParams] = useState({});
  const { data, isLoading, error } = useGetFilteredProductsQuery(queryParams);
  const products = data || [];

  const propertyTypes = ['Квартира', 'Офис', 'Дом', 'Виллы'];
  const amenitiesList = ['Сад', 'Камин', 'Спортзал', 'Бассейн', 'Лифт', 'Детская площадка', 'Гараж', 'Клубный дом', 'Стоянка', 'Прачечная'];

  useEffect(() => {
    const priceParts = filters.priceRange.split('-');

    const query = {};

    if (filters.location) {
      query.placeId = filters.location;
    }

    if (filters.types.length > 0) {
      query.type = filters.types[0].toUpperCase();
    }

    if (filters.priceRange) {
      query.minPrice = Number(priceParts[0].replace(/\D/g, ''));
      query.maxPrice = Number(priceParts[1]?.replace(/\D/g, '')) || 1000000;
    }

    if (filters.areaRange) {
      query.minArea = filters.areaRange[0];
      query.maxArea = filters.areaRange[1];
    }

    if (filters.amenities.length > 0) {
      query.elevator = filters.amenities.includes('Лифт');
      query.parking = filters.amenities.includes('Стоянка') || filters.amenities.includes('Гараж');
    }

    setQueryParams(query);
  }, [filters]);

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

  const resetFilters = () => {
    setFilters({
      location: '',
      types: [],
      priceRange: '',
      areaRange: [500, 5000],
      amenities: [],
    });
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ката кетти.</div>;

  return (
    <div className="max-w-[1400px] m-auto bg-black text-white min-h-screen py-8 px-4 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-[420px] bg-[#121212] p-6 rounded-md space-y-6 mt-[66px]">
          <h2 className="text-xl font-semibold uppercase border-b-2 border-[#444] w-max pb-4 mt-4">
            НАЙТИ СВОЮ НЕДВИЖИМОСТЬ
          </h2>

          <div>
            <label className="block text-xl font-semibold mb-3">Местоположение</label>
            <div className="relative w-[350px] mb-[18px]">
              <select
                className="appearance-none w-full h-[48px] rounded-md px-5 bg-[#F3F3F3] text-[#33335099] border border-[#F3F3F3] text-lg font-medium"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              >
                <option value="">Выберите местоположение</option>
                <option value="1">Бишкек</option>
                <option value="2">Ош</option>
              </select>
              <FiChevronDown className="absolute right-[16px] top-1/2 transform -translate-y-1/2 text-[#33335099] text-[26px]" />
            </div>
          </div>

          <div>
            <p className="text-xl font-semibold mb-4 border-t-2 border-[#444] pt-5">Тип недвижимости</p>
            <div className="space-y-3">
              {propertyTypes.map((type) => (
                <label key={type} className="flex items-center space-x-3 text-lg font-medium">
                  <input
                    type="checkbox"
                    checked={filters.types.includes(type)}
                    onChange={() => handleCheckboxChange('types', type)}
                    className="peer hidden"
                  />
                  <div className="w-5 h-5 border-2 border-white bg-black peer-checked:bg-[#DC2215] peer-checked:border-[#DC2215] flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className='max-w-[350px] border-t-2 border-[#444] pt-5'>
            <label className="text-lg font-semibold block mb-3">Цена</label>
            <select
              className="w-full h-[40px] rounded px-3 bg-[#303030] border border-[#303030]"
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
            >
              <option value="">от Мин. – до Макс</option>
              <option value="$50000-$125000">$50k - $125k</option>
              <option value="$125000-$250000">$125k - $250k</option>
              <option value="$250000-$500000">$250k - $500k</option>
            </select>
          </div>

          <div className='max-w-[350px] border-t-2 border-[#444] pt-5'>
            <p className="text-xl font-semibold mb-4">Площадь земельного участка</p>
            <Slider
              range
              min={500}
              max={5000}
              step={100}
              value={filters.areaRange}
              onChange={(value) => setFilters({ ...filters, areaRange: value })}
              trackStyle={[{ backgroundColor: '#DC2215' }]}
              handleStyle={[{ borderColor: 'white', backgroundColor: '#DC2215' }]}
              railStyle={{ backgroundColor: 'white' }}
            />
            <div className="text-xl mt-4">
              <span className="font-semibold">{filters.areaRange[0]} - {filters.areaRange[1]} м²</span>
            </div>
          </div>

          <div className="max-w-[352px] border-t-2 border-[#444] pt-5">
            <p className="text-xl font-semibold mb-4">Удобства</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {amenitiesList.map((amenity) => (
                <label key={amenity} className="flex items-center space-x-3 text-lg font-medium">
                  <input
                    type="checkbox"
                    checked={filters.amenities.includes(amenity)}
                    onChange={() => handleCheckboxChange('amenities', amenity)}
                    className="peer hidden"
                  />
                  <div className="w-5 h-5 border-2 border-white bg-black peer-checked:bg-[#DC2215] peer-checked:border-[#DC2215] flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={resetFilters}
            className="mt-6 w-full bg-red-600 hover:bg-red-700 transition-colors text-white py-2 rounded-md font-medium"
          >
            Сбросить все фильтры
          </button>
        </aside>

        <main className="flex-1 mt-[60px] space-y-6">
          <div className="flex justify-between items-center">
            <p className='text-2xl font-medium'>Показано: {products.length} объектов</p>
          </div>

          {products.length === 0 ? (
            <div className="text-center text-gray-400 text-lg mt-10">
              Ничего не найдено по текущим фильтрам
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <PropertyCard key={product.id} data={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AllProperties;
