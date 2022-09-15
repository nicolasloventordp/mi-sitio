import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({ className, text, icon, animation}) {
    return (
        <button className={className} data-aos={animation}>
            <span>{text}</span>
            <FontAwesomeIcon icon={icon}/>
        </button>
    );
}