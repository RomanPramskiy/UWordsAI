"use client";

import Image from 'next/image';
import React from "react";
import Link from "next/link"

const BlogTab = ({ blogImage, text, className }) => {
    return (
        <Link href="/states" className='blog-tab-link'>
        <div className={`blog-tab-block ${className}`}>
            <div className='blog-tab-block-inner'>
             <Image src={blogImage} alt="star" width={405} height={240} className="blog-tab-image"></Image>
            <h2 className='blog-tab-title' dangerouslySetInnerHTML={{ __html: text }}></h2>
            </div>
        </div>
        </Link>
    )
}

export default BlogTab