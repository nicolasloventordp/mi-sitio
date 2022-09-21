import Section from '../ui/Section'
import HeaderLogo from './components/HeaderLogo'
import HeaderTabs from './components/HeaderTabs'
import IconBars from '../ui/IconBars'
import IconCircle from '../ui/IconCircle'
import HeaderTabsMobile from './components/HeaderTabsMobile'
import HeaderSocialMedia from './components/HeaderSocialMedia'
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import { useState } from 'react'
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
            $('.header__section-tabsmobile').addClass("open");
        else
            $('.header__section-tabsmobile').removeClass("open");
    }
    const renderIconMobile = () => {
        showMenu();
        if(!isTabsMobileOpen){
            return <IconBars className={"header__section-icon"} onClick={ () => setIsTabsMobileOpen(true)}/>;
        }else{
            return <IconCircle className={"header__section-icon"} onClick={ () => setIsTabsMobileOpen(false)}/>;
        }
    }
    return (
        <div className="header">
            <Section className={"header__section"}>
                <HeaderLogo className={"header__section-logo"} text={"Nicolás Lo Vento"}/>
                {!isMobile &&  <HeaderTabs className={"header__section-tabs"} itemsTabs={itemsTabs}/>}
                {isMobile && renderIconMobile()}
                <HeaderTabsMobile className={"header__section-tabsmobile"} itemsTabs={itemsTabs} setIsTabsMobileOpen={setIsTabsMobileOpen}/>
                {!isMobile &&  <HeaderSocialMedia className={"header__section-media"} itemsSocialMedia={itemsSocialMedia}/>}
            </Section>
        </div>
    );
}