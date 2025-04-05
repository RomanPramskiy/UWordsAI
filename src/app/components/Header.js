"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link"

const Header = () => {
    const pathname = usePathname();
    useEffect(() => {
        document.body.className = "";

        if (pathname === "/school") {
            document.body.classList.add("body__white");
        }
    }, [pathname]);
    const main = pathname === "/";
    const investors = pathname === "/investors";
    const school = pathname === "/school";
    const students = pathname === "/students";
    const blog = pathname === "/blog";
    const states = pathname === "/states";
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
    <header className="header">
        <div className="container container__header">
          <div className="header__inner">
          <Link href="/" className={`logo-header-about ${school ? "header__link-black-school-logo" : ""}`}>Uwords <span className={`logo-header-about-yellow ${school ? "header__link-black-school-logo" : ""}`}>AI</span></Link>
             <nav className={`header__links ${isOpen ? "hidden" : ""}`}>
                <Link href="/" className={`
                header__link 
                ${main ? "header__link-yellow" : ""}
                ${school ? "header__link-black-school" : ""}
                `}>О проекте</Link>
                <Link href="/investors" className={`header__link ${investors ? "header__link-yellow" : ""}
                ${school ? "header__link-black-school" : ""}
                `}>инвесторам</Link>
                <Link href="/school" className={`
                header__link 
                ${school ? "header__link-yellow-school" : ""}
                ${school ? "header__link-black-school" : ""}
                `}>школам</Link>
                <Link href="/students" className={`
                    header__link 
                    ${students ? "header__link-yellow" : ""}
                    ${school ? "header__link-black-school" : ""}
                    `}>учащимся</Link>
                <Link href="/blog" className={`
                    header__link 
                    ${blog ? "header__link-yellow" : ""}
                    ${school ? "header__link-black-school" : ""}
                    ${states ? "header__link-yellow" : ""}
                    `}>Блог</Link>
            </nav>
        <Link href="#" className={`header__button-download ${school ? "header__button-download-school" : ""}`}>скачать</Link>
        <div className={`header__lines 
            ${isOpen ? "active" : ""}
            ${school ? "header__lines-black" : ""}
            `} onClick={toggleMenu}>
          <hr className={`header__line ${school ? "header__line-black" : ""}`}></hr>
          <hr className={`header__line ${school ? "header__line-black" : ""}`}></hr>
          <hr className={`header__line ${school ? "header__line-black" : ""}`}></hr>
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