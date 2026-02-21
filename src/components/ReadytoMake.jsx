"use client"
import React, { useRef } from 'react'
import Button from './Button'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import css from "../CSS/HomePage/ReadytoMake.module.css"
gsap.registerPlugin(ScrollTrigger);

const readytoMake = () => {

    const ReadyDiv = useRef()

    useGSAP(() => {
        const el = ReadyDiv.current;

        gsap.fromTo(
            el,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: 'play none none reverse',
                    // markers: true
                }
            }
        )

    }, { scope: ReadyDiv })

    return (
        <div className={css.Ready} ref={ReadyDiv}>
            <div className={css.left_section}>
                <h3>Ready to make a video? 🎉</h3>
                <p>New to MotionWizz? You can try us out before formal engagement. Really!</p>
            </div>
            <div className="right_section">
                <Button text={"Let's Talk"} />
            </div>
        </div>
    )
}

export default readytoMake

