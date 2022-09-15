import { FaRegTimesCircle } from "react-icons/fa"
import $ from 'jquery'
export default function IconCircleMobile() {
    const cerrarMenu = () => {
        $('.icon-bars-mobile').css("display","flex");
        $('.icon-circle-mobile').css("display","none");
        $('.header-box__tabs-mobile').removeClass("open");
    }
    return (
        <div className="icon-circle-mobile d-none">
            <FaRegTimesCircle onClick={() => cerrarMenu()}/>
        </div>
    );
}