"use client"
import React, { useState } from 'react'
import { MdMenu, MdCancel } from "react-icons/md";
import Link from 'next/link'
import Button from '@/components/Button';
import styled from 'styled-components';
import useWindowSize from '@/customHooks/useWindowSize';
import dynamic from 'next/dynamic';



const Navmenu = ({ Menu }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const Width = useWindowSize();

    return (
        <NavMenu>
            <div className="menu_section" style={{ width: Width < 1024 && (drawerOpen ? "100%" : "0%"), padding: drawerOpen ? "20px" : "0px" }}>

                <div>


                    <ul className='nav_ul Drawer'>

                        <div className='cancel_icon_div' onClick={() => setDrawerOpen(false)}>
                            <MdCancel color='#ef5527' size={30} className='cancel_icon' cursor={"pointer"} />
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
            {Width < 1024 && <Button text={"Get a Quote"} className={"navbtn"} padding='8px 13px' />}





            <div onClick={() => setDrawerOpen(true)}>
                {Width < 1024 && <MdMenu color='#ef5527' className='hamburger' size={35} />}
            </div>
        </NavMenu>
    )
}

export default Navmenu


const NavMenu = styled.div`
    display: flex;
    justify-content: center;
 align-items: center;
 gap: 10px;

`