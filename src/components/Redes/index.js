import Section from "../ui/Section"
import RedesIcon from "./components/RedesIcon"
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import "./style.css";

export default function Redes() {
    const itemsRedes = [
        {icon: <FaLinkedin />, href: "https://www.linkedin.com/in/nicol%C3%A1s-daniel-lo-vento-3797a01a2/", color:"#8ab4f8"},
        {icon: <FaInstagram />, href: "https://www.instagram.com/nicolovento/", color: "#C13584"},
        {icon: <FaTwitter />, href: "https://twitter.com/NicolasLovento", color: "#1DA1F2"},
        {icon: <FaGithub />, href: "https://github.com/nicolasloventordp", color: "var(--white-color)"},
    ]
    return (
        <div id="redes" className="redes">
            <Section className={"redes__section"}>
                <span className="redes__section-title">Redes Sociales</span>
                <div className="redes__section-box" >
                    {itemsRedes?.map( (item,index) =>
                        <RedesIcon className={"redes__section-box-icon"} icon={item.icon} href={item.href} color={item.color}/>
                    )}
                </div>
            </Section>
        </div>
    );
}