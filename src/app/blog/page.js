"use client";

import Image from 'next/image';
import "../style.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogTab from '../components/BlogTab';
import Telegram from '../components/Telegram';
import { useState } from "react";

export default function blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const getPages = () => {
    if (totalPages <= 6) return Array.from({ length: totalPages }, (_, i) => i + 1);
  
    if (currentPage === 1) return [1, 2, 3, "...", totalPages];
    if (currentPage === 2) return [1, 2, 3, 4, "...", totalPages];
  
    if (currentPage === totalPages) return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    if (currentPage === totalPages - 1) return [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };
  return (
    <div className="wrapper">
      <Header></Header>
  <main className="main">
    <div className="container">


      <section className="blog__title">
        <h1 className='white-text-128 blog__title-title'>Блог</h1>
      </section>

      <section className="blog__sort">
        <div className='blog__sort-first'>
      <div className='blog__sort-top'>
        <div className='blog__sort-block'>
          <button className='blog__sort-button'>
          <h1 className='blog__sort-title'>все статьи</h1>
          <p className='yellow-text blog__sort-text'>15</p>
          </button>
        </div>
        <div className='blog__sort-block'>
        <button className='blog__sort-button'>
          <h1 className='blog__sort-title'>английский язык</h1>
          <p className='yellow-text blog__sort-text'>5</p>
        </button>
        </div>
      </div>
      <div className='blog__sort-bottom'>
        <div className='blog__sort-block'>
        <button className='blog__sort-button'>
          <h1 className='blog__sort-title'>AI</h1>
          <p className='yellow-text blog__sort-text'>2</p>
        </button>
        </div>
        <div className='blog__sort-block'>
        <button className='blog__sort-button'>
          <h1 className='blog__sort-title'>обучение</h1>
          <p className='yellow-text blog__sort-text'>3</p>
        </button>
        </div>
        <div className='blog__sort-block'>
        <button className='blog__sort-button'>
          <h1 className='blog__sort-title'>лайфхаки</h1>
          <p className='yellow-text blog__sort-text'>5</p>
        </button>
        </div>
      </div>
        </div>



      <div className='blog__sort-mobile'>

        <div className='blog__sort-block-states'>
        <div className='blog__sort-block'>
          <h1 className='blog__sort-title'>все статьи</h1>
          <p className='yellow-text blog__sort-text'>15</p>
        </div>
        </div>

    <div className='blog__sort-block-english'>
    <div className='blog__sort-block'>
          <h1 className='blog__sort-title'>английский язык</h1>
          <p className='yellow-text blog__sort-text'>5</p>
        </div>

        <div className='blog__sort-block'>
          <h1 className='blog__sort-title'>AI</h1>
          <p className='yellow-text blog__sort-text'>2</p>
        </div>
      </div>
      <div className='blog__sort-learn'>
        <div className='blog__sort-block'>
          <h1 className='blog__sort-title'>обучение</h1>
          <p className='yellow-text blog__sort-text'>3</p>
        </div>


        <div className='blog__sort-block'>
          <h1 className='blog__sort-title'>лайфхаки</h1>
          <p className='yellow-text blog__sort-text'>5</p>
        </div>
        
      </div>
    </div>
      </section>




      <section className="blog__tabs">
        <div className='blog__tabs-row'>
        <BlogTab blogImage="/images/main__blog-first.svg" text={"Как ИИ помогает учить английский эффективнее?"}/>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        </div>
        <div className='blog__tabs-row'>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        <BlogTab blogImage="/images/main__blog-first.svg" text={"Как ИИ помогает учить английский эффективнее?"}/>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        </div>
        <div className='blog__tabs-row'>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        <BlogTab blogImage="/images/main__blog-first.svg" text={"Как ИИ помогает учить английский эффективнее?"}/>
        </div>
        <div className='blog__tabs-row'>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        </div>
        <div className='blog__tabs-row'>
        <BlogTab blogImage="/images/main__blog-first.svg" text={"Как ИИ помогает учить английский эффективнее?"}/>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        </div>
      </section>


      <section className="blog__tabs-adaptive">
        <div className='blog__tabs-row'>
        <BlogTab blogImage="/images/main__blog-first.svg" text={"Как ИИ помогает учить английский эффективнее?"}/>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        </div>
        <div className='blog__tabs-row'>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        </div>
        <div className='blog__tabs-row'>
        <BlogTab blogImage="/images/main__blog-first.svg" text={"Как ИИ помогает учить английский эффективнее?"}/>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        </div>
        <div className='blog__tabs-row'>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        </div>
        <div className='blog__tabs-row'>
        <BlogTab blogImage="/images/main__blog-first.svg" text={"Как ИИ помогает учить английский эффективнее?"}/>
        <BlogTab blogImage="/images/main__blog-second.svg" text={"5 лучших способов выучить английский с AI"}/>
        </div>
      </section>


      <section className="blog__switch">
      <div className="blog__switch-pagination-container">
        <div className='blog__switch-pagination-inner'>
      <button className="blog__switch-pagination-button" onClick={() => handlePageClick(Math.max(1, currentPage - 1))}>
        <Image src="/images/blog__switch-arrow-left.svg" alt='arrow' width={60} height={60} className='blog__switch-arrow-left'></Image>
      </button>
      {getPages().map((page, index) => (
        <button
          key={index}
          className={`blog__switch-pagination-page ${currentPage === page ? "active" : ""}`}
          onClick={() => typeof page === "number" && handlePageClick(page)}
        >
          {page}
        </button>
      ))}
      <button className="blog__switch-pagination-button" onClick={() => handlePageClick(Math.min(totalPages, currentPage + 1))}>
      <Image src="/images/blog__switch-arrow-right.svg" alt='arrow' width={60} height={60} className='blog__switch-arrow-right'></Image>
      </button>
        </div>
    </div>
      </section>
      <section className='blog__telegram'>
      <Telegram></Telegram>
      </section>
    </div>
  </main>
    <Footer></Footer>
    </div>
  );
}