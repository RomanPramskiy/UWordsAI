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
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Home() {

  const blocks = [
    {
      backgroundColor: "#302F2E",
      soundImage: "/images/main__smartphone-sound-white.svg",
      titleClasses: "main__smartphone-block-title main__smartphone-block-title-white",
      blockClasses: "main__smartphone-block-inner main__smartphone-block-inner-white",
      title: "art",
      text: "искусство",
      image: "/images/main__smartphone-art.png",
      alt: "art"
    },
    {
      backgroundColor: "#E86BBB",
      soundImage: "/images/main__smartphone-sound-black.svg",
      titleClasses: "main__smartphone-block-title",
      blockClasses: "main__smartphone-block-inner",
      title: "present",
      text: "подарок",
      image: "/images/main__smartphone-present.png",
      alt: "present"
    },
    {
      backgroundColor: "#FFCF77",
      soundImage: "/images/main__smartphone-sound-black.svg",
      titleClasses: "main__smartphone-block-title",
      blockClasses: "main__smartphone-block-inner",
      title: "glasses",
      text: "очки",
      image: "/images/main__smartphone-glasses.png",
      alt: "glasses"
    },
    {
      backgroundColor: "#9DDADB",
      soundImage: "/images/main__smartphone-sound-black.svg",
      titleClasses: "main__smartphone-block-title",
      blockClasses: "main__smartphone-block-inner",
      title: "shop",
      text: "магазин",
      image: "/images/main__smartphone-shop.png",
      alt: "shop"
    }
  ];
  const blocks2 = [
    {
      backgroundColor: "#FDEA6B",
      soundImage: "/images/main__smartphone-sound-black.svg",
      titleClasses: "main__smartphone-block-title",
      blockClasses: "main__smartphone-block-inner",
      title: "rocket",
      text: "ракета",
      image: "/images/main__smartphone-rocket.png",
      alt: "rocket"
    },
    {
      backgroundColor: "#78E185",
      soundImage: "/images/main__smartphone-sound-black.svg",
      titleClasses: "main__smartphone-block-title",
      blockClasses: "main__smartphone-block-inner",
      title: "Apple",
      text: "яблоко",
      image: "/images/main__smartphone-apple.png",
      alt: "apple"
    },
    {
      backgroundColor: "#302F2E",
      soundImage: "/images/main__smartphone-sound-white.svg",
      titleClasses: "main__smartphone-block-title main__smartphone-block-title-white",
      blockClasses: "main__smartphone-block-inner main__smartphone-block-inner-white",
      title: "Orange",
      text: "Апельсин",
      image: "/images/main__smartphone-orange.png",
      alt: "orange"
    },
    {
      backgroundColor: "#DB79E2",
      soundImage: "/images/main__smartphone-sound-black.svg",
      titleClasses: "main__smartphone-block-title",
      blockClasses: "main__smartphone-block-inner",
      title: "Notebook",
      text: "Блокнот",
      image: "/images/main__smartphone-notebook.png",
      alt: "notebook"
    }
  ];
  const blocks3 = [
    {
      backgroundColor: "#302F2E",
      soundImage: "/images/main__smartphone-sound-white.svg",
      titleClasses: "main__smartphone-block-title main__smartphone-block-title-white",
      blockClasses: "main__smartphone-block-inner main__smartphone-block-inner-white",
      title: "balloon",
      text: "шарик",
      image: "/images/main__smartphone-balloon.png",
      alt: "balloon"
    },
    {
      backgroundColor: "#8FA7DF",
      soundImage: "/images/main__smartphone-sound-black.svg",
      titleClasses: "main__smartphone-block-title",
      blockClasses: "main__smartphone-block-inner",
      title: "Laptop",
      text: "ноутбук",
      image: "/images/main__smartphone-laptop.png",
      alt: "Laptop"
    },
    {
      backgroundColor: "#E78276",
      soundImage: "/images/main__smartphone-sound-black.svg",
      titleClasses: "main__smartphone-block-title",
      blockClasses: "main__smartphone-block-inner",
      title: "lamp",
      text: "лампа",
      image: "/images/main__smartphone-lamp.png",
      alt: "lamp"
    },
    {
      backgroundColor: "#EC7495",
      soundImage: "/images/main__smartphone-sound-black.svg",
      titleClasses: "main__smartphone-block-title",
      blockClasses: "main__smartphone-block-inner",
      title: "dress",
      text: "платье",
      image: "/images/main__smartphone-dress.png",
      alt: "dress"
    }
  ];
  const blocks4 = [
    {
      backgroundColor: "#9FD8E5",
      soundImage: "/images/main__smartphone-sound-black.svg",
      titleClasses: "main__smartphone-block-title",
      blockClasses: "main__smartphone-block-inner",
      title: "bag",
      text: "сумка",
      image: "/images/main__smartphone-bag.png",
      alt: "bag"
    },
    {
      backgroundColor: "#FDEA6B",
      soundImage: "/images/main__smartphone-sound-black.svg",
      titleClasses: "main__smartphone-block-title",
      blockClasses: "main__smartphone-block-inner",
      title: "love",
      text: "любовь",
      image: "/images/main__smartphone-love.png",
      alt: "love"
    },
    {
      backgroundColor: "#FFCF77",
      soundImage: "/images/main__smartphone-sound-black.svg",
      titleClasses: "main__smartphone-block-title",
      blockClasses: "main__smartphone-block-inner",
      title: "lipstick",
      text: "помада",
      image: "/images/main__smartphone-lipstick.png",
      alt: "lipstick"
    },
    {
      backgroundColor: "#302F2E",
      soundImage: "/images/main__smartphone-sound-white.svg",
      titleClasses: "main__smartphone-block-title main__smartphone-block-title-white",
      blockClasses: "main__smartphone-block-inner main__smartphone-block-inner-white",
      title: "T-shirt",
      text: "футболка",
      image: "/images/main__smartphone-shop.png",
      alt: "T-shirt"
    }
  ];

  const getOffsetMultiplier = () => {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 375) return 1.55;
    if (screenWidth <= 768) return 1.55;
    if (screenWidth <= 1024) return 2.4;
    if (screenWidth <= 1440) return 1.8;
    if (screenWidth >= 1440) return 1.28;
  };
    const rowLeftRef = useRef(null);
    const rowLeft2Ref = useRef(null);
    const rowRightRef = useRef(null);
    const rowRight2Ref = useRef(null);
  
    useLayoutEffect(() => {
      const row = rowLeftRef.current;
      const row2 = rowLeft2Ref.current;
      if (!row) return;
  
      const multiplier = getOffsetMultiplier();
      const width = row.offsetWidth * multiplier;
  
      gsap.defaults({ repeat: -1, ease: "none" });
      gsap.fromTo(
        row,
        { x: 0 },
        { x: -width, duration: 20 }
      );
      gsap.defaults({ repeat: -1, ease: "none" });
      gsap.fromTo(
        row2,
        { x: 0 },
        { x: -width, duration: 20 }
      );
    }, []);
  
    useLayoutEffect(() => {
      const row = rowRightRef.current;
      const row2 = rowRight2Ref.current;
      if (!row) return;
  
      const multiplier = getOffsetMultiplier();
      const width = row.offsetWidth * multiplier;
  
      gsap.defaults({ repeat: -1, ease: "none" });
      gsap.fromTo(
        row,
        { x: -width },
        { x: 0, duration: 20 }
      );
      gsap.defaults({ repeat: -1, ease: "none" });
      gsap.fromTo(
        row2,
        { x: -width },
        { x: 0, duration: 20 }
      );
    }, []);




  return (
    <div className="wrapper">
      <Header></Header>
      <main className="main">
      <div className="container">






          <section className="main__learn">
            <h1 className="black-text-128 main__learn-title">Изучай языки c</h1>
            <h1 className="black-text-128 main__learn-title main__learn-title2">Uwords AI</h1>
            <Image src="/images/main__learn-woman.svg" alt="woman" width={235} height={362} className="main__learn-image-woman"></Image>
            <div className='main__learn-block-under'>
            <div className='main__learn-block-under-inner'>
            <div className='main__learn-text-block'>
            <p className="main__learn-text">Учите слова легко и эффективно с нашим умным ИИ.</p>
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
              <p className="main__learn-rating-pink-text-small">пользователей нам доверяют</p>
                </div>
                </div>
            </div>
            </div>
            </div>
          </section>
            






          <section className="main__analyzator-download">
            <Image src="/images/main__learn-smartphone.svg" alt="smartphone" width={940} height={900} className="main__learn-smartphone"></Image>
              <Link className='main__analyzator-download-link' href="#">
              <Image src="/images/main__analyzator-google-play.svg" alt="google-play" width={270} height={90} className="main__analyzator-download-image"></Image>
              </Link>
              <Link className='main__analyzator-download-link' href="#">
              <Image src="/images/main__analyzator-app-store.svg" alt="app-store" width={270} height={90} className="main__analyzator-download-image"></Image>
              </Link>
              <Link className='main__analyzator-download-link' href="#">
              <Image src="/images/main__analyzator-rustore.svg" alt="rustore" width={270} height={90} className="main__analyzator-download-image"></Image>
              </Link>
          </section>


          <section className="main__analyzator">
          <Image src="/images/main__analyzator-flexible-words.svg" alt="words" width={1440} height={800} className="main__analyzator-flexible-words-image"></Image>
              <div className='main__analyzator-bottom'>
              <Image src="/images/main__analyzator-smartphone.svg" alt="smartphone" width={800} height={970} className="main__analyzator-smartphone"></Image>
              <div className='main__analyzator-bottom-text-block'>     
              <h1 className='main__analyzator-bottom-title'><span className='main__analyzator-aquamarine'>анализатор речи</span> и <span className='main__analyzator-yellow'>персонализированный алгоритм</span>,</h1>
              <p className='gray-text-24 main__analyzator-bottom-text'>чтобы подбирать слова, которые реально нужны именно вам.</p>
              </div>
              </div>
          </section>






          <section className="main__innovations">
          <Image src="/images/main__innovations-blot-top.svg" alt="blot" width={375} height={255} className="main__innovations-top-blot"></Image>
            <div className='main__innovations-introduction'>
              <h1 className='white-text-128 main__innovations-introduction-title'>Инновации в</h1>
              <p className='gray-text-24 main__innovations-introduction-text'>В Uwords AI обучение — это игровая система, которая даёт 100% результат в кратчайшие сроки 🚀</p>
              <Image src="/images/main__innovations-education-mobile.svg" alt="education" width={870} height={300} className="main__innovations-education"></Image>
              <Image src="/images/main__innovations-education.svg" alt="education" width={870} height={300} className="main__innovations-education no-display-768"></Image>
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
              <p className='white-text-32 main__innovations-remembers-text2'><span className='yellow-text'>Искусственный интеллект запоминает,</span> какие слова вы используете в вашей повседневной речи,</p>
              <div className='main__innovations-block-image main__innovations-remembers-pink-block'>
              <Image src="/images/main__innovations-man.svg" alt="man" width={300} height={400} className="main__innovations-block-blocknote-image"></Image>
              </div>
              <div className='main__innovations-remembers-text-block'>
                <p className='white-text-32 main__innovations-remembers-text'><span className='yellow-text'>Искусственный интеллект запоминает,</span> какие слова вы используете в вашей повседневной речи,</p>
              </div>
            </div>
            <div className='main__innovations-offer'>
              <div className='main__innovations-offer-text-block'>
                <p className='white-text-32 main__innovations-offer-text'>и предлагает их для изучения на иностранном языке, <span className='yellow-text'>превращая обучение в естественный и эффективный процесс.</span></p>
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
            <h1 className='main__specials-title-pink2'>программы</h1>
            <div className='main__specials-images'>
              <div className='main__specials-images-block'>
              <Image src="/images/main__specials-pink-circle.svg" alt="circle" width={400} height={358} className="main__specials-images-circle-image"></Image>
              <Link href="/students" className='main__specials-images-link' onMouseEnter={(e) => e.currentTarget.querySelector("img").src = "/images/main__specials-students-yellow.svg"} onMouseLeave={(e) => e.currentTarget.querySelector("img").src = "/images/main__specials-students.svg"}><Image src="/images/main__specials-students.svg" alt="students" width={420} height={112} className="main__specials-images-button-image"></Image> </Link>
              </div>
              <div className='main__specials-images-block'>
              <Image src="/images/main__specials-green-circle.svg" alt="circle" width={400} height={358} className="main__specials-images-circle-image"></Image>
              <Link href="/school" className='main__specials-images-link' onMouseEnter={(e) => e.currentTarget.querySelector("img").src = "/images/main__specials-schools-yellow.svg"} onMouseLeave={(e) => e.currentTarget.querySelector("img").src = "/images/main__specials-schools.svg"}><Image src="/images/main__specials-schools.svg" alt="schools" width={420} height={112} className="main__specials-images-button-image"></Image></Link>
              </div>
              <div className='main__specials-images-block'>
              <Image src="/images/main__specials-yellow-circle.svg" alt="circle" width={400} height={358} className="main__specials-images-circle-image"></Image>
              <Link href="/investors" className='main__specials-images-link' onMouseEnter={(e) => e.currentTarget.querySelector("img").src = "/images/main__specials-investors-yellow.svg"} onMouseLeave={(e) => e.currentTarget.querySelector("img").src = "/images/main__specials-investors.svg"}><Image src="/images/main__specials-investors.svg" alt="investors" width={420} height={120} className="main__specials-images-button-image"></Image></Link>
              </div>
            </div>
          </section>







          <section className="main__telegram">
              <Telegram></Telegram>
          </section>







          <section className="main__smartphone">
          <Image src="/images/main__smartphone-smartphone.svg" alt="smartphone" width={1440} height={1010} className="main__smartphone-big-image"></Image>
          <div className="main__smartphone-block">
    <div className="main__smartphone-row row-left" ref={rowLeftRef}>
      {blocks.map((block, index) => (
        <div key={index} className={block.blockClasses} style={{ backgroundColor: block.backgroundColor }}>
            <Image src={block.soundImage} alt="sound" width={50} height={50} className="main__smartphone-sound-image"/>
          <h2 className={block.titleClasses}>{block.title}</h2>
          <p className="main__smartphone-block-text">{block.text}</p>
            <Image src={block.image} alt={block.alt} width={80} height={70} className="main__smartphone-association-image"/>
        </div>
      ))}
            {blocks.map((block, index) => (
        <div key={index} className={block.blockClasses} style={{ backgroundColor: block.backgroundColor }}>
            <Image src={block.soundImage} alt="sound" width={50} height={50} className="main__smartphone-sound-image"/>
          <h2 className={block.titleClasses}>{block.title}</h2>
          <p className="main__smartphone-block-text">{block.text}</p>
            <Image src={block.image} alt={block.alt} width={80} height={70} className="main__smartphone-association-image"/>
        </div>
      ))}
    </div>
    </div>


    <div className="main__smartphone-block">
    <div className="main__smartphone-row row-right" ref={rowRightRef}>
      {blocks2.map((block, index) => (
        <div key={index} className={block.blockClasses} style={{ backgroundColor: block.backgroundColor }}>
            <Image src={block.soundImage} alt="sound" width={50} height={50} className="main__smartphone-sound-image"/>
          <h2 className={block.titleClasses}>{block.title}</h2>
          <p className="main__smartphone-block-text">{block.text}</p>
            <Image src={block.image} alt={block.alt} width={80} height={70} className="main__smartphone-association-image"/>
        </div>
      ))}
            {blocks2.map((block, index) => (
        <div key={index} className={block.blockClasses} style={{ backgroundColor: block.backgroundColor }}>
            <Image src={block.soundImage} alt="sound" width={50} height={50} className="main__smartphone-sound-image"/>
          <h2 className={block.titleClasses}>{block.title}</h2>
          <p className="main__smartphone-block-text">{block.text}</p>
            <Image src={block.image} alt={block.alt} width={80} height={70} className="main__smartphone-association-image"/>
        </div>
      ))}
    </div>
    </div>


    
    <div className="main__smartphone-block">
    <div className="main__smartphone-row row-left" ref={rowLeft2Ref}>
      {blocks3.map((block, index) => (
        <div key={index} className={block.blockClasses} style={{ backgroundColor: block.backgroundColor }}>
            <Image src={block.soundImage} alt="sound" width={50} height={50} className="main__smartphone-sound-image"/>
          <h2 className={block.titleClasses}>{block.title}</h2>
          <p className="main__smartphone-block-text">{block.text}</p>
            <Image src={block.image} alt={block.alt} width={80} height={70} className="main__smartphone-association-image"/>
        </div>
      ))}
            {blocks3.map((block, index) => (
        <div key={index} className={block.blockClasses} style={{ backgroundColor: block.backgroundColor }}>
            <Image src={block.soundImage} alt="sound" width={50} height={50} className="main__smartphone-sound-image"/>
          <h2 className={block.titleClasses}>{block.title}</h2>
          <p className="main__smartphone-block-text">{block.text}</p>
            <Image src={block.image} alt={block.alt} width={80} height={70} className="main__smartphone-association-image"/>
        </div>
      ))}
    </div>
    </div>



    <div className="main__smartphone-block">
    <div className="main__smartphone-row row-right-big" ref={rowRight2Ref}>
      {blocks4.map((block, index) => (
        <div key={index} className={block.blockClasses} style={{ backgroundColor: block.backgroundColor }}>
            <Image src={block.soundImage} alt="sound" width={50} height={50} className="main__smartphone-sound-image"/>
          <h2 className={block.titleClasses}>{block.title}</h2>
          <p className="main__smartphone-block-text">{block.text}</p>
            <Image src={block.image} alt={block.alt} width={80} height={70} className="main__smartphone-association-image"/>
        </div>
      ))}
            {blocks4.map((block, index) => (
        <div key={index} className={block.blockClasses} style={{ backgroundColor: block.backgroundColor }}>
            <Image src={block.soundImage} alt="sound" width={50} height={50} className="main__smartphone-sound-image"/>
          <h2 className={block.titleClasses}>{block.title}</h2>
          <p className="main__smartphone-block-text">{block.text}</p>
            <Image src={block.image} alt={block.alt} width={80} height={70} className="main__smartphone-association-image"/>
        </div>
      ))}
    </div>
    </div>

</section>
 








          <section className="main__blog">
            <h1 className='white-text-128 main__blog-title'>БЛОГ</h1>
            <div className='main__blog-text-block'>
              <p className='gray-text-24 main__blog-text'>Новые идеи и полезные советы для изучения английского с AI от нашей команды 👪</p>
              <div className='main__blog-link-block main__blog-link-block1'>
              <Link href="/blog" className="white-text-32 main__blog-link">перейти в блог</Link>
              </div>
              <Slider></Slider>
              <div className='main__blog-link-block main__blog-link-block2'>
              <Link href="/blog" className="white-text-32 main__blog-link2">перейти в блог</Link>
              </div>
            </div>
          </section>
      </div>
      </main>
    <Footer></Footer>
    </div>
  );
}
