import Image from 'next/image';
import "../style.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Questionnaire from '../components/Questionnaire';
import Telegram from '../components/Telegram';
import BlocknoteLeft from '../components/BlocknoteLeft';
import BlocknoteCenter from '../components/BlocknoteCenter';
import BlocknoteRight from '../components/BlocknoteRight';

export default function investors() {
  return (
    <div className="wrapper">
      <Header></Header>
  <main className="main">
    <div className="container">





      <div className="investors__future">


        
        <section className="investors__invaste-In-future">
          <h1 className='white-text-128 investors__invaste-In-future-title'>Инвестируйте в
          будущее</h1>
           <Image src="/images/investors__invest-in-future-uwordsai.svg" alt="uwordsai" width={814} height={256} className="investors__invaste-In-future-image"/>
           <p className='gray-text-24 investors__invaste-In-future-text'>Мы объединяем искусственный интеллект, анализ речи и геймификацию, создавая эффективную и захватывающую платформу для изучения иностранных языков.</p>
        </section>



        <section className="investors__invaste-In-future-block">
          <h1 className='investors__market-title'>Растущий рынок EdTech</h1>
          <Image src="/images/investors__market-woman.svg" alt="woman" width={445} height={560} className="investors__market-image"/>
            <div className='blocknote-block-position'>
            <BlocknoteLeft 
                bgColor="#FDEA6B" 
                text={[
                  { content: "Глобальный ", className: "blocknote-block-text" },
                  { content: "рынок онлайн-обучения растет в среднем на 15% в год.", className: "blocknote-bold-text" }
              ]}
            />
                      <BlocknoteCenter 
                bgColor="#DB79E2" 
                text={[
                  { content: "Спрос на ", className: "blocknote-block-text" },
                  { content: "эффективные AI-решения в образовании ", className: "blocknote-bold-text" },
                  { content: "бьет рекорды.", className: "blocknote-block-text" },
              ]}
            />
                      <BlocknoteRight 
                bgColor="#78E185" 
                text={[
                  { content: "Геймификация и персонализация ", className: "blocknote-bold-text" },
                  { content: "– основные тренды обучения будущего.", className: "blocknote-block-text" }
              ]}
            />
            </div>
        </section>




        <section className="investors__invaste-In-future-block">
          <h1 className='investors__uniqe-tech-title'>Уникальная технология</h1>
          <Image src="/images/investors__tech-man.svg" alt="man" width={400} height={537} className="investors__uniqe-tech-image"/>
        <div className='blocknote-block-position'>
            <BlocknoteLeft 
                bgColor="#EC7495" 
                text={[
                  { content: "ИИ-аналитика речи ", className: "blocknote-bold-text" },
                  { content: "– мы первые, кто использует реальный язык пользователя для подбора слов.", className: "blocknote-block-text" }
              ]}
            />
                      <BlocknoteCenter 
                bgColor="#FFCF77" 
                text={[
                  { content: "Преподаватели могут использовать Uwords AI", className: "blocknote-block-text" },
                  { content: "в классах и домашних заданиях.", className: "blocknote-bold-text" }
              ]}
            />
                      <BlocknoteRight 
                bgColor="#9DDADB" 
                text={[
                  { content: "Преподаватели могут использовать Uwords AI", className: "blocknote-block-text" },
                  { content: "в классах и домашних заданиях.", className: "blocknote-bold-text" }
              ]}
            />
            </div>
        </section>




        <section className="investors__invaste-In-future-block">
          <h1 className='investors__buisness-model-title'>Бизнес-модель с 
          высоким потенциалом</h1>
          <Image src="/images/investors__buisness-woman.svg" alt="woman" width={400} height={537} className="investors__buisness-model-image"/>
        <div className='blocknote-block-position'>
            <BlocknoteLeft 
                bgColor="#78E185" 
                text={[
                  { content: "Преподаватели могут использовать Uwords AI", className: "blocknote-block-text" },
                  { content: "в классах и домашних заданиях.", className: "blocknote-bold-text" }
              ]}
            />
                      <BlocknoteCenter 
                bgColor="#E86BBB" 
                text={[
                  { content: "Преподаватели могут использовать Uwords AI", className: "blocknote-block-text" },
                  { content: "в классах и домашних заданиях.", className: "blocknote-bold-text" }
              ]}
            />
                      <BlocknoteRight 
                bgColor="#FDEA6B" 
                text={[
                  { content: "Преподаватели могут использовать Uwords AI", className: "blocknote-block-text" },
                  { content: "в классах и домашних заданиях.", className: "blocknote-bold-text" }
              ]}
            />
            </div>
        </section>






        <section className="investors__look-for">
        <div className="telegram__block">
          <h1 className='investors__look-for-title'>Что мы ищем?</h1>
            <div className="telegram__text-block">
                <p className="telegram__text-block-text gray-text-24 investors__look-for-gray-text">Мы открыты для стратегических инвестиций и партнерств, которые помогут масштабировать продукт и захватить международный рынок.</p>
            </div>
            <div className="telegram__description-block investors__look-for-description">
                <Image src="/images/telegram__man.svg" alt="telegram-man" width={400} height={540} className="telegram__man-image telegram__man-image1"/>
                <p className="telegram__description-block-text white-text-32 investors__look-for-text">
                <span className="yellow-text">📊 Этап: </span>
                MVP протестировано, есть первые пользователи и фидбек.<br></br><br></br>

                 <span className="yellow-text">🎯 Цель инвестиций: </span>
                 рост команды, маркетинг, выход на новые рынки.<br></br><br></br>

                  <span className="yellow-text">🔹 Формат сотрудничества: </span>Seed инвестиции, партнерские вложения.
                </p>
            </div>
        </div>
        </section>
      </div>





      <section className='investors__contact-with-us'>
        <h1 className='white-text-128 investors__contact-with-us-title'>свяжитесь <span className='yellow-text'>с нами</span></h1>
        <Questionnaire
        text="Инвестируйте в перспективный AI-стартап, который переворачивает рынок изучения языков."
        text2="или Заполните форму, расскажите о себе и укажите контактные данные."
        />
      </section>
      <section className='investors__telegram'>
        <Telegram></Telegram>
      </section>
    </div>
  </main>
    <Footer></Footer>
    </div>
  );
}