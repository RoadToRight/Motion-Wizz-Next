"use client"
import React from 'react'

import Button from './Button'
import dynamic from 'next/dynamic'

import css from "../CSS/HomePage/ThreeHero.module.css"
const CanvasHero = dynamic(() => import('../clientComponents/CanvasHero'), {
  ssr: false
})
const ThreeHero = () => {

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
      </div>
    </div>
  )
}

export default ThreeHero
