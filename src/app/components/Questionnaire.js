"use client";

import Image from 'next/image';
import Link from "next/link"
import { usePathname } from "next/navigation";
import React from "react";
import { useState, useRef } from "react";

const Questionnaire = ({ text, text2 }) => {
const [isDragging, setIsDragging] = useState(false);


const [fileError, setFileError] = useState(false);
const fileInputRef = useRef(null);

const handleDragEnter = (e) => {
  e.preventDefault();
  e.stopPropagation();
  setIsDragging(true);
};

const handleDragLeave = (e) => {
  e.preventDefault();
  e.stopPropagation();
  setIsDragging(false);
};

const handleDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const handleDrop = (e) => {
  e.preventDefault();
  e.stopPropagation();
  setIsDragging(false);
  const file = e.dataTransfer.files[0];
  processFile(file);
};

const handleFileUpload = (e) => {
  const file = e.target.files[0];
  processFile(file);
};

const processFile = (file) => {
  if (file && file.size > 5 * 1024 * 1024) {
    setFileError(true);
  } else {
    setFileError(false);
  }
};


const [errors, setErrors] = useState({
    name: false,
    age: false,
    email: false,
    study: false,
    about: false
  });
const handleSubmit = (e) => {
    e.preventDefault();
  
    const newErrors = {
      name: !name.trim(),
      age: !/^\d+$/.test(age),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      study: !study.trim(),
      about: !about.trim()
    };
  
    setErrors(newErrors);
  
    const isValid = Object.values(newErrors).every((val) => !val);
  
    if (isValid) {
      console.log("Отправка данных:", { name, age, email, study, about });
    }
  };
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [study, setStudy] = useState("");
    const [about, setAbout] = useState("");
    const pathname = usePathname();
    const students = pathname === "/students";
    const school = pathname === "/school";
    const investors = pathname === "/investors";
    const isSchoolPage = pathname === "/school";
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




                    <input className={`questionnaire__form-input 
                        ${school ? "school__input-black" : ""}
        ${name ? "questionnaire__form-input-value" : ""}
                        `}  placeholder="Имя" type="text" onChange={(e) => setName(e.target.value)}></input>

                        <div className={`error-block ${errors.name ? "active" : ""}`}>
                        <Image src="/images/error.svg" width={16} height={16} alt='error' className='error-image'></Image>
                        <p className='error-text'>Обязательное поле</p>
                        </div>





                    <input className={`questionnaire__form-input 
                        ${school ? "school__input-black" : ""}
        ${age ? "questionnaire__form-input-value" : ""}
                        `} placeholder="Возраст" type="text" onChange={(e) => setAge(e.target.value)}></input>

                        <div className={`error-block ${errors.age ? "active" : ""}`}>
                        <Image src="/images/error.svg" width={16} height={16} alt='error' className='error-image'></Image>
                        <p className='error-text'>Обязательное поле</p>
                        </div>





                    <input className={`questionnaire__form-input 
                        ${school ? "school__input-black" : ""}
        ${email ? "questionnaire__form-input-value" : ""}
                        `} placeholder="Почта" type="email" onChange={(e) => setEmail(e.target.value)}></input>

                        <div className={`error-block ${errors.email ? "active" : ""}`}>
                        <Image src="/images/error.svg" width={16} height={16} alt='error' className='error-image'></Image>
                        <p className='error-text'>Обязательное поле</p>
                        </div>




                    <input className={`questionnaire__form-input 
                    ${investors ? "no-display" : ""}
                    ${school ? "school__input-black" : ""}
        ${study ? "questionnaire__form-input-value" : ""}
                    `}
                     placeholder="Учебное заведение" type="text" onChange={(e) => setStudy(e.target.value)}></input>

                        <div className={`error-block ${investors ? "no-display" : ""}
                        ${errors.study ? "active" : ""}
                        `}>
                        <Image src="/images/error.svg" width={16} height={16} alt='error' className='error-image'></Image>
                        <p className='error-text'>Обязательное поле</p>
                        </div>




                    <input className={`questionnaire__form-input 
                        ${school ? "questionnaire__form-input-big" : "no-display"}
        ${about ? "questionnaire__form-input-value" : ""}
        ${errors.about ? "active" : ""}
                        `} placeholder="Расскажите о себе" type="text" onChange={(e) => setAbout(e.target.value)}></input>

                        <div className={`error-block ${school ? "" : "no-display"}`}>
                        <Image src="/images/error.svg" width={16} height={16} alt='error' className='error-image'></Image>
                        <p className='error-text'>Обязательное поле</p>
                        </div>





                    <div className={`questionnaire__upload-block ${students ? "" : "no-display"}`}   onDragEnter={handleDragEnter}
  onDragLeave={handleDragLeave}
  onDragOver={handleDragOver}
  onDrop={handleDrop}>
                    <label className="questionnaire__file-label">
                    <input className='questionnaire__upload-input' type="file" ref={fileInputRef} onChange={handleFileUpload}></input>
                     <div className="questionnaire__file-content">
                     {isDragging ? (
        <Image src="/images/questionnaire__upload.svg" alt='upload' width={60} height={60} className='questionnaire__upload-image'></Image>
      ) : (
        <>
        <Image src="/images/questionnaire__upload.svg" alt='upload' width={60} height={60} className='questionnaire__upload-image'></Image>
        <p className="questionnaire__file-text">Загрузите файл<br />до 5 МБ</p>
        </>
      )}
                        </div>
                     </label>  
                    </div>
                    <div className={`error-block ${students ? "" : "no-display"}`}>
                        <Image src="/images/error.svg" width={16} height={16} alt='error' className='error-image'></Image>
                        <p className='error-text'>Размер файла больше 5MB!</p>
                    </div>





                    <button className={`questionnaire__form-button ${school ? "questionnaire__form-button-school" : ""}`} type="submit" onClick={handleSubmit}>Отправить</button>
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