import HomeTitle from "./components/HomeTitle"
import Button from '../ui/Button'
import "./style.css"
export default function Home() {
    return (
        <div id="home" className="home">
            <div className="home-box">
                <HomeTitle title={"Bienvenidos a mi sitio."}/>
                <div class="home-box__line" data-aos="fade-right"></div>
                <a href="#contact" data-aos="fade-up">
                    <Button text={"Contáctame"} className="home-box__btn"/>
                </a>
            </div>
        </div>
    );
}