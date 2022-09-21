import ContactCardIcon from "./ContactCardIcon"
import ContactCardText from "./ContactCardText"
export default function ContactCard({icon, text, href, aos}) {
    return (
        <div className="contact-box__card box-shadow-2" data-aos={aos}>
            <ContactCardIcon icon={icon} />
            <ContactCardText text={text} href={href} />
        </div>
    );
}