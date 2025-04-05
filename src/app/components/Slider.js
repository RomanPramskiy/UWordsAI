'use client';

import Image from 'next/image';
import Link from "next/link"
import { useRef } from 'react';
import { motion } from 'framer-motion';



const SliderTab = ({ isDraggingRef }) => {
    return (
        <Link href="/states" className='slider-link'                                     onClick={(e) => {
            if (isDraggingRef.current) e.preventDefault()
        }}
        draggable={false}
        >
            <div className="slider__block">
                <div className="slider-block-inner">
                    <Image src="/images/state__image.svg" alt="star" width={460} height={399} className="slider-block-image" draggable={false}></Image>
                    <h2 className='slider-block-title'>Как ИИ помогает учить английский эффективнее?</h2>
                    <p className='gray-text-32 slider-block-text'>Изучение английского языка с каждым годом становится все...</p>
                </div>
            </div>
        </Link>
    )
}

const Slider = () => {
    const sliderRef = useRef(null);
    const isDragging = useRef(false);
    return (
        <div className="slider-container">
            <motion.div 
                ref={sliderRef}
                className="slider"
                drag="x"
                dragConstraints={{ left: -600, right: 0 }}
                onPointerDown={() => {
                    isDragging.current = false
                }}
                onPointerMove={() => {
                    isDragging.current = true
                }}
                onPointerUp={() => {
                    setTimeout(() => {
                        isDragging.current = false
                    }, 0)
                }}
            >
                <SliderTab isDraggingRef={isDragging}/>
                <SliderTab isDraggingRef={isDragging}/>
                <SliderTab isDraggingRef={isDragging}/>
            </motion.div>
        </div>
    )
}

export default Slider