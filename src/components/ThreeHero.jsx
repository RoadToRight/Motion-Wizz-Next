"use client"
import React from 'react'

import Button from './Button'
import dynamic from 'next/dynamic'

import css from "../CSS/HomePage/ThreeHero.module.css"
import useWindowSize from '@/customHooks/useWindowSize'
const CanvasHero = dynamic(() => import('../clientComponents/CanvasHero'), {
  ssr: false
})
const ThreeHero = () => {

  let Width = useWindowSize();

  return (
    <div className={css.MainHeroContainer}>
      <div className={css.text_container}>
        <span className="highlight">Motions Wizz</span>
        <h1>Grow your users. Smarter.</h1>
        <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        <div className={css.input}>
          <input type="text" placeholder='Enter email' />
          <Button text={"Join Us"} />
        </div>
        <span>We care about your data in our privacy policy.</span>

      </div>
      <div className={`${css.CanvasContianer}`}>
        <CanvasHero />

        <div className={css.hero_img}>
          {Width < 767 ? <img
            loading="eager"          // eager to load ASAP, not lazy
            fetchPriority="high"     // tells browser to prioritize this request
            src="https://res.cloudinary.com/dp6b6emb9/image/upload/w_600,f_auto,q_auto/orangeball_n074xx.webp"
            alt="Orange Ball"
            width={600}
            height={600}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          /> : null}
        </div>

      </div>
    </div>
  )
}

export default ThreeHero
