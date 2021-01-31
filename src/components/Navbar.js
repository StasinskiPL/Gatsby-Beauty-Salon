import React from 'react'
import {FaBars } from "react-icons/fa"
import {Link} from "gatsby"

const Navbar = ({setOpenSlider}) => {
    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="navbar__logo">
                <Link to="/"><h2>Salon</h2></Link>
                <button onClick={()=>setOpenSlider(true)} className="navbar__logo-btn" aria-label="open slider">
            <FaBars />
                 </button>
                </div>


                <ul>
                    <li><Link to="/cennik">Cennik</Link></li>
                    <li><Link to="/galeria">Galeria</Link></li>
                    <li><Link to="/kontakt">Kontakt</Link></li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
