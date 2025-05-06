"use client";

import Image from 'next/image';
import Link from "next/link"
import { usePathname } from "next/navigation";
import React from "react";
import { useState, useRef } from "react";

const Questionnaire = ({ text, text2 }) => {
const pathname = usePathname();
const students = pathname === "/students";
const school = pathname === "/school";
const investors = pathname === "/investors";

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [age, setAge] = useState("");
const [study, setStudy] = useState("");
const [about, setAbout] = useState("");


const dragCounter = useRef(0);
const previewScrollRef = useRef(null);
const scrollPos = useRef({ startX: 0, scrollLeft: 0 });
const fileInputRef = useRef(null);

const [isDragging, setIsDragging] = useState(false);
const [files, setFiles] = useState([]);
const [isDraggingScroll, setIsDraggingScroll] = useState(false);
const [fileError, setFileError] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);

const handleDragEnter = (e) => {
  e.preventDefault();
  e.stopPropagation();
  dragCounter.current += 1;
  setIsDragging(true);
};

const handleDragLeave = (e) => {
  e.preventDefault();
  e.stopPropagation();
  dragCounter.current -= 1;
  if (dragCounter.current === 0) {
    setIsDragging(false);
  }
};

const handleDragOver = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current = 0;
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = droppedFiles.filter(f => f.size <= 5 * 1024 * 1024);
    setFiles(prev => [...prev, ...validFiles]);
  };

  const handleFileUpload = (e) => {
    const selected = Array.from(e.target.files);
    const validFiles = selected.filter(f => f.size <= 5 * 1024 * 1024);
    setFiles(prev => [...prev, ...validFiles]);
    const hasOversize = selected.some(f => f.size > 5 * 1024 * 1024);
    setFileError(hasOversize);
  };

  const startScroll = (e) => {
    setIsDraggingScroll(true);
    scrollPos.current.startX = e.pageX - previewScrollRef.current.offsetLeft;
    scrollPos.current.scrollLeft = previewScrollRef.current.scrollLeft;
  };
  const endScroll = () => {
    setIsDraggingScroll(false);
  };
  const handleScroll = (e) => {
    if (!isDraggingScroll) return;
    e.preventDefault();
    const x = e.pageX - previewScrollRef.current.offsetLeft;
    const walk = (x - scrollPos.current.startX) * 1.5;
    previewScrollRef.current.scrollLeft = scrollPos.current.scrollLeft - walk;
  };
  const handleRemoveFile = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };





  const [errors, setErrors] = useState({
    name: false,
    age: false,
    email: false,
    study: false,
    about: false,
    files: false,
    filesAmount: false
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newErrors = {
      name: !name.trim(),
      age: !/^\d+$/.test(age.trim()),
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()),
      study: !investors && !study.trim(),
      about: school && !about.trim(),
      filesAmount: files.length === 0
    };
  
    setErrors(newErrors);
  
    const isValid = Object.values(newErrors).every((val) => !val);
    setIsSuccess(isValid);
  
    if (isValid) {
      console.log("Отправка данных:", { name, age, email, study, about, files });
      

      setName("");
      setAge("");
      setEmail("");
      setStudy("");
      setAbout("");
      setFiles([]);
      setFileError(false);
  

      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
  };



    return (
        <div className="questionnaire">
            <div className='questionnaire__wrapper'>
                <div className={`questionnaire__input-block ${students ? "questionnaire__input-block-students" : ""}`}>
                <p className={`gray-text-24 ${students ? "no-display" : "questionnaire__input-block-text1"}`} dangerouslySetInnerHTML={{ __html: text }}></p>
                <p className={`gray-text-24 ${students ? "no-display" : "questionnaire__input-block-text2"}`}>Присоединяйтесь к нам! 📚</p>
                <p className={`gray-text-24 ${students ? "questionnaire__input-block-text5" : "no-display"}`}>Давай познакомимся!<br></br> Расскажи о себе и прикрепи к форме фото документа, чтобы начать учиться бесплатно👨‍🎓!</p>
                    <Link className={`questionnaire__input-block-link ${students ? "no-display" : ""}`} href="#">
                    <Image className='questionnaire__input-block-image' src="/images/questionnaire__telegram-button.svg" width={740} height={110} alt='telegram-button'></Image>
                    </Link>
                    <p className={`gray-text-24 ${students ? "no-display" : "questionnaire__input-block-text3"}`} dangerouslySetInnerHTML={{ __html: text2 }}></p>
                    <p className={`gray-text-24 ${students ? "no-display" : "questionnaire__input-block-text4"}`}>или Заполните форму, расскажите о себе и укажите контактные данные, чтобы начать преподавать с помощью нашего приложения! 👨‍🏫</p>
                <form className='questionnaire__form' onSubmit={handleSubmit}>




                    <input className={`questionnaire__form-input 
                        ${school ? "school__input-black" : ""}
        ${name ? "questionnaire__form-input-value" : ""}
                        `}  placeholder="Имя" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>

                        <div className={`error-block ${errors.name ? "active" : ""}`}>
                        <Image src="/images/error.svg" width={16} height={16} alt='error' className='error-image'></Image>
                        <p className='error-text'>Обязательное поле</p>
                        </div>





                    <input className={`questionnaire__form-input 
                        ${school ? "school__input-black" : ""}
        ${age ? "questionnaire__form-input-value" : ""}
                        `} placeholder="Возраст" type="text" value={age} onChange={(e) => setAge(e.target.value)}></input>

                        <div className={`error-block ${errors.age ? "active" : ""}`}>
                        <Image src="/images/error.svg" width={16} height={16} alt='error' className='error-image'></Image>
                        <p className='error-text'>Обязательное поле</p>
                        </div>





                    <input className={`questionnaire__form-input 
                        ${school ? "school__input-black" : ""}
        ${email ? "questionnaire__form-input-value" : ""}
                        `} placeholder="Почта" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                        <div className={`error-block ${errors.email ? "active" : ""}`}>
                        <Image src="/images/error.svg" width={16} height={16} alt='error' className='error-image'></Image>
                        <p className='error-text'>Обязательное поле</p>
                        </div>




                    <input className={`questionnaire__form-input 
                    ${investors ? "no-display" : ""}
                    ${school ? "school__input-black" : ""}
        ${study ? "questionnaire__form-input-value" : ""}
                    `}
                     placeholder="Учебное заведение" type="text" value={study} onChange={(e) => setStudy(e.target.value)}></input>

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
                        `} placeholder="Расскажите о себе" type="text" value={about} onChange={(e) => setAbout(e.target.value)}></input>

                        <div className={`error-block ${school ? "" : "no-display"}`}>
                        <Image src="/images/error.svg" width={16} height={16} alt='error' className='error-image'></Image>
                        <p className='error-text'>Обязательное поле</p>
                        </div>





        <div className={`questionnaire__upload-block ${students ? "" : "no-display"}`} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleDrop}>
            <label className="questionnaire__file-label">
                <input className='questionnaire__upload-input' type="file" ref={fileInputRef} onChange={handleFileUpload} multiple></input>
                    <div className="questionnaire__file-content">



                     {files.length === 0 && (
                      <>
                        {isDragging ? (
                            <Image src="/images/drag-and-drop-white.svg" alt='upload' width={60} height={60} className='questionnaire__upload-image' />
                                ) : (
                                <>
                                    <Image src="/images/questionnaire__upload.svg" alt='upload' width={60} height={60} className='questionnaire__upload-image' />
                                    <p className="questionnaire__file-text"><span className='questionnaire__file-text-for-hover'>Загрузите файл</span><br />до 5 МБ</p>
                                </>
                                 )}
                          </>
                        )}
                     {files.length > 0 && (
                            <div className={`preview-scroll ${isDraggingScroll ? 'dragging' : ''}`} ref={previewScrollRef} onMouseDown={startScroll} onMouseUp={endScroll} onMouseLeave={endScroll} onMouseMove={handleScroll}>
                      {files.map((file, idx) => (
                        <div key={idx} className="preview-item">
                          <div className="preview-wrapper">
                            {file.type.startsWith("image/") ? (
                              <img src={URL.createObjectURL(file)} alt={`preview-${idx}`} className="preview-img" />
                            ) : (
                              <div className="preview-file">
                                <Image src="/images/file.png" alt="file" width={40} height={40} />
                              </div>
                            )}
                          </div>
                            <button className="delete-btn"   onClick={(e) => {e.stopPropagation(); e.preventDefault(); handleRemoveFile(idx);}} onMouseDown={(e) => {e.stopPropagation(); e.preventDefault();}}>
                              <Image src="/images/trash.svg" alt="Удалить" width={20} height={20} />
                            </button>
                        </div>
                        ))}

                            <div className="preview-wrapper">
                                <Image src="/images/add-item.svg" alt="add" width={40} height={40} />
                            </div>
                            </div>
                        )}
                        </div>
                     </label>  
                    </div>




                    <div className={`error-block ${students ? "" : "no-display"}
                     ${errors.filesAmount ? "active" : ""}
                     `}>
                        <Image src="/images/error.svg" width={16} height={16} alt='error' className='error-image'></Image>
                        <p className='error-text'>Обязательное поле!</p>
                    </div>

                    <div className={`error-block ${students ? "" : "no-display"}
                     ${fileError ? "active" : ""}
                     `}>
                        <Image src="/images/error.svg" width={16} height={16} alt='error' className='error-image'></Image>
                        <p className='error-text'>Размер файла больше 5MB!</p>
                    </div>



                        <div className={`success-block ${isSuccess ? "active" : ""}`}>
                          <div className='success-block-top'>
                          <Image className='success-image' src="/images/success.svg" width={40} height={40} alt='success'></Image>
                          <h1 className='success-title'>Ваши данные отправлены!</h1>
                          </div>
                          <p className='success-text'>После проверки ваших данных промокод будет отправлен на почту, указанную в анкете.</p>
                        </div>

                    <button className={`questionnaire__form-button 
                      ${school ? "questionnaire__form-button-school" : ""}
                      ${students ? "questionnaire__form-button-students" : ""}
                      ${investors ? "questionnaire__form-button-investors" : ""}
                      `} type="submit" onClick={handleSubmit}>Отправить</button>
                </form>
                </div>
                
                <div className='questionnaire__image-block'>
                    <Image src="/images/questionnaire__smartphone-school.svg" alt="smartphone" width={1360} height={1200} className={`questionnaire__image-smartphone 
                      ${investors ? "questionnaire__image-smartphone-investors" : ""}
                      ${students ? "questionnaire__image-smartphone-students" : ""}
                      `}/>
                </div>
            </div>
        </div>
    )
}

export default Questionnaire