import React from 'react'
import Button from './Button'
import { IoIosArrowRoundForward } from "react-icons/io";
import css from "../CSS/HomePage/Hero.module.css"
const Hero = () => {
    return (
        <div className={css.HeroSec}>
            <div className={`${css.container} container`}>
                <div className={css.left_side}>
                    <h1>Explainer videos that turn complex ideas into clear decisions. </h1>
                    <h4 className="subheading">Explainer videos that turn “huh?” into “aha!”</h4>
                    <p>Trusted by SaaS and tech teams to explain products, win buy-in and accelerate growth.</p>
                    <Button className={css.hero_btn} text={"Book a free Story Planning "} icon={<IoIosArrowRoundForward size={25} color='#ff5705' />} />
                </div>

                <div className={css.right_side}>
                    <video width={"820"} height={"470"} autoPlay loop muted src="https://motionwizz.com/wp-content/uploads/2026/01/WhatsApp-Video-2026-01-16-at-9.09.27-PM.mp4"></video>
                </div>
            </div>
        </div>
    )
}

export default Hero

