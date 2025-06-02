  import React from 'react';
  import { useGetFilteredProductsQuery } from '../../app/services/productsApi.js';
  import PropertyCard from '../../shared/Card/PropertyCard.jsx';

  const AllCards = () => {
    const { data, isLoading, error } = useGetFilteredProductsQuery({ limit: 999 });

    if (isLoading) return <div className="text-white text-center mt-10">Загрузка...</div>;
    if (error) return <div className="text-white text-center mt-10">Ошибка при загрузке данных</div>;

    return (
      <div className="bg-black min-h-screen py-10 px-4 lg:px-20">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold mb-10 text-center">Все объекты</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  };

  export default AllCards;
