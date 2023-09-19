import Section from "../ui/Section"
import AptitudesCard from "./components/AptitudesCard"
import AptitudesCardIcon from "./components/AptitudesCardIcon"
import AptitudesCardText from "./components/AptitudesCardText"
import Roadmap from "../Roadmap"
import { FaUserCheck, FaUsers, FaLaptopHouse, FaUserGraduate } from "react-icons/fa";
import "./style.css";
export default function Aptitudes() {
    const itemsAptitudes = [
        {icon: <FaUsers />, text: "Me motiva trabajar en equipo"},
        {icon: <FaLaptopHouse />, text: "Responsabilidad en las tareas"},
        {icon: <FaUserCheck />, text: "Capacidad de adaptación"},
        {icon: <FaUserGraduate />, text: "Capaz de aprender nuevas tecnologías"}
    ]
    return (
        <div id="aptitudes" className="aptitudes">
            <Section className={"aptitudes__section"}>
                <Roadmap name="Aptitudes" circleTop={false} circleBottom={true}/>
                <div className="aptitudes__section-box" >
                    {itemsAptitudes?.map( (item,index) =>
                        <AptitudesCard className={"aptitudes__section-box-card box-shadow-2"} aos={"fade-right"} position={ index % 2 == 0 ? "left" : "right"}>
                            <AptitudesCardIcon className={"aptitudes__section-box-card-icon"} icon={item.icon} />
                            <AptitudesCardText className={"aptitudes__section-box-card-text"} text={item.text} href={item.href} />
                        </AptitudesCard>
                    )}
                </div>
            </Section>
        </div>
    );
}