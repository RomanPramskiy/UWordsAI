"use client";

import Image from 'next/image';
import Link from "next/link"
import { usePathname } from "next/navigation";
import React from "react";

const Questionnaire = ({ text, text2 }) => {
    const pathname = usePathname();
    const students = pathname === "/students";
    const school = pathname === "/school";
    const investors = pathname === "/investors";
    return (
        <div className={`questionnaire ${students ? "questionnaire-for-margin" : ""}`}>
            <div className='questionnaire__wrapper'>
                <div className='questionnaire__input-block'>
                <p className={`gray-text-24 ${students ? "no-display" : "questionnaire__input-block-text1"}`} dangerouslySetInnerHTML={{ __html: text }}></p>
                <p className={`gray-text-24 ${students ? "no-display" : "questionnaire__input-block-text2"}`}>Присоединяйтесь к нам! 📚</p>
                <p className={`gray-text-24 ${students ? "questionnaire__input-block-text5" : "no-display"}`}>Давай познакомимся! Расскажи о себе и прикрепи к форме фото документа, чтобы начать учиться бесплатно👨‍🎓!</p>
                    <Link className={`questionnaire__input-block-link ${students ? "no-display" : "questionnaire__input-block-link"}`} href="#">
                    <Image className='questionnaire__input-block-image' src="/images/questionnaire__telegram-button.svg" width={740} height={110} alt='telegram-button'></Image>
                    </Link>
                    <p className='gray-text-24 questionnaire__input-block-text3' dangerouslySetInnerHTML={{ __html: text2 }}></p>
                    <p className={`gray-text-24 ${students ? "no-display" : "questionnaire__input-block-text4"}`}>или Заполните форму, расскажите о себе и укажите контактные данные, чтобы начать преподавать с помощью нашего приложения! 👨‍🏫</p>
                <form className='questionnaire__form'>
                    <input className={`questionnaire__form-input ${school ? "school__input-black" : ""}`}  placeholder="Имя" type="text"></input>
                    <input className={`questionnaire__form-input ${school ? "school__input-black" : ""}`} placeholder="Возраст" type="text"></input>
                    <input className={`questionnaire__form-input ${school ? "school__input-black" : ""}`} placeholder="Почта" type="email"></input>
                    <input className={`questionnaire__form-input 
                    ${investors ? "no-display" : ""}
                    ${school ? "school__input-black" : ""}`}
                     placeholder="Учебное заведение" type="text"></input>
                    <input className={`questionnaire__form-input ${school ? "questionnaire__form-input-big" : "no-display"}`} placeholder="Расскажите о себе" type="text"></input>

                    <div className={`no-display ${students ? "questionnaire__upload-block" : "no-display"}`}>
                    <label className="questionnaire__file-label">
                    <input className='questionnaire__upload-input' type="file"></input>
                     <div className="questionnaire__file-content">
                        <Image src="/images/questionnaire__upload.svg" alt='upload' width={60} height={60} className='questionnaire__upload-image'></Image>
                        <p className="questionnaire__file-text">Загрузите файл<br />до 5 МБ</p>
                        </div>
                     </label>  
                    </div>

                    <button className='questionnaire__form-button' type="submit">Отправить</button>
                </form>
                </div>
                <div className='questionnaire__image-block'>
                    <Image src="/images/questionnaire__smartphone-school.svg" alt="smartphone" width={1360} height={1200} className="questionnaire__image-smartphone"/>
                </div>
            </div>
        </div>
    )
}

export default Questionnaire