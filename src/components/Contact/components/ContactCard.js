export default function ContactCard({ children, className, aos}) {
    return (
        <div className={className} data-aos={aos}>
            {children}
        </div>
    );
}