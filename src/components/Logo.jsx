import React from 'react'
import css from "../CSS/HomePage/Logo.module.css"

const Logo = () => {
    return (
        <div className={css.LogoDiv}>
            <div className={css.logo}>
                <svg viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg" className={css.zigzag}>
                    <polyline points="10,20 25,12 40,30 50,5 76,30 86,5 105,20 115,8" fill="none" stroke="#ff6a1a"
                        strokeWidth="12" strokeLinejoin="round" />
                </svg>
                <strong>
                    <span>Motion</span>
                    <span>Wizz</span>
                </strong>
            </div>

        </div>
    )
}

export default Logo

