import ContactCardIcon from "./ContactCardIcon"
import ContactCardText from "./ContactCardText"
export default function ContactCard({icon, text, href, position}) {
    return (
        <div className="contact-box__card box-shadow-2" style={position == "left" ? {float : "left"} : {float : "right"}} data-aos={position == "left" ? "fade-left" : "fade-right"}>
            <ContactCardIcon icon={icon} />
            <ContactCardText text={text} href={href} />
        </div>
    );
}