import Section from '../ui/Section'
import HomeTitle from "./components/HomeTitle"
import Line from '../ui/Line'
import Link from '../ui/Link'
import Button from '../ui/Button'
import "./style.css"

export default function Home() {
    return (
        <div id="home" className="home">
            <Section className={"home__section"}>
                <HomeTitle className={"home__section-title"} title={"Bienvenidos a mi sitio."} aos={"fade-down"}/>
                <Line className={"home__section-line"} aos={"fade-right"}/>
                <Link className={"home__section-link"} href={"#contact"} aos={"fade-up"}>
                    <Button className={"home__section-button box-shadow-1"} text={"Contáctame"} />
                </Link>
            </Section>
        </div>
    );
}