import { FaBars } from "react-icons/fa"
export default function IconBarsMobile({setIsTabsMobileOpen}) {
    return (
        <div className={"icon-bars-mobile"} onClick={() => setIsTabsMobileOpen(true)}>
            <FaBars/>
        </div>
    );
}