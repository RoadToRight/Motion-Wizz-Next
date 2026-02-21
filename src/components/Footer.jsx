import React from 'react'
import Ready from "./ReadytoMake"
import Link from 'next/link'
import css from "../CSS/HomePage/Footer.module.css"

const Footer = () => {

  const menus = [
    { head: "Company", links: [{ label: "About", url: "#" }, { label: "Process", url: "#" }, { label: "Portfolio", url: "#" }, { label: "Talk To Us", url: "#" }] },

    { head: "Industries", links: [{ label: "Educational", url: "#" }, { label: "Whiteboard", url: "#" }, { label: "SAAS", url: "#" }, { label: "Infographics", url: "#" }, { label: "Explainer", url: "#" }, { label: "AI Products", url: "#" },] },

    { head: "Resources", links: [{ label: "Blogs", url: "#" }, { label: "Process", url: "#" }, { label: "Portfolio", url: "#" }, { label: "Talk To Us", url: "#" }, { label: "How we work", url: "#" }] },

    { head: "Join Us", links: [{ label: "Facebook", url: "#" }, { label: "LinkedIn", url: "#" }, { label: "YouTube", url: "#" }, { label: "Instagram", url: "#" }] }
  ]

  return (
    <footer className={css.FooterSec}>
      <Ready />
      <div className={`${css.container} container`}>
        <div className={css.footer_top}>
          <div className={`${css.sec} ${css.logo_section}`}>
            <img loading='lazy' src="https://res.cloudinary.com/dp6b6emb9/image/upload/v1770498867/Logo-2-1.png_1_uaok4j.webp" alt="Motion Wizz Logo" />
          </div>
          <div className={css.list_footer_menus}>
            {menus?.map((item, idx) => (
              <div className={`${css.sec}`} key={idx}>
                <h5>{item.head}</h5>
                <ul>
                  {item?.links?.map(({ label, url }, i) => (
                    <li key={i}>
                      <Link href={url}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={css.footer_bottom}>
          <div className={css.policies}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Sitemap</Link>
          </div>
          <div className={css.copyright}>
            &copy; 2025 Motion Wizz. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

