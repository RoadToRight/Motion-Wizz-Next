import React from 'react'
import Button from './Button'
import PortfolioVideo from '@/clientComponents/PortfolioVideo';
import css from "../CSS/HomePage/Portfolio.module.css"
const Portfolio = () => {



    const topMedia = [
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608226/portfolio8_cxizzb.png",
            video: "https://player.vimeo.com/video/1034578741?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608226/portfolio7_pgwaab.png",
            video: "https://player.vimeo.com/video/1034804148?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608226/portfolio5_sejnq0.png",
            video: "https://player.vimeo.com/video/1035387969?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608226/portfolio4_hdgowh.png",
            video: "https://player.vimeo.com/video/1131752914?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608227/portfolio1_f9hfyg.png",
            video: "https://player.vimeo.com/video/1122818997?autoplay=1&rel=0&controls=0#t="
        }
    ];

    const bottomMedia = [
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608228/portfolio9_czechm.png",
            video: "https://player.vimeo.com/video/1131439530?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608228/portfolio2_hj4mxu.png",
            video: "https://player.vimeo.com/video/1131439952?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608229/portfolio6_ns67ok.png",
            video: "https://player.vimeo.com/video/1131445648?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1770608229/portfolio3_a3wmws.png",
            video: "https://player.vimeo.com/video/1131445511?autoplay=1&rel=0&controls=0#t="
        }
    ];




    return (
        <div className={css.Portfolio}>



            <div className={`${css.portfolio_top} container`}>
                <h4 className='highlight'>Creations</h4>
                <h2>Work That Speaks Across Industries</h2>
                <div className={css.text_btn}>
                    <p>From tech to healthcare, finance to education, here’s a glimpse of corporate video production we’ve done for companies across a wide range of industries.</p>
                    {/* <Button text={"View All Works"} /> */}
                </div>

            </div>


            <div className={css.portfolio_bottom}>



                <PortfolioVideo topMedia={topMedia} bottomMedia={bottomMedia} />



            </div>

            <div className={css.btn}>
                <Button text={"View All Works"} style={{ margin: "0px auto", display: "block" }} />
            </div>

        </div >
    )
}

export default Portfolio

