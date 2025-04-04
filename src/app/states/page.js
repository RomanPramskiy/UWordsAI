import Image from 'next/image';
import "../style.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <div className="wrapper">
      <Header></Header>
  <main className="main main__state">
    <div className="container">


      <section className="state__date">
        <p className='state__date-text'>00:00, 12 марта 2025</p>
      </section>



      <section className="state__associations">
        <div className='state__associations-block'>
          <p className='state__associations-block-text'>английский язык</p>
        </div>
        <div className='state__associations-block'>
          <p className='state__associations-block-text'>обучение</p>
        </div>
        <div className='state__associations-block'>
          <p className='state__associations-block-text'>AI</p>
        </div>
      </section>

      
      <section className='state__author'>
        <Image className='state__author-image' src="/images/state__ivan.svg" width={120} height={120} alt='author'></Image>
        <div className='state__author-text-block'>
          <h1 className='state__author-text-block-title'>Иван Иванович Иванов</h1>
          <p className='state__author-text-block-text'>Маркетолог</p>
        </div>
      </section>




      <section className="state__content">
       <h1 className='state__content-title'>Как ИИ помогает учить английский эффективнее?</h1>
       <p className='gray-text-24 state__content-text-before-image'>
       Современные технологии искусственного интеллекта (ИИ) меняют методы изучения языков, делая их более персонализированными, адаптивными и эффективными. Исследования показывают, что использование ИИ помогает быстрее осваивать английский язык, повышая точность произношения и улучшая навыки общения. Разберёмся, как именно ИИ способствует прогрессу в изучении английского языка.
       </p>
       <Image className='state__content-image' src="/images/state__image.svg" width={1360} height={800} alt='state-image'></Image>
       <h2 className='state__content-title-after-image'>Персонализированное обучение: адаптация на основе данных</h2>
       <p className='state__content-text-after-image'>ИИ-алгоритмы анализируют уровень знаний и стиль обучения каждого студента, предлагая индивидуальные программы. Например:</p>
       <ul className='state__content-list'>
          <li className='state__content-list-item'>Duolingo использует адаптивные алгоритмы, подбирая задания в зависимости от успешности пользователя. Согласно исследованию компании, 34 часа обучения в приложении эквивалентны одному семестру изучения языка в университете.</li>
          <li className='state__content-list-item'>LingQ предлагает контент на основе интересов пользователя, помогая запоминать слова в контексте.</li>
        </ul>
      </section>




      <section className="state__quote">
          <Image className='state__quote-image' src="/images/quote.svg" width={80} height={80} alt='quote'></Image>
          <h2 className='state__quote-title'>Индивидуальный подход ускоряет процесс обучения на 30-50% по сравнению с традиционными методами</h2>
          <p className='yellow-text state__quote-text'>исследование EdTech Magazine.</p>
      </section>


      <section className="state__similiar">
        <h2 className='state__similiar-title'>Похожие статьи</h2>
        <Slider></Slider>
      </section>

    </div>
  </main>
    <Footer></Footer>
    </div>
  );
}
