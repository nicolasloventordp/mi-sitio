import { FaBars } from "react-icons/fa"
import $ from 'jquery'
export default function IconBarsMobile() {
    const openMenu = () => {
        $('.icon-bars-mobile').css("display","none");
        $('.icon-circle-mobile').css("display","flex");
        $('.header-box__tabs-mobile').addClass("open");
        //$('.header-box__tabs-mobile').addClass("d-flex");
    }
    return (
        <div className="icon-bars-mobile">
            <FaBars onClick={() => openMenu()}/>
        </div>
    );
}