"use client";

import { useState } from "react";
import Link from "next/link"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
    <header className="header">
        <div className="container">
          <div className="header__inner">
          <Link href="#" className="logo-header-about">Uwords <span className="logo-header-about-yellow">AI</span></Link>
             <nav className={`header__links ${isOpen ? "hidden" : ""}`}>
                <Link href="/" className="header__link" style={{ color: '#DDFF53' }}>О проекте</Link>
                <Link href="/investors" className="header__link">инвесторам</Link>
                <Link href="/school" className="header__link">школам</Link>
                <Link href="/students" className="header__link">учащимся</Link>
                <Link href="/blog" className="header__link">Блог</Link>
            </nav>
        <Link href="#" className="header__button-download">скачать</Link>
        <div className={`header__lines ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
          <hr className="header__line"></hr>
          <hr className="header__line"></hr>
          <hr className="header__line"></hr>
        </div>
        </div>
    </div>
    <div className={`header__dropdown-menu ${isOpen ? "active" : ""}`}>
        <Link href="/" className="header__link header__link-dropdown">О проекте</Link>
        <Link href="/investors" className="header__link header__link-dropdown">инвесторам</Link>
        <Link href="/school" className="header__link header__link-dropdown">школам</Link>
        <Link href="/students" className="header__link header__link-dropdown">учащимся</Link>
        <Link href="/blog" className="header__link header__link-dropdown">Блог</Link>
        <Link href="#" className="header__button-download-dropdown">скачать</Link>
    </div>
</header>
    )
}

export default Header