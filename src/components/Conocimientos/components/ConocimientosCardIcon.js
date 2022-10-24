export default function ContactCardIcon({ className, icon, color }) {
    return (
        <div class={className} style={{color: color}}>
            {icon}
        </div>
    );
}