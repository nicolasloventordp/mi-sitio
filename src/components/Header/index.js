import Section from '../ui/Section'
import HeaderLogo from './components/HeaderLogo'
import HeaderTabs from './components/HeaderTabs'
import IconBars from '../ui/IconBars'
import IconCircle from '../ui/IconCircle'
import HeaderTabsMobile from './components/HeaderTabsMobile'
import HeaderRedes from './components/HeaderRedes'
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import $ from 'jquery'
import "./style.css"

export default function Header({isMobile}) {
    
    const itemsTabs = [
        {title: 'home', href: 'home'},
        {title: 'acerca de', href: 'about'},
        {title: 'aptitudes', href: 'aptitudes'}
    ]
    const itemsTabsMobile = [
        {title: 'home', href: 'home'},
        {title: 'acerca de', href: 'about'},
        {title: 'aptitudes', href: 'aptitudes'},
        {title: 'conocimientos', href: 'conocimientos'},
        {title: 'redes', href: 'redes'}
    ]
    const itemsRedes = [
        {url: "https://www.instagram.com/nicolovento/", icon: <FaInstagram />},
        {url: "https://twitter.com/NicolasLovento", icon: <FaTwitter />},
        {url: "https://www.linkedin.com/in/nicol%C3%A1s-daniel-lo-vento-3797a01a2/", icon: <FaLinkedin />}
    ]
    const showMenu = () => {
        if(!$('.header__section-tabsmobile').hasClass("open")){
            $('.header__section-tabsmobile').addClass("open");
            $('.icon-circle').css("display","flex");
            $('.icon-bars').css("display","none");
        }else {
            $('.header__section-tabsmobile').removeClass("open");
            $('.icon-circle').css("display","none");
            $('.icon-bars').css("display","flex");
        }
           
    }
    
    return (
        <div className="header">
            <Section className={"header__section"}>
                <HeaderLogo className={"header__section-logo"} text={"Nicolás Lo Vento"}/>
                <HeaderTabs className={"header__section-tabs"} itemsTabs={itemsTabs}/>
                <HeaderTabsMobile className={"header__section-tabsmobile"} itemsTabs={itemsTabsMobile} />
                <IconCircle className={"header__section-icon icon-circle d-none"} onClick={ showMenu}/>
                <IconBars className={"header__section-icon icon-bars d-none"} onClick={ showMenu}/>
                <HeaderRedes className={"header__section-media"} itemsRedes={itemsRedes}/>
            </Section>
        </div>
    );
}