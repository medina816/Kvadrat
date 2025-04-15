import React, { useState } from 'react';
import './faq.scss';
import '../../app/index.css';

const faqs = [
  {
    question: 'А как у вас консультироваться?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Arcu pellentesque id sit eu duis. Dui non sed morbi sed mauris. Purus quis.',
  },
  {
    question: 'Какие у вас часы работы?',
    answer: 'Мы работаем с понедельника по пятницу с 9:00 до 18:00.',
  },
  {
    question: 'Сколько стоит консультация?',
    answer: 'Стоимость зависит от сложности вопроса. Свяжитесь с нами для уточнения.',
  },
  {
    question: 'Можно ли записаться онлайн?',
    answer: 'Да, вы можете записаться через форму на сайте.',
  },
  {
    question: 'Есть ли поддержка в выходные?',
    answer: 'Поддержка работает только в будние дни.',
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="mt-10 mb-20 px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="bg-zinc-900 text-white pt-10 pb-10 px-6 sm:pt-14 sm:pb-14 sm:px-10 rounded-lg w-full max-w-3xl">
        <h1 className="text-center text-base sm:text-lg font-medium mb-6 uppercase">
          Часто задаваемые вопросы
        </h1>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-zinc-600 py-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h6 className="text-sm sm:text-base">{faq.question}</h6>
              <button className="text-xl sm:text-2xl font-bold">
                {activeIndex === index ? '−' : '+'}
              </button>
            </div>

            {activeIndex === index && faq.answer && (
              <p className="mt-2 text-xs sm:text-sm text-zinc-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;