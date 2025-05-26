import React from "react";
import {
  FaTrashAlt,
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
  FaPen,
} from "react-icons/fa";

function AdBlock({ banner, onDelete, onEdit }) {
  if (!banner) return null;

  const imageUrl = `${import.meta.env.VITE_PUBLIC_URL}${banner.image}`;

  return (
    <div
      className="
        relative  
        rounded-2xl 
        overflow-hidden 
        shadow-lg 
        mb-8 
        group
        w-[40px] 
        h-[360px]

        lg:w-[840px]
        lg:h-[360px]

        sm:ml-12
        sm:w-[500px]
        sm:h-[250px]
        sm:rounded-xl
      "
    >
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="absolute inset-0 backdrop-blur-sm bg-white/30 " />

      <div
        className="
          relative  
          p-6 
          max-w-[480px] 
          text-white 

          sm:max-w-full
          sm:p-4
        "
      >
        <h3
          className="
            text-2xl 
            font-bold 
            uppercase 
            mt-20 
            ml-9 
            leading-tight

            sm:text-xl
            sm:mb-1
          "
        >
          {banner.title || "Без названия"}
        </h3>
        <p
          className="
            text-sm 
            text-gray-200 
            mt-7 ml-9

            sm:text-xs
            sm:mb-2
          "
        >
          {banner.description || "Описание отсутствует"}
        </p>
        <button
          className="
            bg-red-600 
            hover:bg-red-700 
            text-white 
            font-medium 
            px-8
            py-3
            rounded-full 
            mt-24 ml-9 text-[13px]

            
          "
        >
          Получить консультацию от риэлтора
        </button>
      </div>

      <div
        className="
          absolute 
          bottom-4 
          left-1/2 
          transform -translate-x-1/2 
          bg-[#DC2215]
          px-14
          py-3
          rounded-full 
          flex 
          gap-4  
          mb-[36px] 
          ml-20

          sm:bottom-2
          
        "
      >
        <a href="#" className="text-cyan-400 text-lg  sm:text-lg">
          <FaTelegramPlane />
        </a>
        <a href="#" className="text-green-400 text-xl sm:text-lg">
          <FaWhatsapp />
        </a>
        <a href="#" className="text-pink-500 text-xl sm:text-lg">
          <FaInstagram />
        </a>
      </div>

      <div
        className="
          absolute 
          top-4 
          right-4 
          flex 
          items-center 
          gap-3 
          bg-[#3F3A3A]
          rounded-full 
          px-8
          py-3
          z-10

          sm:top-2
          sm:right-2
        "
      >
        <button
          onClick={() => onDelete(banner.id)}
          className="text-red-500 hover:text-red-700 text-xl sm:text-lg"
        >
          <FaTrashAlt />
        </button>
        <button
          onClick={() => onEdit?.(banner.id)}
          className="text-white hover:text-gray-300 text-xl sm:text-lg"
        >
          <FaPen />
        </button>
      </div>
    </div>
  );
}

export default AdBlock;
