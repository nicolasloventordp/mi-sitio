import Link from './Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Button({ className, text, icon, href, aos}) {
    return (
        <>
            {!href ? 
                <button className={className} data-aos={aos}>
                    <h5>{text}</h5>
                    <FontAwesomeIcon icon={icon}/>
                </button> : 
                <Link href={href}  nameDownload={"cv-nicolaslovento.pdf"} >
                    <button className={className} data-aos={aos}>
                        <h5>{text}</h5>
                        <FontAwesomeIcon icon={icon}/>
                    </button>
                </Link>
            }
        </>
            
    );
}