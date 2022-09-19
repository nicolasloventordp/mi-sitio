import Roadmap from "../Roadmap"
import AboutPhoto from "./components/AboutPhoto"
import AboutPresentation from "./components/AboutPresentation"
import Button from '../ui/Button'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import "./style.css"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="section-grid">
                <Roadmap name="Acerca de mi" circleTop={true} circleBottom={false}/>
                <div className="about-box">
                    <AboutPhoto />
                    <AboutPresentation/>
                    <Button className={"btn-cv box-shadow-2"}  icon={faFileDownload} />
                </div>
            </div>
        </div>
    );
} 