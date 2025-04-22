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
        text: 'Очень довольна услугами компании по подбору домов. Специалисты понимают все мои пожелания и требования к будущему жилью, быстро находят ....',
        bg: 'bg-neutral-900',
        textColor: 'text-white',
        linkColor: 'text-gray-600'
    },
    {
        name: 'Даниэль Петров',
        handle: '@danielvon',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQrTmq7gU3rhrH_BcVzqTA9CUcBxvpNMwUQ&s',
        text: 'Очень благодарен компании за отличный сервис по подбору дома! Сотрудники профессиональны и внимательно подошли к моим требованиям и ....',
        bg: 'bg-red-600',
        textColor: 'text-white',
        linkColor: 'text-gray-500'
    },
    {
        name: 'Лиза Петренко',
        handle: '@lizokkk',
        image: 'https://t4.ftcdn.net/jpg/02/76/11/41/360_F_276114144_xyAwCmx6IraojhvC2l9cNQEYAx6d28Nq.jpg',
        text: 'Очень рада что обратилась за помощью в подборе дома компании. Они не только предложили мне отличные варианты по моим критериям но и .... ',
        bg: 'bg-neutral-900',
        textColor: 'text-white',
        linkColor: 'text-gray-500'
    },
];

function truncateText(text, wordLimit) {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
}

export default function Reviews() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.navigation.update();
        }
    }, []);

    return (
        <div className="bg-black text-white py-16 px-4 text-center">
            <h2 className="text-3xl font-bold mb-2 tracking-wide">
                ЧТО ГОВОРЯТ <span className="bg-red-600 px-3 py-1 rounded">ЛЮДИ</span>
            </h2>
            <p className="max-w-xl mx-auto mb-10 text-sm text-gray-300">
                В данном сервисе мы уже собрали для вас отзывы от наших клиентов которые уже воспользовались нашим сервисом по подбору квартир
            </p>

            <div className="relative max-w-6xl mx-auto">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    ref={swiperRef}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`${review.bg} ${review.textColor} rounded-[4px] p-6 h-full flex flex-col justify-between text-left transition-all duration-300 ${
                                    activeIndex === index ? 'scale-105 shadow-lg' : 'scale-100'
                                }`}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-[50px] h-[50px] object-cover rounded-full"
                                        style={{
                                            border: '5px solid #FFFFFF4D'
                                        }}
                                    />
                                    <div>
                                        <p className="font-semibold text-sm sm:text-base">{review.name}</p>
                                        <p className="text-xs sm:text-sm text-gray-400">{review.handle}</p>
                                    </div>
                                </div>
                                <p className="text-xs sm:text-[16px] sm:tracking-wide sm:font-medium sm:w-[290px] mb-5">
                                    {truncateText(review.text, 24)}
                                </p>
                                <span className="underline mb-6" style={{
                                            border: '1px solid #FFFFFF80'
                                        }}>
                                </span>
                                <a href="#" className={`text-xs sm:text-sm ${review.linkColor}`}>
                                    Посмотрите больше квартир
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Стрелки */}
                <div className="flex justify-center gap-6 mt-8">
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