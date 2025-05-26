 import React from "react";
import { useGetBannersQuery, useDeleteBannerMutation } from "../../app/services/bannerApi.js";
import AdBlock from "../AdBlock/AdBlock.jsx";

const BannerList = () => {
  const { data: banners, isLoading, isError } = useGetBannersQuery();
  const [deleteBanner] = useDeleteBannerMutation();

  const handleDelete = async (id) => {
    try {
      await deleteBanner(id).unwrap();
    } catch (err) {
      console.error("Ошибка при удалении:", err);
      alert("Не удалось удалить баннер.");
    }
  };

  if (isLoading) return <p>Загрузка баннеров...</p>;
  if (isError) return <p>Ошибка при загрузке баннеров</p>;

  return (
    <div>
      {banners?.length > 0 ? (
        banners.map((banner) => (
          <AdBlock key={banner.id} banner={banner} onDelete={handleDelete} />
        ))
      ) : (
        <p>Баннеров пока нет.</p>
      )}
    </div>
  );
};

export default BannerList;