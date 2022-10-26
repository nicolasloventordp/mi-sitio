import Section from '../ui/Section'
import Roadmap from "../Roadmap"
import AboutCard from "./components/AboutCard"
import AboutPhoto from "./components/AboutPhoto"
import AboutPresentation from "./components/AboutPresentation"
import Conocimientos from '../Conocimientos'
import Button from '../ui/Button'
import pdfCv from '../../assets/pdf/cv-nicolaslovento.pdf'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import "./style.css"

export default function About() {
    return (
        <div className="about" id="about">
            <Section className={"about__section"}>
                <Roadmap name="Acerca de mi" circleTop={true} circleBottom={false}/>
                <AboutCard className={"about__section-card"}>
                    <AboutPhoto className={"about__section-card-photo"} aos={"fade-up"}/>
                    <AboutPresentation className={"about__section-card-presentation"} aos={"fade-right"}/>
                    <Button className={"about__section-card-button box-shadow-2"}  icon={faFileDownload} href={pdfCv} aos={"fade-right"}/>
                </AboutCard>
                <Conocimientos />
            </Section>
        </div>
    );
} 