import React from 'react';

function About() {
  return (
    <div className="bg-black text-white px-4 py-10 sm:px-6 md:px-12 lg:px-24">
      <h2 className="flex items-center justify-center text-center text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">
        <span className="flex-grow h-px bg-white mr-4 hidden sm:block"></span>
        О КОМПАНИИ
        <span className="flex-grow h-px bg-white ml-4 hidden sm:block"></span>
      </h2>

      <div className="space-y-5 text-sm sm:text-base leading-relaxed">
        <p>
          Добро пожаловать в <strong>“Бишкек Недвижимость”</strong> – ваш надёжный партнёр в мире недвижимости!
          В динамично развивающемся городе Бишкек, где сочетаются культура и современность, мы, компания
          <strong>“Бишкек Недвижимость”</strong>, предлагаем широкий спектр услуг в области недвижимости.
        </p>
        <p>
          Наши профессионалы с многолетним опытом помогут вам найти идеальное жильё, коммерческую недвижимость или
          инвестировать в будущее.
        </p>

        <div>
          <p className="font-semibold">Наши услуги включают:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Продажа и аренда жилой недвижимости: Квартиры, дома, элитные апартаменты на любой вкус и бюджет.</li>
            <li>Коммерческая недвижимость: Офисы, торговые площади, склады и производственные помещения.</li>
            <li>Инвестиции в недвижимость: Консультации по выгодным инвестиционным проектам, сопровождение сделок.</li>
            <li>Юридическое сопровождение: Профессиональная помощь в оформлении документов, поддержка на всех этапах сделки.</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Почему выбирают нас:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Индивидуальный подход: Мы учитываем все ваши пожелания и требования, чтобы предложить оптимальные решения.</li>
            <li>Надёжность и прозрачность: Все наши сделки проходят с соблюдением законодательства и максимальной прозрачностью.</li>
            <li>Широкая база объектов: Мы располагаем обширной базой объектов недвижимости, что позволяет удовлетворить самые разнообразные запросы.</li>
            <li>Профессионализм: Наши специалисты – это эксперты с глубокими знаниями рынка и готовностью помочь в любой ситуации.</li>
          </ul>
        </div>

        <p>
          Свяжитесь с нами сегодня и откройте для себя новые возможности с <strong>“Бишкек Недвижимость”</strong>!
        </p>

        <div className="space-y-1">
          <p><strong>Телефон:</strong> +996 XXX XXX XXX</p>
          <p><strong>Email:</strong> info@bishkekrealestate.kg</p>
          <p><strong>Адрес:</strong> г. Бишкек, ул. Ленина, д. 123</p>
        </div>

        <p>С уважением,<br />Команда <strong>“Бишкек Недвижимость”</strong></p>

        <p className="pt-6 border-b border-gray-400 mt-8 text-sm pb-[30px]">
          Поделитесь своим выбором с друзьями в соц.сетях
        </p>
      </div>
    </div>
  );
}

export default About;