import "../style.css";

export default function Home() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
        <a href="#" className="logo-header-about">Uwords <span className="logo-header-about-yellow">AI</span></a>
        <a href="#" className="header__link" style={{ color: '#DDFF53' }}>О проекте</a>
        <a href="#" className="header__link">инвесторам</a>
        <a href="#" className="header__link">школам</a>
        <a href="#" className="header__link">учащимся</a>
        <a href="#" className="header__link">Блог</a>
        <a href="#" className="header__button-download">скачать</a>
        </div>
      </header>
      <main className="main">
      <div className="container">

      </div>
      </main>
      <footer className="footer">
      <div className="container">

      </div>
      </footer>
    </div>
  );
}