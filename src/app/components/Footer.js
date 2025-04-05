"use client";

import Link from "next/link"
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Footer = () => {
  const pathname = usePathname();
  const school = pathname === "/school";
  const investors = pathname === "/investors";
  const blog = pathname === "/blog";
  const states = pathname === "/states";
  const [src, setSrc] = useState("/images/footer__background.svg");

  useEffect(() => {
    const updateImageSrc = () => {
      if (window.innerWidth <= 768) {
        setSrc("/images/footer__background-mobile.svg");
      } else {
        setSrc("/images/footer__background.svg");
      }
    };

    updateImageSrc();
    window.addEventListener("resize", updateImageSrc);

    return () => window.removeEventListener("resize", updateImageSrc);
  }, []);

    return (    
<footer className={`footer ${school ? "footer-white" : ""}`}>
<div className="container container__footer">
    <div className="footer__inner">
    <div className="footer__download-images">
        <Link href="#" className="footer__social-download-link"><Image src="/images/footer__google-play-school.svg" alt="google play" width={400} height={120} className="footer__social-download-image"/></Link>
        <Link href="#" className="footer__social-download-link"><Image src="/images/footer__app-store-school.svg" alt="app store" width={400} height={120} className="footer__social-download-image"/></Link>
        <Link href="#" className="footer__social-download-link"><Image src="/images/footer__rustore-school.svg" alt="ru store" width={400} height={120} className="footer__social-download-image"/></Link>
    </div>
    <h1 className=
    {`
      footer__title 
      ${school ? "footer__title-school" : ""}
      ${investors ? "footer__title-yellow" : ""}
      ${blog ? "footer__title-yellow" : ""}
      ${states ? "footer__title-yellow" : ""}
`}>let’s Talk</h1>
    <h1 className=
    {`
      footer__title-mobile 
      ${school ? "footer__title-school" : ""}
      ${investors ? "footer__title-yellow" : ""}
      ${blog ? "footer__title-yellow" : ""}
      ${states ? "footer__title-yellow" : ""}
`}>let’s<br></br> Talk</h1>
    <Image src="/images/footer__woman.svg" alt="footer-woman" width={460} height={399} className="footer__woman-image"/>
    <Image src="/images/footer__woman-reverse.svg" alt="footer-woman" width={460} height={399} className="footer__woman-image-reverse"/>
    <div className="footer__social-links">
      <div className="footer__social-links-column">
      <Link href="#" className="footer__social-link" onMouseEnter={(e) => e.currentTarget.querySelector("img").src = "/images/footer__instagram-white.svg"} onMouseLeave={(e) => e.currentTarget.querySelector("img").src = "/images/footer__instagram.svg"}><Image src="/images/footer__instagram.svg" alt="Instagram" width={60} height={60} className="footer__social-image"/></Link>
      <Link href="#" className="footer__social-link footer__social-link1" onMouseEnter={(e) => e.currentTarget.querySelector("img").src = "/images/footer__telegram-white.svg"} onMouseLeave={(e) => e.currentTarget.querySelector("img").src = "/images/footer__telegram.svg"}><Image src="/images/footer__telegram.svg" alt="Telegram" width={60} height={60} className="footer__social-image"/></Link>
      </div>
      <div className="footer__social-links-column">
      <Link href="#" className="footer__social-link" onMouseEnter={(e) => e.currentTarget.querySelector("img").src = "/images/footer__vkontakte-white.svg"} onMouseLeave={(e) => e.currentTarget.querySelector("img").src = "/images/footer__vkontakte.svg"}><Image src="/images/footer__vkontakte.svg" alt="Vkontakte" width={60} height={60} className="footer__social-image"/></Link>
      <Link href="#" className="footer__social-link footer__social-link1" onMouseEnter={(e) => e.currentTarget.querySelector("img").src = "/images/footer__youtube-white.svg"} onMouseLeave={(e) => e.currentTarget.querySelector("img").src = "/images/footer__youtube.svg"}><Image src="/images/footer__youtube.svg" alt="Youtube" width={60} height={60} className="footer__social-image"/></Link>
      </div>
    </div>
        <div className="footer__links">
      <div className="footer__links-inner footer__links-inner1">
        <Link href="/" className="footer__link">о нас</Link>
        <Link href="#" className="footer__link">об ИИ</Link>
        <Link href="#" className="footer__link">скачать</Link>
        <Link href="/blog" className="footer__link">блог</Link>
      </div>
      <div className="footer__links-inner">
        <Link href="/investors" className="footer__link">инвесторам</Link>
        <Link href="/school" className="footer__link">школам и преподавателям</Link>
        <Link href="/students" className="footer__link">студентам и школьникам</Link>
        <Link href="#" className="footer__link">команда</Link>
      </div>
        </div>
      <div className="footer__link-mail-block">
        <Link href="#" className="footer__link-mail">uwords.app@mojo.com</Link>
      </div>
    </div>
</div>
</footer>
    )
}

export default Footer
