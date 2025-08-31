import React from "react";
import {
  useGetBannersQuery,
  useDeleteBannerMutation,
} from "../../app/services/bannerApi";
import AdBlock from "../AdBlock/AdBlock.jsx";

function Dashboard() {
  const { data: banners, isLoading, isError } = useGetBannersQuery();
  const [deleteBanner] = useDeleteBannerMutation();

  const handleDelete = async (id) => {
    try {
      console.log("Удаление баннера с id:", id);
      await deleteBanner(id).unwrap();
    } catch (err) {
      console.error("Ошибка при удалении баннера:", err);
      alert("Не удалось удалить баннер. Попробуйте ещё раз.");
    }
  };

  if (isLoading) return <p>Загрузка баннеров...</p>;
  if (isError) return <p className="text-red-600">Ошибка при загрузке баннеров</p>;
  if (!banners?.length) return <p>Баннеры отсутствуют.</p>;

  return (
    <div className="dashboard p-6">
      <h2 className="text-2xl mb-4 font-bold">Список баннеров</h2>
      {banners.map((banner) => (
        <AdBlock key={banner.id} banner={banner} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Dashboard;
