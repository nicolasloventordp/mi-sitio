import HeaderLogo from './components/HeaderLogo'
import HeaderTabs from './components/HeaderTabs'
import HeaderTabsMobile from './components/HeaderTabsMobile'
import HeaderSocialMedia from './components/HeaderSocialMedia'
import IconBarsMobile from '../ui/IconBarsMobile'
import IconCircleMobile from '../ui/IconCircleMobile'
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import "./style.css";

export default function Header() {
    const dom = {
        tabsMobile: document.querySelector('.header-box__tabs-mobile'),
        iconBars: document.querySelector('.header-box__tabs-mobile'),
        iconCircle: document.querySelector('.icon-circle-mobile')
    }
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
    const cerrarMenu = () => {
        dom.tabsMobile.removeClass("open");
        dom.iconBars.css("display","flex");
        dom.iconCircle.css("display","none");
    }
    return (
        <div className="header">
            <div className="header-box">
                <HeaderLogo text={"Nicolás Lo Vento"}/>
                <HeaderTabs itemsTabs={itemsTabs}/>
                <IconBarsMobile />
                <IconCircleMobile onClick={() => cerrarMenu()}/>
                <HeaderTabsMobile itemsTabs={itemsTabs} cerrarMenu={cerrarMenu}/>
                <HeaderSocialMedia itemsSocialMedia={itemsSocialMedia}/>
            </div>
        </div>
    );
}