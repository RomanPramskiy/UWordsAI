import Image from 'next/image';
import "./style.css";

export default function Home() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="header__inner">
        <a href="#" className="logo-header-about">Uwords <span className="logo-header-about-yellow">AI</span></a>
        <div className="header__links">
        <a href="#" className="header__link" style={{ color: '#DDFF53' }}>О проекте</a>
        <a href="#" className="header__link">инвесторам</a>
        <a href="#" className="header__link">школам</a>
        <a href="#" className="header__link">учащимся</a>
        <a href="#" className="header__link">Блог</a>
        </div>
        <a href="#" className="header__button-download">скачать</a>
        <div className="header__lines">
          <hr className="header__line"></hr>
          <hr className="header__line"></hr>
          <hr className="header__line"></hr>
        </div>
          </div>
        </div>
      </header>
      <main className="main">
      <div className="container">
          <div className="main__about-yellow-block">
            <h1 className="main__about-yellow-block-title">Изучай языки c <br></br>Uwords AI</h1>
          </div>
      </div>
      </main>
      <footer className="footer bg-black text-white py-10 px-6 md:px-16">
      <div className="container">
      <Image src="/images/footer-form.svg" alt="Instagram" width={1200} height={555} className="footer__social-image1"/>
          <h1 className="footer__title">let’s Talk</h1>
          <Image src="/images/woman-footer.svg" alt="Instagram" width={460} height={399} className="footer__social-image1"/>
          <div className="footer__social-links">
            <a href="#" className="footer__social-link"><Image src="/images/instagram-footer.svg" alt="Instagram" width={40} height={40} className="footer__social-image"/></a>
            <a href="#" className="footer__social-link"><Image src="/images/telegram-footer.svg" alt="Instagram" width={40} height={40} className="footer__social-image"/></a>
            <a href="#" className="footer__social-link"><Image src="/images/vkontakte-footer.svg" alt="Instagram" width={40} height={40} className="footer__social-image"/></a>
            <a href="#" className="footer__social-link"><Image src="/images/youtube-footer.svg" alt="Instagram" width={40} height={40} className="footer__social-image"/></a>
          </div>
            <div className="footer__links">
              <a href="#" className="footer__link">о нас</a>
              <a href="#" className="footer__link">об ИИ</a>
              <a href="#" className="footer__link">скачать</a>
              <a href="#" className="footer__link">блог</a>
            </div>

            <div className="footer__links">
              <a href="#" className="footer__link">инвесторам</a>
              <a href="#" className="footer__link">школам и преподавателям</a>
              <a href="#" className="footer__link">студентам и школьникам</a>
              <a href="#" className="footer__link">команда</a>
            <a href="#" className="footer__link-mail">uwords.app@mojo.com</a>
            </div>
      </div>
      </footer>
    </div>
  );
}
