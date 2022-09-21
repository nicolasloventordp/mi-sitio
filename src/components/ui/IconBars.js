import { FaBars } from "react-icons/fa"
export default function IconBarsMobile({className, onClick}) {
    return (
        <div className={className} onClick={() => onClick()}>
            <FaBars/>
        </div>
    );
}