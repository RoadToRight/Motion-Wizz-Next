"use client"
import React, { useState } from 'react'
import VideoPopup from '../components/VideoPopup';
import { FaPlay } from "react-icons/fa";
import css from "../CSS/HomePage/PorfolioVideo.module.css"
import { CldImage } from 'next-cloudinary';


const PortfolioVideo = ({ topMedia, bottomMedia }) => {

    const [ispopupOpen, setPopupOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const handlePopup = (videoUrl) => {

        setPopupOpen((prev) => !prev);
        setCurrentVideo(videoUrl);
    }


    return (
        <>
            {
                ispopupOpen ? <VideoPopup videoUrl={currentVideo} setPopupOpen={setPopupOpen} /> : null
            }


            <div className={css.portfolio_wrapper}>
                {
                    [1, 2, 3, 4].map((_, index) => {
                        return (
                            <div className={`${css.portfolio_track} ${css.top_track}`} key={index}>
                                {topMedia?.map((img, index) => {
                                    return (

                                        <div className={css.image_div} key={index}>
                                            {/* <img loading='lazy' src={img.image} alt="" /> */}
                                            <CldImage sizes='(max-width:768px) 20vw, 50vw' loading='lazy' src={img.image} alt={`Logo ${index + 1}`} width={800} height={450} />
                                            <div className={css.play_btn} onClick={() => handlePopup(img.video)}><FaPlay /></div>
                                        </div>

                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>


            <div className={`${css.portfolio_wrapper} ${css.portfolio_wrapper_bottom}`}>

                {

                    [1, 2, 3, 4].map((_, index) => {
                        return (
                            <div className={`${css.portfolio_track} ${css.bottom_track}`} key={index}>
                                {bottomMedia?.map((img, index) => {
                                    return (

                                        <div className={css.image_div} key={index}>
                                            <img loading='lazy' src={img.image} alt="" />
                                            <div className={css.play_btn} onClick={() => handlePopup(img.video)}><FaPlay /></div>
                                        </div>

                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}

export default PortfolioVideo
