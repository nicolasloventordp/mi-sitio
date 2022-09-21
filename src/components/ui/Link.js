export default function Link({ children, className, href, target, nameDownload, aos }) {
    return (
        <a className={className} href={href} target={target} download={nameDownload} data-aos={aos} >
            {children}
        </a>
    );
}