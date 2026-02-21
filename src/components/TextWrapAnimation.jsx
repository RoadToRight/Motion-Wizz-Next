"use client"
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import css from "../CSS/HomePage/TextWrapAnimation.module.css"

gsap.registerPlugin(ScrollTrigger);

const TextWrapAnimation = () => {

    const text2Ref = useRef(null);

    useGSAP(() => {
        const el = text2Ref.current;
        gsap.to(el, {
            width: '100%',
            duration: 20,
            scrollTrigger: {
                trigger: ".image_faqs_wrapper",
                start: "70% 0%",
                end: "0% 0%",
                scrub: 5,
            }
        })
    })

    return (
        <div className={css.text_wrap}>
            <div className={`${css.container} container`}>
                <h2 className={css.text_1}>Let's Connect</h2>
                <h2 ref={text2Ref} className={css.text_2}>Let's Connect</h2>
            </div>
        </div>
    )
}

export default TextWrapAnimation

