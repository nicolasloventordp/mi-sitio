import Link from '../../ui/Link'
export default function HeaderSocialMedia({ className, itemsSocialMedia }) {
    return (
        <div className={className}>
            {itemsSocialMedia?.map( (item, index) => 
                <div>
                    <Link href={item.url} target={"_blank"}>
                        {item.icon}
                    </Link>
                </div>
            )}
        </div>
    );
}
               