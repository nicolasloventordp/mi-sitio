import photoCv from '../../../assets/images/foto-cv.png';
export default function AboutPhoto({ className, aos}) {
    return (
        <div className={className} data-aos={aos}>
            <img src={photoCv} className="box-shadow-2"/>
        </div>
    );
}