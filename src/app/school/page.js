'use client';

import Image from 'next/image';
import "../style.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Questionnaire from '../components/Questionnaire';
import Telegram from '../components/Telegram';
import BlocknoteLeft from '../components/BlocknoteLeft';
import BlocknoteCenter from '../components/BlocknoteCenter';
import BlocknoteRight from '../components/BlocknoteRight';

export default function school() {
  return (
    <div className="wrapper">
      <Header></Header>
  <main className="main">
    <div className="container">


      <section className="school__lecturer-and-schools">
        <div className="school__for-teachers">
          <h1 className='white-text-128 school__for-teachers-title'>преподавателям и<br className='br-display'></br>
          школам</h1>
         <Image src="/images/students__for-free-free.svg" alt="free" width={850} height={550} className="school__for-free-image no-display-768"/>
         <Image src="/images/for-free-mobile.svg" alt="free" width={850} height={550} className="school__for-free-image investors__invaste-In-future-image-mobile"/>
         <p className='gray-text-24 school__for-teachers-text'>👩‍🏫 Вы представитель онлайн школы или преподаете<br className='br-display'></br> индивидуально? <br className='br-display'></br>
         Свяжитесь с нами и попробуйте бесплатно 30 дней!</p>
        </div>



        <div className="school__interactive">
        <div className='colors__titles-block-left'>
          <h1 className='school__interactive-title'>Интерактивный инструмент для обучения</h1>
        </div>
          <div className='blocknote-block-position no-display-1024'>
          <Image src="/images/school__interactive-woman.svg" alt="free" width={480} height={530} className="school__interactive-image"/>
          <BlocknoteLeft 
                bgColor="#E86BBB" 
                text={[
                  { content: "Преподаватели могут использовать Uwords AI", className: "blocknote-block-text" },
                  { content: " в классах и домашних заданиях.", className: "blocknote-bold-text" }
              ]}
            />
                      <BlocknoteCenter 
                bgColor="#FDEA6B" 
                text={[
                  { content: "Анализатор речи помогает студентам", className: "blocknote-block-text" },
                  { content: " отрабатывать произношение и запоминать слова.", className: "blocknote-bold-text" }
              ]}
            />
                      <BlocknoteRight 
                bgColor="#8FA7DF" 
                text={[
                  { content: "Доступ к", className: "blocknote-block-text" },
                  { content: " персонализи-рованным подборкам слов", className: "blocknote-bold-text" },
                  { content: " для разных уровней и тематик..", className: "blocknote-block-text" }
              ]}
            />
          </div>


          <div className='blocknote-block-position blocknote-block-position-mobile'>
          <Image src="/images/school__interactive-woman.svg" alt="free" width={480} height={530} className="school__interactive-image"/>
          <BlocknoteLeft 
              bgColor="#8FA7DF" 
              text={[
                { content: "Доступ к", className: "blocknote-block-text" },
                { content: " персонализи-рованным подборкам слов", className: "blocknote-bold-text" },
                { content: " для разных уровней и тематик..", className: "blocknote-block-text" }
            ]}
            />
                      <BlocknoteCenter 

              bgColor="#E86BBB" 
              text={[
                { content: "Преподаватели могут использовать Uwords AI", className: "blocknote-block-text" },
                { content: " в классах и домашних заданиях.", className: "blocknote-bold-text" }
            ]}
            />
                      <BlocknoteRight 
                bgColor="#FDEA6B" 
                text={[
                  { content: "Анализатор речи помогает студентам", className: "blocknote-block-text" },
                  { content: " отрабатывать произношение и запоминать слова.", className: "blocknote-bold-text" }
              ]}
            />
          </div>
        </div>



        <div className="school__specials">
        <div className='colors__titles-block-right'>
          <h1 className='school__specials-title'>Специальные условия</h1>
        </div>
          <div className='blocknote-block-position'>
          <Image src="/images/school__specials-man.svg" alt="free" width={480} height={530} className="school__specials-image"/>
          <BlocknoteLeft 
                bgColor="#DB79E2" 
                text={[
                  { content: "Групповой доступ", className: "blocknote-bold-text" },
                  { content: " с гибкой ценовой моделью для учебных заведений.", className: "blocknote-block-text" }
              ]}
            />
                      <BlocknoteCenter 
                bgColor="#FDEA6B" 
                text={[
                  { content: "Панель управления преподавателя –", className: "blocknote-block-text" },
                  { content: " отслеживание прогресса студентов.", className: "blocknote-bold-text" }
              ]}
            />
                      <BlocknoteRight 
                bgColor="#78E185" 
                text={[
                  { content: "Возможность ", className: "blocknote-block-text" },
                  { content: "добавления своих учебных материалов ", className: "blocknote-bold-text" },
                  { content: "в систему.", className: "blocknote-block-text" }
              ]}
            />
          </div>
        </div>



        <div className="school__exclusive">
        <div className='colors__titles-block-left'>
        <h1 className='school__exclusive-title'>Эксклюзивные бонусы для партнеров</h1>
        </div>
          <div className='blocknote-block-position no-display-1024'>
          <Image src="/images/school__exclusive-woman.svg" alt="free" width={480} height={530} className="school__exclusive-image"/>
          <BlocknoteLeft 
                bgColor="#8FA7DF" 
                text={[
                  { content: "Школы и преподаватели получают ", className: "blocknote-block-text" },
                  { content: "персональные скидки и расширенные функции.", className: "blocknote-bold-text" }
              ]}
            />
                      <BlocknoteCenter 
                bgColor="#E86BBB" 
                text={[
                  { content: "Анализатор речи ", className: "blocknote-bold-text" },
                  { content: "помогает студентам отрабатывать произношение и запоминать слова.", className: "blocknote-block-text" }
              ]}
            />
                      <BlocknoteRight 
                bgColor="#FDEA6B" 
                text={[
                  { content: "Возможность ", className: "blocknote-block-text" },
                  { content: "эксклюзивно публиковать курсы и упражнения ", className: "blocknote-bold-text" },
                  { content: "в нашем приложении.", className: "blocknote-block-text" }
              ]}
            />
        </div>


        <div className='blocknote-block-position blocknote-block-position-mobile'>
          <Image src="/images/school__exclusive-woman.svg" alt="free" width={480} height={530} className="school__exclusive-image"/>
          <BlocknoteLeft 
            bgColor="#FDEA6B" 
            text={[
              { content: "Возможность ", className: "blocknote-block-text" },
              { content: "эксклюзивно публиковать курсы и упражнения ", className: "blocknote-bold-text" },
              { content: "в нашем приложении.", className: "blocknote-block-text" }
          ]}
            />
                      <BlocknoteCenter 
               bgColor="#8FA7DF" 
               text={[
                 { content: "Школы и преподаватели получают ", className: "blocknote-block-text" },
                 { content: "персональные скидки и расширенные функции.", className: "blocknote-bold-text" }
             ]}
            />
                      <BlocknoteRight 
            bgColor="#E86BBB" 
            text={[
              { content: "Анализатор речи ", className: "blocknote-bold-text" },
              { content: "помогает студентам отрабатывать произношение и запоминать слова.", className: "blocknote-block-text" }
          ]}
            />
        </div>
        </div>


        <div className="school__our-programs">
          <h1 className='school__our-programs-main-title'><span className='school__our-programs-title-white'>наши </span>программы</h1>
          <div className='school__our-programs-partnerka'>
          <Image src="/images/main__smartphone-present.png" alt="present" width={105} height={110} className="school__our-programs-partnerka-image"/>
          <h2 className='school__our-programs-title'>партнерская программа</h2>
          <p className='school__our-programs-text'>Думаете дорого? Вовсе нет! Участвуйте в развитии Uwords AI и используйте весь функционал бесплатно.</p>
          </div>
          <div className='school__our-programs-ref'>
            <h2 className='school__our-programs-title'>Реферальная программа</h2>
            <p className='school__our-programs-text school__our-programs-text-ref'>Зарабатывайте и получайте бонусы за приглашение других школ и преподавателей в  Uwords AI.</p>
            <Image src="/images/school__our-programs-man.svg" alt="man" width={445} height={560} className="school__our-programs-ref-image"/>
          </div>
        </div>
      </section>


      <section className="school__questionnaire">
        <h1 className='school__questionnaire-title'>заполните анкету</h1>
        <h1 className='school__questionnaire-title2'>Свяжитесь с нами</h1>
        <Questionnaire
        text="Присоединяйтесь к нам! 📚"
        text2="или Заполните форму, расскажите о себе и укажите контактные данные, чтобы начать преподавать с помощью нашего приложения! 👨‍🏫"
        />
      </section>


      <section className="school__telegram">
        <Telegram></Telegram>
      </section>


    </div>
  </main>
    <Footer></Footer>
  </div>
  );
}
