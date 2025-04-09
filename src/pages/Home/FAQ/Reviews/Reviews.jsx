import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const reviews = [
    {
        name: 'Валерия Кронцова',
        handle: '@krocvial',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOyweUERP_PkAHflHnp-jMxGTx_D-DD638A&s',
        text: 'Очень довольна услугами компании по подбору домов...',
        bg: 'bg-neutral-900',
    },
    {
        name: 'Даниэль Петров',
        handle: '@danielvon',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQrTmq7gU3rhrH_BcVzqTA9CUcBxvpNMwUQ&s',
        text: 'Очень благодарен компании за отличный сервис по подбору дома...',
        bg: 'bg-red-600',
    },
    {
        name: 'Лиза Петренко',
        handle: '@lizokkk',
        image: 'https://t4.ftcdn.net/jpg/02/76/11/41/360_F_276114144_xyAwCmx6IraojhvC2l9cNQEYAx6d28Nq.jpg',
        text: 'Очень рада что обратилась за помощью в подборе дома компании...',
        bg: 'bg-neutral-900',
    },
];

export default function Reviews() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    // Ставим состояние для активного индекса
    const [activeIndex, setActiveIndex] = useState(0);

    // Когда Swiper загружен, привязываем навигацию
    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.navigation.update();
        }
    }, []);

    return (
        <div className="bg-black text-white py-10 px-4 text-center">
            <h2 className="text-2xl font-bold mb-2">
                ЧТО ГОВОРЯТ <span className="bg-red-600 px-2 py-1 rounded">ЛЮДИ</span>
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-sm">
                В данном сервисе мы уже собрали для вас отзывы от наших клиентов...
            </p>

            <div className="relative max-w-6xl mx-auto">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // обновляем индекс
                    ref={swiperRef}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`${review.bg} rounded-xl p-6 h-full flex flex-col justify-between text-left transition-transform duration-300`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full" />
                                    <div>
                                        <p className="font-semibold text-sm sm:text-base">{review.name}</p>
                                        <p className="text-xs sm:text-sm text-gray-400">{review.handle}</p>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-sm mb-4">{review.text}</p>
                                <a href="#" className="text-xs sm:text-sm underline">Посмотреть больше квартир</a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Кастомные стрелки */}
                <div className="flex justify-center gap-4 mt-6">
                    <button
                        ref={prevRef}
                        className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
                    >
                        <FaArrowLeft className="text-white" />
                    </button>
                    <button
                        ref={nextRef}
                        className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10 transition"
                    >
                        <FaArrowRight className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
}