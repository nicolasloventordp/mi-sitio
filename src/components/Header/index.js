import HeaderLogo from './components/HeaderLogo'
import HeaderTabs from './components/HeaderTabs'
import HeaderTabsMobile from './components/HeaderTabsMobile'
import HeaderSocialMedia from './components/HeaderSocialMedia'
import IconBarsMobile from '../ui/IconBarsMobile'
import IconCircleMobile from '../ui/IconCircleMobile'
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import { useState, useEffect } from 'react'
import $ from 'jquery'
import "./style.css"

export default function Header({isMobile}) {
    
    const [isTabsMobileOpen, setIsTabsMobileOpen] =  useState(false);
    
    const itemsTabs = [
        {title: 'home', href: 'home'},
        {title: 'acerca', href: 'about'},
        {title: 'contacto', href: 'contact'}
    ]
    const itemsSocialMedia = [
        {url: "https://www.instagram.com/nicolovento/", icon: <FaInstagram />},
        {url: "https://twitter.com/NicolasLovento", icon: <FaTwitter />},
        {url: "https://www.linkedin.com/in/nicol%C3%A1s-daniel-lo-vento-3797a01a2/", icon: <FaLinkedin />}
    ]
    const showMenu = () => {
        if(isTabsMobileOpen)
            $('.header-box__tabs-mobile').addClass("open");
        else
            $('.header-box__tabs-mobile').removeClass("open");
    }
    const renderIconMobile = () => {
        showMenu();
        if(!isTabsMobileOpen){
            return <IconBarsMobile setIsTabsMobileOpen={setIsTabsMobileOpen}/>;
        }else{
            return <IconCircleMobile setIsTabsMobileOpen={setIsTabsMobileOpen}/>;
        }
    }
    return (
        <div className="header">
            <div className="header-box">
                <HeaderLogo text={"Nicolás Lo Vento"}/>
                {!isMobile &&  <HeaderTabs itemsTabs={itemsTabs}/>}
                {isMobile && renderIconMobile()}
                <HeaderTabsMobile itemsTabs={itemsTabs} setIsTabsMobileOpen={setIsTabsMobileOpen}/>
                {!isMobile &&  <HeaderSocialMedia itemsSocialMedia={itemsSocialMedia}/>}
            </div>
        </div>
    );
}