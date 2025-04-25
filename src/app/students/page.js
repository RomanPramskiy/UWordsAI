import Image from 'next/image';
import "../style.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Questionnaire from '../components/Questionnaire';
import Telegram from '../components/Telegram';

export default function students() {
  return (
    <div className="wrapper">
      <Header></Header>
  <main className="main">
    <div className="container">


      <section className="students__for-students">


        <div className="students__for-free">
          <h1 className='black-text-128 students__for-free-title'>школьникам и
          студентам</h1>
          <p className='students__for-free-text'>🎓 Учите английский бесплатно 3 месяца – и получайте скидку 50% на 9 месяцев!</p>
          <Image src="/images/for-free-mobile.svg" alt="free" width={900} height={500} className="students__for-free-image investors__invaste-In-future-image-mobile"/>
          <Image src="/images/students__for-free-free.svg" alt="free" width={900} height={500} className="students__for-free-image no-display-768"/>
        </div>



          <Image src="/images/students__opportunity-man-reverse.svg" alt="free" width={445} height={560} className="students__opportunity-man1"/>
        <div className="students__opportunity">
          <div className='students__opportunity-images-block'>
          <Image src="/images/students__opportunity-blot.svg" alt="free" width={250} height={260} className="students__opportunity-blot"/>
          <Image src="/images/students__opportunity-man.svg" alt="free" width={445} height={560} className="students__opportunity-man"/>
          </div>
          <div className='students__opportunity-text-block'>
            <h2 className='students__opportunity-text-block-title'>мы даем возможность <span className='yellow-text'>каждому</span> получить качественное обучение</h2>
            <p className='white-text-32 students__opportunity-text-block-text'><span className='yellow-text'>🎁 3 месяца беплатно</span> – учите английский без ограничений.<br></br><br></br>
            <span className='yellow-text'>✅ Скидка 50% на 9 месяцев</span> – продолжайте обучение по специальной цене.</p>
          </div>
        </div>



        <div className="students__instruction">
        <Image src="/images/students__instruction-man.svg" alt="man" width={440} height={560} className="students__instruction-image-man"/>
        <Image src="/images/students__instruction-man-reverse.svg" alt="man" width={440} height={560} className="students__instruction-image-man-reverse"/>
        <Image src="/images/students__instruction-1.svg" alt="1" width={648} height={428} className="students__instruction-image-1"/>
        <Image src="/images/students__instruction-1-mobile.svg" alt="1" width={648} height={428} className="students__instruction-image-1-mobile"/>
        <Image src="/images/students__instruction-1-1.svg" alt="1-1" width={692} height={425} className="students__instruction-image-1-1"/>
        <Image src="/images/students__instruction-2.png" alt="2" width={530} height={570} className="students__instruction-image-2"/>
        <Image src="/images/students__instruction-3.svg" alt="3" width={764} height={424} className="students__instruction-image-3"/>
        <Image src="/images/students__instruction-3-mobile.png" alt="3" width={764} height={424} className="students__instruction-image-3 students__instruction-image-3-mobile"/>
        <Image src="/images/students__instruction-arrow-bottom.svg" alt="arrow" width={141} height={141} className="students__instruction-image-arrow-bottom"/>
        <Image src="/images/students__instruction-arrow-bottom-reverse.svg" alt="arrow" width={141} height={141} className="students__instruction-image-arrow-bottom-reverse"/>
        <Image src="/images/students__instruction-arrow-left.svg" alt="arrow" width={141} height={141} className="students__instruction-image-arrow-left"/>
        <Image src="/images/students__instruction-arrow-right.svg" alt="arrow" width={141} height={141} className="students__instruction-image-arrow-right"/>
        </div>
      </section>



      <section className="students__questionnaire">
        <h1 className='white-text-128 students__questionnaire-title'>заполни <span className='yellow-text'>анкету</span></h1>
      <Questionnaire
      text2="Давай познакомимся! Расскажи о себе и прикрепи к форме фото документа, чтобы начать учиться бесплатно👨‍🎓!"
      />
      </section>

    <section className='students__telegram'>
    <Telegram></Telegram>
    </section>
    </div>
  </main>
    <Footer></Footer>
    </div>
  );
}