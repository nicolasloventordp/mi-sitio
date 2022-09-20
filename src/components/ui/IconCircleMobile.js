import { FaRegTimesCircle } from "react-icons/fa"
export default function IconCircleMobile({setIsTabsMobileOpen}) {
    return (
        <div className="icon-circle-mobile" onClick={() => setIsTabsMobileOpen(false)}>
            <FaRegTimesCircle/>
        </div>
    );
}