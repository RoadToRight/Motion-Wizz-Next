"use client"
import React, { useState } from 'react'
import { MdMenu } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import Link from 'next/link'
const Navmenu = ({ Menu }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <div className="menu_section" style={{ width: drawerOpen ? "100%" : "0%", padding: drawerOpen ? "20px" : "0px" }}>



                <div>


                    <ul className='nav_ul Drawer'>

                        <div className='cancel_icon_div' onClick={() => setDrawerOpen(false)}>
                            <MdCancel color='#ef5527' size={30} className='cancel_icon' />
                        </div>


                        {Menu?.map(({ main, submenu }) => {
                            return (
                                <div key={main}>
                                    <Link href={"/"}><ul>{main}</ul></Link>
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




            <div onClick={() => setDrawerOpen(true)}>
                <MdMenu color='#ef5527' />
            </div>
        </>
    )
}

export default Navmenu
