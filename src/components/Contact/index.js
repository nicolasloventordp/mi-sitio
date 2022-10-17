import Section from "../ui/Section"
import ContactCard from "./components/ContactCard"
import ContactCardIcon from "./components/ContactCardIcon"
import ContactCardText from "./components/ContactCardText"
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
            <Section className={"contact__section"}>
                <Roadmap name="Contacto" circleTop={false} circleBottom={true}/>
                <div className="contact__section-box" >
                    {itemsSocialMedia?.map( (item,index) =>
                        <ContactCard className={"contact__section-box-card box-shadow-2"} aos={"fade-right"} >
                            <ContactCardIcon className={"contact__section-box-card-icon"} icon={item.icon} />
                            <ContactCardText className={"contact__section-box-card-text"} text={item.text} href={item.href} />
                        </ContactCard>
                    )}
                </div>
            </Section>
        </div>
    );
}