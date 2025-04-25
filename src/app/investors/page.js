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





      <section className="investors__future">


        
        <div className="investors__invaste-In-future">
          <h1 className='white-text-128 investors__invaste-In-future-title'>Инвестируйте в будущее</h1>
           <Image src="/images/investors__invest-in-future-uwordsai.svg" alt="uwordsai" width={814} height={256} className="investors__invaste-In-future-image no-display-768"/>
           <Image src="/images/investors__uwordsai.svg" alt="uwordsai" width={814} height={256} className="investors__invaste-In-future-image investors__invaste-In-future-image-mobile"/>
           <p className='gray-text-24 investors__invaste-In-future-text'>Мы объединяем искусственный интеллект, анализ речи и геймификацию, создавая эффективную и захватывающую платформу для изучения иностранных языков.</p>
        </div>



        <div className="investors__invaste-In-future-block">
          <div className='colors__titles-block-right'>
          <h1 className='investors__market-title'>Растущий рынок EdTech</h1>
          </div>
            <div className='blocknote-block-position'>
          <Image src="/images/investors__market-woman.svg" alt="woman" width={445} height={560} className="investors__market-image"/>
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
        </div>




        <div className="investors__invaste-In-future-block">
        <div className='colors__titles-block-left'>
          <h1 className='investors__uniqe-tech-title'>Уникальная технология</h1>
        </div>
        <div className='blocknote-block-position no-display-1024'>
          <Image src="/images/investors__tech-man.svg" alt="man" width={400} height={537} className="investors__uniqe-tech-image"/>
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
                  { content: "Геймификация и персонализация – ", className: "blocknote-block-text" },
                  { content: "пользователи учат только релевантные слова.", className: "blocknote-bold-text" }
              ]}
            />
                      <BlocknoteRight 
                bgColor="#9DDADB" 
                text={[
                  { content: "Гибкие механики монетизации – ", className: "blocknote-bold-text" },
                  { content: "подписки, премиум-функции, B2B-партнерства.", className: "blocknote-block-text" }
              ]}
            />
            </div>


            <div className='blocknote-block-position blocknote-block-position-mobile'>
          <Image src="/images/investors__tech-man.svg" alt="man" width={400} height={537} className="investors__uniqe-tech-image"/>
            <BlocknoteLeft 
                bgColor="#9DDADB" 
                text={[
                  { content: "Гибкие механики монетизации – ", className: "blocknote-bold-text" },
                  { content: "подписки, премиум-функции, B2B-партнерства.", className: "blocknote-block-text" }
              ]}
            />
                      <BlocknoteCenter 
                bgColor="#FFCF77" 
                text={[
                  { content: "Геймификация и персонализация – ", className: "blocknote-block-text" },
                  { content: "пользователи учат только релевантные слова.", className: "blocknote-bold-text" }
              ]}
            />
                      <BlocknoteRight 
                bgColor="#EC7495" 
                text={[
                  { content: "ИИ-аналитика речи – ", className: "blocknote-block-text" },
                  { content: "мы первые, кто использует реальный язык пользователя для подбора слов.", className: "blocknote-bold-text" }
              ]}
            />
            </div>
        </div>




        <div className="investors__invaste-In-future-block">
        <div className='colors__titles-block-right'>
          <h1 className='investors__buisness-model-title'>Бизнес-модель с высоким потенциалом</h1>
        </div>
        <div className='blocknote-block-position no-display-1024'>
          <Image src="/images/investors__buisness-woman.svg" alt="woman" width={400} height={537} className="investors__buisness-model-image"/>
            <BlocknoteLeft 
                bgColor="#78E185" 
                text={[
                  { content: "Подписочная модель –", className: "blocknote-bold-text" },
                  { content: " долгосрочная выручка за счет регулярных платежей.", className: "blocknote-block-text" }
              ]}
            />
                      <BlocknoteCenter 
                bgColor="#E86BBB" 
                text={[
                  { content: "Корпоративные и образовательные лицензии –", className: "blocknote-bold-text" },
                  { content: " сотрудничество со школами и компаниями.", className: "blocknote-block-text" }
              ]}
            />
                      <BlocknoteRight 
                bgColor="#FDEA6B" 
                text={[
                  { content: "Реферальные и партнерские программы –", className: "blocknote-bold-text" },
                  { content: " органический рост через вовлеченность пользователей.", className: "blocknote-block-text" }
              ]}
            />
            </div>


            <div className='blocknote-block-position blocknote-block-position-mobile'>
          <Image src="/images/investors__buisness-woman.svg" alt="woman" width={400} height={537} className="investors__buisness-model-image"/>
            <BlocknoteLeft 
                bgColor="#78E185" 
                text={[
                  { content: "Подписочная модель –", className: "blocknote-bold-text" },
                  { content: " долгосрочная выручка за счет регулярных платежей.", className: "blocknote-block-text" }
              ]}
            />
                      <BlocknoteCenter 
                bgColor="#E86BBB" 
                text={[
                  { content: "Корпоративные и образовательные лицензии –", className: "blocknote-bold-text" },
                  { content: " сотрудничество со школами и компаниями.", className: "blocknote-block-text" }
              ]}
            />
                      <BlocknoteRight 
                bgColor="#FDEA6B" 
                text={[
                  { content: "Реферальные и партнерские программы –", className: "blocknote-bold-text" },
                  { content: " органический рост через вовлеченность пользователей.", className: "blocknote-block-text" }
              ]}
            />
            </div>
        </div>






        <div className="investors__look-for">
        <div className="telegram__block">
          <h1 className='investors__look-for-title'>Что мы ищем?</h1>
            <div className="telegram__text-block">
                <p className="telegram__text-block-text gray-text-24 investors__look-for-gray-text">Мы открыты для стратегических инвестиций и партнерств, которые помогут масштабировать продукт и захватить международный рынок.</p>
            </div>
                <Image src="/images/telegram__man.svg" alt="telegram-man" width={500} height={590} className="telegram__man-image telegram__man-image1"/>
            <div className="telegram__description-block investors__look-for-description">
                <div className='investors__look-for-description-inner'>
            <Image src="/images/investors__look-for-blot.svg" alt="telegram-man" width={200} height={200} className="investors__blot"/>
                <p className="telegram__description-block-text white-text-32 investors__look-for-text">
                  <span className='investors__look-for-text-indent-1'>
                <span className="yellow-text">📊 Этап: </span>
                MVP протестировано, есть первые пользователи и фидбек.<br></br><br></br>
                  </span>

                <span className='investors__look-for-text-indent-2'>
                 <span className="yellow-text">🎯 Цель инвестиций: </span>
                 рост команды, маркетинг, выход на новые рынки.<br></br><br></br>
                </span>

                 <span className='investors__look-for-text-indent-3'>
                  <span className="yellow-text">🔹 Формат сотрудничества: </span>Seed инвестиции, партнерские вложения.
                 </span>
                </p>
                </div>
            </div>
        </div>
        </div>
        </section>
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