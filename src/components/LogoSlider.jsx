"use client"
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import css from "../CSS/HomePage/LogoSlider.module.css"

const LogoSlider = () => {

    const logos = [
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122448/logo_7_1_zoqlgd.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122447/logo_3_1_jbaufr.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122447/logo_6_1_wwxgax.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122447/logo_5_1_j5ofrr.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122447/logo_4_1_cstuqw.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122446/logo_1_wlrzkz.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122446/logo_2_1_zi1qwy.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122447/logo_4_1_cstuqw.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122446/logo_1_wlrzkz.webp",
        "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771122446/logo_2_1_zi1qwy.webp",
    ]

    return (
        <div className={css.LogoSliderSec}>
            <div className="container">
                <Swiper centeredSlides={true} className='swiper_parent' spaceBetween={25} slidesPerView={5} loop modules={[Pagination, Navigation, Autoplay]} navigation={{
                    prevEl: ".prev-btn",
                    nextEl: ".next-btn"
                }} pagination={{ clickable: true, el: ".custom_pagination" }} autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                    breakpoints={{
                        300: {
                            slidesPerView: 2,
                            centeredSlides: false
                        },
                        767: {
                            slidesPerView: 2,
                            centeredSlides: false,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 5,
                        }
                    }}

                >
                    {logos?.map((logo, index) => {
                        return (
                            <SwiperSlide className={css.swiper_slide} key={logo + index}>
                                <div className={css.logo_card}>
                                    <img loading='lazy' src={logo} alt={`Logo ${index + 1}`} width={"100%"} height={"100%"} />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>




        </div>
    )
}

export default LogoSlider


