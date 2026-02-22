"use client"
import React, { useEffect, useState } from 'react'
import { MdMenu, MdCancel } from "react-icons/md";
import Link from 'next/link'
import Button from '@/components/Button';
import useWindowSize from '@/customHooks/useWindowSize';
import dynamic from 'next/dynamic';
import css from "../CSS/HomePage/NavMenu.module.css"


const Navmenu = ({ Menu }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const Width = useWindowSize();
    useEffect(() => {

    }, [])


    return (
        <div className={css.NavMenu}>
            <div className={css.menu_section} style={{ width: Width < 1024 && (drawerOpen ? "100%" : "0%"), padding: drawerOpen ? "20px" : "0px" }}>

                <div>


                    <ul className={`${css.nav_ul} ${css.Drawer}`}>

                        <div className={css.cancel_icon_div} onClick={() => setDrawerOpen(false)}>
                            <MdCancel color='#ef5527' size={30} className={css.cancel_icon} cursor={"pointer"} />
                        </div>


                        {Menu?.map(({ main, submenu }) => {
                            return (
                                <div key={main}>
                                    <Link href={"/"}><li>{main}</li></Link>
                                    {submenu && submenu.length > 0 ? submenu?.map((subitem) => {
                                        return (
                                            <Link href={"/"} key={subitem}><li style={{ padding: "0px" }}>{subitem}</li></Link>
                                        )
                                    }) : null}
                                </div>
                            )
                        })}

                    </ul>




                </div>

            </div>
            {/* <Button text={"Get a Quote"} className={css.navbtn} padding='8px 13px' /> */}





            <div onClick={() => setDrawerOpen(true)}>
                <MdMenu color='#ef5527' className={css.hamburger} size={35} />
            </div>
        </div>
    )
}

export default Navmenu

