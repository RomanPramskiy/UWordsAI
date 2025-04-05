"use client";

import Link from "next/link"
import Image from 'next/image';
import { usePathname } from "next/navigation";

const Telegram = () => {
    const pathname = usePathname();
    const school = pathname === "/school";
    const investors = pathname === "/investors";
    const TelegramSource = pathname === "/school"
    ? "/images/telegram__yellow-button.svg"
    : "/images/telegram__button-white.svg";

    const handleMouseEnter = (e) => {
        const img = e.currentTarget.querySelector("img");
        if (!img) return;
    
        if (pathname.includes("school")) {
          img.src = "/images/telegram__button-white.svg";
        } else {
          img.src = "/images/telegram__yellow-button.svg";
        } 
      };
      const handleMouseLeave = (e) => {
        const img = e.currentTarget.querySelector("img");
        if (!img) return;
      
        if (pathname.includes("school")) {
          img.src = "/images/telegram__yellow-button.svg";
        } else {
          img.src = "/images/telegram__button-white.svg";
        }
      };
      
    return (
        <div className={`telegram__block 
            ${school ? "telegram__block-margin" : "" }
            ${investors ? "telegram__block-margin" : "" }
        `}>
            <h1 className={`telegram__title-blue ${school ? "telegram-school-title" : ""}`}>telegram-<span className={`telegram__title-white ${school ? "telegram-school-title" : ""}`}>канал</span></h1>
            <div className="telegram__text-block">
                <p className="telegram__text-block-text gray-text-24">подпишитесь на наш Telegram-канал<br></br> и получите доступ к умному боту🤖!</p>
            </div>
            <div className="telegram__description-block">
                <Image src="/images/telegram__man.svg" alt="telegram-man" width={400} height={540} className="telegram__man-image"/>
                <p className="telegram__description-block-text white-text-32">
                🎓 <span className="yellow-text">Актуальные учебные материалы и подборки</span> —<br></br>
                 только полезные слова и выражения.<br></br><br></br>

                 🤝 <span className="yellow-text">Сообщество</span> — общайтесь с<br></br>
                  единомышленниками и обменивайтесь опытом.<br></br><br></br>

                  🎁<span className="yellow-text">Бонусы и акции</span> — эксклюзивные предложения для<br></br>
                   подписчиков.
                </p>
                <Link href="#" className="telegram__button-link" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><Image src={TelegramSource} alt="telegram-button" width={515} height={88} className="telegram__button-white-image"/></Link>
            </div>
        </div>
    )
}

export default Telegram