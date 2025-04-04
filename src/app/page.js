"use client";

import Image from 'next/image';
import Link from "next/link"
import "./style.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Telegram from './components/Telegram';
import Slider from './components/Slider';
import BlocknoteLeft from './components/BlocknoteLeft';
import BlocknoteCenter from './components/BlocknoteCenter';
import BlocknoteRight from './components/BlocknoteRight';
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const rowLeft = () => ({
  animate: {
    x: ["0%", "-100%"],
    transition: { repeat: Infinity, repeatType: "loop", duration: 100, ease: "linear" }
  }
});
const rowRight = () => ({
  animate: {
    x: ["-100%", "0%"],
    transition: { repeat: Infinity, repeatType: "loop", duration: 100, ease: "linear" }
  }
});

export default function Home() {
  return (
    <div className="wrapper">
      <Header></Header>
      <main className="main">
      <div className="container">






          <section className="main__learn">
            <h1 className="black-text-128 main__learn-title">Изучай языки c <br></br>Uwords AI</h1>
            <Image src="/images/main__learn-woman.svg" alt="woman" width={235} height={362} className="main__learn-image-woman"></Image>
            <div className='main__learn-text-block'>
            <p className="main__learn-text">Учите слова легко и эффективно с<br></br> нашим умным ИИ.</p>
            </div>
            <div className="main__learn-rating-block">
            <div className='main__learn-rating-block-first'>
            <p className="main__learn-rating-pink-text">4.9 rating</p>
            <div className='main__learn-rating-block-stars'>
              <Image src="/images/main__learn-star.svg" alt="star" width={56} height={56} className="main__learn-rating-block-star"></Image>
              <Image src="/images/main__learn-star.svg" alt="star" width={56} height={56} className="main__learn-rating-block-star"></Image>
              <Image src="/images/main__learn-star.svg" alt="star" width={56} height={56} className="main__learn-rating-block-star"></Image>
              <Image src="/images/main__learn-star.svg" alt="star" width={56} height={56} className="main__learn-rating-block-star"></Image>
              <Image src="/images/main__learn-star.svg" alt="star" width={56} height={56} className="main__learn-rating-block-star"></Image>
            </div>
            </div>
                <div className='main__learn-rating-block-users-trust'>
              <Image src="/images/main__learn-3-icons.svg" alt="3-icons" width={112} height={56} className="main__learn-rating-block-3-icons"></Image>
                <div className='main__learn-rating-block-users-trust-text'>
              <p className="main__learn-rating-pink-text">+102 k</p>
              <p className="main__learn-rating-pink-text-small">пользователей<br></br> нам доверяют</p>
                </div>
                </div>
            </div>
            <Image src="/images/main__learn-smartphone.svg" alt="smartphone" width={940} height={900} className="main__learn-smartphone"></Image>
          </section>






          <section className="main__analyzator">
          <Image src="/images/main__analyzator-flexible-words.svg" alt="words" width={1440} height={800} className="main__analyzator-flexible-words-image"></Image>
            <div className="main__analyzator-download">
              <Link className='main__analyzator-download-link' href="#">
              <Image src="/images/main__analyzator-google-play.svg" alt="google-play" width={270} height={80} className="main__analyzator-download-image"></Image>
              </Link>
              <Link className='main__analyzator-download-link' href="#">
              <Image src="/images/main__analyzator-app-store.svg" alt="app-store" width={270} height={80} className="main__analyzator-download-image"></Image>
              </Link>
              <Link className='main__analyzator-download-link' href="#">
              <Image src="/images/main__analyzator-rustore.svg" alt="rustore" width={270} height={80} className="main__analyzator-download-image"></Image>
              </Link>

            </div>
              <div className='main__analyzator-bottom'>
              <Image src="/images/main__analyzator-smartphone.svg" alt="smartphone" width={800} height={970} className="main__analyzator-smartphone"></Image>
              <div className='main__analyzator-bottom-text-block'>     
              <h1 className='main__analyzator-bottom-title'><span className='main__analyzator-aquamarine'>анализатор речи</span> и<br></br> <span className='main__analyzator-yellow'>персонализированный<br></br>алгоритм</span>,</h1>
              <p className='gray-text-24 main__analyzator-bottom-text'>чтобы подбирать слова, которые<br></br> реально нужны именно вам.</p>
              </div>
              </div>
          </section>






          <section className="main__innovations">
          <Image src="/images/main__innovations-blot-top.svg" alt="blot" width={375} height={255} className="main__innovations-top-blot"></Image>
            <div className='main__innovations-introduction'>
              <h1 className='white-text-128 main__innovations-introduction-title'>Инновации в</h1>
              <p className='gray-text-24 main__innovations-introduction-text'>В Uwords AI обучение — это<br></br> игровая система, которая<br></br> даёт 100% результат в<br></br> кратчайшие сроки 🚀</p>
              <Image src="/images/main__innovations-education.svg" alt="education" width={870} height={200} className="main__innovations-education"></Image>
            </div>
            <div className='blocknote-block-position'>
                <BlocknoteLeft
                 text={[
                  { content: "Игровые вызовы и ", className: "blocknote-block-text" },
                  { content: "мотивация", className: "blocknote-block-text" }
              ]}
                 bgColor={"#8FA7DF"}
                /> 
                <BlocknoteCenter
                                 text={[
                                  { content: "Алгоритм адаптируется ", className: "blocknote-block-text" },
                                  { content: "под вас", className: "blocknote-block-text" }
                              ]}
                 bgColor={"#FDEA6B"}
                /> 
                <BlocknoteRight
                                 text={[
                                  { content: "Четкая система ", className: "blocknote-block-text" },
                                  { content: "достижений", className: "blocknote-block-text" }
                              ]}
                 bgColor={"#DB79E2"}
                /> 
              </div>
            <div className='main__innovations-remembers'>
              <p className='white-text-32 main__innovations-remembers-text2'><span className='yellow-text'>Искусственный интеллект запоминает,</span><br></br> какие слова вы используете в вашей<br></br> повседневной речи,</p>
              <div className='main__innovations-block-image main__innovations-remembers-pink-block'>
              <Image src="/images/main__innovations-man.svg" alt="man" width={300} height={400} className="main__innovations-block-blocknote-image"></Image>
              </div>
              <div className='main__innovations-remembers-text-block'>
                <p className='white-text-32 main__innovations-remembers-text'><span className='yellow-text'>Искусственный интеллект запоминает,</span><br></br> какие слова вы используете в вашей<br></br> повседневной речи,</p>
              </div>
            </div>
            <div className='main__innovations-offer'>
              <div className='main__innovations-offer-text-block'>
                <p className='white-text-32 main__innovations-offer-text'>и предлагает их для изучения на<br></br> иностранном языке, <span className='yellow-text'>превращая обучение<br></br> в естественный и эффективный процесс.</span></p>
              </div>
            <div className='main__innovations-block-image main__innovations-offer-yellow-block'>
              <Image src="/images/main__innovations-woman.svg" alt="woman" width={300} height={400} className="main__innovations-block-blocknote-image"></Image>
              </div>
            </div>
            <Image src="/images/main__innovations-blot-bottom.svg" alt="blot" width={390} height={310} className="main__innovations-blot-bottom"></Image>
          </section>








          <section className="main__specials">
            <h1 className='main__specials-title-pink'>Специальное</h1>
            <h1 className='white-text-128 main__specials-title-white'>предложение</h1>
            <h1 className='white-text-128 main__specials-title-white2'>наши</h1>
            <h1 className='main__specials-title-pink main__specials-title-white3'>программы</h1>
            <div className='main__specials-images'>
              <div className='main__specials-images-block'>
              <Image src="/images/main__specials-pink-circle.svg" alt="circle" width={400} height={358} className="main__specials-images-circle-image"></Image>
              <Link href="#" className='main__specials-images-link' onMouseEnter={(e) => e.currentTarget.querySelector("img").src = "/images/main__specials-students-yellow.svg"} onMouseLeave={(e) => e.currentTarget.querySelector("img").src = "/images/main__specials-students.svg"}><Image src="/images/main__specials-students.svg" alt="students" width={420} height={112} className="main__specials-images-button-image"></Image> </Link>
              </div>
              <div className='main__specials-images-block'>
              <Image src="/images/main__specials-green-circle.svg" alt="circle" width={400} height={358} className="main__specials-images-circle-image"></Image>
              <Link href="#" className='main__specials-images-link' onMouseEnter={(e) => e.currentTarget.querySelector("img").src = "/images/main__specials-schools-yellow.svg"} onMouseLeave={(e) => e.currentTarget.querySelector("img").src = "/images/main__specials-schools.svg"}><Image src="/images/main__specials-schools.svg" alt="schools" width={420} height={112} className="main__specials-images-button-image"></Image></Link>
              </div>
              <div className='main__specials-images-block'>
              <Image src="/images/main__specials-yellow-circle.svg" alt="circle" width={400} height={358} className="main__specials-images-circle-image"></Image>
              <Link href="#" className='main__specials-images-link' onMouseEnter={(e) => e.currentTarget.querySelector("img").src = "/images/main__specials-investors-yellow.svg"} onMouseLeave={(e) => e.currentTarget.querySelector("img").src = "/images/main__specials-investors.svg"}><Image src="/images/main__specials-investors.svg" alt="investors" width={420} height={120} className="main__specials-images-button-image"></Image></Link>
              </div>
            </div>
          </section>







          <section className="main__telegram">
              <Telegram></Telegram>
          </section>









          <section className="main__smartphone">
          <Image src="/images/main__smartphone-smartphone.svg" alt="smartphone" width={1440} height={850} className="main__smartphone-big-image"></Image>

            <div className='main__smartphone-block'>
            <motion.div className="row"
                animate={{ x: ["-100%", "0%"] }} 
                transition={{ repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" }}
             >
    
              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#302F2E" }}>
              <Image src="/images/main__smartphone-sound-white.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title main__smartphone-block-title-white'>art</h2>
                <p className='main__smartphone-block-text'>искусство</p>
               <Image src="/images/main__smartphone-art.png" alt="art" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#E86BBB" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>present</h2>
                <p className='main__smartphone-block-text'>подарок</p>
               <Image src="/images/main__smartphone-present.png" alt="present" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#FFCF77" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>glasses</h2>
                <p className='main__smartphone-block-text'>очки</p>
               <Image src="/images/main__smartphone-glasses.png" alt="glasses" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#9DDADB" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>shop</h2>
                <p className='main__smartphone-block-text'>магазин</p>
               <Image src="/images/main__smartphone-shop.png" alt="shop" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>
            </motion.div>
            </div>


            <div className='main__smartphone-block'>
            <motion.div className="row" 
                            animate={{ x: ["-100%", "0%"] }} 
                            transition={{ repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" }}
            >
            <div className='main__smartphone-block-inner' style={{ backgroundColor: "#FDEA6B" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>rocket</h2>
                <p className='main__smartphone-block-text'>ракета</p>
               <Image src="/images/main__smartphone-rocket.png" alt="rocket" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#78E185" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>Apple</h2>
                <p className='main__smartphone-block-text'>яблоко</p>
               <Image src="/images/main__smartphone-apple.png" alt="apple" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner main__smartphone-block-inner-white' style={{ backgroundColor: "#302F2E" }}>
              <Image src="/images/main__smartphone-sound-white.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title main__smartphone-block-title-white'>Orange</h2>
                <p className='main__smartphone-block-text'>Апельсин</p>
               <Image src="/images/main__smartphone-orange.png" alt="orange" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#DB79E2" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>Notebook</h2>
                <p className='main__smartphone-block-text'>Блокнот</p>
               <Image src="/images/main__smartphone-notebook.png" alt="notebook" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>
            </motion.div>
            </div>

            
            <div className='main__smartphone-block'>
            <motion.div className="row" animate={{ x: ["0%", "-50%"] }} 
                transition={{ repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" }}
            >
            <div className='main__smartphone-block-inner main__smartphone-block-inner-white' style={{ backgroundColor: "#302F2E" }}>
              <Image src="/images/main__smartphone-sound-white.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title main__smartphone-block-title-white'>balloon</h2>
                <p className='main__smartphone-block-text'>шарик</p>
               <Image src="/images/main__smartphone-balloon.png" alt="balloon" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#8FA7DF" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>Laptop</h2>
                <p className='main__smartphone-block-text'>ноутбук</p>
               <Image src="/images/main__smartphone-laptop.png" alt="laptop" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#E78276" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>lamp</h2>
                <p className='main__smartphone-block-text'>лампа</p>
               <Image src="/images/main__smartphone-lamp.png" alt="lamp" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#EC7495" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>dress</h2>
                <p className='main__smartphone-block-text'>платье</p>
               <Image src="/images/main__smartphone-dress.png" alt="dress" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>





              <div className='main__smartphone-block-inner main__smartphone-block-inner-white' style={{ backgroundColor: "#302F2E" }}>
              <Image src="/images/main__smartphone-sound-white.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title main__smartphone-block-title-white'>balloon</h2>
                <p className='main__smartphone-block-text'>шарик</p>
               <Image src="/images/main__smartphone-balloon.png" alt="balloon" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#8FA7DF" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>Laptop</h2>
                <p className='main__smartphone-block-text'>ноутбук</p>
               <Image src="/images/main__smartphone-laptop.png" alt="laptop" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#E78276" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>lamp</h2>
                <p className='main__smartphone-block-text'>лампа</p>
               <Image src="/images/main__smartphone-lamp.png" alt="lamp" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#EC7495" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>dress</h2>
                <p className='main__smartphone-block-text'>платье</p>
               <Image src="/images/main__smartphone-dress.png" alt="dress" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>

            </motion.div>
            </div>


            <div className='main__smartphone-block'>
            <motion.div className="row" 
                            animate={{ x: ["0%", "100%"] }} 
                            transition={{ repeat: Infinity, repeatType: "loop", duration: 10, ease: "linear" }}
            >
            <div className='main__smartphone-block-inner' style={{ backgroundColor: "#9FD8E5" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>bag</h2>
                <p className='main__smartphone-block-text'>сумка</p>
               <Image src="/images/main__smartphone-bag.png" alt="bag" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#FDEA6B" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>love</h2>
                <p className='main__smartphone-block-text'>любовь</p>
               <Image src="/images/main__smartphone-love.png" alt="love" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#FFCF77" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>lipstick</h2>
                <p className='main__smartphone-block-text'>помада</p>
               <Image src="/images/main__smartphone-lipstick.png" alt="lipstick" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner main__smartphone-block-inner-white' style={{ backgroundColor: "#302F2E" }}>
              <Image src="/images/main__smartphone-sound-white.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title main__smartphone-block-title-white'>T-shirt</h2>
                <p className='main__smartphone-block-text'>футболка</p>
               <Image src="/images/main__smartphone-t-shirt.png" alt="t-shirt" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>


              <div className='main__smartphone-block-inner' style={{ backgroundColor: "#9DDADB" }}>
              <Image src="/images/main__smartphone-sound-black.svg" alt="sound" width={50} height={50} className="main__smartphone-sound-image"></Image>
                <h2 className='main__smartphone-block-title'>shop</h2>
                <p className='main__smartphone-block-text'>магазин</p>
               <Image src="/images/main__smartphone-shop.png" alt="shop" width={80} height={70} className="main__smartphone-association-image"></Image>
              </div>
            </motion.div>
            </div>
          </section>








          <section className="main__blog">
            <h1 className='white-text-128 main__blog-title'>БЛОГ</h1>
            <div className='main__blog-text-block'>
              <p className='gray-text-24 main__blog-text'>Новые идеи и полезные советы<br></br> для изучения английского с AI<br></br> от нашей команды 👪</p>
              <Link href="/blog" className="white-text-32 main__blog-link">перейти в блог</Link>
              <Slider></Slider>
              <Link href="/blog" className="white-text-32 main__blog-link2">перейти в блог</Link>
            </div>
          </section>
      </div>
      </main>
    <Footer></Footer>
    </div>
  );
}
