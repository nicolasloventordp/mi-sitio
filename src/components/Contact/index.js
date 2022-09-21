import ContactCard from "./components/ContactCard"
import Roadmap from "../Roadmap"
import { FaRegEnvelope, FaPhoneAlt, FaMapMarkedAlt, FaLinkedinIn } from "react-icons/fa";
import "./style.css";
export default function Contact() {
    const itemsSocialMedia = [
        {icon: <FaMapMarkedAlt />, text: "Buenos Aires, Avellaneda"},
        {icon: <FaPhoneAlt />, text: "+5491158659304"},
        {icon: <FaRegEnvelope />, text: "nicolaslovento.94@gmail.com"},
        {icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/nicol%C3%A1s-daniel-lo-vento-3797a01a2/"}
    ]
    return (
        <div id="contact" className="contact">
            <div className="section-grid">
                <Roadmap name="Contacto" circleTop={false} circleBottom={true}/>
                <div className="contact-box" >
                    {itemsSocialMedia?.map( (item,index) =>
                        <ContactCard icon={item.icon} text={item.text} aos={"fade-right"} href={item.href}/>
                    )}
                </div>
            </div>
        </div>
    );
}