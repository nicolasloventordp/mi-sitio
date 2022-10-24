export default function ContactCardText({ className, text, href}) {
    return (
        <div class={className}>
            {text ? <span>{text}</span> : ""}
            {href ?  <span><a href={href} target="_blank">Click aquí</a></span> : ""}
        </div>
    );
}