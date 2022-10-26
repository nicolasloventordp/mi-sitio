import Link from '../../ui/Link'
export default function HeaderSocialMedia({ className, itemsRedes }) {
    return (
        <div className={className}>
            {itemsRedes?.map( (item, index) => 
                <div>
                    <Link href={item.url} target={"_blank"}>
                        {item.icon}
                    </Link>
                </div>
            )}
        </div>
    );
}
               