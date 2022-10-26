export default function AptitudesCard({ children, className, aos, position }) {
    return (

        <div className={className} data-aos={aos} style={{ float: position }}>
            {console.log(position)}
            {children}
        </div>
    );
}

