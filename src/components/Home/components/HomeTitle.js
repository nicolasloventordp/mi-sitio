export default function HomeTitle({ className, title, aos }) {
    return (
        <h1 className={className} data-aos={aos}>
            {title}
        </h1>
    );
}