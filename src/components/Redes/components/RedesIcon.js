export default function RedesIcon({ className, icon, href, color }) {
    return (
        <a class={className} href={href} style={{color: color}} target="_blank">
            {icon}
        </a>
    );
}