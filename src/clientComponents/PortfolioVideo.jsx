"use client"
import React, { useState } from 'react'
import VideoPopup from '../components/VideoPopup';
import { FaPlay } from "react-icons/fa";



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


            <div className="portfolio_wrapper">
                {
                    [1, 2, 3, 4].map((_, index) => {
                        return (
                            <div className="portfolio_track" key={index}>
                                {topMedia?.map((img, index) => {
                                    return (

                                        <div className='image_div' key={index}>
                                            <img src={img.image} alt="" />
                                            <div className="play_btn" onClick={() => handlePopup(img.video)}><FaPlay /></div>
                                        </div>

                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>


            <div className="portfolio_wrapper">
                {
                    [1, 2, 3, 4].map((_, index) => {
                        return (
                            <div className="portfolio_track" key={index}>
                                {bottomMedia?.map((img, index) => {
                                    return (
                                        <div className='image_div' key={img + index}>
                                            <img src={img.image} alt="" />
                                            <div className="play_btn" onClick={() => handlePopup(img.video)}><FaPlay /></div>
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
