"use client";

import { usePathname } from "next/navigation";
import Image from 'next/image';
import React from "react";

const BlocknoteRight = ({ bgColor, text }) => { 
    const pathname = usePathname();
    const image__blocknote = "/images/main__innovations-achivments.svg"
    const main = pathname === "/";
    return (
        <div className={`blocknote-block ${main ? "blocknote-block-main" : ""}`} style={{ backgroundColor: bgColor }}>
            <Image src={image__blocknote} alt='achivments' className={`main__innovations-blocknote-image ${main ? "main__innovations-blocknote-image" : "no-display"}`} width={306} height={240}></Image>
            <div className='blocknote-opacity-left-block'>
            <div className='blocknote-opacity-left blocknote-opacity-left1'></div>
            <div className='blocknote-opacity-left blocknote-opacity-left2'></div>
            <div className='blocknote-opacity-left blocknote-opacity-left3'></div>
            </div>
            <div className='blocknote-opacity-top-block'>
            <div className='blocknote-opacity-top blocknote-opacity-top1'></div>
            <div className='blocknote-opacity-top blocknote-opacity-top2'></div>
            <div className='blocknote-opacity-top blocknote-opacity-top3'></div>
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



export default BlocknoteRight