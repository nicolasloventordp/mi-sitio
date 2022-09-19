import photoCv from '../../../assets/images/foto-cv.png';
export default function AboutPhoto() {
    return (
        <div className="about-box__photo" data-aos="fade-right">
            <img src={photoCv} className="box-shadow-2"/>
        </div>
    );
}