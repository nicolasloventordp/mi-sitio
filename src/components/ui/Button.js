import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({ className, text, icon, animation}) {
    return (
        <button className={className} data-aos={animation}>
            <h5>{text}</h5>
            <FontAwesomeIcon icon={icon}/>
        </button>
    );
}