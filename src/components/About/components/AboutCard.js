export default function AboutCard({ children, className, aos }) {
    return (
        <div className={className} data-aos={aos}>
            {children}
        </div>
    );
}