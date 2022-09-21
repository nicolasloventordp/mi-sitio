import { FaRegTimesCircle } from "react-icons/fa"
export default function IconCircleMobile({className, onClick}) {
    return (
        <div className={className} onClick={() => onClick()}>
            <FaRegTimesCircle/>
        </div>
    );
}