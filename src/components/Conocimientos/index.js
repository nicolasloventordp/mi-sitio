import Section from "../ui/Section"
import ConocimientosCard from "./components/ConocimientosCard"
import ConocimientosCardIcon from "./components/ConocimientosCardIcon"
import ConocimientosCardText from "./components/ConocimientosCardText"
import Roadmap from "../Roadmap"
import { FaReact, FaPhp, FaCss3Alt, FaHtml5, FaJava, FaDatabase } from "react-icons/fa";
import "./style.css";
export default function Conocimientos() {
    const itemsConocimientos = [
        {icon: <FaJava />, text: "JavaScript", color: "#e0bd41"},
        {icon: <FaCss3Alt />, text: "CSS", color: "#5275df"},
        {icon: <FaPhp />, text: "PHP", color: "black"},
        {icon: <FaReact />, text: "React", color: "#61dafb"},
        {icon: <FaHtml5 />, text: "HTML", color: "#F14A29"},
        {icon: <FaDatabase />, text: "Base De Datos", color: "grey"},
    ]
    return (
        <div id="conocimientos" className="conocimientos">
            <Section className={"conocimientos__section"}>
                <Roadmap name="Conocimientos" circleTop={false} circleBottom={false}/>
                <div className="conocimientos__section-box" >
                    {itemsConocimientos?.map( (item,index) =>
                        <ConocimientosCard className={"conocimientos__section-box-card box-shadow-2"} aos={"fade-right"} >
                            <ConocimientosCardIcon className={"conocimientos__section-box-card-icon"} icon={item.icon} color={item.color}/>
                            <ConocimientosCardText className={"conocimientos__section-box-card-text"} text={item.text} href={item.href} />
                        </ConocimientosCard>
                    )}
                </div>
            </Section>
        </div>
    );
}