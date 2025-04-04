"use client";

import Image from 'next/image';
import React from "react";

const BlogTab = ({ blogImage, text, className }) => {
    return (
        <div className={`blog-tab-block ${className}`}>
            <div className='blog-tab-block-inner'>
             <Image src={blogImage} alt="star" width={405} height={240} className="blog-tab-image"></Image>
            <h2 className='blog-tab-title' dangerouslySetInnerHTML={{ __html: text }}></h2>
            </div>
        </div>
    )
}

export default BlogTab