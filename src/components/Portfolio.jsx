import React from 'react'
import Button from './Button'
import PortfolioVideo from '@/clientComponents/PortfolioVideo';
import css from "../CSS/HomePage/Portfolio.module.css"
const Portfolio = () => {



    const topMedia = [
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771787783/portfolio8_djwkhe.webp",
            video: "https://player.vimeo.com/video/1034578741?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771787784/portfolio7_orkm1a.webp",
            video: "https://player.vimeo.com/video/1034804148?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771787786/portfolio5_yvk6cy.webp",
            video: "https://player.vimeo.com/video/1035387969?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771787784/portfolio4_gxy77m.webp",
            video: "https://player.vimeo.com/video/1131752914?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771787784/portfolio1_lxovmn.webp",
            video: "https://player.vimeo.com/video/1122818997?autoplay=1&rel=0&controls=0#t="
        }
    ];

    const bottomMedia = [
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771787784/portfolio9_qp8f0v.webp",
            video: "https://player.vimeo.com/video/1131439530?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771787784/portfolio2_ekgjlx.webp",
            video: "https://player.vimeo.com/video/1131439952?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771787785/portfolio6_th5lp1.webp",
            video: "https://player.vimeo.com/video/1131445648?autoplay=1&rel=0&controls=0#t="
        },
        {
            image: "https://res.cloudinary.com/dp6b6emb9/image/upload/v1771787784/portfolio3_xzy6dz.webp",
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

