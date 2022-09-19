export default function ContactCardText({text, href}) {
    return (
        <div class="contact-box__card-text">
            {text ? <span>{text}</span> : ""}
            {href ?  <span><a href={href} target="_blank">Click aquí</a></span> : ""}
        </div>
    );
}