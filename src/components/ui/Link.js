export default function Link({ children, className, href, nameDownload, aos }) {
    return (
        <a className={className} href={href} download={nameDownload} data-aos={aos} >
            {children}
        </a>
    );
}