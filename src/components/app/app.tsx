import React, { useState } from "react"
import About from "../about/about"
import Footer from "../footer/footer"
import Header from "../header/header"
import Home from "../home/home"
import Packages from "../packages/packages"

export default function App(){
    const [isHome, setIsHome] = useState(true)
    const [isAbout, setIsAbout] = useState(false)
    const [isPackages, setIsPackages] = useState(false)
    return <>
    <Header setIsHome={setIsHome} setIsAbout={setIsAbout}
        setIsPackages={setIsPackages} isAbout={isAbout}
        isPackages={isPackages} isHome={isHome}/>
    {isHome && <Home setIsHome={setIsHome} setIsPackages={setIsPackages}/>}
    {isAbout && <About/>}
    {isPackages && <Packages/>}
    <Footer isAbout={isAbout}/>
    </>
}
