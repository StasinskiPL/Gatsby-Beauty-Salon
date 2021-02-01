import React,{useState} from 'react'
import Navbar from "./Navbar"
import Footer from './Footer'
import Slider from './Slider'

const Layout = ({children}) => {
    const [openSlider,setOpenSlider] = useState(false)
    return (
        <>
        <Navbar setOpenSlider={setOpenSlider} />
            <Slider openSlider={openSlider} setOpenSlider={setOpenSlider}/>
        <main>
            {children}
        </main>
            <Footer/>
            </>
    )
}


export default Layout
