import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({ className, text, icon, animation, href}) {
    return (
        <>
            {!href ? 
                <button className={className+ " box-shadow-1"} >
                    <h5>{text}</h5>
                    <FontAwesomeIcon icon={icon}/>
                </button> : 
                <a href={href}  download="cv-nicolaslovento.pdf" >
                    <button className={className+ " box-shadow-1"}>
                        <h5>{text}</h5>
                        <FontAwesomeIcon icon={icon}/>
                    </button>
                </a>
            }
        </>
            
    );
}