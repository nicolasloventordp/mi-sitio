export default function ConocimientosCard({ children, className, aos }) {
    return (

        <div className={className} data-aos={aos}>
            {children}
        </div>
    );
}

