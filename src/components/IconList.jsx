import Link from 'next/link'
import React from 'react'
import css from "../CSS/HomePage/IconList.module.css"

const IconList = ({ icon, text, url }) => {
    return (
        <div className={css.IconList}>
            <div className="icon">{icon}</div>
            <Link href={"/"} to={url}>
                <div className="text">{text}</div>
            </Link>
        </div>
    )
}

export default IconList

