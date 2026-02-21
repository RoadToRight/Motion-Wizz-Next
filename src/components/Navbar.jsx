import Logo from './Logo'
import css from "../CSS/HomePage/Navbar.module.css"
import Navmenu from '../clientComponents/Navmenu'
const Navbar = () => {

    const Menu = [
        { main: "Industries", submenu: [""] },
        { main: "Services", submenu: [] },
        { main: "Portfolio" },
        { main: "Our Process" },
        { main: "Resources", submenu: [] },
        { main: "About Us" },
    ]


    return (

        <div className={css.nav_section}>
            <nav className={css.Nav}>
                <div className={css.nav_container}>

                    <div className="logo_section">
                        <Logo />
                    </div>
                    <Navmenu Menu={Menu} />

                </div>


            </nav >
        </div>
    )
}

export default Navbar
