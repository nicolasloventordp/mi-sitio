import "./style.css"
export default function Roadmap({name, circleTop, circleBottom}) {
    return (
        <div className="roadmap" data-aos="fade-up">
            <div className="roadmap__box">
                {circleTop ? <div className="roadmap-circle-start"></div> : ""}
                <div className="roadmap-line">
                    <span>{name}</span>
                    <div className="roadmap-circle-start"></div>
                </div>
                {circleBottom ? <div className="roadmap-circle-end"></div> : ""}
            </div>
        </div>
    );
}