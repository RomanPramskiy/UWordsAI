import Image from 'next/image';
import "./style.css";
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="wrapper">
      <Header></Header>
      <main className="main">
      <div className="container">
          <div className="main__learn">
            <h1 className="main__learn-title">Изучай языки c <br></br>Uwords AI</h1>
          </div>
      </div>
      </main>
    <Footer></Footer>
    </div>
  );
}
