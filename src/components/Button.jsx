import React from 'react'
import css from "../CSS/HomePage/Button.module.css"

const Button = ({ text, icon, padding = "10px 20px", className, fsize }) => {
  return (
    <div>
      <button className={`${css.btn_1} ${className}`} style={{ padding: padding }}>
        <span>{text}</span>
        <span className={css.icon}>{icon}</span>
      </button>
    </div>
  )
}

export default Button

