import styled from 'styled-components'
import Logo from './Logo'
import Button from './Button'

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

        <div className='nav_section'>
            <Nav>
                <div className="nav_container">

                    <div className="logo_section">
                        <Logo />
                    </div>
                    <Navmenu Menu={Menu} />
                    <Button text={"Get a Quote"} />

                </div>


            </Nav >
        </div>
    )
}

export default Navbar

const Nav = styled.nav`
    /* position: sticky; */
    position: relative;
    top: 10px;
    z-index: 99;

.nav_container{
max-width: 900px;
    margin: 0 auto;
    width: 100%;

backdrop-filter: blur(30px);
    display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid #D4D4D4;
margin-top: 10px;
border-radius: 100px;
padding: 5px 30px ;
box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.2);
}
li{
    list-style: none;
}
.Drawer{
    display: flex;
    gap: 20px;
}
.cancel_icon_div{
    display: none;
    background: transparent !important;
}
    .nav_ul a{
        color: #000;
        text-decoration: none;
        font-weight: 700;
    }
    .nav_ul {
                margin-top: 18px;
            display: flex;
             gap: 12px;
              justify-content: center;
              align-items: center;
    }
    @media (max-width:1024px){
        padding: 0px 0px;

        .nav_container{
            backdrop-filter:unset;
        }
        
          .menu_section {
        background-color: #ffffff;
        position: fixed;
        right: 0;
        z-index: 4;
        height: 100vh;
        bottom: 0;
        top: 0px;
        width: 100%;
        padding: 20px 20px 20px 12px;
        transition: all 300ms ease;
        overflow: hidden;
    .Drawer {
  display: flex;
  flex-direction: column;
  gap:0px;
    margin-top: 80px;

}

.Drawer a {
  color: #000000;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
}

.Drawer > div{
  padding: 20px ;
  border-bottom:1px solid white;

}

.Drawer > div:hover{
    background-color: #ef5527;
    a{
    color: white;

    }
}
.cancel_icon{
    margin-left: auto;
    display: inline-block;
}
.cancel_icon_div{
    display: flex;
    justify-content: center;
    align-items: center;
    display: block;
    padding: 0px !important;
    position: absolute;
    top: 10px;
    right: 10px;
}
    .nav_ul {

              justify-content: start;
              align-items: start;
    }

    }
    .logo_section{
        position: relative;
        z-index: 5;
        
    }
    }
  
`
