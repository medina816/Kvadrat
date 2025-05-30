import React, { useState } from "react";
import { useGetBannersQuery, useDeleteBannerMutation } from "../../app/services/bannerApi.js";
import AdBlock from "../AdBlock/AdBlock.jsx";

const BannerList = () => {
  const { data: banners, isLoading, isError } = useGetBannersQuery();
  const [deleteBanner] = useDeleteBannerMutation();

  const [reminder, setReminder] = useState(null);

  const handleDelete = async (id) => {
    try {
      await deleteBanner(id).unwrap();
      setReminder({ type: "success", message: "Баннер успешно удалён" });
    } catch (err) {
      console.error("Ошибка при удалении:", err);
      setReminder({ type: "error", message: "Не удалось удалить баннер." });
    } finally {
      setTimeout(() => setReminder(null), 3000);
    }
  };

  if (isLoading) return <p>Загрузка баннеров...</p>;
  if (isError) return <p>Ошибка при загрузке баннеров</p>;

  return (
    <div className="w-full flex flex-col items-center">
      {reminder && (
        <div
          className={`w-[90%] max-w-[840px] my-4 px-6 py-3 rounded-lg text-white font-semibold text-center transition-all duration-300
            ${reminder.type === "success" ? "bg-green-500" : "bg-red-800"}`}
        >
          {reminder.message}
        </div>
      )}
      {banners?.length > 0 ? (
        banners.map((banner) => (
          <AdBlock key={banner.id} banner={banner} onDelete={handleDelete} setReminder={setReminder} />
        ))
      ) : (
        <p>Баннеров нет</p>
      )}
    </div>
  );
};

export default BannerList;
