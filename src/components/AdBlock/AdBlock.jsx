import React, { useState } from "react";
import {
  FaTrashAlt,
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaPen,
} from "react-icons/fa";
import EditBanner from "../EditBanner/EditBanner.jsx";
import { useUpdateBannerMutation } from "../../app/services/bannerApi.js";

function Reminder({ type, message }) {
  return (
    <div
      className={`w-[90%] max-w-[840px] my-4 px-6 py-3 rounded-lg text-white font-semibold text-center transition-all duration-300
        ${type === "success" ? "bg-green-500" : "bg-red-500"}`}
    >
      {message}
    </div>
  );
}

function AdBlock({ banner, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [reminder, setReminder] = useState(null);
  const [updateBanner, { isLoading }] = useUpdateBannerMutation();

  if (!banner) return null;

  const imageUrl = banner.image
    ? banner.image.startsWith("http")
      ? banner.image
      : `${import.meta.env.VITE_PUBLIC_URL}${banner.image}`
    : "/default-banner.jpg";

  const handleEdit = async (updatedData) => {
    const noChanges =
      banner.title === updatedData.title &&
      banner.description === updatedData.description &&
      !(updatedData.image instanceof File);

    if (noChanges) {
      setReminder({ type: "error", message: "Нет изменений для сохранения" });
      setTimeout(() => setReminder(null), 3000);
      return;
    }

    const formData = new FormData();
    formData.append("title", updatedData.title);
    formData.append("description", updatedData.description);
    if (updatedData.image instanceof File) {
      formData.append("image", updatedData.image);
    }

    try {
      await updateBanner({ id: updatedData.id, formData }).unwrap();
      setReminder({ type: "success", message: "Баннер успешно обновлён" });
    } catch (error) {
      console.error("Ошибка при обновлении баннера:", error);
      setReminder({ type: "error", message: "Ошибка при обновлении баннера" });
    } finally {
      setTimeout(() => setReminder(null), 3000);
      setIsEditing(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {reminder && <Reminder type={reminder.type} message={reminder.message} />}

      <div
        className="relative rounded-[5px] overflow-hidden shadow-lg mb-8 group w-[40px] h-[360px]
        lg:w-[840px] lg:h-[360px] sm:ml-12 sm:w-[500px] sm:h-[250px] sm:rounded-[5px]"
      >
        <div
          className="absolute inset-0 bg-center bg-cover w-[705px] rounded-[5px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0" />

        <div className="relative p-6 max-w-[480px] text-white sm:max-w-full sm:p-4">
          <h3 className="text-2xl font-bold uppercase mt-20 ml-9 leading-tight sm:text-xl sm:mb-1">
            {banner.title || "Без названия"}
          </h3>
          <p className="text-sm text-gray-200 mt-7 ml-9 sm:text-xs sm:mb-2">
            {banner.description || "Описание отсутствует"}
          </p>
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3 rounded-full mt-24 ml-9 text-[13px]"
            aria-label="Получить консультацию"
          >
            Получить консультацию от риэлтора
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#DC2215] px-14 py-3 rounded-full flex gap-4 mb-[36px] ml-20 sm:bottom-2">
          <a
            href={banner.telegramLink || "#"}
            className="text-cyan-400 text-lg sm:text-lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <FaTelegramPlane />
          </a>
          <a
            href={banner.whatsappLink || "#"}
            className="text-green-400 text-xl sm:text-lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href={banner.instagramLink || "#"}
            className="text-pink-500 text-xl sm:text-lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="absolute top-4 right-4 flex items-center gap-3 bg-[#3F3A3A] rounded-full px-8 py-3 z-10 sm:top-2 sm:right-2">
          <button
            onClick={() => onDelete(banner.id)}
            className="text-red-500 hover:text-red-700 text-xl sm:text-lg"
            aria-label="Удалить баннер"
          >
            <FaTrashAlt />
          </button>
          <button
            onClick={() => setIsEditing(true)}
            className="text-white hover:text-gray-300 text-xl sm:text-lg"
            aria-label="Редактировать баннер"
          >
            <FaPen />
          </button>
        </div>
      </div>

      {isEditing && (
        <EditBanner
          banner={banner}
          onClose={() => setIsEditing(false)}
          onSave={handleEdit}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default AdBlock;
