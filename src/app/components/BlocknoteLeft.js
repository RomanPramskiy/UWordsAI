"use client";

import { usePathname } from "next/navigation";
import Image from 'next/image';
import React from "react";

const BlocknoteLeft = ({ bgColor, text }) => { 
    const pathname = usePathname();
    const image__blocknote = "/images/main__innovations-challenges.svg"
    const main = pathname === "/";
     return (
        <div className="blocknote-block" style={{ backgroundColor: bgColor }}>
            <Image src={image__blocknote} alt='challenges' className={`main__innovations-blocknote-image ${main ? "main__innovations-blocknote-image" : "no-display"}`} width={306} height={240}></Image>
            <div className='blocknote-opacity-right-block'>
            <div className='blocknote-opacity-right blocknote-opacity-right1'></div>
            <div className='blocknote-opacity-right blocknote-opacity-right2'></div>
            <div className='blocknote-opacity-right blocknote-opacity-right3'></div>
            </div>
            <div className='blocknote-opacity-bottom-block'>
            <div className='blocknote-opacity-bottom blocknote-opacity-bottom1'></div>
            <div className='blocknote-opacity-bottom blocknote-opacity-bottom2'></div>
            <div className='blocknote-opacity-bottom blocknote-opacity-bottom3'></div>
            </div>
            <p className='blocknote-block-text'>
            {text.map((part, index) => (
                    <span key={index} className={part.className}>
                        {part.content}
                    </span>
                ))}
            </p>
        </div>
    )
}

export default BlocknoteLeft
